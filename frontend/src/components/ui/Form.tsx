import Input from "./Input";
import Card from "./Card";

import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

const Form = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { formData, handleChange, sendTransaction, isLoading, error, success } = transactionContext || {};

  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { addressTo, amount, message } = formData || {};

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <div className="space-y-6 flex flex-col flex-1 items-center justify-start w-full">
      <Card />

      <div className="py-4 w-full md:w-96 flex flex-col items-center justify-center">
        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

        <div className="h-[1px] w-full bg-gray-400 my-2" />

        <div className="w-full">
          <button type="button" disabled={isLoading} onClick={handleGetStarted} className="group w-full mt-2 border px-2 py-3 border-[#1B5FFE] hover:bg-[#1B5FFE] rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-bounce">
            <span className="text-white text-base font-bold group-hover:translate-x-1 transition-all duration-300">Send now</span>
          </button>
          {error && <p className="mt-2 text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="mt-2 text-green-500 text-sm text-center">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Form;
