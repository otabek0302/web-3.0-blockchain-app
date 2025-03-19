import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/nj1eIMKkzjCp7YRIOpvDEKLbJMj9jR6C",
      accounts: ["30ec907561938d041ac8447b870b425d84f2fce140b6d81bdb57e268b22eac9f"],
    },
  },
};

export default config;