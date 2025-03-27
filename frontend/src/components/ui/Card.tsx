import { Bitcoin, InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { CardProps } from "../../interfaces/interfaces";


const Card = ({ accountNumber }: CardProps) => {
  const [balance, setBalance] = useState<string>("");

  useEffect(() => {
    if (accountNumber) {
      setBalance(accountNumber);
    }
  }, [accountNumber]);

  return (
    <div className="p-4 flex justify-end items-start flex-col rounded-xl h-48 w-full sm:w-96 my-5 eth-card white-glassmorphism ">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <Bitcoin className="w-5 h-5 -rotate-[10deg]" color="#fff" />
          </div>
          <InfoIcon className="w-5 h-5" color="#fff" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white font-light text-sm mb-1">Your balance</p>
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
          <div>
            <p className="text-white font-light text-sm mb-1">{balance.slice(0, 5)}...{balance.slice(-5)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
