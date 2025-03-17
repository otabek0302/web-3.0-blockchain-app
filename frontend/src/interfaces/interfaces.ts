export interface TransactionContextValue {
    connectWallet: () => Promise<void>;
    currentAccount?: string | null;
    setCurrentAccount?: React.Dispatch<React.SetStateAction<string | null>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    sendTransaction: () => Promise<void>;
    isLoading?: boolean;
    formData?: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export interface FormData {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
}

export interface CardProps {
    banknumber: number;
}

export interface InputProps {
    placeholder: string;
    name: string;
    type: string;
    value?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}