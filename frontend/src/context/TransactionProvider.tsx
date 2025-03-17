import React from "react";

import { useState } from "react";
import { TransactionContext } from "./TransactionContext";
import { FormData } from "../interfaces/interfaces";

export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  
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
  };

  return (
    <TransactionContext.Provider  value={{ currentAccount, formData, setFormData, handleChange, isLoading, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};