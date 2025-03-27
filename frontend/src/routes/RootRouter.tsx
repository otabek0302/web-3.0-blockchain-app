import { Route, Routes } from "react-router-dom";

import App from "../App";
import Layout from "../components/Layout";
import ServicesPage from "../pages/services";
import SupportPage from "../pages/support";
import TransferPage from "../pages/transfer";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><App /></Layout>} />
      <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/support" element={<Layout><SupportPage /></Layout>} />
      <Route path="/transfer" element={<Layout><TransferPage /></Layout>} />
    </Routes>
  );
};

export default Router;
