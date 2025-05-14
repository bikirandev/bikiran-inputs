import { FC, useEffect, useRef, useState } from "react";
import styles from "./InputField.module.css";
import UnitSelector from "./UnitSelector";
import { TSelectOption } from "./selectTypes";
import { cn } from "../../lib/utils/cn";
import { TInputChangeEvent } from "../../lib/types/InputType";

type TAnimateInputField = {
  label?: string;
  type?: string;
  autoComplete?: string;
  options: TSelectOption[];
  durationName: string;
  unitName: string;
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
const DurationInput: FC<TAnimateInputField> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    label = "Duration",
    type = "text",
    autoComplete = "off",
    durationName,
    unitName,
    formData,
    placeholder,
    onBlur,
    className = "",
    disabled = false,
    required = false,
    onChange,
    readOnly,
    options = [],
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

  const inputValue = formData[durationName] ?? "";
  const isValue = inputValue !== "";

  const handleOnChange = (ev: TInputChangeEvent) => {
    let value = ev.target.value.replace(/\s+/g, "");
    value = value.replace(/[^0-9+\-*/().=%^]/g, "");

    const validInput = /^[0-9+\-*/().=%^]*$/.test(value);
    if (!validInput) {
      return;
    }

    onChange({
      target: {
        name: ev.target.name,
        value: value,
      },
    });
  };

  return (
    <div className={cn(styles.container, "animate-input")}>
      <div
        className={cn(styles.inputWrapper, className, {
          [styles.inputFocused]: focused,
          [styles.inputHasValue]: isValue && !focused,
          "pointer-events-none grayscale": disabled,
        })}
        onClick={handleFocus}
      >
        <label
          className={cn(styles.label, {
            [styles.labelFocused]: focused || isValue,
            [styles.labelHasValue]: isValue && !focused,
          })}
        >
          {label || "Type something"}
          {required && <span className="text-error opacity-75">*</span>}
        </label>
        <input
          ref={ref}
          type="number"
          required={required}
          name={durationName}
          value={inputValue}
          onChange={handleOnChange}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={focused ? placeholder : ""}
          className={cn(styles.input, {
            // [styles.inputFocused]: focused,
            // [styles.inputHasValue]: isValue && !focused,
            [styles.inputDisabled]: disabled,
          })}
        />

        <UnitSelector
          name={unitName}
          className=""
          options={options}
          formData={formData}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default DurationInput;
