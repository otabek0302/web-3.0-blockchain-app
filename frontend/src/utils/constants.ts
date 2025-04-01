import abi from "../constants/TransactionsABI.json";

// Check if the environment variables are set
if (!import.meta.env.VITE_SEPOLIA_CONTRACT_ADDRESS || !import.meta.env.VITE_BUILDBEAR_CONTRACT_ADDRESS) {
  throw new Error("Missing environment variables");
}

// 
if (abi === undefined) {
    throw new Error("Contract ABI is empty");
}

// Get the contract address from the environment variable
export const sepoliaContractAddress = import.meta.env.VITE_SEPOLIA_CONTRACT_ADDRESS;
export const buildbearContractAddress = import.meta.env.VITE_BUILDBEAR_CONTRACT_ADDRESS;

// Get the contract ABI from the JSON file
export const contractABI = abi.abi;