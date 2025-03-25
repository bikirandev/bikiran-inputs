import { FC, useEffect, useRef, useState } from "react";
import styles from "./CalculationInput.module.css";
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
    calculate = true,
    name,
    formData,
    placeholder,
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
    const value = ev.target.value;
    if (!calculate) {
      return onChange(ev);
    }
    // Allow arithmetic operations in the input value
    const validInput = /^[0-9+\-*/().\s]*$/.test(value);
    if (!validInput) {
      return;
    }
    const calculatedValue = evaluate(value);
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
    // <div className="animate-input w-full">
    <div className={cn(styles.wrapper, className)} onClick={handleFocus}>
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
        onChange={handleChange}
        onBlur={onBlur || handleBlur}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={focused ? placeholder : ""}
        className={cn(
          styles.calculationInput,
          focused ? styles.calculationInputFocus : "",
          isValue && !focused ? styles.calculationInputHasValue : "",
          unit ? styles.calculationInputHasUnit : ""
        )}
      />
      <div className={cn(styles.unit)}>
        {unit && !currency && (
          <div className={cn(styles.showUnit)}>
            <div className={cn(styles.unitText)}>{unit}</div>
          </div>
        )}

        {/* Currency and unit */}
        {currency && (
          <div className={cn(styles.showUnit)}>
            <div className={cn(styles.unitText)}>
              {unit && currency ? `${currency}/${unit}` : unit || currency}
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};
export default CalculationInputField;
