export interface TransactionContextValue {
    connectWallet?: () => Promise<void>;
    disconnectWallet?: () => Promise<void>;
    connectedAccount?: string | null;
    setConnectedAccount?: React.Dispatch<React.SetStateAction<string | null>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    sendTransaction: () => Promise<void>;
    isLoading?: boolean;
    formData?: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    error?: string | null;
    success?: string | null;
    balance?: string | null;
}

export interface FormData {
    addressTo: string;
    amount: string;
    message: string;
}

export interface InputProps {
    placeholder: string;
    name: string;
    type: string;
    value?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}