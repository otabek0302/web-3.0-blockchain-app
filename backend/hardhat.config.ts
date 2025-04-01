import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "dotenv/config";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

const parseGas = (val?: string) => (val && !isNaN(parseInt(val)) ? parseInt(val) : undefined);

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: requireEnv("SEPOLIA_URL"),
      accounts: [requireEnv("PRIVATE_KEY")],
      gas: parseGas(requireEnv("SEPOLIA_GAS_LIMIT")),
      gasPrice: parseGas(requireEnv("SEPOLIA_GAS_PRICE")),
    },
    worryingRhino: {
      url: requireEnv("BUILDBEAR_URL"),
      chainId: parseInt(requireEnv("CHAIN_ID")),
      accounts: [requireEnv("PRIVATE_KEY")],
      gas: parseGas(requireEnv("BUILDBEAR_GAS_LIMIT")),
      gasPrice: parseGas(requireEnv("BUILDBEAR_GAS_PRICE")),
    },
  },
};

export default config;