import { FC, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { TInputChangeEvent, TValidationField } from "../../lib/types/InputType";
import { iconAlert, iconLoading, iconTick } from "./icons/Icons";

const ValidationCheck: FC<{
  loading?: boolean | undefined;
  valid?: boolean | undefined;
  className?: string;
  loadingIcon?: any;
  alertIcon?: any;
  tickIcon?: any;
}> = ({ loading, valid, className, tickIcon, alertIcon, loadingIcon }) => {
  return (
    <div className={cn("absolute", className)}>
      {loading
        ? loadingIcon
          ? loadingIcon
          : iconLoading()
        : loading !== undefined &&
          (valid
            ? tickIcon
              ? tickIcon
              : iconTick()
            : alertIcon
            ? alertIcon
            : iconAlert())}
    </div>
  );
};

// InputField component with TS types
const ValidationInputField: FC<TValidationField> = (props) => {
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
    loading,
    valid,
    loadingIcon,
    alertIcon,
    tickIcon,
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
    const trimmedValue = ev.target.value.replace(/\s+/g, "");
    if (onChange) {
      onChange({
        target: { name, value: trimmedValue }, // Ensure correct event structure
      } as TInputChangeEvent);
    }
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
            "text-sm font-medium text-primary-300 leading-5 px-1 bg-white absolute top-1/2 left-2.5 -translate-y-1/2 transition-all duration-300 focus:bg-white",
            {
              "-top-2.5 left-4 translate-x-0 translate-y-0":
                (focused || isValue) && !disabled,
              "text-secondary-700": focused,
              "text-primary-700 ": isValue && !focused,
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
          onChange={handleChange}
          onBlur={onBlur || handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            "block w-full h-full px-2.5 caret-white border rounded-[8px] text-base outline-none disabled:grayscale transition-colors",
            {
              "border-secondary-700 caret-current": focused,
              "border-primary": isValue && !focused,
            }
          )}
        />
        {/* Loading and validation icons */}
        <ValidationCheck
          loading={loading}
          valid={valid}
          className="top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2"
          loadingIcon={loadingIcon}
          tickIcon={tickIcon}
          alertIcon={alertIcon}
        />
      </div>
    </div>
  );
};
export default ValidationInputField;
