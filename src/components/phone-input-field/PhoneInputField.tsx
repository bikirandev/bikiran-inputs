import { FC, useEffect, useRef, useState } from "react";
import { TInputChangeEvent } from "../../lib/types/InputType";
import { cn } from "../../lib/utils/cn";
import style from "./PhoneInput.module.css";

type TPhoneInputField = {
  label: string;
  type?: string;
  autoComplete?: string;
  name: string;
  formData: Record<string, string>;
  onChange: (ev: TInputChangeEvent) => void;
  onBlur?: () => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  // hasCountry?: boolean;
};

// InputField component with TS types
const PhoneInputField: FC<TPhoneInputField> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    label,
    type = "text",
    autoComplete = "off",
    name,
    formData,
    onChange,
    onBlur,
    className = "",
    disabled = false,
    required = false,
    readOnly,
    // hasCountry,
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

  const handleOnChange = (ev: TInputChangeEvent) => {
    const value = ev.target.value.replace(/\D/g, ""); // Remove non-digit characters
    ev.target.value = value;
    onChange(ev);
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
    <div
      className={cn(
        "animate-input",
        style.container,
        focused || isValue ? style.containerFocus : "",
        isValue && !focused ? style.containerHasValue : ""
      )}
    >
      {/* TODO: if need to add country add here  */}
      {/* {hasCountry && (
        <div className="w-20 bg-red-300 h-full flex gap-1">
          <div>flag</div>
          <div>code</div>
        </div>
      )} */}
      <div className={cn(style.wrapper, className)} onClick={handleFocus}>
        <label
          className={cn(
            style.label,
            focused || isValue ? style.labelFocused : "",
            isValue && !focused ? style.labelHasValue : ""
          )}
        >
          {label || "Type something"}
          {required && <span className="text-error opacity-75">*</span>}
        </label>
        <input
          ref={ref}
          type={type}
          required={required}
          name={name}
          value={inputValue}
          onChange={handleOnChange}
          onBlur={onBlur || handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(style.input)}
        />
      </div>
    </div>
  );
};
export default PhoneInputField;
