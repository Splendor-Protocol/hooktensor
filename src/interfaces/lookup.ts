// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u64',
    reserved: 'u64',
    miscFrozen: 'u64',
    feeFrozen: 'u64'
  },
  /**
   * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup8: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup12: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup17: frame_system::EventRecord<node_subtensor_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup19: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup20: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup21: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup22: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup23: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup24: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup25: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup26: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup27: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup28: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup31: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup32: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup33: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u64',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u64',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u64',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u64',
        reserved: 'u64',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u64',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u64',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u64',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u64',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u64',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u64'
      }
    }
  },
  /**
   * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup35: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u64',
        tip: 'u64'
      }
    }
  },
  /**
   * Lookup36: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup40: pallet_subtensor::pallet::Event<T>
   **/
  PalletSubtensorEvent: {
    _enum: {
      NetworkAdded: '(u16,u16)',
      NetworkRemoved: 'u16',
      StakeAdded: '(AccountId32,u64)',
      StakeRemoved: '(AccountId32,u64)',
      WeightsSet: '(u16,u16)',
      NeuronRegistered: '(u16,u16,AccountId32)',
      BulkNeuronsRegistered: '(u16,u16)',
      BulkBalancesSet: '(u16,u16)',
      MaxAllowedUidsSet: '(u16,u16)',
      MaxWeightLimitSet: '(u16,u16)',
      DifficultySet: '(u16,u64)',
      AdjustmentIntervalSet: '(u16,u16)',
      RegistrationPerIntervalSet: '(u16,u16)',
      MaxRegistrationsPerBlockSet: '(u16,u16)',
      ActivityCutoffSet: '(u16,u16)',
      RhoSet: '(u16,u16)',
      KappaSet: '(u16,u16)',
      MinAllowedWeightSet: '(u16,u16)',
      ValidatorBatchSizeSet: '(u16,u16)',
      ValidatorSequenceLengthSet: '(u16,u16)',
      ValidatorEpochPerResetSet: '(u16,u16)',
      ValidatorExcludeQuantileSet: '(u16,u16)',
      ValidatorEpochLengthSet: '(u16,u16)',
      ValidatorLogitsDivergenceSet: '(u16,u16)',
      ValidatorPruneLenSet: '(u16,u64)',
      ScalingLawPowerSet: '(u16,u16)',
      SynergyScalingLawPowerSet: '(u16,u16)',
      WeightsSetRateLimitSet: '(u16,u64)',
      ImmunityPeriodSet: '(u16,u16)',
      BondsMovingAverageSet: '(u16,u64)',
      MaxAllowedValidatorsSet: '(u16,u16)',
      AxonServed: '(u16,AccountId32)',
      PrometheusServed: '(u16,AccountId32)',
      EmissionValuesSet: 'Null',
      NetworkConnectionAdded: '(u16,u16,u16)',
      NetworkConnectionRemoved: '(u16,u16)',
      DelegateAdded: '(AccountId32,AccountId32,u16)',
      DefaultTakeSet: 'u16',
      WeightsVersionKeySet: '(u16,u64)',
      MinDifficultySet: '(u16,u64)',
      MaxDifficultySet: '(u16,u64)',
      ServingRateLimitSet: '(u16,u64)',
      BurnSet: '(u16,u64)',
      MaxBurnSet: '(u16,u64)',
      MinBurnSet: '(u16,u64)',
      TxRateLimitSet: 'u64'
    }
  },
  /**
   * Lookup42: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup46: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup50: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup54: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup55: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup56: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup58: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup59: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup60: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup61: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup66: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup68: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup70: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup71: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup74: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup75: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup78: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup79: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup80: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup81: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup82: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup83: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup84: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup87: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup88: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup90: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup91: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup93: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u64',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup94: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup97: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u64'
  },
  /**
   * Lookup99: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u64>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u64>',
        newReserved: 'Compact<u64>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u64>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u64>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u64'
      }
    }
  },
  /**
   * Lookup103: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup106: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup107: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup109: pallet_subtensor::pallet::Call<T>
   **/
  PalletSubtensorCall: {
    _enum: {
      set_weights: {
        netuid: 'u16',
        dests: 'Vec<u16>',
        weights: 'Vec<u16>',
        versionKey: 'u64',
      },
      become_delegate: {
        hotkey: 'AccountId32',
      },
      add_stake: {
        hotkey: 'AccountId32',
        amountStaked: 'u64',
      },
      remove_stake: {
        hotkey: 'AccountId32',
        amountUnstaked: 'u64',
      },
      serve_axon: {
        netuid: 'u16',
        version: 'u32',
        ip: 'u128',
        port: 'u16',
        ipType: 'u8',
        protocol: 'u8',
        placeholder1: 'u8',
        placeholder2: 'u8',
      },
      serve_prometheus: {
        netuid: 'u16',
        version: 'u32',
        ip: 'u128',
        port: 'u16',
        ipType: 'u8',
      },
      register: {
        netuid: 'u16',
        blockNumber: 'u64',
        nonce: 'u64',
        work: 'Bytes',
        hotkey: 'AccountId32',
        coldkey: 'AccountId32',
      },
      burned_register: {
        netuid: 'u16',
        hotkey: 'AccountId32',
      },
      sudo_register: {
        netuid: 'u16',
        hotkey: 'AccountId32',
        coldkey: 'AccountId32',
        stake: 'u64',
        balance: 'u64',
      },
      sudo_add_network: {
        netuid: 'u16',
        tempo: 'u16',
        modality: 'u16',
      },
      sudo_remove_network: {
        netuid: 'u16',
      },
      sudo_set_emission_values: {
        netuids: 'Vec<u16>',
        emission: 'Vec<u64>',
      },
      sudo_add_network_connection_requirement: {
        netuidA: 'u16',
        netuidB: 'u16',
        requirement: 'u16',
      },
      sudo_remove_network_connection_requirement: {
        netuidA: 'u16',
        netuidB: 'u16',
      },
      sudo_set_default_take: {
        defaultTake: 'u16',
      },
      sudo_set_serving_rate_limit: {
        netuid: 'u16',
        servingRateLimit: 'u64',
      },
      sudo_set_tx_rate_limit: {
        txRateLimit: 'u64',
      },
      sudo_set_max_burn: {
        netuid: 'u16',
        maxBurn: 'u64',
      },
      sudo_set_min_burn: {
        netuid: 'u16',
        minBurn: 'u64',
      },
      sudo_set_burn: {
        netuid: 'u16',
        burn: 'u64',
      },
      sudo_set_max_difficulty: {
        netuid: 'u16',
        maxDifficulty: 'u64',
      },
      sudo_set_min_difficulty: {
        netuid: 'u16',
        minDifficulty: 'u64',
      },
      sudo_set_weights_set_rate_limit: {
        netuid: 'u16',
        weightsSetRateLimit: 'u64',
      },
      sudo_set_weights_version_key: {
        netuid: 'u16',
        weightsVersionKey: 'u64',
      },
      sudo_set_bonds_moving_average: {
        netuid: 'u16',
        bondsMovingAverage: 'u64',
      },
      sudo_set_max_allowed_validators: {
        netuid: 'u16',
        maxAllowedValidators: 'u16',
      },
      sudo_set_difficulty: {
        netuid: 'u16',
        difficulty: 'u64',
      },
      sudo_set_adjustment_interval: {
        netuid: 'u16',
        adjustmentInterval: 'u16',
      },
      sudo_set_target_registrations_per_interval: {
        netuid: 'u16',
        targetRegistrationsPerInterval: 'u16',
      },
      sudo_set_activity_cutoff: {
        netuid: 'u16',
        activityCutoff: 'u16',
      },
      sudo_set_rho: {
        netuid: 'u16',
        rho: 'u16',
      },
      sudo_set_kappa: {
        netuid: 'u16',
        kappa: 'u16',
      },
      sudo_set_max_allowed_uids: {
        netuid: 'u16',
        maxAllowedUids: 'u16',
      },
      sudo_set_min_allowed_weights: {
        netuid: 'u16',
        minAllowedWeights: 'u16',
      },
      sudo_set_validator_batch_size: {
        netuid: 'u16',
        validatorBatchSize: 'u16',
      },
      sudo_set_validator_sequence_length: {
        netuid: 'u16',
        validatorSequenceLength: 'u16',
      },
      sudo_set_validator_epochs_per_reset: {
        netuid: 'u16',
        validatorEpochsPerReset: 'u16',
      },
      sudo_set_validator_exclude_quantile: {
        netuid: 'u16',
        validatorExcludeQuantile: 'u16',
      },
      sudo_set_validator_prune_len: {
        netuid: 'u16',
        validatorPruneLen: 'u64',
      },
      sudo_set_validator_logits_divergence: {
        netuid: 'u16',
        validatorLogitsDivergence: 'u16',
      },
      sudo_set_validator_epoch_len: {
        netuid: 'u16',
        validatorEpochLength: 'u16',
      },
      sudo_set_scaling_law_power: {
        netuid: 'u16',
        scalingLawPower: 'u16',
      },
      sudo_set_synergy_scaling_law_power: {
        netuid: 'u16',
        synergyScalingLawPower: 'u16',
      },
      sudo_set_immunity_period: {
        netuid: 'u16',
        immunityPeriod: 'u16',
      },
      sudo_set_max_weight_limit: {
        netuid: 'u16',
        maxWeightLimit: 'u16',
      },
      sudo_set_max_registrations_per_block: {
        netuid: 'u16',
        maxRegistrationsPerBlock: 'u16',
      },
      sudo_set_total_issuance: {
        totalIssuance: 'u64',
      },
      benchmark_epoch_with_weights: 'Null',
      benchmark_epoch_without_weights: 'Null',
      benchmark_drain_emission: 'Null'
    }
  },
  /**
   * Lookup112: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup117: pallet_subtensor::pallet::AxonInfo
   **/
  PalletSubtensorAxonInfo: {
    block: 'u64',
    version: 'u32',
    ip: 'u128',
    port: 'u16',
    ipType: 'u8',
    protocol: 'u8',
    placeholder1: 'u8',
    placeholder2: 'u8'
  },
  /**
   * Lookup118: pallet_subtensor::pallet::PrometheusInfo
   **/
  PalletSubtensorPrometheusInfo: {
    block: 'u64',
    version: 'u32',
    ip: 'u128',
    port: 'u16',
    ipType: 'u8'
  },
  /**
   * Lookup123: pallet_subtensor::pallet::Error<T>
   **/
  PalletSubtensorError: {
    _enum: ['InvalidConnectionRequirement', 'NetworkDoesNotExist', 'NetworkExist', 'InvalidModality', 'InvalidIpType', 'InvalidIpAddress', 'NotRegistered', 'NonAssociatedColdKey', 'NotEnoughStaketoWithdraw', 'NotEnoughBalanceToStake', 'BalanceWithdrawalError', 'NoValidatorPermit', 'WeightVecNotEqualSize', 'DuplicateUids', 'InvalidUid', 'NotSettingEnoughWeights', 'TooManyRegistrationsThisBlock', 'AlreadyRegistered', 'InvalidWorkBlock', 'WorkRepeated', 'InvalidDifficulty', 'InvalidSeal', 'MaxAllowedUIdsNotAllowed', 'CouldNotConvertToBalance', 'StakeAlreadyAdded', 'MaxWeightExceeded', 'StorageValueOutOfRange', 'TempoHasNotSet', 'InvalidTempo', 'EmissionValuesDoesNotMatchNetworks', 'InvalidEmissionValues', 'DidNotPassConnectedNetworkRequirement', 'AlreadyDelegate', 'SettingWeightsTooFast', 'IncorrectNetworkVersionKey', 'ServingRateLimitExceeded', 'BalanceSetError', 'MaxAllowedUidsExceeded', 'TooManyUids', 'TxRateLimitExceeded', 'RegistrationDisabled', 'TooManyRegistrationsThisInterval']
  },
  /**
   * Lookup125: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup126: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup127: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup130: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup131: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup132: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup133: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup136: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup137: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup138: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u64>',
  /**
   * Lookup139: pallet_subtensor::SubtensorSignedExtension<node_subtensor_runtime::Runtime>
   **/
  PalletSubtensorSubtensorSignedExtension: 'Null',
  /**
   * Lookup140: node_subtensor_runtime::Runtime
   **/
  NodeSubtensorRuntimeRuntime: 'Null'
};
