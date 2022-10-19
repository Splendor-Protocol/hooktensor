import './interfaces/augment-api';
import './interfaces/augment-types';
import { ApiPromise } from "@polkadot/api/promise/Api";
import { WsProvider }  from "@polkadot/rpc-provider/ws";
import { Option } from '@polkadot/types';
import axios from "axios";
import { NeuronMetadata } from './interfaces/subtensorModule';

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

export async function watch(url: string, webhook_url: string, interval: number) {
    let api = get_api_from_url(url);
    let current_meta: Meta[] = [];
    let current_difficulty: number = 0;
    let current_block: number = 0;
    let lastMechansimStepBlock: number = 0;

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
    current_difficulty = await getDifficulty(api);
    current_block = (await api.rpc.chain.getHeader()).number.toNumber();
    lastMechansimStepBlock = (await api.query.subtensorModule.lastMechansimStepBlock()).toNumber();

    console.log("Done...");

    // watch for changes
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
        
        console.log("Checking for difficulty change...");
        let new_difficulty = await getDifficulty(api);
        if (new_difficulty !== current_difficulty) {
            console.info("Difficulty changed!");
            console.info(`New difficulty: ${new_difficulty}`);
            console.info("Posting to webhook...");
            let message = `Difficulty changed from ${current_difficulty} to ${new_difficulty}`;
            post_to_webhook(
                webhook_url,
                message
            );
            current_difficulty = new_difficulty;
        }
        console.log("Done.");

        console.log("Get current block...");
        current_block = (await api.rpc.chain.getHeader()).number.toNumber();
        console.log(`Current block: ${current_block}`);
        if (current_block - lastMechansimStepBlock >= 100) {
            console.log("New epoch!");
            // update lastMechansimStepBlock
            lastMechansimStepBlock = (await api.query.subtensorModule.lastMechansimStepBlock()).toNumber();
            console.log("Posting to webhook...");
            let message = "New network epoch!\n" +
                `Current block: ${lastMechansimStepBlock}`;

            post_to_webhook(
                webhook_url,
                message
            );
        }
    }

}