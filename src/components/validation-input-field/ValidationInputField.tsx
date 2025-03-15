import { FC, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { TInputChangeEvent, TValidationField } from "../../lib/types/InputType";
import { iconAlert, iconLoading, iconTick } from "./icons/Icons";
import style from "../../style/global.module.css";

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
          valid !== undefined &&
          (valid
            ? tickIcon
              ? tickIcon
              : iconTick()
            : alertIcon
            ? alertIcon
            : iconAlert())}
      {loading === undefined && valid === undefined && null}
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
    placeholder,
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
          placeholder={focused ? placeholder : ""}
          className={cn(
            style.input,
            focused ? style.inputFocus : "",
            isValue && !focused ? style.inputHasValue : ""
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
