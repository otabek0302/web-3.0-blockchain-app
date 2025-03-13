import { Route, Routes } from "react-router-dom";

import App from "../App";
import Admin from "../pages/admin";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><App /></Layout>} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;
