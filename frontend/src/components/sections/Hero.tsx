import { ArrowRightIcon, Loader } from "lucide-react";
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

import Card from "../ui/Card";
import Input from "../ui/Input";

const Hero = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) {
    return null;
  }

  const { formData, handleChange, sendTransaction, isLoading } = transactionContext;

  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const { addressTo, amount, keyword, message } = formData || {};
    
    if (!addressTo || !amount || !keyword || !message) return;
    
    sendTransaction();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center -mt-14 md:-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between md:p-20 pt-20 pb-12 px-4">
          <div className="space-y-6 flex flex-1 flex-col justify-start items-start">
            <h1 className="py-1 text-4xl sm:text-5xl text-white text-gradient font-bold leading-tight">
              Send Crypto <br /> to anyone, anywhere in the world.
            </h1>
            <p className="py-1 text-white font-light md:w-9/12 w-11/12 text-base leading-tight">
              Explore the crypto world. Buy and sell cryptocurrencies easily on
              Krypto.
            </p>
            <button
              onClick={handleGetStarted}
              className="py-2.5 px-3 lg:px-6 flex items-center bg-[#1B5FFE] hover:bg-[#0A3D91] rounded-xl text-white text-base font-bold hover:shadow-none cursor-pointer transition-all duration-300"
            >
              Get Started <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="space-y-6 flex flex-col flex-1 items-center justify-start w-full">
            <Card banknumber={1234567890} />

            <div className="py-4 w-full md:w-96 flex flex-col items-center justify-center">
              <Input
                placeholder="Address To"
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <div>
                  <Loader className="w-4 h-4 animate-spin" />
                </div>
              ) : (
                <button type="button" onClick={handleGetStarted} className="group w-full mt-2 border px-2 py-3 border-[#1B5FFE] hover:bg-[#1B5FFE] rounded-2xl cursor-pointer">
                  <span className="text-white text-base font-bold group-hover:translate-x-1 transition-all duration-300">
                    Send now
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
