import { FC } from "react";
import { ArrowIcon } from "./Icons";
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
      className={cn(
        "w-full h-[45px] text-sm border border-[#e5e7eb] rounded-[8px] px-[10px] flex items-center justify-between cursor-pointer relative overflow-visible",
        className,
        {
          "border-[#d0cfd9]": isValue,
          "!border-secondary": show,
        }
      )}
      onClick={onClick}
    >
      {/* Selected Option or Placeholder[By Default] */}
      <div
        className={cn("flex-1 font-medium", {
          invisible: value === placeholder,
        })}
      >
        {value}
      </div>

      <div
        className={cn(
          "font-medium absolute top-1/2 transform -translate-y-1/2 left-2 text-[#b9b7c6] px-[4px] z-10 text-sm bg-white transition-all duration-300",
          {
            "text-secondary": show,
            "-top-3 left-4 transform-none text-[#5a577a] ": isValue,
          }
        )}
      >
        {placeholder}
      </div>

      {/* Down Arrow Icon */}
      <div className="w-3 opacity-50">
        <ArrowIcon />
      </div>
    </div>
  );
};

export default SelectTrigger;
