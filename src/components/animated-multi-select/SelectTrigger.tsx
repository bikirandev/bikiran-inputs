import { FC } from "react";
import { ArrowIcon } from "./Icons";
import style from "./Select.module.css";
import { cn } from "../../lib/utils/cn";

type TProps = {
  show: boolean;
  isValue: boolean;
  onClick: () => void;
  placeholder: string | undefined;
  selectedValues: string[];
  className?: string;
  triggerRef?: any;
  required?: boolean;
};

const SelectTrigger: FC<TProps> = ({
  show,
  onClick,
  isValue,
  placeholder,
  selectedValues,
  className,
  triggerRef,
  required = false,
}) => {
  return (
    <div
      ref={triggerRef}
      className={cn(style.triggerContainer, "trigger-container", className, {
        [style.isValue]: isValue,
        [style.show]: show,
      })}
      onClick={onClick}
    >
      {/* Selected Option or Placeholder[By Default] */}
      <div className={cn(style.value, "value")}>
        {selectedValues?.join(", ") || ""}
      </div>

      <div
        className={cn(style.placeholder, "placeholder", {
          [style.placeholderShow]: show,
          [style.placeholderIsValue]: isValue,
        })}
      >
        {placeholder}
        {required && <span className="text-error opacity-75">*</span>}
      </div>

      {/* Down Arrow Icon */}
      <div className={cn(style.arrow, "arrow")}>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default SelectTrigger;
