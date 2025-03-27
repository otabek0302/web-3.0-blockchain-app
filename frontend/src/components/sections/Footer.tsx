import { Github, Instagram, Mail } from "lucide-react";
import { logo_without_bg } from "../../assets";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      
      <div className="flex justify-center items-center flex-col mt-5">
        <div className="flex justify-center items-center">
          <img src={logo_without_bg} alt="logo" className="w-32" />
        </div>
        <p className="text-white text-sm text-center">This website is for educational purposes only.</p>
        <p className="text-white text-sm text-center font-medium mt-2">otabekjon0302@gmail.com</p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="py-6 w-[90%] mx-auto flex items-center justify-between">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="text-gray-400 text-sm transition hover:opacity-75">
            Terms & Conditions
          </a>
          <a href="#" className="text-gray-400 text-sm transition hover:opacity-75">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 text-sm transition hover:opacity-75">
            Cookies
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">Mail</span>
            <Mail className="size-6 text-gray-400" />
          </a>

          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">Instagram</span>
            <Instagram className="size-6 text-gray-400" />
          </a>

          <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
            <span className="sr-only">GitHub</span>
            <Github className="size-6 text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
