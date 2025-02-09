import { FC, useEffect, useRef, useState } from "react";
import { TAnimateInputField, TInputChangeEvent, TState } from "./PhoneType";
import iconTick from "./icons/icon-tick.svg";
import iconAlert from "./icons/icon-alert.svg";

import Image from "next/image";
import { evaluate } from "./math";
import { Loader2 } from "lucide-react";
import { cn } from "./cn";

const ValidationCheck: FC<{
  show: boolean | undefined;
  loading?: boolean | undefined;
  valid?: boolean | undefined;
  className?: string;
}> = ({ show, loading, valid, className }) => {
  if (!show) return null;
  return (
    <div className={cn("absolute", className)}>
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        loading !== undefined && (
          <Image
            src={valid ? iconTick : iconAlert}
            alt="valid-check"
            width={16}
            height={16}
          />
        )
      )}
    </div>
  );
};
const PasswordEyeIcon: FC<{
  show: boolean;
  showPassword: boolean;
  setShowPassword: TState<boolean>;
}> = ({ show, showPassword, setShowPassword }) => {
  if (!show) return null;
  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={() => setShowPassword((st) => !st)}
      className="absolute h-4 w-4 top-1/2 right-2 transform -translate-y-1/2 text-primary-700 select-none outline-none focus:outline-none opacity-70"
    >
      <Image
        src={
          showPassword
            ? "https://files.bikiran.com/assets/images/icon/icon-pass-show.svg"
            : "https://files.bikiran.com/assets/images/icon/icon-pass-hide.svg"
        }
        alt="eye"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </button>
  );
};
// InputField component with TS types
const AnimateInputField: FC<TAnimateInputField> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    label,
    type = "text",
    placeholder = "",
    autoComplete = "off",
    calculate = false,
    name,
    formData,
    onChange,
    onBlur,
    className = "",
    disabled = false,
    passwordType,
    loading,
    valid,
    show,
    required = false,
    unit,
    currency,
    readOnly,
  } = props;

  const handleFocus = () => {
    if (!disabled && ref.current) {
      ref.current.focus();
      setFocused(true);
    }
  };

  const handleBlur = () => {
    if (ref.current) {
      setFocused(false);
    }
  };

  const handleChange = (ev: TInputChangeEvent) => {
    if (!calculate) {
      return onChange(ev);
    }

    const calculatedValue = evaluate(ev.target.value);
    onChange({
      target: {
        name: ev.target.name,
        value: calculatedValue,
      },
    });
  };

  // Focus the input when `focused` is set to true
  useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus();
    }
  }, [focused]);

  const inputValue = formData[name] ?? "";
  const isValue = inputValue !== "";

  return (
    <div className="animate-input w-full">
      <div
        className={cn("w-full h-[45px] relative overflow-visible", className)}
        onClick={handleFocus}
      >
        <label
          className={cn(
            "text-sm font-medium text-primary-300 leading-5 bg-white absolute top-1/2 left-2.5 -translate-y-1/2 transition-all duration-300 focus:bg-white",
            {
              "-top-2 left-4 translate-x-0 translate-y-0":
                (focused || isValue) && !disabled,
              "text-secondary-700": focused,
            }
          )}
        >
          {label || "Type something"}
          {required && <span className="text-error opacity-75">*</span>}
        </label>
        <input
          ref={ref}
          type={showPassword ? "text" : type}
          required={required}
          name={name}
          value={inputValue}
          onChange={handleChange}
          onBlur={onBlur || handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            "block w-full h-full px-2.5 caret-white border rounded-[8px] text-base outline-none disabled:grayscale transition-colors",
            {
              "border-secondary-700 caret-current": focused,
              "pr-10": type === "password",
              "pr-12": unit,
              "pl-11": passwordType && passwordType.length > 0,
            }
          )}
        />

        {/* Password visibility toggle */}
        <PasswordEyeIcon
          show={type === "password" && (focused || isValue) && !disabled}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        {/* Loading and validation icons */}
        <ValidationCheck
          show={show}
          loading={loading}
          valid={valid}
          className="top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2"
        />

        {/* Currency and unit */}
        {currency && (focused || isValue) && !disabled && (
          <div className="absolute top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2">
            <div className="text-[10px] text-primary-700">
              {unit && currency ? `${currency}/${unit}` : unit || currency}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimateInputField;
