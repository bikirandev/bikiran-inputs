import { FC } from "react";
import { CheckIcon } from "./Icons";
import { TSelectOption } from "./selectTypes";
import style from "./Select.module.css";
import { cn } from "../../lib/utils/cn";

export const OptionItem: FC<{
  onClick: () => void;
  option: TSelectOption;
  isActive: boolean;
}> = ({ onClick, option, isActive }) => {
  return (
    <div
      className={cn(style.optionItem, "option-item", {
        [style.optionItemIsActive]: isActive,
      })}
      onClick={(e) => {
        e.stopPropagation(); // Prevent outer div's onClick from firing
        onClick();
      }}
    >
      <div className={cn(style.optionTitle, "option-title")}>
        {/* <div className={cn(style.checkIcon, "check-icon")}>
          {isActive && <CheckIcon />}
        </div> */}
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 mr-2"
          checked={isActive || false}
          onChange={onClick}
          // Prevent the click on the checkbox from bubbling up and closing the dropdown immediately
          onClick={(e) => e.stopPropagation()}
        />
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
      className={cn(style.option, "option", {
        [style.optionNotValue]: !isValue,
      })}
      onClick={(e) => {
        e.stopPropagation(); // Prevent outer div's onClick from firing
        onClick();
      }}
    >
      <div className={cn(style.checkIcon, "check-icon")}>
        {!isValue && <CheckIcon />}
      </div>
      {placeholder || "Select an option"}
    </div>
  );
};
