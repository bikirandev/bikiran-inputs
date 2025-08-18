import { FC, useState } from "react";
import { useEffect, useRef } from "react";
import { ArrowIcon, CheckIcon, CloseIcon } from "./Icons";
import style from "./Select.module.css";
import { cn } from "../../lib/utils/cn";
import capitalizeFirstLetter from "../../lib/utils/capitalizeFirstLetter";

type TProps = {
  name: string;
  onChange: (value: any) => void;
  formData: Record<string, any>;
  options: TSelectOption[];
  placeholder?: string;
  className?: string;
  containerClassname?: string;
  label: string;
  required?: boolean;
  searchable?: boolean;
  defaultOption?: boolean;
};

type TSelectOption = {
  id: number;
  title: string;
  value: string;
};

export const addOption = (id: any, title: any, value: any) => {
  return { id, title, value };
};

const OptionPopup: FC<{
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  options: TSelectOption[];
  formData: Record<string, any>;
  name: string;
  placeholder?: string;
  handleSelect: (value: string) => void;
  isValue: boolean;
  searchable: boolean;
  defaultOption: boolean;
}> = ({
  setShow,
  show,
  options,
  formData,
  name,
  placeholder,
  handleSelect,
  isValue,
  searchable = false,
  defaultOption,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const closeClick = () => {
    setTimeout(() => {
      setSearchValue("");
    }, 100); // 10ms delay to ensure the click event is processed before closing
    setShow(false);
  };

  return (
    <div
      className={cn(
        "select-option-container",
        style.selectOptionContainer,
        style.customScrollbar,
        show ? `${style.show}  show` : ""
      )}
      style={{
        top: searchable ? "0" : "12",
      }}
    >
      <div className={cn(style.placeholderContainer, "placeholderContainer")}>
        {searchable && (
          <div className={style.searchBar}>
            {/* Search bar close button */}
            {searchValue?.length !== 0 && (
              <button type="button" onClick={closeClick}>
                <CloseIcon className="w-5 text-error border rounded-full p-1" />
              </button>
            )}
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase());
                // const searchValue = e.target.value
                // setFilteredOptions(
                //   options.filter((option) =>
                //     option.title.toLowerCase().includes(searchValue)
                //   )
                // );
              }}
              value={searchValue}
            />
          </div>
        )}
        {!searchable && defaultOption && (
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
        )}
        {options
          .filter((op) => op.title.toLowerCase().includes(searchValue))
          .map((option: TSelectOption) => {
            const isActive: boolean =
              formData[name]?.toLowerCase() === option.value?.toLowerCase();
            return (
              <div
                key={option.id}
                className={cn(
                  "select-option",
                  style.selectOption,
                  isActive ? `${style.isActive} isActive` : ""
                )}
                onClick={() => handleSelect(option.value)}
              >
                <div className={cn(style.optionTitle, "optionTitle")}>
                  <div className={cn(style.checkIcon, "checkIcon")}>
                    {isActive && <CheckIcon />}
                  </div>
                  {/* {capitalizeFirstLetter(option?.title?.toLowerCase() || "")} */}
                  {option?.title || ""}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const Select: FC<TProps> = ({
  name,
  onChange,
  formData,
  label,
  options,
  placeholder,
  containerClassname,
  className,
  required = false,
  searchable = false,
  defaultOption = true,
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
    ? options
        .find(
          (option) =>
            option.value?.toLowerCase() === formData[name]?.toLowerCase()
        )
        ?.title?.toLowerCase()
    : placeholder;

  return (
    <div ref={ref} className={containerClassname}>
      <div>
        <label className={cn(style.label)}>{label}</label>
        {required && <span className={cn(style.required)}>*</span>}
      </div>
      <div className={cn("container", style.container)}>
        {/* Value Wrapper */}
        <div
          className={cn(
            "valueWrapper",
            style.valueWrapper,
            isValue ? style.isValue : "",
            className
          )}
          onClick={() => setShow((prev) => !prev)}
        >
          <div
            className={cn(
              "value",
              value === placeholder ? style.placeholder : style.value
            )}
          >
            {capitalizeFirstLetter(value || "")}
          </div>
          <div className={cn(style.iconWrapper, "iconWrapper")}>
            <ArrowIcon />
          </div>
        </div>

        {/* Options Popup */}
        <OptionPopup
          setShow={setShow}
          show={show}
          options={options}
          formData={formData}
          name={name}
          placeholder={placeholder}
          handleSelect={handleSelect}
          isValue={isValue}
          searchable={searchable}
          defaultOption={defaultOption}
        />
      </div>
    </div>
  );
};

export default Select;
