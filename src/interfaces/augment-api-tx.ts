// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { SpCoreVoid, SpFinalityGrandpaEquivocationProof, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * ## Complexity
       * - Same as transfer, but additional read and write because the source account is not
       * assumed to be in the overlay.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u64>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u64]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also alter the total issuance of the system (`TotalIssuance`) appropriately.
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u64> | AnyNumber | Uint8Array, newReserved: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u64>, Compact<u64>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * ## Complexity
       * - Dependent on arguments but not critical, given proper implementations for input config
       * types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex
       * computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
       * that the transfer will not kill the origin account.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u64>]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true). ## Complexity
       * - O(1). Just like transfer, but reading the user's transferable balance first.
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u64>]>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has stalled.
       * 
       * This will trigger a forced authority set change at the beginning of the next session, to
       * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
       * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
       * The block production rate (which may be slowed down because of finality lagging) should
       * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
       * authority will start voting on top of `best_finalized_block_number` for new finalized
       * blocks. `best_finalized_block_number` should be the highest of the latest finalized
       * block of all validators of the new authority set.
       * 
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpCoreVoid]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpCoreVoid]>;
    };
    subtensorModule: {
      addStake: AugmentedSubmittable<(hotkey: AccountId32 | string | Uint8Array, amountStaked: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u64]>;
      becomeDelegate: AugmentedSubmittable<(hotkey: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      benchmarkDrainEmission: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      benchmarkEpochWithoutWeights: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      benchmarkEpochWithWeights: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      burnedRegister: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, hotkey: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, AccountId32]>;
      register: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, blockNumber: u64 | AnyNumber | Uint8Array, nonce: u64 | AnyNumber | Uint8Array, work: Bytes | string | Uint8Array, hotkey: AccountId32 | string | Uint8Array, coldkey: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64, u64, Bytes, AccountId32, AccountId32]>;
      removeStake: AugmentedSubmittable<(hotkey: AccountId32 | string | Uint8Array, amountUnstaked: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u64]>;
      serveAxon: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, version: u32 | AnyNumber | Uint8Array, ip: u128 | AnyNumber | Uint8Array, port: u16 | AnyNumber | Uint8Array, ipType: u8 | AnyNumber | Uint8Array, protocol: u8 | AnyNumber | Uint8Array, placeholder1: u8 | AnyNumber | Uint8Array, placeholder2: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u32, u128, u16, u8, u8, u8, u8]>;
      servePrometheus: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, version: u32 | AnyNumber | Uint8Array, ip: u128 | AnyNumber | Uint8Array, port: u16 | AnyNumber | Uint8Array, ipType: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u32, u128, u16, u8]>;
      setWeights: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, dests: Vec<u16> | (u16 | AnyNumber | Uint8Array)[], weights: Vec<u16> | (u16 | AnyNumber | Uint8Array)[], versionKey: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<u16>, Vec<u16>, u64]>;
      sudoAddNetwork: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, tempo: u16 | AnyNumber | Uint8Array, modality: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16, u16]>;
      sudoAddNetworkConnectionRequirement: AugmentedSubmittable<(netuidA: u16 | AnyNumber | Uint8Array, netuidB: u16 | AnyNumber | Uint8Array, requirement: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16, u16]>;
      sudoRegister: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, hotkey: AccountId32 | string | Uint8Array, coldkey: AccountId32 | string | Uint8Array, stake: u64 | AnyNumber | Uint8Array, balance: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, AccountId32, AccountId32, u64, u64]>;
      sudoRemoveNetwork: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      sudoRemoveNetworkConnectionRequirement: AugmentedSubmittable<(netuidA: u16 | AnyNumber | Uint8Array, netuidB: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetActivityCutoff: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, activityCutoff: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetAdjustmentInterval: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, adjustmentInterval: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetBondsMovingAverage: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, bondsMovingAverage: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetBurn: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, burn: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetDefaultTake: AugmentedSubmittable<(defaultTake: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      sudoSetDifficulty: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, difficulty: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetEmissionValues: AugmentedSubmittable<(netuids: Vec<u16> | (u16 | AnyNumber | Uint8Array)[], emission: Vec<u64> | (u64 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u16>, Vec<u64>]>;
      sudoSetImmunityPeriod: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, immunityPeriod: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetKappa: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, kappa: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetMaxAllowedUids: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, maxAllowedUids: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetMaxAllowedValidators: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, maxAllowedValidators: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetMaxBurn: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, maxBurn: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetMaxDifficulty: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, maxDifficulty: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetMaxRegistrationsPerBlock: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, maxRegistrationsPerBlock: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetMaxWeightLimit: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, maxWeightLimit: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetMinAllowedWeights: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, minAllowedWeights: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetMinBurn: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, minBurn: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetMinDifficulty: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, minDifficulty: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetRho: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, rho: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetScalingLawPower: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, scalingLawPower: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetServingRateLimit: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, servingRateLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetSynergyScalingLawPower: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, synergyScalingLawPower: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetTargetRegistrationsPerInterval: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, targetRegistrationsPerInterval: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetTotalIssuance: AugmentedSubmittable<(totalIssuance: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetTxRateLimit: AugmentedSubmittable<(txRateLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetValidatorBatchSize: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, validatorBatchSize: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetValidatorEpochLen: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, validatorEpochLength: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetValidatorEpochsPerReset: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, validatorEpochsPerReset: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetValidatorExcludeQuantile: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, validatorExcludeQuantile: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetValidatorLogitsDivergence: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, validatorLogitsDivergence: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetValidatorPruneLen: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, validatorPruneLen: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetValidatorSequenceLength: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, validatorSequenceLength: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u16]>;
      sudoSetWeightsSetRateLimit: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, weightsSetRateLimit: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
      sudoSetWeightsVersionKey: AugmentedSubmittable<(netuid: u16 | AnyNumber | Uint8Array, weightsVersionKey: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, u64]>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
       * key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
    };
    system: {
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * Make some on-chain remark.
       * 
       * ## Complexity
       * - `O(1)`
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       * 
       * ## Complexity
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * ## Complexity
       * - `O(C)` where `C` length of `code`
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
    };
  } // AugmentedSubmittables
} // declare module
