import { FC, useEffect, useRef, useState } from "react";
import { TInputChangeEvent } from "../../lib/types/InputType";
import { cn } from "../../lib/utils/cn";

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
        "animate-input w-full flex border items-center rounded-[8px]",
        {
          "border-secondary-700 caret-current": focused || isValue,
          "border-primary": isValue && !focused,
        }
      )}
    >
      {/* TODO: if need to add country add here  */}
      {/* {hasCountry && (
        <div className="w-20 bg-red-300 h-full flex gap-1">
          <div>flag</div>
          <div>code</div>
        </div>
      )} */}
      <div
        className={cn("w-full h-[45px] relative overflow-visible", className)}
        onClick={handleFocus}
      >
        <label
          className={cn(
            "text-sm font-medium text-primary-300 leading-5 px-1 bg-white absolute top-1/2 left-2.5 -translate-y-1/2 transition-all duration-300 focus:bg-white z-10",
            {
              "-top-2.5 left-4 translate-x-0 translate-y-0": focused || isValue,
              "text-secondary-700": focused,
              "text-primary ": isValue && !focused,
            }
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
          className={cn(
            "block w-full h-full px-2.5 caret-current rounded-8 text-base outline-none disabled:grayscale transition-colors"
          )}
        />
      </div>
    </div>
  );
};
export default PhoneInputField;
