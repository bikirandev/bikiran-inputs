import { FC, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { TInputField } from "../../lib/types/InputType";

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
        <label className="text-base font-medium text-primary">{label}</label>
        {required && <span className="text-error opacity-75">*</span>}
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
        className={cn(
          "block w-full h-[45px] px-[10px] mt-1 border rounded-[8px] text-base outline-none disabled:grayscale ",
          className
        )}
      />
    </div>
  );
};
export default InputField;
