import { Bitcoin, InfoIcon } from "lucide-react";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const Card = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { balance, connectedAccount } = transactionContext;

  return (
    <div className="p-4 flex justify-end items-start flex-col rounded-xl h-48 w-full sm:w-96 my-5 eth-card white-glassmorphism ">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <Bitcoin className="w-5 h-5 -rotate-[10deg]" color="#fff" />
          </div>
          <InfoIcon className="w-5 h-5" color="#fff" />
        </div>
        <div className="space-y-2">
          <div className="">
            <p className="text-white font-semibold text-lg mt-1">Account Number</p>
            <p className="text-white font-light text-sm mb-1 flex items-center justify-between gap-2">
              <span>{connectedAccount?.slice(0, 5)}...{connectedAccount?.slice(-5)}</span>
              <span>{parseFloat(balance!).toFixed(4)} ETH</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
