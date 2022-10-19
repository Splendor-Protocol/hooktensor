// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Null, Option, Result, Vec, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
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
      /**
       * --- Event created when the activity cuttoff has been set.
       **/
      ActivityCuttoffSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the difficulty adjustment interval has been set.
       **/
      AdjustmentIntervalSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the axon server information is added to the network.
       **/
      AxonServed: AugmentedEvent<ApiType, [u32]>;
      /**
       * --- Event created when default blocks per step has been set.
       **/
      BlocksPerStepSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when bonds moving average set.
       **/
      BondsMovingAverageSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the difficulty has been set.
       **/
      DifficultySet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the foundation account has been set.
       **/
      FoundationAccountSet: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * --- Event created when the foundation distribution has been set.
       **/
      FoundationDistributionSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the immunity period has been set.
       **/
      ImmunityPeriodSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the incentive pruning denominator has been set.
       **/
      IncentivePruningDenominatorSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when mechanism kappa has been set.
       **/
      KappaSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the max allowed max min ration has been set.
       **/
      MaxAllowedMaxMinRatioSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when max allowed uids has been set.
       **/
      MaxAllowedUidsSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the max weight limit has been set.
       **/
      MaxWeightLimitSet: AugmentedEvent<ApiType, [u32]>;
      /**
       * --- Event created when min allowed weights has been set.
       **/
      MinAllowedWeightsSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when a new neuron account has been registered to
       * the chain.
       **/
      NeuronRegistered: AugmentedEvent<ApiType, [u32]>;
      /**
       * --- Event thrown when bonds have been reset.
       **/
      ResetBonds: AugmentedEvent<ApiType, []>;
      /**
       * --- Event created when mechanism rho has been set.
       **/
      RhoSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the scaling law power has been set.
       **/
      ScalingLawPowerSet: AugmentedEvent<ApiType, [u8]>;
      /**
       * Event documentation should end with an array that provides descriptive names for event
       * parameters. [something, who]
       **/
      SomethingStored: AugmentedEvent<ApiType, [u32, AccountId32]>;
      /**
       * --- Event created during when stake has been transfered from
       * the coldkey onto the hotkey staking account.
       **/
      StakeAdded: AugmentedEvent<ApiType, [AccountId32, u64]>;
      /**
       * --- Event created when the stake pruning denominator has been set.
       **/
      StakePruningDenominatorSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the stake pruning min has been set.
       **/
      StakePruningMinSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when stake has been removed from
       * the staking account into the coldkey account.
       **/
      StakeRemoved: AugmentedEvent<ApiType, [AccountId32, u64]>;
      /**
       * --- Event created when the synergy scaling law power has been set.
       **/
      SynergyScalingLawPowerSet: AugmentedEvent<ApiType, [u8]>;
      /**
       * --- Event created when the target registrations per interval has been set.
       **/
      TargetRegistrationsPerIntervalSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the batch size has been set.
       **/
      ValidatorBatchSizeSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the validator default epoch length has been set.
       **/
      ValidatorEpochLenSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the validator default epoch per reset has been set.
       **/
      ValidatorEpochsPerResetSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * --- Event created when the validator exclude quantile has been set.
       **/
      ValidatorExcludeQuantileSet: AugmentedEvent<ApiType, [u8]>;
      /**
       * --- Event created when the sequence length has been set.
       **/
      ValidatorSequenceLengthSet: AugmentedEvent<ApiType, [u64]>;
      /**
       * ---- Event created when a caller successfully set's their weights
       * on the chain.
       **/
      WeightsSet: AugmentedEvent<ApiType, [AccountId32]>;
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
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportWeightsDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportWeightsDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportWeightsDispatchInfo], { dispatchInfo: FrameSupportWeightsDispatchInfo }>;
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
  } // AugmentedEvents
} // declare module
