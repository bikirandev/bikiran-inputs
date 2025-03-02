import { FC, useEffect, useRef, useState } from "react";
import {
  TCalculationInputField,
  TInputChangeEvent,
} from "../../lib/types/InputType";
import styles from "./CalculationInput.module.css";
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
        className={cn(
          styles.calculationInput,
          focused ? styles.calculationInputFocus : "",
          isValue && !focused ? styles.calculationInputHasValue : "",
          unit ? styles.calculationInputHasUnit : ""
        )}
      />
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
    // </div>
  );
};
export default CalculationInputField;
