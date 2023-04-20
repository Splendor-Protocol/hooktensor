// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Null, Option, Result, Vec, u16, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchDispatchInfo, FrameSupportTokensMiscBalanceStatus, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u64, reserved: u64], { who: AccountId32, free: u64, reserved: u64 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u64], { who: AccountId32, amount: u64 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u64], { account: AccountId32, amount: u64 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u64], { account: AccountId32, freeBalance: u64 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u64], { who: AccountId32, amount: u64 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u64, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u64, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u64], { who: AccountId32, amount: u64 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u64], { from: AccountId32, to: AccountId32, amount: u64 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u64], { who: AccountId32, amount: u64 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u64], { who: AccountId32, amount: u64 }>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    subtensorModule: {
      ActivityCutoffSet: AugmentedEvent<ApiType, [u16, u16]>;
      AdjustmentIntervalSet: AugmentedEvent<ApiType, [u16, u16]>;
      AxonServed: AugmentedEvent<ApiType, [u16, AccountId32]>;
      BondsMovingAverageSet: AugmentedEvent<ApiType, [u16, u64]>;
      BulkBalancesSet: AugmentedEvent<ApiType, [u16, u16]>;
      BulkNeuronsRegistered: AugmentedEvent<ApiType, [u16, u16]>;
      BurnSet: AugmentedEvent<ApiType, [u16, u64]>;
      DefaultTakeSet: AugmentedEvent<ApiType, [u16]>;
      DelegateAdded: AugmentedEvent<ApiType, [AccountId32, AccountId32, u16]>;
      DifficultySet: AugmentedEvent<ApiType, [u16, u64]>;
      EmissionValuesSet: AugmentedEvent<ApiType, []>;
      ImmunityPeriodSet: AugmentedEvent<ApiType, [u16, u16]>;
      KappaSet: AugmentedEvent<ApiType, [u16, u16]>;
      MaxAllowedUidsSet: AugmentedEvent<ApiType, [u16, u16]>;
      MaxAllowedValidatorsSet: AugmentedEvent<ApiType, [u16, u16]>;
      MaxBurnSet: AugmentedEvent<ApiType, [u16, u64]>;
      MaxDifficultySet: AugmentedEvent<ApiType, [u16, u64]>;
      MaxRegistrationsPerBlockSet: AugmentedEvent<ApiType, [u16, u16]>;
      MaxWeightLimitSet: AugmentedEvent<ApiType, [u16, u16]>;
      MinAllowedWeightSet: AugmentedEvent<ApiType, [u16, u16]>;
      MinBurnSet: AugmentedEvent<ApiType, [u16, u64]>;
      MinDifficultySet: AugmentedEvent<ApiType, [u16, u64]>;
      NetworkAdded: AugmentedEvent<ApiType, [u16, u16]>;
      NetworkConnectionAdded: AugmentedEvent<ApiType, [u16, u16, u16]>;
      NetworkConnectionRemoved: AugmentedEvent<ApiType, [u16, u16]>;
      NetworkRemoved: AugmentedEvent<ApiType, [u16]>;
      NeuronRegistered: AugmentedEvent<ApiType, [u16, u16, AccountId32]>;
      PrometheusServed: AugmentedEvent<ApiType, [u16, AccountId32]>;
      RegistrationPerIntervalSet: AugmentedEvent<ApiType, [u16, u16]>;
      RhoSet: AugmentedEvent<ApiType, [u16, u16]>;
      ScalingLawPowerSet: AugmentedEvent<ApiType, [u16, u16]>;
      ServingRateLimitSet: AugmentedEvent<ApiType, [u16, u64]>;
      StakeAdded: AugmentedEvent<ApiType, [AccountId32, u64]>;
      StakeRemoved: AugmentedEvent<ApiType, [AccountId32, u64]>;
      SynergyScalingLawPowerSet: AugmentedEvent<ApiType, [u16, u16]>;
      TxRateLimitSet: AugmentedEvent<ApiType, [u64]>;
      ValidatorBatchSizeSet: AugmentedEvent<ApiType, [u16, u16]>;
      ValidatorEpochLengthSet: AugmentedEvent<ApiType, [u16, u16]>;
      ValidatorEpochPerResetSet: AugmentedEvent<ApiType, [u16, u16]>;
      ValidatorExcludeQuantileSet: AugmentedEvent<ApiType, [u16, u16]>;
      ValidatorLogitsDivergenceSet: AugmentedEvent<ApiType, [u16, u16]>;
      ValidatorPruneLenSet: AugmentedEvent<ApiType, [u16, u64]>;
      ValidatorSequenceLengthSet: AugmentedEvent<ApiType, [u16, u16]>;
      WeightsSet: AugmentedEvent<ApiType, [u16, u16]>;
      WeightsSetRateLimitSet: AugmentedEvent<ApiType, [u16, u64]>;
      WeightsVersionKeySet: AugmentedEvent<ApiType, [u16, u64]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u64, tip: u64], { who: AccountId32, actualFee: u64, tip: u64 }>;
    };
  } // AugmentedEvents
} // declare module
