import { FC, useEffect, useRef, useState } from "react";
import {
  TCalculationInputField,
  TInputChangeEvent,
} from "../../lib/types/InputType";
import { evaluate } from "../../lib/utils/math";
import { cn } from "../../lib/utils/cn";

// InputField component with TS types
const CalculationInputField: FC<TCalculationInputField> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    label,
    type = "text",
    autoComplete = "off",
    calculate = false,
    name,
    formData,
    onChange,
    onBlur,
    className = "",
    disabled = false,
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
            "text-sm font-medium text-primary-300 leading-5 px-1 bg-white absolute top-1/2 left-2.5 -translate-y-1/2 transition-all duration-300 focus:bg-white z-10",
            {
              "-top-2.5 left-4 translate-x-0 translate-y-0": focused || isValue,
              "text-secondary-700": focused,
              "text-primary": isValue && !focused,
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
              "pr-12": unit,
            }
          )}
        />
        {unit && !currency && (
          <div className="absolute top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2">
            <div className="text-[10px] text-primary-700">{unit}</div>
          </div>
        )}

        {/* Currency and unit */}
        {currency && (
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
export default CalculationInputField;
