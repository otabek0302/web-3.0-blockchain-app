import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

if (!process.env.PRIVATE_KEY || !process.env.BUILDBEAR_URL || !process.env.BUILDBEAR_API_KEY) {
  throw new Error("Missing environment variables");
}

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.BUILDBEAR_URL,
      gas: parseInt(process.env.GAS_LIMIT || "auto"),
      gasPrice: parseInt(process.env.GAS_PRICE || "auto"),
      accounts: [process.env.PRIVATE_KEY],
    },
    worryingRhino: {
      url: process.env.BUILDBEAR_URL,
      chainId: parseInt(process.env.CHAIN_ID || "25026"),
      accounts: [process.env.PRIVATE_KEY],
      gas: parseInt(process.env.GAS_LIMIT || "auto"),
      gasPrice: parseInt(process.env.GAS_PRICE || "auto"),
    }
  },
};

export default config;