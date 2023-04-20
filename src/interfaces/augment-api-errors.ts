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
       * Balance too low to send value.
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
      AlreadyDelegate: AugmentedError<ApiType>;
      AlreadyRegistered: AugmentedError<ApiType>;
      BalanceSetError: AugmentedError<ApiType>;
      BalanceWithdrawalError: AugmentedError<ApiType>;
      CouldNotConvertToBalance: AugmentedError<ApiType>;
      DidNotPassConnectedNetworkRequirement: AugmentedError<ApiType>;
      DuplicateUids: AugmentedError<ApiType>;
      EmissionValuesDoesNotMatchNetworks: AugmentedError<ApiType>;
      IncorrectNetworkVersionKey: AugmentedError<ApiType>;
      InvalidConnectionRequirement: AugmentedError<ApiType>;
      InvalidDifficulty: AugmentedError<ApiType>;
      InvalidEmissionValues: AugmentedError<ApiType>;
      InvalidIpAddress: AugmentedError<ApiType>;
      InvalidIpType: AugmentedError<ApiType>;
      InvalidModality: AugmentedError<ApiType>;
      InvalidSeal: AugmentedError<ApiType>;
      InvalidTempo: AugmentedError<ApiType>;
      InvalidUid: AugmentedError<ApiType>;
      InvalidWorkBlock: AugmentedError<ApiType>;
      MaxAllowedUidsExceeded: AugmentedError<ApiType>;
      MaxAllowedUIdsNotAllowed: AugmentedError<ApiType>;
      MaxWeightExceeded: AugmentedError<ApiType>;
      NetworkDoesNotExist: AugmentedError<ApiType>;
      NetworkExist: AugmentedError<ApiType>;
      NonAssociatedColdKey: AugmentedError<ApiType>;
      NotEnoughBalanceToStake: AugmentedError<ApiType>;
      NotEnoughStaketoWithdraw: AugmentedError<ApiType>;
      NotRegistered: AugmentedError<ApiType>;
      NotSettingEnoughWeights: AugmentedError<ApiType>;
      NoValidatorPermit: AugmentedError<ApiType>;
      RegistrationDisabled: AugmentedError<ApiType>;
      ServingRateLimitExceeded: AugmentedError<ApiType>;
      SettingWeightsTooFast: AugmentedError<ApiType>;
      StakeAlreadyAdded: AugmentedError<ApiType>;
      StorageValueOutOfRange: AugmentedError<ApiType>;
      TempoHasNotSet: AugmentedError<ApiType>;
      TooManyRegistrationsThisBlock: AugmentedError<ApiType>;
      TooManyRegistrationsThisInterval: AugmentedError<ApiType>;
      TooManyUids: AugmentedError<ApiType>;
      TxRateLimitExceeded: AugmentedError<ApiType>;
      WeightVecNotEqualSize: AugmentedError<ApiType>;
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
