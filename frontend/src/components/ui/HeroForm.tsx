import Input from "./Input";
import Card from "./Card";

import { Loader } from "lucide-react";
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

const HeroForm = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;
  
  const { connectedAccount, formData, handleChange, sendTransaction, isLoading } = transactionContext || {};

  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { addressTo, amount, message } = formData || {};

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <div className="space-y-6 flex flex-col flex-1 items-center justify-start w-full">
      <Card accountNumber={connectedAccount || ''} />

      <div className="py-4 w-full md:w-96 flex flex-col items-center justify-center">
        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

        <div className="h-[1px] w-full bg-gray-400 my-2" />

        {isLoading ? (
          <div>
            <Loader className="w-4 h-4 animate-spin" />
          </div>
        ) : (
          <button type="button" onClick={handleGetStarted} className="group w-full mt-2 border px-2 py-3 border-[#1B5FFE] hover:bg-[#1B5FFE] rounded-2xl cursor-pointer">
            <span className="text-white text-base font-bold group-hover:translate-x-1 transition-all duration-300">Send now</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroForm;
