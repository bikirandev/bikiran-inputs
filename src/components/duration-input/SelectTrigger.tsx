import { FC } from "react";
import { ArrowIcon } from "./Icons";
import style from "./Select.module.css";
import { cn } from "../../lib/utils/cn";

type TProps = {
  show: boolean;
  isValue: boolean;
  onClick: () => void;
  value: string | undefined;
  placeholder: string | undefined;
  className?: string;
  triggerRef?: any;
};

const SelectTrigger: FC<TProps> = ({
  show,
  onClick,
  isValue,
  value,
  placeholder,
  className,
  triggerRef,
}) => {
  return (
    <div
      ref={triggerRef}
      className={cn(style.triggerContainer, "trigger-container", className, {
        [style.isValue]: isValue,
        // [style.show]: show,
      })}
      onClick={onClick}
    >
      {/* Selected Option or Placeholder[By Default] */}
      <div
        className={cn(style.value, "value", {
          invisible: value === placeholder,
        })}
      >
        {value}
      </div>

      {!isValue && (
        <div
          className={cn(style.placeholder, "placeholder", {
            // [style.placeholderShow]: show,
            [style.placeholderIsValue]: isValue,
          })}
        >
          Unit
        </div>
      )}

      {/* Down Arrow Icon */}
      <div className={cn(style.arrow, "arrow")}>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default SelectTrigger;
