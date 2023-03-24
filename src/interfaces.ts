import { AccountId, Balance, Hash, Index, RefCount } from "@polkadot/types/interfaces"

export interface AxonInfo {
    block: number, // --- Axon serving block.
    version: number, // --- Axon version
    ip: string, // --- Axon u128 encoded ip address of type v6 or v4. serialized to string.
    port: number, // --- Axon u16 encoded port.
    ip_type: number, // --- Axon ip type, 4 for ipv4 and 6 for ipv6.
    protocol: number, // --- Axon protocol. TCP, UDP, other.
    placeholder1: number, // --- Axon proto placeholder 1.
    placeholder2: number // --- Axon proto placeholder 1.
  }
  
  export interface PrometheusInfo {
    block: number, // --- Prometheus serving block.
    version: number, // --- Prometheus version.
    ip: string, // --- Prometheus u128 encoded ip address of type v6 or v4. serialized to string.
    port: number, // --- Prometheus u16 encoded port.
    ip_type: number, // --- Prometheus ip type, 4 for ipv4 and 6 for ipv6.
  }
  
  export interface SubnetInfo {
    netuid: number,
    rho: number,
    kappa: number,
    difficulty: number,
    immunity_period: number,
    validator_batch_size: number,
    validator_sequence_length: number,
    validator_epochs_per_reset: number,
    validator_epoch_length: number,
    max_allowed_validators: number,
    min_allowed_weights: number,
    max_weights_limit: number,
    scaling_law_power: number,
    synergy_scaling_law_power: number,
    subnetwork_n: number,
    max_allowed_uids: number,
    blocks_since_last_step: number,
    tempo: number,
    network_modality: number,
    network_connect: Array<number>,
    emission_values: number
  }
  
  export interface DelegateInfoRaw {
    delegate_ss58: AccountId,
    take: number,
    nominators: Array<[AccountId, number]>,
    owner_ss58: AccountId
  }
  
  export interface DelegateInfo {
    delegate_ss58: string,
    take: number,
    nominators: Array<[string, number]>,
    owner_ss58: string,
    total_stake: number,
  }
  
  export interface NeuronInfo {
    hotkey: AccountId
    coldkey: AccountId
    uid: number
    netuid: number
    active: Boolean
    axon_info: AxonInfo
    prometheus_info: PrometheusInfo
    stake: Array<[AccountId, number]> // map of coldkey to stake on this neuron/hotkey (includes delegations)
    rank: number
    emission: number
    incentive: number
    consensus: number
    weight_consensus: number
    trust: number
    validator_trust: number
    dividends: number
    last_update: number
    validator_permit: Boolean
    weights: Array<[number, number]> // map of uid to weight
    bonds: Array<[number, number]> // map of uid to bond
    pruning_score: number
  }
  
  
  export interface NeuronInfoLite {
    hotkey: AccountId
    coldkey: AccountId
    uid: number
    netuid: number
    active: Boolean
    axon_info: AxonInfo
    prometheus_info: PrometheusInfo
    stake: Array<[AccountId, number]> // map of coldkey to stake on this neuron/hotkey (includes delegations)
    rank: number
    emission: number
    incentive: number
    consensus: number
    weight_consensus: number
    trust: number
    validator_trust: number
    dividends: number
    last_update: number
    validator_permit: Boolean
    pruning_score: number
  }