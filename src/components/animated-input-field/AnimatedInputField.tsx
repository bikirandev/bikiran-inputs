import { FC, useEffect, useRef, useState } from "react";
import styles from "./InputField.module.css";
import { cn } from "../../lib/utils/cn";
import { TInputChangeEvent } from "../../lib/types/InputType";

type TAnimateInputField = {
  label: string;
  type?: string;
  autoComplete?: string;
  name: string;
  formData: Record<string, any>;
  onChange: (ev: any) => void;
  onBlur?: (ev: any) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
};

// InputField component with TS types
const AnimatedInputField: FC<TAnimateInputField> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    label,
    type = "text",
    autoComplete = "off",
    name,
    formData,
    placeholder,
    onBlur,
    className = "",
    disabled = false,
    required = false,
    onChange,
    readOnly,
  } = props;

  const handleFocus = () => {
    if (!disabled && ref.current) {
      ref.current.focus();
      setFocused(true);
    }
  };

  const handleBlur = (ev: TInputChangeEvent) => {
    if (onBlur) {
      onBlur(ev);
    }
    if (ref.current) {
      setFocused(false);
    }
  };

  useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus();
    }
  }, [focused]);

  const inputValue = formData[name] ?? "";
  const isValue = inputValue !== "";

  return (
    <div className={cn(styles.container, "animate-input")}>
      <div className={cn(styles.inputWrapper, className)} onClick={handleFocus}>
        <label
          className={cn(
            styles.label,
            focused || isValue ? styles.labelFocused : "",
            isValue && !focused ? styles.labelHasValue : ""
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
          onChange={onChange}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={focused ? placeholder : ""}
          className={cn(
            styles.input,
            focused ? styles.inputFocused : "",
            isValue && !focused ? styles.inputHasValue : "",
            disabled ? styles.inputDisabled : ""
          )}
        />
      </div>
    </div>
  );
};

export default AnimatedInputField;
