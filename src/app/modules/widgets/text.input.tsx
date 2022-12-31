import "./styles/widget.scss";

const ACTIONS = {
  EMAIL_ENTRY: "EMAIL_ENTRY",
  PASSWORD_ENTRY: "PASSWORD_ENTRY",
  TOOGLE_SHOWING_PASSWORD: "TOOGLE_SHOWING_PASSWORD",
};

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
        onChange={(e: any) =>
          setValue({ type: ACTIONS.EMAIL_ENTRY, payload: e.target.value })
        }
      />
    </div>
  );
};

export const PasswordTextInput: React.FC<{
  value: string;
  setValue: Function;
  placeholder: string;
  showPassword: boolean;
  setShowPassword: Function;
  className?: string;
}> = ({
  value,
  setValue,
  placeholder,
  showPassword,
  setShowPassword,
  className,
}) => {
  return (
    <div
      className={`col-12  input__wrapper d-flex flex-row justify-content-start align-items-center`}
    >
      <input
        type={showPassword ? "text" : "password"}
        className={`${className} outline-0 bg-white`}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) =>
          setValue({ type: ACTIONS.PASSWORD_ENTRY, payload: e.target.value })
        }
      />
      <div className="text-btn-wrapper">
        <button
          type="button"
          className="text-btn"
          onClick={() =>
            setShowPassword({
              type: ACTIONS.TOOGLE_SHOWING_PASSWORD,
              payload: !showPassword,
            })
          }
        >
          Show
        </button>
      </div>
    </div>
  );
};
