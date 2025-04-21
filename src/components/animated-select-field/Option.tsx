import { FC } from "react";
import { CheckIcon } from "./Icons";
import { TSelectOption } from "./selectTypes";
import { cn } from "../../lib/utils/cn";

export const OptionItem: FC<{
  onClick: () => void;
  option: TSelectOption;
  isActive: boolean;
}> = ({ onClick, option, isActive }) => {
  return (
    <div
      className={cn(
        "w-full rounded-sm px-[10px] py-[7px] flex items-center text-sm hover:bg-[#f3f3f5] transition-colors cursor-pointer",
        {
          "bg-[#f7e6f8] hover:bg-[#f7e6f8]": isActive,
        }
      )}
      onClick={(e) => {
        e.stopPropagation(); // Prevent outer div's onClick from firing
        onClick();
      }}
    >
      <div className={cn("flex items-center gap-2")}>
        <div className={cn("w-3")}>{isActive && <CheckIcon />}</div>
        {option.title}
      </div>
    </div>
  );
};

export const PlaceholderOption: FC<{
  onClick: () => void;
  isValue: boolean;
  placeholder: string | undefined;
}> = ({ onClick, isValue, placeholder }) => {
  return (
    <div
      className={cn(
        "w-full rounded-sm px-[10px] py-[7px] flex items-center gap-2 text-sm hover:bg-[#f3f3f5] cursor-pointer",
        {
          "bg-[#f7e6f8] hover:bg-[hsl(297,56%,94%)]": !isValue,
        }
      )}
      onClick={(e) => {
        e.stopPropagation(); // Prevent outer div's onClick from firing
        onClick();
      }}
    >
      <div className={cn("w-3")}>{!isValue && <CheckIcon />}</div>
      {placeholder || "Select an option"}
    </div>
  );
};
