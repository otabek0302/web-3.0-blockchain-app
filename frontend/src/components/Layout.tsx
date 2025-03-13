import { ReactNode } from "react";

import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
