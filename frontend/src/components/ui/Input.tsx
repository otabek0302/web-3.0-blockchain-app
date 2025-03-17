import { InputProps } from "../../interfaces/interfaces";

const Input = ({ placeholder, name, type, value, handleChange }: InputProps) => (
  <input
    placeholder={placeholder}
    type={type}
    step={type === "number" ? "0.0001" : undefined}
    value={value}
    onChange={(e) => handleChange?.(e, name)}
    className="my-2 w-full rounded p-4 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

export default Input;
