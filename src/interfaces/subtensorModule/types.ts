// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name Balance */
export interface Balance extends u64 {}

/** @name NeuronMetadata */
export interface NeuronMetadata extends Struct {
  readonly version: u32;
  readonly ip: u128;
  readonly port: u16;
  readonly ipType: u8;
  readonly uid: u32;
  readonly modality: u8;
  readonly hotkey: AccountId;
  readonly coldkey: AccountId;
  readonly active: u32;
  readonly lastUpdate: u64;
  readonly priority: u64;
  readonly stake: u64;
  readonly rank: u64;
  readonly trust: u64;
  readonly consensus: u64;
  readonly incentive: u64;
  readonly dividends: u64;
  readonly emission: u64;
  readonly bonds: Vec<ITuple<[u32, u64]>>;
  readonly weights: Vec<ITuple<[u32, u32]>>;
}

export type PHANTOM_SUBTENSORMODULE = 'subtensorModule';
