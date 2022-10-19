// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Bytes, Option, Vec, bool, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportWeightsPerDispatchClassU64, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletSubtensorNeuronMetadata, PalletTransactionPaymentReleases, SpConsensusAuraSr25519AppSr25519Public, SpRuntimeDigest } from '@polkadot/types/lookup';
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
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []>;
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
      activityCutoff: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      adjustmentInterval: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      blockAtRegistration: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u64>, [u32]>;
      blocksPerStep: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      blocksSinceLastStep: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      bondsMovingAverage: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      difficulty: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * #[pallet::type_value]
       * pub fn DefaultFoundationAccount<T: Config>() -> u64 { T::InitialFoundationAccount::get() }
       **/
      foundationAccount: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      foundationDistribution: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * ---- Maps from hotkey to uid.
       **/
      hotkeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]>;
      immunityPeriod: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      incentivePruningDenominator: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      kappa: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      lastDifficultyAdjustmentBlock: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      lastMechansimStepBlock: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      maxAllowedMaxMinRatio: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      maxAllowedUids: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      maxRegistrationsPerBlock: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      maxWeightLimit: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      minAllowedWeights: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * ************************************************************
       * *---- Storage Objects
       * ************************************************************
       **/
      n: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * ---- Maps from uid to neuron.
       **/
      neurons: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletSubtensorNeuronMetadata>>, [u32]>;
      /**
       * ---- Maps from uid to uid as a set which we use to record uids to prune at next epoch.
       **/
      neuronsToPruneAtNextEpoch: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
      registrationsThisBlock: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      registrationsThisInterval: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      rho: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      scalingLawPower: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      stakePruningDenominator: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      stakePruningMin: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      synergyScalingLawPower: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      targetRegistrationsPerInterval: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      totalBondsPurchased: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      totalEmission: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      totalStake: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      usedWork: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<u64>, [Bytes]>;
      validatorBatchSize: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      validatorEpochLen: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      validatorEpochsPerReset: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      validatorExcludeQuantile: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      validatorSequenceLength: AugmentedQuery<ApiType, () => Observable<u64>, []>;
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
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportWeightsPerDispatchClassU64>, []>;
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
       * NOTE: This storage item is explicitly unbounded since it is never intended to be read
       * from within the runtime.
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
