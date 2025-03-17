import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionProvider.tsx";

import "./index.css";

import RootRouter from "./routes/RootRouter.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TransactionProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </TransactionProvider>
  </StrictMode>
);
