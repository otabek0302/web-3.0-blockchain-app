import { createContext } from "react";
import { TransactionContextValue } from "../interfaces/interfaces";

export const TransactionContext = createContext<TransactionContextValue | null>(null);