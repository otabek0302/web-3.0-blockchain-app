import React from 'react';
import { TransactionContextValue } from '../interfaces/interfaces';

export const TransactionContext = React.createContext<TransactionContextValue | undefined>(undefined);