// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportWeightsPerDispatchClassU64 (7) */
  interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
    readonly normal: u64;
    readonly operational: u64;
    readonly mandatory: u64;
  }

  /** @name SpRuntimeDigest (11) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (13) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (16) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (18) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportWeightsDispatchInfo (19) */
  interface FrameSupportWeightsDispatchInfo extends Struct {
    readonly weight: u64;
    readonly class: FrameSupportWeightsDispatchClass;
    readonly paysFee: FrameSupportWeightsPays;
  }

  /** @name FrameSupportWeightsDispatchClass (20) */
  interface FrameSupportWeightsDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportWeightsPays (21) */
  interface FrameSupportWeightsPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (22) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic';
  }

  /** @name SpRuntimeModuleError (23) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: u8;
  }

  /** @name SpRuntimeTokenError (24) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (25) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name PalletGrandpaEvent (26) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (29) */
  interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (30) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (31) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (32) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletSudoEvent (33) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletSubtensorEvent (37) */
  interface PalletSubtensorEvent extends Enum {
    readonly isSomethingStored: boolean;
    readonly asSomethingStored: ITuple<[u32, AccountId32]>;
    readonly isWeightsSet: boolean;
    readonly asWeightsSet: AccountId32;
    readonly isNeuronRegistered: boolean;
    readonly asNeuronRegistered: u32;
    readonly isAxonServed: boolean;
    readonly asAxonServed: u32;
    readonly isStakeAdded: boolean;
    readonly asStakeAdded: ITuple<[AccountId32, u64]>;
    readonly isStakeRemoved: boolean;
    readonly asStakeRemoved: ITuple<[AccountId32, u64]>;
    readonly isDifficultySet: boolean;
    readonly asDifficultySet: u64;
    readonly isBlocksPerStepSet: boolean;
    readonly asBlocksPerStepSet: u64;
    readonly isBondsMovingAverageSet: boolean;
    readonly asBondsMovingAverageSet: u64;
    readonly isAdjustmentIntervalSet: boolean;
    readonly asAdjustmentIntervalSet: u64;
    readonly isActivityCuttoffSet: boolean;
    readonly asActivityCuttoffSet: u64;
    readonly isTargetRegistrationsPerIntervalSet: boolean;
    readonly asTargetRegistrationsPerIntervalSet: u64;
    readonly isRhoSet: boolean;
    readonly asRhoSet: u64;
    readonly isKappaSet: boolean;
    readonly asKappaSet: u64;
    readonly isMaxAllowedUidsSet: boolean;
    readonly asMaxAllowedUidsSet: u64;
    readonly isMinAllowedWeightsSet: boolean;
    readonly asMinAllowedWeightsSet: u64;
    readonly isMaxAllowedMaxMinRatioSet: boolean;
    readonly asMaxAllowedMaxMinRatioSet: u64;
    readonly isMaxWeightLimitSet: boolean;
    readonly asMaxWeightLimitSet: u32;
    readonly isIncentivePruningDenominatorSet: boolean;
    readonly asIncentivePruningDenominatorSet: u64;
    readonly isStakePruningDenominatorSet: boolean;
    readonly asStakePruningDenominatorSet: u64;
    readonly isStakePruningMinSet: boolean;
    readonly asStakePruningMinSet: u64;
    readonly isFoundationAccountSet: boolean;
    readonly asFoundationAccountSet: AccountId32;
    readonly isFoundationDistributionSet: boolean;
    readonly asFoundationDistributionSet: u64;
    readonly isScalingLawPowerSet: boolean;
    readonly asScalingLawPowerSet: u8;
    readonly isSynergyScalingLawPowerSet: boolean;
    readonly asSynergyScalingLawPowerSet: u8;
    readonly isValidatorExcludeQuantileSet: boolean;
    readonly asValidatorExcludeQuantileSet: u8;
    readonly isValidatorPruneLenSet: boolean;
    readonly asValidatorPruneLenSet: u64;
    readonly isValidatorLogitsDivergenceSet: boolean;
    readonly asValidatorLogitsDivergenceSet: u64;
    readonly isValidatorEpochLenSet: boolean;
    readonly asValidatorEpochLenSet: u64;
    readonly isValidatorEpochsPerResetSet: boolean;
    readonly asValidatorEpochsPerResetSet: u64;
    readonly isValidatorBatchSizeSet: boolean;
    readonly asValidatorBatchSizeSet: u64;
    readonly isValidatorSequenceLengthSet: boolean;
    readonly asValidatorSequenceLengthSet: u64;
    readonly isImmunityPeriodSet: boolean;
    readonly asImmunityPeriodSet: u64;
    readonly isResetBonds: boolean;
    readonly type: 'SomethingStored' | 'WeightsSet' | 'NeuronRegistered' | 'AxonServed' | 'StakeAdded' | 'StakeRemoved' | 'DifficultySet' | 'BlocksPerStepSet' | 'BondsMovingAverageSet' | 'AdjustmentIntervalSet' | 'ActivityCuttoffSet' | 'TargetRegistrationsPerIntervalSet' | 'RhoSet' | 'KappaSet' | 'MaxAllowedUidsSet' | 'MinAllowedWeightsSet' | 'MaxAllowedMaxMinRatioSet' | 'MaxWeightLimitSet' | 'IncentivePruningDenominatorSet' | 'StakePruningDenominatorSet' | 'StakePruningMinSet' | 'FoundationAccountSet' | 'FoundationDistributionSet' | 'ScalingLawPowerSet' | 'SynergyScalingLawPowerSet' | 'ValidatorExcludeQuantileSet' | 'ValidatorPruneLenSet' | 'ValidatorLogitsDivergenceSet' | 'ValidatorEpochLenSet' | 'ValidatorEpochsPerResetSet' | 'ValidatorBatchSizeSet' | 'ValidatorSequenceLengthSet' | 'ImmunityPeriodSet' | 'ResetBonds';
  }

  /** @name FrameSystemPhase (38) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (42) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (46) */
  interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (51) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (52) */
  interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (53) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (55) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (56) */
  interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (57) */
  interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (58) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (64) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (66) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (69) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (70) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (73) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (74) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (77) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (78) */
  interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (79) */
  interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (80) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (81) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (82) */
  interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (83) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (86) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (87) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpCoreVoid (89) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (90) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletBalancesBalanceLock (92) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (93) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (96) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (98) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesCall (99) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletBalancesError (104) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (106) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (108) */
  interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128;
    readonly coeffFrac: Perbill;
    readonly negative: bool;
    readonly degree: u8;
  }

  /** @name PalletSudoCall (109) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: u64;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletSubtensorCall (111) */
  interface PalletSubtensorCall extends Enum {
    readonly isSetWeights: boolean;
    readonly asSetWeights: {
      readonly dests: Vec<u32>;
      readonly weights: Vec<u32>;
    } & Struct;
    readonly isAddStake: boolean;
    readonly asAddStake: {
      readonly hotkey: AccountId32;
      readonly ammountStaked: u64;
    } & Struct;
    readonly isRemoveStake: boolean;
    readonly asRemoveStake: {
      readonly hotkey: AccountId32;
      readonly ammountUnstaked: u64;
    } & Struct;
    readonly isServeAxon: boolean;
    readonly asServeAxon: {
      readonly version: u32;
      readonly ip: u128;
      readonly port: u16;
      readonly ipType: u8;
      readonly modality: u8;
    } & Struct;
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly blockNumber: u64;
      readonly nonce: u64;
      readonly work: Bytes;
      readonly hotkey: AccountId32;
      readonly coldkey: AccountId32;
    } & Struct;
    readonly isSudoSetBlocksPerStep: boolean;
    readonly asSudoSetBlocksPerStep: {
      readonly blocksPerStep: u64;
    } & Struct;
    readonly isSudoSetBondsMovingAverage: boolean;
    readonly asSudoSetBondsMovingAverage: {
      readonly bondsMovingAverage: u64;
    } & Struct;
    readonly isSudoSetDifficulty: boolean;
    readonly asSudoSetDifficulty: {
      readonly difficulty: u64;
    } & Struct;
    readonly isSudoSetAdjustmentInterval: boolean;
    readonly asSudoSetAdjustmentInterval: {
      readonly adjustmentInterval: u64;
    } & Struct;
    readonly isSudoSetActivityCutoff: boolean;
    readonly asSudoSetActivityCutoff: {
      readonly activityCutoff: u64;
    } & Struct;
    readonly isSudoTargetRegistrationsPerInterval: boolean;
    readonly asSudoTargetRegistrationsPerInterval: {
      readonly targetRegistrationsPerInterval: u64;
    } & Struct;
    readonly isSudoSetRho: boolean;
    readonly asSudoSetRho: {
      readonly rho: u64;
    } & Struct;
    readonly isSudoSetKappa: boolean;
    readonly asSudoSetKappa: {
      readonly kappa: u64;
    } & Struct;
    readonly isSudoSetMaxAllowedUids: boolean;
    readonly asSudoSetMaxAllowedUids: {
      readonly maxAllowedUids: u64;
    } & Struct;
    readonly isSudoSetMinAllowedWeights: boolean;
    readonly asSudoSetMinAllowedWeights: {
      readonly minAllowedWeights: u64;
    } & Struct;
    readonly isSudoSetMaxAllowedMaxMinRatio: boolean;
    readonly asSudoSetMaxAllowedMaxMinRatio: {
      readonly maxAllowedMaxMinRatio: u64;
    } & Struct;
    readonly isSudoSetMaxWeightLimit: boolean;
    readonly asSudoSetMaxWeightLimit: {
      readonly maxWeightLimit: u32;
    } & Struct;
    readonly isSudoSetValidatorBatchSize: boolean;
    readonly asSudoSetValidatorBatchSize: {
      readonly validatorBatchSize: u64;
    } & Struct;
    readonly isSudoSetValidatorSequenceLength: boolean;
    readonly asSudoSetValidatorSequenceLength: {
      readonly validatorSequenceLength: u64;
    } & Struct;
    readonly isSudoSetValidatorEpochLen: boolean;
    readonly asSudoSetValidatorEpochLen: {
      readonly validatorEpochLen: u64;
    } & Struct;
    readonly isSudoSetValidatorEpochsPerReset: boolean;
    readonly asSudoSetValidatorEpochsPerReset: {
      readonly validatorEpochsPerReset: u64;
    } & Struct;
    readonly isSudoSetIncentivePruningDenominator: boolean;
    readonly asSudoSetIncentivePruningDenominator: {
      readonly incentivePruningDenominator: u64;
    } & Struct;
    readonly isSudoSetStakePruningDenominator: boolean;
    readonly asSudoSetStakePruningDenominator: {
      readonly stakePruningDenominator: u64;
    } & Struct;
    readonly isSudoSetStakePruningMin: boolean;
    readonly asSudoSetStakePruningMin: {
      readonly stakePruningMin: u64;
    } & Struct;
    readonly isSudoSetImmunityPeriod: boolean;
    readonly asSudoSetImmunityPeriod: {
      readonly immunityPeriod: u64;
    } & Struct;
    readonly isSudoResetBonds: boolean;
    readonly isSudoSetScalingLawPower: boolean;
    readonly asSudoSetScalingLawPower: {
      readonly scalingLawPower: u8;
    } & Struct;
    readonly isSudoSetSynergyScalingLawPower: boolean;
    readonly asSudoSetSynergyScalingLawPower: {
      readonly synergyScalingLawPower: u8;
    } & Struct;
    readonly isSudoSetValidatorExcludeQuantile: boolean;
    readonly asSudoSetValidatorExcludeQuantile: {
      readonly validatorExcludeQuantile: u8;
    } & Struct;
    readonly isSudoSetValidatorPruneLen: boolean;
    readonly asSudoSetValidatorPruneLen: {
      readonly validatorPruneLen: u64;
    } & Struct;
    readonly isSudoSetValidatorLogitsDivergence: boolean;
    readonly asSudoSetValidatorLogitsDivergence: {
      readonly validatorLogitsDivergence: u64;
    } & Struct;
    readonly type: 'SetWeights' | 'AddStake' | 'RemoveStake' | 'ServeAxon' | 'Register' | 'SudoSetBlocksPerStep' | 'SudoSetBondsMovingAverage' | 'SudoSetDifficulty' | 'SudoSetAdjustmentInterval' | 'SudoSetActivityCutoff' | 'SudoTargetRegistrationsPerInterval' | 'SudoSetRho' | 'SudoSetKappa' | 'SudoSetMaxAllowedUids' | 'SudoSetMinAllowedWeights' | 'SudoSetMaxAllowedMaxMinRatio' | 'SudoSetMaxWeightLimit' | 'SudoSetValidatorBatchSize' | 'SudoSetValidatorSequenceLength' | 'SudoSetValidatorEpochLen' | 'SudoSetValidatorEpochsPerReset' | 'SudoSetIncentivePruningDenominator' | 'SudoSetStakePruningDenominator' | 'SudoSetStakePruningMin' | 'SudoSetImmunityPeriod' | 'SudoResetBonds' | 'SudoSetScalingLawPower' | 'SudoSetSynergyScalingLawPower' | 'SudoSetValidatorExcludeQuantile' | 'SudoSetValidatorPruneLen' | 'SudoSetValidatorLogitsDivergence';
  }

  /** @name PalletSudoError (113) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletSubtensorNeuronMetadata (114) */
  interface PalletSubtensorNeuronMetadata extends Struct {
    readonly version: u32;
    readonly ip: u128;
    readonly port: u16;
    readonly ipType: u8;
    readonly uid: u32;
    readonly modality: u8;
    readonly hotkey: AccountId32;
    readonly coldkey: AccountId32;
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

  /** @name PalletSubtensorError (117) */
  interface PalletSubtensorError extends Enum {
    readonly isNoneValue: boolean;
    readonly isStorageOverflow: boolean;
    readonly isInvalidIpType: boolean;
    readonly isInvalidIpAddress: boolean;
    readonly isInvalidModality: boolean;
    readonly isWeightVecNotEqualSize: boolean;
    readonly isDuplicateUids: boolean;
    readonly isInvalidUid: boolean;
    readonly isInvalidWorkBlock: boolean;
    readonly isInvalidDifficulty: boolean;
    readonly isInvalidSeal: boolean;
    readonly isToManyRegistrationsThisBlock: boolean;
    readonly isNotRegistered: boolean;
    readonly isAlreadyRegistered: boolean;
    readonly isNonAssociatedColdKey: boolean;
    readonly isNotEnoughStaketoWithdraw: boolean;
    readonly isNotEnoughBalanceToStake: boolean;
    readonly isBalanceWithdrawalError: boolean;
    readonly isCouldNotConvertToBalance: boolean;
    readonly isNotSettingEnoughWeights: boolean;
    readonly isMaxAllowedMaxMinRatioExceeded: boolean;
    readonly isMaxWeightExceeded: boolean;
    readonly isWorkRepeated: boolean;
    readonly isStorageValueOutOfRange: boolean;
    readonly type: 'NoneValue' | 'StorageOverflow' | 'InvalidIpType' | 'InvalidIpAddress' | 'InvalidModality' | 'WeightVecNotEqualSize' | 'DuplicateUids' | 'InvalidUid' | 'InvalidWorkBlock' | 'InvalidDifficulty' | 'InvalidSeal' | 'ToManyRegistrationsThisBlock' | 'NotRegistered' | 'AlreadyRegistered' | 'NonAssociatedColdKey' | 'NotEnoughStaketoWithdraw' | 'NotEnoughBalanceToStake' | 'BalanceWithdrawalError' | 'CouldNotConvertToBalance' | 'NotSettingEnoughWeights' | 'MaxAllowedMaxMinRatioExceeded' | 'MaxWeightExceeded' | 'WorkRepeated' | 'StorageValueOutOfRange';
  }

  /** @name SpRuntimeMultiSignature (119) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (120) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (121) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (124) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (125) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (126) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (127) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (130) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (131) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (132) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PalletSubtensorSubtensorSignedExtension (133) */
  type PalletSubtensorSubtensorSignedExtension = Null;

  /** @name NodeSubtensorRuntimeRuntime (134) */
  type NodeSubtensorRuntimeRuntime = Null;

} // declare module
