#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import { watch } from './main';

yargs(hideBin(process.argv))
  .scriptName("hooktensor")
  .usage('$0 <cmd> [args]')
  .command('watch', 'Hooktensor Watcher v1.0.0', (yargs) => {
    yargs.options({
      'url': {
        alias: 'u',
        type: 'string',
        default: 'ws://AtreusLB-2c6154f73e6429a9.elb.us-east-2.amazonaws.com:9944',
        describe: 'the url of the substrate node to sync from',
        demandOption: false,
      },
      'webhook_url': {
        alias: 'w',
        type: 'string',
        default: '',
        describe: 'the url of the discord webhook to send messages to',
        demandOption: false,
      },
      'interval': {
        alias: 'i',
        type: 'number',
        default: 6, // 6 seconds
        describe: 'the interval to check for changes in the metagraph',
        demandOption: false,
      },
    })
  }, function (argv) {
    return watch(
      argv.url as string,
      argv.webhook_url as string,
      argv.interval as number * 1000
      ).then(() => {
      process.exit(0);
    }).catch(err => {
      console.log(err);
      process.exit(1);
    });
  })
  .help()
  .argv