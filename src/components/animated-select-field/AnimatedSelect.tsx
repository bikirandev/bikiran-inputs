import { FC, useState } from "react";
import { useEffect, useRef } from "react";
import { ArrowIcon, CheckIcon } from "./Icons";
import style from "./Select.module.css";
import { cn } from "../../lib/utils/cn";

type TProps = {
  name: string;
  onChange: (value: any) => void;
  formData: Record<string, any>;
  options: TSelectOption[];
  placeholder?: string;
  className?: string;
  containerClassname?: string;
  label: string;
};

type TSelectOption = {
  id: number;
  title: string;
  value: string;
};

export const addOption = (id: any, title: any, value: any) => {
  return { id, title, value };
};

const Option: FC<{
  option: TSelectOption;
  isActive: boolean;
  handleSelect: (val: any) => void;
}> = ({ option, isActive, handleSelect }) => {
  return (
    <div
      key={option.id}
      className={cn("select-option", style.selectOption, {
        [`${style.isActive} isActive`]: isActive,
      })}
      onClick={() => handleSelect(option?.value?.toString())}
    >
      <div className={cn(style.optionTitle, "optionTitle")}>
        <div className={cn(style.checkIcon, "checkIcon")}>
          {isActive && <CheckIcon />}
        </div>
        {option.title}
      </div>
    </div>
  );
};

const SelectOptionArea: FC<{
  options: TSelectOption[];
  handleSelect: (val: any) => void;
  formData: Record<string, any>;
  name: string;
  show: boolean;
  isValue: boolean;
  placeholder?: string;
}> = ({
  options,
  handleSelect,
  formData,
  name,
  show,
  isValue,
  placeholder,
}) => {
  return (
    <div
      className={cn(
        "select-option-container",
        style.selectOptionContainer,
        style.customScrollbar,
        {
          [`${style.show} active`]: show,
        }
      )}
    >
      <div className={cn(style.placeholderContainer, "placeholderContainer")}>
        <div
          className={cn(
            "select-option-placeholder",
            style.selectOptionPlaceholder,
            !isValue ? `${style.notIsValue} notIsValue` : ""
          )}
          onClick={() => handleSelect("")}
        >
          <div className={cn(style.checkIcon, "checkIcon")}>
            {!isValue && <CheckIcon />}
          </div>
          {placeholder || "Select an option"}
        </div>
        {options?.map((option: TSelectOption) => {
          const isActive: boolean =
            formData?.[name] === option?.value?.toString();
          return (
            <Option
              key={option.id}
              option={option}
              isActive={isActive}
              handleSelect={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

const AnimatedSelect: FC<TProps> = ({
  name,
  onChange,
  formData,
  label,
  options,
  placeholder,
  containerClassname,
  className,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleSelect = (val: any) => {
    setShow((prev) => !prev);
    const ev = {
      target: {
        name,
        value: val,
      },
    };
    onChange(ev);
  };

  const isValue = formData[name]?.length > 0;
  const value = isValue
    ? options.find((option) => option.value?.toString() === formData[name])
        ?.title
    : placeholder;

  return (
    <div ref={ref} className={containerClassname}>
      <div className={cn("container", style.container)}>
        <div
          className={cn(
            "valueWrapper relative border-[#e5e7eb]",
            style.valueWrapper,
            className,
            {
              "!border-secondary": show,
              [style.isValue]: isValue,
            }
          )}
          onClick={() => setShow((prev) => !prev)}
        >
          <div className={cn("value", style.value)}>{isValue && value}</div>
          <div className={cn(style.iconWrapper, "iconWrapper")}>
            <ArrowIcon />
          </div>

          <div
            className={cn(style.placeholder, {
              "text-secondary": show,
              [style.placeholderActive]: isValue,
            })}
          >
            {placeholder}
          </div>
        </div>
        <SelectOptionArea
          options={options}
          handleSelect={handleSelect}
          formData={formData}
          name={name}
          show={show}
          isValue={isValue}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default AnimatedSelect;
