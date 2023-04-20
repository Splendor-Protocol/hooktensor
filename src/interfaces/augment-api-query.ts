// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Bytes, Option, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchPerDispatchClassWeight, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReserveData, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletSubtensorAxonInfo, PalletSubtensorPrometheusInfo, PalletTransactionPaymentReleases, SpConsensusAuraSr25519AppSr25519Public, SpRuntimeDigest } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]>;
      /**
       * The total units of outstanding deactivated balance in the system.
       **/
      inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof must
       * contains a key-ownership proof for a given session, therefore we need a way to tie
       * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
       * was the owner of a given key on a given session, and what the active set ID was
       * during that session.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
    };
    subtensorModule: {
      active: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<bool>>, [u16]>;
      activityCutoff: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      adjustmentInterval: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      axons: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletSubtensorAxonInfo>>, [u16, AccountId32]>;
      blockAtRegistration: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16, u16]>;
      blockEmission: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      blocksSinceLastStep: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      bonds: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u16, u16]>>>, [u16, u16]>;
      bondsMovingAverage: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      burn: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      burnRegistrationsThisInterval: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      consensus: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u16>>, [u16]>;
      defaultTake: AugmentedQuery<ApiType, () => Observable<u16>, []>;
      delegates: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u16>, [AccountId32]>;
      difficulty: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      dividends: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u16>>, [u16]>;
      emission: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u64>>, [u16]>;
      emissionValues: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      immunityPeriod: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      incentive: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u16>>, [u16]>;
      isNetworkMember: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<bool>, [AccountId32, u16]>;
      kappa: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      keys: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<AccountId32>, [u16, u16]>;
      lastAdjustmentBlock: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      lastMechansimStepBlock: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      lastTxBlock: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      lastUpdate: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u64>>, [u16]>;
      loadedEmission: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Option<Vec<ITuple<[AccountId32, u64]>>>>, [u16]>;
      maxAllowedUids: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      maxAllowedValidators: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      maxBurn: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      maxDifficulty: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      maxRegistrationsPerBlock: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      maxWeightsLimit: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      minAllowedWeights: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      minBurn: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      minDifficulty: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      networkConnect: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Option<u16>>, [u16, u16]>;
      networkModality: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      networksAdded: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<bool>, [u16]>;
      neuronsToPruneAtNextEpoch: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      owner: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<AccountId32>, [AccountId32]>;
      pendingEmission: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      powRegistrationsThisInterval: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      prometheus: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletSubtensorPrometheusInfo>>, [u16, AccountId32]>;
      pruningScores: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u16>>, [u16]>;
      rank: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u16>>, [u16]>;
      registrationsThisBlock: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      registrationsThisInterval: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      rho: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      scalingLawPower: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      servingRateLimit: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      stake: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32, AccountId32]>;
      subnetworkN: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      synergyScalingLawPower: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      targetRegistrationsPerInterval: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      tempo: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      totalColdkeyStake: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      totalHotkeyStake: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u64>, [AccountId32]>;
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      totalNetworks: AugmentedQuery<ApiType, () => Observable<u16>, []>;
      totalStake: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      trust: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u16>>, [u16]>;
      txRateLimit: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      uids: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u16>>, [u16, AccountId32]>;
      usedWork: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<u64>, [Bytes]>;
      validatorBatchSize: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      validatorEpochLen: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      validatorEpochsPerReset: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      validatorExcludeQuantile: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      validatorLogitsDivergence: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      validatorPermit: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<bool>>, [u16]>;
      validatorPruneLen: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      validatorSequenceLength: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u16>, [u16]>;
      validatorTrust: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<u16>>, [u16]>;
      weights: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u16, u16]>>>, [u16, u16]>;
      weightsSetRateLimit: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
      weightsVersionKey: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u64>, [u16]>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []>;
    };
  } // AugmentedQueries
} // declare module
