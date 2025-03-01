import { FC, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { TInputField } from "../../lib/types/InputType";
import style from "./Input.module.css";

// InputField component with TS types
const InputField: FC<TInputField> = ({
  label,
  type = "text",
  placeholder = "",
  name,
  autoComplete = "off",
  formData,
  onChange,
  onBlur,
  className = "",
  required = false,
  disabled = false,
  parentClassName = "",
}) => {
  return (
    <div className={cn("w-full", parentClassName)}>
      <div>
        <label className={cn(style.label)}>{label}</label>
        {required && <span className={cn(style.required)}>*</span>}
      </div>
      <input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(style.input, className)}
      />
    </div>
  );
};
export default InputField;
