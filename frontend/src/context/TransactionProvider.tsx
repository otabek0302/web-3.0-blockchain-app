import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, sepoliaContractAddress } from "../utils/constants";
import { FormData } from "../interfaces/interfaces";
import { TransactionContext } from "./TransactionContext";

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>();
  const [error, setError] = useState<string | null>(null);
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

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

  // Check if the user has connected their wallet
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return undefined;

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        setConnectedAccount(accounts[0]);
        getBalance();
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
        method: "wallet_revokePermissions",
        params: [{ eth_accounts: {} }],
      });

      setConnectedAccount(null);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      return undefined;
    }
  };

  // Get the balance of the user's wallet
  const getBalance = async () => {
    try {
      if (!ethereum) return undefined;

      // Get the provider
      const provider =new ethers.BrowserProvider(ethereum)
      
      // Get the signer
      const signer = await provider.getSigner();

      // Get the balance
      const balance = await provider.getBalance(signer.getAddress());
      
      // Format the balance
      const eth = ethers.formatEther(balance)

      // Set the balance
      setBalance(eth);
    } catch (error) {
      console.error("Error getting balance:", error);
      return undefined;
    }
  }


  // Send a transaction
  const sendTransaction = async () => {
    try {
      setIsLoading(true);
      setSuccess(null);
      setError(null);

      if (!ethereum) {
        setError("Please connect your wallet to send a transaction");
        setIsLoading(false);
        return;
      }

      const { addressTo, amount, message } = formData;

      const transactionContract = await getEthereumContract();
      if (!transactionContract) {
        setError("Please connect to Sepolia Testnet");
        setIsLoading(false);
        return;
      }

      const parsedAmount = ethers.parseEther(amount.replace(",", "."));

      // 👇 Single contract call with ETH attached
      const tx = await transactionContract.addToBlockChain(addressTo, message, {
        value: parsedAmount,
      });

      setSuccess("Transaction submitted. Waiting for confirmation...");
      await tx.wait();
      setSuccess("Transaction confirmed!");

      setFormData({ addressTo: "", amount: "", message: "" });
      setIsLoading(false);

      const transactionCount = await transactionContract.getTransactionCount();
      console.log("Transaction count:", transactionCount.toString());
    } catch (error: unknown) {
      console.error("Error sending transaction:", error);
      if (error instanceof Error && "code" in error && error.code === "4001") {
        setError("Transaction rejected by user.");
      } else {
        setError("Transaction failed. Please try again.");
      }
      setIsLoading(false);
    }
  };

  // Check if the user has connected their wallet
  useEffect(() => {
    checkIfWalletIsConnected();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ethereum]);

  return <TransactionContext.Provider value={{ connectWallet, disconnectWallet, connectedAccount, formData, handleChange, sendTransaction, isLoading, error, success, setFormData, balance }}>{children}</TransactionContext.Provider>;
};

export { TransactionProvider as default };
