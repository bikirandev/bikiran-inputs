import { FC, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { TInputField } from "../../lib/types/InputType";

// InputField component with TS types
export const InputField: FC<TInputField> = ({
  label,
  type = "text",
  placeholder = "",
  name,
  autoComplete = "off",
  formData,
  onChange,
  onBlur,
  className = "",
  disabled = false,
}) => {
  return (
    <div>
      <label className="text-base font-medium text-primary">{label}</label>
      <div className="w-full h-[45px] relative">
        <input
          type={type}
          name={name}
          value={formData[name] || ""}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "block w-full h-full px-2.5 mt-1 border rounded-[8px] text-base outline-none disabled:grayscale",
            className
          )}
        />
      </div>
    </div>
  );
};
