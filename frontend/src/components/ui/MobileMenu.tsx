import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, }: { isMobileMenuOpen: boolean; setIsMobileMenuOpen: (isOpen: boolean) => void; }) => {

  return (
    <div className="block md:hidden">
      {/* Toggle Button */}
      <button aria-label="Toggle mobile menu" className="p-2 text-white hover:text-gray-300 relative z-50 transition-colors duration-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black/50 to-black/70 shadow-2xl z-40" >
            <div className="p-6 space-y-6 w-full h-full flex flex-col justify-center items-center">
              <Link to="/" className="block text-white hover:text-[#FFD700] text-lg font-semibold transition-colors duration-300">
                Home
              </Link>
              <Link to="/services" className="block text-white hover:text-[#FFD700] text-lg font-semibold transition-colors duration-300">
                Services
              </Link>
              <Link to="/support" className="block text-white hover:text-[#FFD700] text-lg font-semibold transition-colors duration-300">
                Support
              </Link>
              <Link to="/login" className="block text-white hover:text-[#FFD700] text-lg font-semibold transition-colors duration-300">
                Login
              </Link>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default MobileMenu;