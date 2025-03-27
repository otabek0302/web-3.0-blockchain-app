import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, sepoliaContractAddress } from "../utils/constants";
import { FormData } from "../interfaces/interfaces";
import { TransactionContext } from "./TransactionContext";

// Get the Ethereum provider
const { ethereum } = window as unknown as {
  ethereum: ethers.Eip1193Provider & {
    on: (eventName: string, handler: (error?: Error) => void) => void;
    removeListener: (eventName: string, handler: (error?: Error) => void) => void;
  };
};

// Get the Ethereum contract
const getEthereumContract = async () => {
  try {
    if (!ethereum) return undefined;

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();

    const transactionContract = new ethers.Contract(sepoliaContractAddress, contractABI, signer);

    return transactionContract;
  } catch (error) {
    console.error("Error getting contract:", error);
    return undefined;
  }
};

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    addressTo: "",
    amount: "",
    message: "",
  });

  // Handle form data changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: e.target.value,
    }));
  };

  // Check if the user has connected their wallet
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return undefined;

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error("Error checking if wallet is connected:", error);
      return undefined;
    }
  };

  // Connect the user's wallet
  const connectWallet = async () => {
    try {
      if (!ethereum) return undefined;

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      if (accounts.length > 0) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      return undefined;
    }
  };

  // Disconnect the user's wallet
  const disconnectWallet = async () => {
    try {
      if (!ethereum) return undefined;
      
      await ethereum.request({
        method: 'wallet_revokePermissions',
        params: [{ eth_accounts: {} }]
      });
      
      setConnectedAccount(null);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      return undefined;
    }
  };

  // Send a transaction
  const sendTransaction = async () => {
    try {
      if (!ethereum) return undefined;

      // Get the form data
      const { addressTo, amount, message } = formData;

      // Get the Ethereum contract
      const transactionContract = await getEthereumContract();

      // Parse the amount
      const parsedAmount = ethers.parseEther(amount);

      // Send the transaction
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x5208", // 21000
            value: parsedAmount,
          },
        ],
      });

      // Add the transaction to the blockchain
      const transactionHash = await transactionContract?.addToBlockChain(addressTo, parsedAmount, message);

      // Update the form data
      setFormData({ addressTo: "", amount: "", message: "" });

      // Set the loading state to false
      await transactionHash.wait();
      setIsLoading(false);
      console.log("Transaction sent successfully");

      const transactionCount = await transactionContract?.getTransactionCount();
      console.log(transactionCount);
    } catch (error) {
      console.error("Error sending transaction:", error);
      return undefined;
    }
  };

  // Check if the user has connected their wallet
  useEffect(() => {
      checkIfWalletIsConnected();
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ethereum]);

  return <TransactionContext.Provider value={{ connectWallet, disconnectWallet, connectedAccount, formData, handleChange, sendTransaction, isLoading, setFormData }}>{children}</TransactionContext.Provider>;
};

export { TransactionProvider as default };
