import { ArrowRightIcon } from "lucide-react";
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

import HeroForm from "../ui/HeroForm";
import HeroImage from "../ui/HeroImage";

const Hero = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { connectWallet, connectedAccount } = transactionContext;

  return (
    <section className="relative min-h-screen flex items-center justify-center -mt-14 md:-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between md:p-20 pt-20 pb-12 px-4">
          <div className="md:pt-32 space-y-6 flex flex-1 flex-col justify-start items-start">
            <h1 className="py-1 text-4xl sm:text-6xl text-white text-gradient font-bold leading-tight">
              Send Crypto <br /> to anyone, anywhere in the world.
            </h1>
            <p className="py-1 text-white font-light md:w-9/12 w-11/12 text-base leading-tight">Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
            {!connectedAccount && (
              <button onClick={connectWallet} className="py-2.5 px-3 lg:px-6 flex items-center bg-[#1B5FFE] hover:bg-[#0A3D91] rounded-xl text-white text-base font-bold hover:shadow-none cursor-pointer transition-all duration-300">
                Get Started <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
          {connectedAccount ? <HeroForm /> : <HeroImage />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
