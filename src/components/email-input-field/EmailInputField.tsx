import { FC, useEffect, useRef, useState } from "react";
import {
  TAnimateInputField,
  TInputChangeEvent,
} from "../../lib/types/InputType";
import { cn } from "../../lib/utils/cn";

import style from "../../style/global.module.css";

// InputField component with TS types
const EmailInputField: FC<TAnimateInputField> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    label,
    type = "text",
    autoComplete = "off",
    name,
    formData,
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

  const handleBlur = () => {
    if (ref.current) {
      setFocused(false);
    }
  };
  const handleChange = (ev: TInputChangeEvent) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (ref.current) {
      ref.current.value = ref.current.value.trim();
      if (!emailRegex.test(ref.current.value)) {
        ref.current.setCustomValidity("Please enter a valid email address.");
      } else {
        ref.current.setCustomValidity("");
      }
    }
    onChange && onChange(ev);
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
          onChange={handleChange}
          onBlur={onBlur || handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            style.calculationInput,
            focused ? style.calculationInputFocus : "",
            isValue && !focused ? style.calculationInputHasUnit : ""
          )}
        />
      </div>
    </div>
  );
};
export default EmailInputField;
