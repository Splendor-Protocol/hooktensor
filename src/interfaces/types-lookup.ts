// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
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
    readonly free: u64;
    readonly reserved: u64;
    readonly miscFrozen: u64;
    readonly feeFrozen: u64;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (8) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (12) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (14) */
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

  /** @name FrameSystemEventRecord (17) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (19) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
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

  /** @name FrameSupportDispatchDispatchInfo (20) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (21) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (22) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (23) */
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
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
  }

  /** @name SpRuntimeModuleError (24) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (25) */
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

  /** @name SpArithmeticArithmeticError (26) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (27) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletGrandpaEvent (28) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (31) */
  interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (32) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (33) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u64;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u64;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u64;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u64;
      readonly reserved: u64;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u64;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u64;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u64;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u64;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u64;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u64;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (34) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (35) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u64;
      readonly tip: u64;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletSudoEvent (36) */
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

  /** @name PalletSubtensorEvent (40) */
  interface PalletSubtensorEvent extends Enum {
    readonly isNetworkAdded: boolean;
    readonly asNetworkAdded: ITuple<[u16, u16]>;
    readonly isNetworkRemoved: boolean;
    readonly asNetworkRemoved: u16;
    readonly isStakeAdded: boolean;
    readonly asStakeAdded: ITuple<[AccountId32, u64]>;
    readonly isStakeRemoved: boolean;
    readonly asStakeRemoved: ITuple<[AccountId32, u64]>;
    readonly isWeightsSet: boolean;
    readonly asWeightsSet: ITuple<[u16, u16]>;
    readonly isNeuronRegistered: boolean;
    readonly asNeuronRegistered: ITuple<[u16, u16, AccountId32]>;
    readonly isBulkNeuronsRegistered: boolean;
    readonly asBulkNeuronsRegistered: ITuple<[u16, u16]>;
    readonly isBulkBalancesSet: boolean;
    readonly asBulkBalancesSet: ITuple<[u16, u16]>;
    readonly isMaxAllowedUidsSet: boolean;
    readonly asMaxAllowedUidsSet: ITuple<[u16, u16]>;
    readonly isMaxWeightLimitSet: boolean;
    readonly asMaxWeightLimitSet: ITuple<[u16, u16]>;
    readonly isDifficultySet: boolean;
    readonly asDifficultySet: ITuple<[u16, u64]>;
    readonly isAdjustmentIntervalSet: boolean;
    readonly asAdjustmentIntervalSet: ITuple<[u16, u16]>;
    readonly isRegistrationPerIntervalSet: boolean;
    readonly asRegistrationPerIntervalSet: ITuple<[u16, u16]>;
    readonly isMaxRegistrationsPerBlockSet: boolean;
    readonly asMaxRegistrationsPerBlockSet: ITuple<[u16, u16]>;
    readonly isActivityCutoffSet: boolean;
    readonly asActivityCutoffSet: ITuple<[u16, u16]>;
    readonly isRhoSet: boolean;
    readonly asRhoSet: ITuple<[u16, u16]>;
    readonly isKappaSet: boolean;
    readonly asKappaSet: ITuple<[u16, u16]>;
    readonly isMinAllowedWeightSet: boolean;
    readonly asMinAllowedWeightSet: ITuple<[u16, u16]>;
    readonly isValidatorBatchSizeSet: boolean;
    readonly asValidatorBatchSizeSet: ITuple<[u16, u16]>;
    readonly isValidatorSequenceLengthSet: boolean;
    readonly asValidatorSequenceLengthSet: ITuple<[u16, u16]>;
    readonly isValidatorEpochPerResetSet: boolean;
    readonly asValidatorEpochPerResetSet: ITuple<[u16, u16]>;
    readonly isValidatorExcludeQuantileSet: boolean;
    readonly asValidatorExcludeQuantileSet: ITuple<[u16, u16]>;
    readonly isValidatorEpochLengthSet: boolean;
    readonly asValidatorEpochLengthSet: ITuple<[u16, u16]>;
    readonly isValidatorLogitsDivergenceSet: boolean;
    readonly asValidatorLogitsDivergenceSet: ITuple<[u16, u16]>;
    readonly isValidatorPruneLenSet: boolean;
    readonly asValidatorPruneLenSet: ITuple<[u16, u64]>;
    readonly isScalingLawPowerSet: boolean;
    readonly asScalingLawPowerSet: ITuple<[u16, u16]>;
    readonly isSynergyScalingLawPowerSet: boolean;
    readonly asSynergyScalingLawPowerSet: ITuple<[u16, u16]>;
    readonly isWeightsSetRateLimitSet: boolean;
    readonly asWeightsSetRateLimitSet: ITuple<[u16, u64]>;
    readonly isImmunityPeriodSet: boolean;
    readonly asImmunityPeriodSet: ITuple<[u16, u16]>;
    readonly isBondsMovingAverageSet: boolean;
    readonly asBondsMovingAverageSet: ITuple<[u16, u64]>;
    readonly isMaxAllowedValidatorsSet: boolean;
    readonly asMaxAllowedValidatorsSet: ITuple<[u16, u16]>;
    readonly isAxonServed: boolean;
    readonly asAxonServed: ITuple<[u16, AccountId32]>;
    readonly isPrometheusServed: boolean;
    readonly asPrometheusServed: ITuple<[u16, AccountId32]>;
    readonly isEmissionValuesSet: boolean;
    readonly isNetworkConnectionAdded: boolean;
    readonly asNetworkConnectionAdded: ITuple<[u16, u16, u16]>;
    readonly isNetworkConnectionRemoved: boolean;
    readonly asNetworkConnectionRemoved: ITuple<[u16, u16]>;
    readonly isDelegateAdded: boolean;
    readonly asDelegateAdded: ITuple<[AccountId32, AccountId32, u16]>;
    readonly isDefaultTakeSet: boolean;
    readonly asDefaultTakeSet: u16;
    readonly isWeightsVersionKeySet: boolean;
    readonly asWeightsVersionKeySet: ITuple<[u16, u64]>;
    readonly isMinDifficultySet: boolean;
    readonly asMinDifficultySet: ITuple<[u16, u64]>;
    readonly isMaxDifficultySet: boolean;
    readonly asMaxDifficultySet: ITuple<[u16, u64]>;
    readonly isServingRateLimitSet: boolean;
    readonly asServingRateLimitSet: ITuple<[u16, u64]>;
    readonly isBurnSet: boolean;
    readonly asBurnSet: ITuple<[u16, u64]>;
    readonly isMaxBurnSet: boolean;
    readonly asMaxBurnSet: ITuple<[u16, u64]>;
    readonly isMinBurnSet: boolean;
    readonly asMinBurnSet: ITuple<[u16, u64]>;
    readonly isTxRateLimitSet: boolean;
    readonly asTxRateLimitSet: u64;
    readonly type: 'NetworkAdded' | 'NetworkRemoved' | 'StakeAdded' | 'StakeRemoved' | 'WeightsSet' | 'NeuronRegistered' | 'BulkNeuronsRegistered' | 'BulkBalancesSet' | 'MaxAllowedUidsSet' | 'MaxWeightLimitSet' | 'DifficultySet' | 'AdjustmentIntervalSet' | 'RegistrationPerIntervalSet' | 'MaxRegistrationsPerBlockSet' | 'ActivityCutoffSet' | 'RhoSet' | 'KappaSet' | 'MinAllowedWeightSet' | 'ValidatorBatchSizeSet' | 'ValidatorSequenceLengthSet' | 'ValidatorEpochPerResetSet' | 'ValidatorExcludeQuantileSet' | 'ValidatorEpochLengthSet' | 'ValidatorLogitsDivergenceSet' | 'ValidatorPruneLenSet' | 'ScalingLawPowerSet' | 'SynergyScalingLawPowerSet' | 'WeightsSetRateLimitSet' | 'ImmunityPeriodSet' | 'BondsMovingAverageSet' | 'MaxAllowedValidatorsSet' | 'AxonServed' | 'PrometheusServed' | 'EmissionValuesSet' | 'NetworkConnectionAdded' | 'NetworkConnectionRemoved' | 'DelegateAdded' | 'DefaultTakeSet' | 'WeightsVersionKeySet' | 'MinDifficultySet' | 'MaxDifficultySet' | 'ServingRateLimitSet' | 'BurnSet' | 'MaxBurnSet' | 'MinBurnSet' | 'TxRateLimitSet';
  }

  /** @name FrameSystemPhase (42) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (46) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (50) */
  interface FrameSystemCall extends Enum {
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
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (54) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (55) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (56) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (58) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (59) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (60) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (61) */
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

  /** @name FrameSystemError (66) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (68) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (70) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (71) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (74) */
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

  /** @name PalletGrandpaStoredPendingChange (75) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (78) */
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

  /** @name SpFinalityGrandpaEquivocationProof (79) */
  interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (80) */
  interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (81) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (82) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (83) */
  interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (84) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (87) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (88) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpCoreVoid (90) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (91) */
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

  /** @name PalletBalancesBalanceLock (93) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u64;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (94) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (97) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u64;
  }

  /** @name PalletBalancesCall (99) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u64>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u64>;
      readonly newReserved: Compact<u64>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u64>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u64>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u64;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletBalancesError (103) */
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

  /** @name PalletSudoCall (107) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
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

  /** @name PalletSubtensorCall (109) */
  interface PalletSubtensorCall extends Enum {
    readonly isSetWeights: boolean;
    readonly asSetWeights: {
      readonly netuid: u16;
      readonly dests: Vec<u16>;
      readonly weights: Vec<u16>;
      readonly versionKey: u64;
    } & Struct;
    readonly isBecomeDelegate: boolean;
    readonly asBecomeDelegate: {
      readonly hotkey: AccountId32;
    } & Struct;
    readonly isAddStake: boolean;
    readonly asAddStake: {
      readonly hotkey: AccountId32;
      readonly amountStaked: u64;
    } & Struct;
    readonly isRemoveStake: boolean;
    readonly asRemoveStake: {
      readonly hotkey: AccountId32;
      readonly amountUnstaked: u64;
    } & Struct;
    readonly isServeAxon: boolean;
    readonly asServeAxon: {
      readonly netuid: u16;
      readonly version: u32;
      readonly ip: u128;
      readonly port: u16;
      readonly ipType: u8;
      readonly protocol: u8;
      readonly placeholder1: u8;
      readonly placeholder2: u8;
    } & Struct;
    readonly isServePrometheus: boolean;
    readonly asServePrometheus: {
      readonly netuid: u16;
      readonly version: u32;
      readonly ip: u128;
      readonly port: u16;
      readonly ipType: u8;
    } & Struct;
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly netuid: u16;
      readonly blockNumber: u64;
      readonly nonce: u64;
      readonly work: Bytes;
      readonly hotkey: AccountId32;
      readonly coldkey: AccountId32;
    } & Struct;
    readonly isBurnedRegister: boolean;
    readonly asBurnedRegister: {
      readonly netuid: u16;
      readonly hotkey: AccountId32;
    } & Struct;
    readonly isSudoRegister: boolean;
    readonly asSudoRegister: {
      readonly netuid: u16;
      readonly hotkey: AccountId32;
      readonly coldkey: AccountId32;
      readonly stake: u64;
      readonly balance: u64;
    } & Struct;
    readonly isSudoAddNetwork: boolean;
    readonly asSudoAddNetwork: {
      readonly netuid: u16;
      readonly tempo: u16;
      readonly modality: u16;
    } & Struct;
    readonly isSudoRemoveNetwork: boolean;
    readonly asSudoRemoveNetwork: {
      readonly netuid: u16;
    } & Struct;
    readonly isSudoSetEmissionValues: boolean;
    readonly asSudoSetEmissionValues: {
      readonly netuids: Vec<u16>;
      readonly emission: Vec<u64>;
    } & Struct;
    readonly isSudoAddNetworkConnectionRequirement: boolean;
    readonly asSudoAddNetworkConnectionRequirement: {
      readonly netuidA: u16;
      readonly netuidB: u16;
      readonly requirement: u16;
    } & Struct;
    readonly isSudoRemoveNetworkConnectionRequirement: boolean;
    readonly asSudoRemoveNetworkConnectionRequirement: {
      readonly netuidA: u16;
      readonly netuidB: u16;
    } & Struct;
    readonly isSudoSetDefaultTake: boolean;
    readonly asSudoSetDefaultTake: {
      readonly defaultTake: u16;
    } & Struct;
    readonly isSudoSetServingRateLimit: boolean;
    readonly asSudoSetServingRateLimit: {
      readonly netuid: u16;
      readonly servingRateLimit: u64;
    } & Struct;
    readonly isSudoSetTxRateLimit: boolean;
    readonly asSudoSetTxRateLimit: {
      readonly txRateLimit: u64;
    } & Struct;
    readonly isSudoSetMaxBurn: boolean;
    readonly asSudoSetMaxBurn: {
      readonly netuid: u16;
      readonly maxBurn: u64;
    } & Struct;
    readonly isSudoSetMinBurn: boolean;
    readonly asSudoSetMinBurn: {
      readonly netuid: u16;
      readonly minBurn: u64;
    } & Struct;
    readonly isSudoSetBurn: boolean;
    readonly asSudoSetBurn: {
      readonly netuid: u16;
      readonly burn: u64;
    } & Struct;
    readonly isSudoSetMaxDifficulty: boolean;
    readonly asSudoSetMaxDifficulty: {
      readonly netuid: u16;
      readonly maxDifficulty: u64;
    } & Struct;
    readonly isSudoSetMinDifficulty: boolean;
    readonly asSudoSetMinDifficulty: {
      readonly netuid: u16;
      readonly minDifficulty: u64;
    } & Struct;
    readonly isSudoSetWeightsSetRateLimit: boolean;
    readonly asSudoSetWeightsSetRateLimit: {
      readonly netuid: u16;
      readonly weightsSetRateLimit: u64;
    } & Struct;
    readonly isSudoSetWeightsVersionKey: boolean;
    readonly asSudoSetWeightsVersionKey: {
      readonly netuid: u16;
      readonly weightsVersionKey: u64;
    } & Struct;
    readonly isSudoSetBondsMovingAverage: boolean;
    readonly asSudoSetBondsMovingAverage: {
      readonly netuid: u16;
      readonly bondsMovingAverage: u64;
    } & Struct;
    readonly isSudoSetMaxAllowedValidators: boolean;
    readonly asSudoSetMaxAllowedValidators: {
      readonly netuid: u16;
      readonly maxAllowedValidators: u16;
    } & Struct;
    readonly isSudoSetDifficulty: boolean;
    readonly asSudoSetDifficulty: {
      readonly netuid: u16;
      readonly difficulty: u64;
    } & Struct;
    readonly isSudoSetAdjustmentInterval: boolean;
    readonly asSudoSetAdjustmentInterval: {
      readonly netuid: u16;
      readonly adjustmentInterval: u16;
    } & Struct;
    readonly isSudoSetTargetRegistrationsPerInterval: boolean;
    readonly asSudoSetTargetRegistrationsPerInterval: {
      readonly netuid: u16;
      readonly targetRegistrationsPerInterval: u16;
    } & Struct;
    readonly isSudoSetActivityCutoff: boolean;
    readonly asSudoSetActivityCutoff: {
      readonly netuid: u16;
      readonly activityCutoff: u16;
    } & Struct;
    readonly isSudoSetRho: boolean;
    readonly asSudoSetRho: {
      readonly netuid: u16;
      readonly rho: u16;
    } & Struct;
    readonly isSudoSetKappa: boolean;
    readonly asSudoSetKappa: {
      readonly netuid: u16;
      readonly kappa: u16;
    } & Struct;
    readonly isSudoSetMaxAllowedUids: boolean;
    readonly asSudoSetMaxAllowedUids: {
      readonly netuid: u16;
      readonly maxAllowedUids: u16;
    } & Struct;
    readonly isSudoSetMinAllowedWeights: boolean;
    readonly asSudoSetMinAllowedWeights: {
      readonly netuid: u16;
      readonly minAllowedWeights: u16;
    } & Struct;
    readonly isSudoSetValidatorBatchSize: boolean;
    readonly asSudoSetValidatorBatchSize: {
      readonly netuid: u16;
      readonly validatorBatchSize: u16;
    } & Struct;
    readonly isSudoSetValidatorSequenceLength: boolean;
    readonly asSudoSetValidatorSequenceLength: {
      readonly netuid: u16;
      readonly validatorSequenceLength: u16;
    } & Struct;
    readonly isSudoSetValidatorEpochsPerReset: boolean;
    readonly asSudoSetValidatorEpochsPerReset: {
      readonly netuid: u16;
      readonly validatorEpochsPerReset: u16;
    } & Struct;
    readonly isSudoSetValidatorExcludeQuantile: boolean;
    readonly asSudoSetValidatorExcludeQuantile: {
      readonly netuid: u16;
      readonly validatorExcludeQuantile: u16;
    } & Struct;
    readonly isSudoSetValidatorPruneLen: boolean;
    readonly asSudoSetValidatorPruneLen: {
      readonly netuid: u16;
      readonly validatorPruneLen: u64;
    } & Struct;
    readonly isSudoSetValidatorLogitsDivergence: boolean;
    readonly asSudoSetValidatorLogitsDivergence: {
      readonly netuid: u16;
      readonly validatorLogitsDivergence: u16;
    } & Struct;
    readonly isSudoSetValidatorEpochLen: boolean;
    readonly asSudoSetValidatorEpochLen: {
      readonly netuid: u16;
      readonly validatorEpochLength: u16;
    } & Struct;
    readonly isSudoSetScalingLawPower: boolean;
    readonly asSudoSetScalingLawPower: {
      readonly netuid: u16;
      readonly scalingLawPower: u16;
    } & Struct;
    readonly isSudoSetSynergyScalingLawPower: boolean;
    readonly asSudoSetSynergyScalingLawPower: {
      readonly netuid: u16;
      readonly synergyScalingLawPower: u16;
    } & Struct;
    readonly isSudoSetImmunityPeriod: boolean;
    readonly asSudoSetImmunityPeriod: {
      readonly netuid: u16;
      readonly immunityPeriod: u16;
    } & Struct;
    readonly isSudoSetMaxWeightLimit: boolean;
    readonly asSudoSetMaxWeightLimit: {
      readonly netuid: u16;
      readonly maxWeightLimit: u16;
    } & Struct;
    readonly isSudoSetMaxRegistrationsPerBlock: boolean;
    readonly asSudoSetMaxRegistrationsPerBlock: {
      readonly netuid: u16;
      readonly maxRegistrationsPerBlock: u16;
    } & Struct;
    readonly isSudoSetTotalIssuance: boolean;
    readonly asSudoSetTotalIssuance: {
      readonly totalIssuance: u64;
    } & Struct;
    readonly isBenchmarkEpochWithWeights: boolean;
    readonly isBenchmarkEpochWithoutWeights: boolean;
    readonly isBenchmarkDrainEmission: boolean;
    readonly type: 'SetWeights' | 'BecomeDelegate' | 'AddStake' | 'RemoveStake' | 'ServeAxon' | 'ServePrometheus' | 'Register' | 'BurnedRegister' | 'SudoRegister' | 'SudoAddNetwork' | 'SudoRemoveNetwork' | 'SudoSetEmissionValues' | 'SudoAddNetworkConnectionRequirement' | 'SudoRemoveNetworkConnectionRequirement' | 'SudoSetDefaultTake' | 'SudoSetServingRateLimit' | 'SudoSetTxRateLimit' | 'SudoSetMaxBurn' | 'SudoSetMinBurn' | 'SudoSetBurn' | 'SudoSetMaxDifficulty' | 'SudoSetMinDifficulty' | 'SudoSetWeightsSetRateLimit' | 'SudoSetWeightsVersionKey' | 'SudoSetBondsMovingAverage' | 'SudoSetMaxAllowedValidators' | 'SudoSetDifficulty' | 'SudoSetAdjustmentInterval' | 'SudoSetTargetRegistrationsPerInterval' | 'SudoSetActivityCutoff' | 'SudoSetRho' | 'SudoSetKappa' | 'SudoSetMaxAllowedUids' | 'SudoSetMinAllowedWeights' | 'SudoSetValidatorBatchSize' | 'SudoSetValidatorSequenceLength' | 'SudoSetValidatorEpochsPerReset' | 'SudoSetValidatorExcludeQuantile' | 'SudoSetValidatorPruneLen' | 'SudoSetValidatorLogitsDivergence' | 'SudoSetValidatorEpochLen' | 'SudoSetScalingLawPower' | 'SudoSetSynergyScalingLawPower' | 'SudoSetImmunityPeriod' | 'SudoSetMaxWeightLimit' | 'SudoSetMaxRegistrationsPerBlock' | 'SudoSetTotalIssuance' | 'BenchmarkEpochWithWeights' | 'BenchmarkEpochWithoutWeights' | 'BenchmarkDrainEmission';
  }

  /** @name PalletSudoError (112) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletSubtensorAxonInfo (117) */
  interface PalletSubtensorAxonInfo extends Struct {
    readonly block: u64;
    readonly version: u32;
    readonly ip: u128;
    readonly port: u16;
    readonly ipType: u8;
    readonly protocol: u8;
    readonly placeholder1: u8;
    readonly placeholder2: u8;
  }

  /** @name PalletSubtensorPrometheusInfo (118) */
  interface PalletSubtensorPrometheusInfo extends Struct {
    readonly block: u64;
    readonly version: u32;
    readonly ip: u128;
    readonly port: u16;
    readonly ipType: u8;
  }

  /** @name PalletSubtensorError (123) */
  interface PalletSubtensorError extends Enum {
    readonly isInvalidConnectionRequirement: boolean;
    readonly isNetworkDoesNotExist: boolean;
    readonly isNetworkExist: boolean;
    readonly isInvalidModality: boolean;
    readonly isInvalidIpType: boolean;
    readonly isInvalidIpAddress: boolean;
    readonly isNotRegistered: boolean;
    readonly isNonAssociatedColdKey: boolean;
    readonly isNotEnoughStaketoWithdraw: boolean;
    readonly isNotEnoughBalanceToStake: boolean;
    readonly isBalanceWithdrawalError: boolean;
    readonly isNoValidatorPermit: boolean;
    readonly isWeightVecNotEqualSize: boolean;
    readonly isDuplicateUids: boolean;
    readonly isInvalidUid: boolean;
    readonly isNotSettingEnoughWeights: boolean;
    readonly isTooManyRegistrationsThisBlock: boolean;
    readonly isAlreadyRegistered: boolean;
    readonly isInvalidWorkBlock: boolean;
    readonly isWorkRepeated: boolean;
    readonly isInvalidDifficulty: boolean;
    readonly isInvalidSeal: boolean;
    readonly isMaxAllowedUIdsNotAllowed: boolean;
    readonly isCouldNotConvertToBalance: boolean;
    readonly isStakeAlreadyAdded: boolean;
    readonly isMaxWeightExceeded: boolean;
    readonly isStorageValueOutOfRange: boolean;
    readonly isTempoHasNotSet: boolean;
    readonly isInvalidTempo: boolean;
    readonly isEmissionValuesDoesNotMatchNetworks: boolean;
    readonly isInvalidEmissionValues: boolean;
    readonly isDidNotPassConnectedNetworkRequirement: boolean;
    readonly isAlreadyDelegate: boolean;
    readonly isSettingWeightsTooFast: boolean;
    readonly isIncorrectNetworkVersionKey: boolean;
    readonly isServingRateLimitExceeded: boolean;
    readonly isBalanceSetError: boolean;
    readonly isMaxAllowedUidsExceeded: boolean;
    readonly isTooManyUids: boolean;
    readonly isTxRateLimitExceeded: boolean;
    readonly isRegistrationDisabled: boolean;
    readonly isTooManyRegistrationsThisInterval: boolean;
    readonly type: 'InvalidConnectionRequirement' | 'NetworkDoesNotExist' | 'NetworkExist' | 'InvalidModality' | 'InvalidIpType' | 'InvalidIpAddress' | 'NotRegistered' | 'NonAssociatedColdKey' | 'NotEnoughStaketoWithdraw' | 'NotEnoughBalanceToStake' | 'BalanceWithdrawalError' | 'NoValidatorPermit' | 'WeightVecNotEqualSize' | 'DuplicateUids' | 'InvalidUid' | 'NotSettingEnoughWeights' | 'TooManyRegistrationsThisBlock' | 'AlreadyRegistered' | 'InvalidWorkBlock' | 'WorkRepeated' | 'InvalidDifficulty' | 'InvalidSeal' | 'MaxAllowedUIdsNotAllowed' | 'CouldNotConvertToBalance' | 'StakeAlreadyAdded' | 'MaxWeightExceeded' | 'StorageValueOutOfRange' | 'TempoHasNotSet' | 'InvalidTempo' | 'EmissionValuesDoesNotMatchNetworks' | 'InvalidEmissionValues' | 'DidNotPassConnectedNetworkRequirement' | 'AlreadyDelegate' | 'SettingWeightsTooFast' | 'IncorrectNetworkVersionKey' | 'ServingRateLimitExceeded' | 'BalanceSetError' | 'MaxAllowedUidsExceeded' | 'TooManyUids' | 'TxRateLimitExceeded' | 'RegistrationDisabled' | 'TooManyRegistrationsThisInterval';
  }

  /** @name SpRuntimeMultiSignature (125) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (126) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (127) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (130) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (131) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (132) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (133) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (136) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (137) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (138) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u64> {}

  /** @name PalletSubtensorSubtensorSignedExtension (139) */
  type PalletSubtensorSubtensorSignedExtension = Null;

  /** @name NodeSubtensorRuntimeRuntime (140) */
  type NodeSubtensorRuntimeRuntime = Null;

} // declare module
