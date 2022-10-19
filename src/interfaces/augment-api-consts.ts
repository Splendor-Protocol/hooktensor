// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Vec, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { FrameSupportWeightsRuntimeDbWeight, FrameSupportWeightsWeightToFeeCoefficient, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
    };
    subtensorModule: {
      /**
       * Activity constant
       **/
      initialActivityCutoff: u64 & AugmentedConst<ApiType>;
      /**
       * Initial adjustment interval.
       **/
      initialAdjustmentInterval: u64 & AugmentedConst<ApiType>;
      /**
       * Blocks per step.
       **/
      initialBlocksPerStep: u64 & AugmentedConst<ApiType>;
      /**
       * Blocks per era.
       **/
      initialBondsMovingAverage: u64 & AugmentedConst<ApiType>;
      /**
       * Initial registration difficulty.
       **/
      initialDifficulty: u64 & AugmentedConst<ApiType>;
      /**
       * Initial foundation distribution
       **/
      initialFoundationDistribution: u64 & AugmentedConst<ApiType>;
      /**
       * Immunity Period Constant.
       **/
      initialImmunityPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Initial incentive pruning denominator
       **/
      initialIncentivePruningDenominator: u64 & AugmentedConst<ApiType>;
      /**
       * Initial registration difficulty.
       **/
      initialIssuance: u64 & AugmentedConst<ApiType>;
      /**
       * Kappa constant
       **/
      initialKappa: u64 & AugmentedConst<ApiType>;
      /**
       * Initial allowed max min weight ratio
       **/
      initialMaxAllowedMaxMinRatio: u64 & AugmentedConst<ApiType>;
      /**
       * Max UID constant.
       **/
      initialMaxAllowedUids: u64 & AugmentedConst<ApiType>;
      /**
       * Initial max registrations per block.
       **/
      initialMaxRegistrationsPerBlock: u64 & AugmentedConst<ApiType>;
      /**
       * Initial max weight limit.
       **/
      initialMaxWeightLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Initial min allowed weights.
       **/
      initialMinAllowedWeights: u64 & AugmentedConst<ApiType>;
      /**
       * Rho constant
       **/
      initialRho: u64 & AugmentedConst<ApiType>;
      /**
       * Initial scaling law power.
       **/
      initialScalingLawPower: u8 & AugmentedConst<ApiType>;
      /**
       * Initial stake pruning denominator
       **/
      initialStakePruningDenominator: u64 & AugmentedConst<ApiType>;
      /**
       * Initial stake pruning min
       **/
      initialStakePruningMin: u64 & AugmentedConst<ApiType>;
      /**
       * Initial synergy scaling law power.
       **/
      initialSynergyScalingLawPower: u8 & AugmentedConst<ApiType>;
      /**
       * Initial target registrations per interval.
       **/
      initialTargetRegistrationsPerInterval: u64 & AugmentedConst<ApiType>;
      /**
       * Default Batch size.
       **/
      initialValidatorBatchSize: u64 & AugmentedConst<ApiType>;
      /**
       * Default Epoch length.
       **/
      initialValidatorEpochLen: u64 & AugmentedConst<ApiType>;
      /**
       * Default Reset length.
       **/
      initialValidatorEpochsPerReset: u64 & AugmentedConst<ApiType>;
      /**
       * Initial validator exclude quantile.
       **/
      initialValidatorExcludeQuantile: u8 & AugmentedConst<ApiType>;
      /**
       * Default Batch size.
       **/
      initialValidatorSequenceLen: u64 & AugmentedConst<ApiType>;
      /**
       * Maximum registration difficulty
       **/
      maximumDifficulty: u64 & AugmentedConst<ApiType>;
      /**
       * Minimum registration difficulty
       **/
      minimumDifficulty: u64 & AugmentedConst<ApiType>;
      /**
       * Debug is on
       **/
      sDebug: u64 & AugmentedConst<ApiType>;
      /**
       * SelfOwnership constant
       **/
      selfOwnership: u64 & AugmentedConst<ApiType>;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: FrameSupportWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS85 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: u128 & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<FrameSupportWeightsWeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
  } // AugmentedConsts
} // declare module
