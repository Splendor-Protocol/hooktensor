// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
import type { SpCoreVoid, SpFinalityGrandpaEquivocationProof } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is not
       * assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
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
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
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
       * ---------------------------------
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
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
       * keep the sender account alive (true). # <weight>
       * - O(1). Just like transfer, but reading the user's transferable balance first.
       * #</weight>
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
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has
       * stalled. This will trigger a forced authority set change at the beginning
       * of the next session, to be enacted `delay` blocks after that. The delay
       * should be high enough to safely assume that the block signalling the
       * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
       * will start the new authority set using the given finalized block as base.
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
      /**
       * --- Adds stake to a neuron account. The call is made from the
       * coldkey account linked in the neurons's NeuronMetadata.
       * Only the associated coldkey is allowed to make staking and
       * unstaking requests. This protects the neuron against
       * attacks on its hotkey running in production code.
       * 
       * # Args:
       * * 'origin': (<T as frame_system::Config>Origin):
       * - The caller, a coldkey signature associated with the hotkey account.
       * 
       * * 'hotkey' (T::AccountId):
       * - The hotkey account to add stake to.
       * 
       * * 'ammount_staked' (u64):
       * - The ammount to transfer from the balances account of the cold key
       * into the staking account of the hotkey.
       * 
       * # Event:
       * * 'StakeAdded':
       * - On the successful staking of funds.
       * 
       * # Raises:
       * * 'NotRegistered':
       * - If the hotkey account is not active (has not subscribed)
       * 
       * * 'NonAssociatedColdKey':
       * - When the calling coldkey is not associated with the hotkey account.
       * 
       * * 'InsufficientBalance':
       * - When the amount to stake exceeds the amount of balance in the
       * associated colkey account.
       * 
       **/
      addStake: AugmentedSubmittable<(hotkey: AccountId32 | string | Uint8Array, ammountStaked: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u64]>;
      /**
       * ---- Registers a new neuron to the graph.
       * 
       * # Args:
       * * 'origin': (<T as frame_system::Config>Origin):
       * - The caller, registration key as found in RegistrationKey::get(0);
       * 
       * * 'block_number' (u64):
       * - Block number of hash to attempt.
       * 
       * * 'nonce' (u64):
       * - Hashing nonce as a u64.
       * 
       * * 'work' (Vec<u8>):
       * - Work hash as list of bytes.
       * 
       * * 'hotkey' (T::AccountId,):
       * - Hotkey to register.
       * 
       * * 'coldkey' (T::AccountId,):
       * - Coldkey to register.
       * 
       * # Event:
       * * 'NeuronRegistered':
       * - On subscription of a new neuron to the active set.
       * 
       **/
      register: AugmentedSubmittable<(blockNumber: u64 | AnyNumber | Uint8Array, nonce: u64 | AnyNumber | Uint8Array, work: Bytes | string | Uint8Array, hotkey: AccountId32 | string | Uint8Array, coldkey: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u64, Bytes, AccountId32, AccountId32]>;
      /**
       * ---- Remove stake from the staking account. The call must be made
       * from the coldkey account attached to the neuron metadata. Only this key
       * has permission to make staking and unstaking requests.
       * 
       * # Args:
       * * 'origin': (<T as frame_system::Config>Origin):
       * - The caller, a coldkey signature associated with the hotkey account.
       * 
       * * 'hotkey' (T::AccountId):
       * - The hotkey account to withdraw stake from.
       * 
       * * 'ammount_unstaked' (u64):
       * - The ammount to transfer from the staking account into the balance
       * of the coldkey.
       * 
       * # Event:
       * * 'StakeRemoved':
       * - On successful withdrawl.
       * 
       * # Raises:
       * * 'NonAssociatedColdKey':
       * - When the calling coldkey is not associated with the hotkey account.
       * 
       * * 'NotEnoughStaketoWithdraw':
       * - When the amount to unstake exceeds the quantity staked in the
       * associated hotkey staking account.
       * 
       **/
      removeStake: AugmentedSubmittable<(hotkey: AccountId32 | string | Uint8Array, ammountUnstaked: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u64]>;
      /**
       * ---- Serves or updates axon information for the neuron associated with the caller. If the caller
       * already registered the metadata is updated. If the caller is not registered this call throws NotRegsitered.
       * 
       * # Args:
       * * 'origin': (<T as frame_system::Config>Origin):
       * - The caller, a hotkey associated of the registered neuron.
       * 
       * * 'ip' (u128):
       * - The u64 encoded IP address of type 6 or 4.
       * 
       * * 'port' (u16):
       * - The port number where this neuron receives RPC requests.
       * 
       * * 'ip_type' (u8):
       * - The ip type one of (4,6).
       * 
       * * 'modality' (u8):
       * - The neuron modality type.
       * 
       * # Event:
       * * 'AxonServed':
       * - On subscription of a new neuron to the active set.
       * 
       **/
      serveAxon: AugmentedSubmittable<(version: u32 | AnyNumber | Uint8Array, ip: u128 | AnyNumber | Uint8Array, port: u16 | AnyNumber | Uint8Array, ipType: u8 | AnyNumber | Uint8Array, modality: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u16, u8, u8]>;
      /**
       * --- Sets the caller weights for the incentive mechanism. The call can be
       * made from the hotkey account so is potentially insecure, however, the damage
       * of changing weights is minimal if caught early. This function includes all the
       * checks that the passed weights meet the requirements. Stored as u32s they represent
       * rational values in the range [0,1] which sum to 1 and can be interpreted as
       * probabilities. The specific weights determine how inflation propagates outward
       * from this peer.
       * 
       * Note: The 32 bit integers weights should represent 1.0 as the max u32.
       * However, the function normalizes all integers to u32_max anyway. This means that if the sum of all
       * elements is larger or smaller than the amount of elements * u32_max, all elements
       * will be corrected for this deviation.
       * 
       * # Args:
       * * `origin`: (<T as frame_system::Config>Origin):
       * - The caller, a hotkey who wishes to set their weights.
       * 
       * * `uids` (Vec<u32>):
       * - The edge endpoint for the weight, i.e. j for w_ij.
       * 
       * * 'weights' (Vec<u32>):
       * - The u32 integer encoded weights. Interpreted as rational
       * values in the range [0,1]. They must sum to in32::MAX.
       * 
       * # Event:
       * * WeightsSet;
       * - On successfully setting the weights on chain.
       * 
       * # Raises:
       * * 'WeightVecNotEqualSize':
       * - If the passed weights and uids have unequal size.
       * 
       * * 'WeightSumToLarge':
       * - When the calling coldkey is not associated with the hotkey account.
       * 
       * * 'InsufficientBalance':
       * - When the amount to stake exceeds the amount of balance in the
       * associated colkey account.
       * 
       **/
      setWeights: AugmentedSubmittable<(dests: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], weights: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u32>, Vec<u32>]>;
      sudoResetBonds: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      sudoSetActivityCutoff: AugmentedSubmittable<(activityCutoff: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetAdjustmentInterval: AugmentedSubmittable<(adjustmentInterval: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * ---- SUDO ONLY FUNCTIONS
       * 
       * # Args:
       * * 'origin': (<T as frame_system::Config>Origin):
       * - The caller, must be sudo.
       * 
       * ONE OF:
       * * 'adjustment_interval' (u64):
       * * 'activity_cutoff' (u64):
       * * 'difficulty' (u64):
       * 
       * # Events:
       * * 'DifficultySet'
       * * 'AdjustmentIntervalSet'
       * * 'ActivityCuttoffSet'
       * * 'TargetRegistrationsPerIntervalSet'
       * 
       * 
       **/
      sudoSetBlocksPerStep: AugmentedSubmittable<(blocksPerStep: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetBondsMovingAverage: AugmentedSubmittable<(bondsMovingAverage: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetDifficulty: AugmentedSubmittable<(difficulty: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetImmunityPeriod: AugmentedSubmittable<(immunityPeriod: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetIncentivePruningDenominator: AugmentedSubmittable<(incentivePruningDenominator: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetKappa: AugmentedSubmittable<(kappa: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetMaxAllowedMaxMinRatio: AugmentedSubmittable<(maxAllowedMaxMinRatio: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetMaxAllowedUids: AugmentedSubmittable<(maxAllowedUids: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetMaxWeightLimit: AugmentedSubmittable<(maxWeightLimit: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      sudoSetMinAllowedWeights: AugmentedSubmittable<(minAllowedWeights: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetRho: AugmentedSubmittable<(rho: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetScalingLawPower: AugmentedSubmittable<(scalingLawPower: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      sudoSetStakePruningDenominator: AugmentedSubmittable<(stakePruningDenominator: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetStakePruningMin: AugmentedSubmittable<(stakePruningMin: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetSynergyScalingLawPower: AugmentedSubmittable<(synergyScalingLawPower: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      sudoSetValidatorBatchSize: AugmentedSubmittable<(validatorBatchSize: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetValidatorEpochLen: AugmentedSubmittable<(validatorEpochLen: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetValidatorEpochsPerReset: AugmentedSubmittable<(validatorEpochsPerReset: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoSetValidatorExcludeQuantile: AugmentedSubmittable<(validatorExcludeQuantile: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      sudoSetValidatorSequenceLength: AugmentedSubmittable<(validatorSequenceLength: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      sudoTargetRegistrationsPerInterval: AugmentedSubmittable<(targetRegistrationsPerInterval: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
       * key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, u64]>;
    };
    system: {
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
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
       * # <weight>
       * - `O(1)`
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
       * expensive).
       * - 1 storage write (codec `O(C)`).
       * - 1 digest item.
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very
       * expensive. We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 digest item.
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full
       * block. # </weight>
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
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
    };
  } // AugmentedSubmittables
} // declare module
