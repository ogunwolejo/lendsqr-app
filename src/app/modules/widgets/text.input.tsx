import { useState } from "react";
import "./styles/widget.scss";

export const TextInput: React.FC<{
  value: string;
  setValue: Function;
  placeholder: string;
  className?: string;
}> = ({ value, setValue, placeholder, className }) => {
  return (
    <div
      className={`col-12  input__wrapper d-flex flex-row justify-content-start align-items-center`}
    >
      <input
        type="email"
        className={`${className} outline-0 bg-white`}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </div>
  );
};

export const PasswordTextInput: React.FC<{
  value: string;
  setValue: Function;
  placeholder: string;
  className?: string;
}> = ({ value, setValue, placeholder, className }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div
      className={`col-12  input__wrapper d-flex flex-row justify-content-start align-items-center`}
    >
      <input
        type={showPassword ? "text" : "password"}
        className={`${className} outline-0 bg-white`}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
      <div className="text-btn-wrapper">
        <button className="text-btn" onClick={() => setShowPassword(!showPassword)}>Show</button>
      </div>
    </div>
  );
};
