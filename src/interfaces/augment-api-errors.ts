// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    subtensorModule: {
      /**
       * ---- Thrown when the caller requests registering a neuron which
       * already exists in the active set.
       **/
      AlreadyRegistered: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller tries to add stake, but for some reason the requested
       * amount could not be withdrawn from the coldkey account
       **/
      BalanceWithdrawalError: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the dispatch attempts to convert between a u64 and T::balance
       * but the call fails.
       **/
      CouldNotConvertToBalance: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller attempts to set weights with duplicate uids
       * in the weight matrix.
       **/
      DuplicateUids: AugmentedError<ApiType>;
      /**
       * ---- Thrown if the supplied pow hash block does not meet the network difficulty.
       **/
      InvalidDifficulty: AugmentedError<ApiType>;
      /**
       * --- Thrown when an invalid IP address is passed to the serve function.
       **/
      InvalidIpAddress: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the user tries to serve an axon which is not of type
       * 4 (IPv4) or 6 (IPv6).
       **/
      InvalidIpType: AugmentedError<ApiType>;
      /**
       * --- Thrown when an invalid modality attempted on serve.
       * Currently the chain only accepts modality TEXT = 0.
       **/
      InvalidModality: AugmentedError<ApiType>;
      /**
       * ---- Thrown if the supplied pow hash seal does not match the supplied work.
       **/
      InvalidSeal: AugmentedError<ApiType>;
      /**
       * ---- Thrown when a caller attempts to set weight to at least one uid that
       * does not exist in the metagraph.
       **/
      InvalidUid: AugmentedError<ApiType>;
      /**
       * ---- Thrown if the supplied pow hash block is in the future or negative
       **/
      InvalidWorkBlock: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the dispatch attempts to set weights on chain with where the normalized
       * max value is more than MaxAllowedMaxMinRatio.
       **/
      MaxAllowedMaxMinRatioExceeded: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the dispatch attempts to set weights on chain with where any normalized
       * weight is more than MaxWeightLimit.
       **/
      MaxWeightExceeded: AugmentedError<ApiType>;
      /**
       * ---- Thrown when a stake, unstake or subscribe request is made by a coldkey
       * which is not associated with the hotkey account.
       * See: fn add_stake and fn remove_stake.
       **/
      NonAssociatedColdKey: AugmentedError<ApiType>;
      /**
       * Error names should be descriptive.
       **/
      NoneValue: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller requests adding more stake than there exists
       * in the cold key account. See: fn add_stake
       **/
      NotEnoughBalanceToStake: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller requests removing more stake then there exists
       * in the staking account. See: fn remove_stake.
       **/
      NotEnoughStaketoWithdraw: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller requests setting or removing data from
       * a neuron which does not exist in the active set.
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the dispatch attempts to set weights on chain with fewer elements
       * than are allowed.
       **/
      NotSettingEnoughWeights: AugmentedError<ApiType>;
      /**
       * Errors should have helpful documentation associated with them.
       **/
      StorageOverflow: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller attempts to set a storage value outside of its allowed range.
       **/
      StorageValueOutOfRange: AugmentedError<ApiType>;
      /**
       * ---- Thrown when registrations this block exceeds allowed number.
       **/
      ToManyRegistrationsThisBlock: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller attempts to set the weight keys
       * and values but these vectors have different size.
       **/
      WeightVecNotEqualSize: AugmentedError<ApiType>;
      /**
       * ---- Thrown when the caller attempts to use a repeated work.
       **/
      WorkRepeated: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
