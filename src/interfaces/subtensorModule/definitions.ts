/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        Balance: "u64",
        NeuronMetadata: {
                version: "u32",
                ip: "u128", 
                port: "u16", 
                ipType: "u8", 
                uid: "u32", 
                modality: "u8", 
                hotkey: "AccountId", 
                coldkey: "AccountId", 
                active: "u32",
                lastUpdate: "u64",
                priority: "u64",
                stake: "u64",
                rank: "u64",
                trust: "u64",
                consensus: "u64",
                incentive: "u64",
                dividends: "u64",
                emission: "u64",
                bonds: "Vec<(u32, u64)>",
                weights: "Vec<(u32, u32)>"
            
        }
    }
  };
  