import { Link } from "react-router-dom";
import { logo_without_bg } from "../../assets";
import { useContext, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";

import MobileMenu from "../ui/MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;
  
  const { disconnectWallet, connectWallet, connectedAccount } = transactionContext;

  return (
    <header className="header__section sticky top-0 z-10 backdrop-blur-sm backdrop-filter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          
          <Link to="/">
            <div className="relative w-14 md:w-24 h-14 md:h-24 overflow-hidden">
              <img src={logo_without_bg} alt="Logo" className="object-cover object-center" />
            </div>
          </Link>
          
          <div className="hidden md:flex gap-2.5 items-center">
            <ul className="flex gap-1.5">
              <li className="text-white hover:text-gray-300 text-sm md:text-base font-semibold leading-tight py-2.5 lg:py-3.5 px-3 lg:px-5 cursor-pointer transition-all duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-gray-300 text-sm md:text-base font-semibold leading-tight py-2.5 lg:py-3.5 px-3 lg:px-5 cursor-pointer transition-all duration-300">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-white hover:text-gray-300 text-sm md:text-base font-semibold leading-tight py-2.5 lg:py-3.5 px-3 lg:px-5 cursor-pointer transition-all duration-300">
                <Link to="/support">Support</Link>
              </li>
            </ul>
            <button className="py-2.5 px-3 lg:px-6 bg-[#1B5FFE] hover:bg-[#0A3D91] rounded-xl text-white text-base font-bold hover:shadow-none cursor-pointer transition-all duration-300">
              <span onClick={connectedAccount ? disconnectWallet : connectWallet}>{connectedAccount ? "Disconnect Wallet" : "Connect Wallet"}</span>
            </button>
          </div>

          {/* Menu for Phone */}
          <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
