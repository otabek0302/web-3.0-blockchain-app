import { createContext, useState } from "react";
import { ethers } from "ethers";
import { contractABI, sepoliaContractAddress } from "../utils/constants";
import { FormData, TransactionContextValue } from "../interfaces/interfaces";

const TransactionContext = createContext<TransactionContextValue | null>(null);

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);

  const { ethereum } = window as unknown as {
    ethereum: ethers.Eip1193Provider;
  };

  const [formData, setFormData] = useState<FormData>({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: e.target.value,
    }));
  };

  const sendTransaction = async () => {
    console.log(formData);
    setIsLoading(true);
    setCurrentAccount(null);
  };

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

  return <TransactionContext.Provider value={{ getEthereumContract, currentAccount, formData, isLoading, setFormData, handleChange, sendTransaction }}>{children}</TransactionContext.Provider>;
};

export default TransactionContext;
