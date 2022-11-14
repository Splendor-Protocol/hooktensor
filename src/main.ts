import './interfaces/augment-api';
import './interfaces/augment-types';
import { ApiPromise } from "@polkadot/api/promise/Api";
import { WsProvider }  from "@polkadot/rpc-provider/ws";
import { Option } from '@polkadot/types';
import axios from "axios";
import { NeuronMetadata } from './interfaces/subtensorModule';

const block_time = 12; // seconds
const difficultyFormatter = Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 2 });
const halving_block = 10.5e6; // block 10.5M is the halvening

function get_provider_from_url(url: string): WsProvider  {
    const provider = new WsProvider(url);
    return provider;
}

function get_api_from_url(url: string): ApiPromise {
    const provider = get_provider_from_url(url);
    const api = new ApiPromise({
        provider
    });
    return api;
}

async function getNeurons(api: ApiPromise, page: number, pageSize: number): Promise<Option<NeuronMetadata>[]> {
    return new Promise((resolve, reject) => {
      const indexStart = page * pageSize;
      (api.query.subtensorModule.neurons.multi(
        Array.from(new Array(pageSize), (_, i) => i + indexStart)
      ))
      .then(resolve)
      .catch(err => {
        console.log(err)
        reject(err);
      });
    })
};

async function getDifficulty(api: ApiPromise): Promise<number> {
    const difficulty = ((await api.query.subtensorModule.difficulty())).toNumber();
    return difficulty;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface NeuronData {
    hotkey: string;
    coldkey: string;
    stake: BigInt;
    dividends: BigInt;
    emission: BigInt;
    incentive: BigInt;
    trust: BigInt;
    rank: BigInt;
    consensus: BigInt;
    uid: number;
}

async function refreshMeta(api: ApiPromise): Promise<NeuronData[]> {
    const numNeurons = ((await api.query.subtensorModule.n())).toNumber();

    let _neurons: NeuronData[] = [];
    const numPages = 16;
    let pageSize = Math.ceil(numNeurons / numPages);
    const last_page_length = numNeurons % pageSize;
    for (let page = 0; page < numPages; page++) {
        if (page === numPages - 1) {
            // if last page, use the last_page_length
            if (last_page_length > 0) {
                // if last_page_length is 0, then the last page is a full page
                pageSize = last_page_length; 
            }
        }
        const result = await getNeurons(api, page, pageSize)
    let neurons_: NeuronData[] = result.map((result, j) => {
        const indexStart = page * pageSize;
        const neuron = result.value;
        return {
            hotkey: neuron.hotkey.toString(),
            coldkey: neuron.coldkey.toString(),
            stake: neuron.stake.toBigInt(),
            dividends: neuron.dividends.toBigInt(),
            emission: neuron.emission.toBigInt(),
            incentive: neuron.incentive.toBigInt(),
            trust: neuron.trust.toBigInt(),
            rank: neuron.rank.toBigInt(),
            consensus: neuron.consensus.toBigInt(),
            uid: j + indexStart
        };
    });
    _neurons = _neurons.concat(neurons_);
    }
    return _neurons;
}

async function post_to_webhook(webhook_url: string, message: string) {
    if (webhook_url == "") {
        // log to console instead
        console.log(message);
        return;
    }

    try {
        const result = await axios.post(
            webhook_url,
            {
                content: message
            }
        );  
        if (result.status !== 204) {
            console.error(result);
            throw new Error("Failed to post to webhook");
        }
        console.log("Successfully posted to webhook");
    } catch (error) {
        console.error(error);
    }
}

interface Diff {
    new_coldkey: string;
    new_hotkey: string;
    old_coldkey: string;
    old_hotkey: string;
    uid: number;
}

function getMessage(diff: Diff): string {
    const message = `UID ${diff.uid}\n` +
        `   New hotkey:\`${diff.new_hotkey}\`\n` +
        `   New coldkey:\`${diff.new_coldkey}\`\n` +
        `   Old hotkey:\`${diff.old_hotkey}\`\n` +
        `   Old coldkey:\`${diff.old_coldkey}\``;
    return message;
}

interface Meta {
    uid: number;
    hotkey: string;
    coldkey: string;
}

async function watchForEpoch(api: ApiPromise, webhook_url: string) {
    let current_block: number = 0;
    let lastMechansimStepBlock: number = 0;
    console.log("Getting initial epoch info...");
    const blocksPerStep: number = ((await api.query.subtensorModule.blocksPerStep())).toNumber();
    current_block = (await api.rpc.chain.getHeader()).number.toNumber();
    lastMechansimStepBlock = (await api.query.subtensorModule.lastMechansimStepBlock()).toNumber();
    console.log("Done getting initial epoch info");

    const blocks_till_next_epoch = blocksPerStep - (current_block - lastMechansimStepBlock);
    await sleep(blocks_till_next_epoch * block_time * 1000); // sleep until next epoch

    setInterval(async () => {
        console.log("Getting current block...");
        current_block = (await api.rpc.chain.getHeader()).number.toNumber();
        console.log(`Current block: ${current_block}`);
        if (current_block - lastMechansimStepBlock >= blocksPerStep) {
            console.log("New epoch!");
            // update lastMechansimStepBlock
            lastMechansimStepBlock = (await api.query.subtensorModule.lastMechansimStepBlock()).toNumber();
            console.log("Posting to webhook...");
            const blocks_per_day  = (24 * 60 * 60) / block_time; // seconds per day / block time
            const days_until = (halving_block - current_block) / blocks_per_day;
            let message = "New network epoch!\n" +
                `Current block: ${lastMechansimStepBlock}\n` +
                `Days until next halving: ${difficultyFormatter.format(days_until)}`;

            post_to_webhook(
                webhook_url,
                message
            );
        }
    }, blocksPerStep * block_time * 1000); // check every epoch
}

async function watchForDifficulty(api: ApiPromise, webhook_url: string) {
    console.log("Getting initial difficulty info...");
    let current_difficulty: number = await getDifficulty(api);
    const current_block: number = (await api.rpc.chain.getHeader()).number.toNumber();
    const blocksPerStep: number = ((await api.query.subtensorModule.blocksPerStep())).toNumber();
    let lastDifficultyAdjustmentBlock: number = ((await api.query.subtensorModule.lastDifficultyAdjustmentBlock())).toNumber();
    console.log("Done getting initial difficulty info.");

    const blocks_till_next_difficulty = blocksPerStep - (current_block - lastDifficultyAdjustmentBlock);
    await sleep(blocks_till_next_difficulty * block_time * 1000); // sleep until next difficulty adjustment

    setInterval(async () => {
        console.log("Checking for difficulty change...");
        let new_difficulty = await getDifficulty(api);
        if (new_difficulty !== current_difficulty) {
            console.info("Difficulty changed!");
            console.info(`New difficulty: ${new_difficulty}`);
            console.info("Posting to webhook...");
            let message = `Difficulty changed from ${difficultyFormatter.format(current_difficulty)} to ${difficultyFormatter.format(new_difficulty)}`;
            post_to_webhook(
                webhook_url,
                message
            );
            current_difficulty = new_difficulty;
        }
        console.log("Done.");
    }, blocksPerStep * block_time * 1000); // check every difficulty adjustment
}

export async function watch(url: string, webhook_url: string, interval: number) {
    let api = get_api_from_url(url);
    let current_meta: Meta[] = [];

    // Wait for the API to be connected to the node
    try {
        await api.isReady;
    } catch (err) {
        console.log(err);
        return;
    }
    console.log("Connected to entrypoint");
    console.log("Pulling initial metagraph...");
    let metagraph = await refreshMeta(api);
    metagraph.forEach(neuron => {
        current_meta.push({
            coldkey: neuron.coldkey,
            hotkey: neuron.hotkey,
            uid: neuron.uid
        });
    });
    console.log("Done...");

    watchForEpoch(api, webhook_url); // watch for new epochs
    watchForDifficulty(api, webhook_url); // watch for difficulty changes

    // watch for changes in metagraph to detect registration changes
    while (true) {
        console.log(`Sleeping for ${interval/1000} seconds`);
        await sleep(interval);
        console.log("Checking for changes...");
        console.log("Pulling new metagraph...");
        let metagraph = await refreshMeta(api);
        console.log("Done...");
        let new_meta: Meta[] = [];
        metagraph.forEach(neuron => {
            new_meta.push({
                coldkey: neuron.coldkey,
                hotkey: neuron.hotkey,
                uid: neuron.uid
            });
        });
        
        const diff: Diff[] = [];
        for (let uid: number = 0; uid < metagraph.length; uid++) {
            if (current_meta[uid].hotkey !== new_meta[uid].hotkey) {
                // hotkey changed
                let diff_ = {
                    uid: uid,
                    old_hotkey: current_meta[uid].hotkey,
                    new_hotkey: new_meta[uid].hotkey,
                    old_coldkey: current_meta[uid].coldkey,
                    new_coldkey: new_meta[uid].coldkey
                };
                diff.push(diff_);
            }
        }
        console.info(`Found ${diff.length} changes`);
        if (diff.length > 0) {
            console.info("Posting to webhook...");
        }
        diff.forEach(diff_ => {
            let message = getMessage(diff_);
            post_to_webhook(
                webhook_url,
                message
            );
        });

        current_meta = new_meta;
    }

}