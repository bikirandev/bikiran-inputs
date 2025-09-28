import { FC, useState } from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
  dropdownClassname?: string;
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

type TSelectPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export const addOption = (id: any, title: any, value: any) => {
  return { id, title, value };
};

const OptionPopup: FC<{
  containerRef: React.RefObject<HTMLDivElement | null>;
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
  position: TSelectPosition;
  dropdownClassname?: string;
}> = ({
  containerRef,
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
  position,
  dropdownClassname,
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
      ref={containerRef}
      className={cn(
        "select-option-container",
        style.selectOptionContainer,
        style.customScrollbar,
        dropdownClassname,
        show ? `${style.show}  show` : ""
      )}
      style={{
        top: position.top + 4,
        left: position.left,
        width: position.width,
        pointerEvents: "auto",
      }}
      onClick={(e) => e.stopPropagation()}
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
            role="listbox"
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
                role="listbox"
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
  dropdownClassname,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [position, setPosition] = useState<TSelectPosition>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !event.defaultPrevented // Ensure clicks on options don't trigger close
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Calculate position before showing dropdown
  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY, // Account for scroll
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  //  Scroll on dropdown
  useEffect(() => {
    const dropdown = containerRef.current;

    if (!dropdown) return;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    dropdown.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      dropdown.removeEventListener("wheel", handleWheel);
    };
  }, [show]);

  const handleSelect = (val: any) => {
    const ev = {
      target: {
        name,
        value: val,
      },
    };
    onChange(ev);
    setShow(false); // Close dropdown after selection
  };

  const handleToggleShow = () => {
    if (!show) {
      // Calculate position before showing
      updatePosition();
    }
    setShow((prev) => !prev);
  };

  const isValue = formData[name]?.length > 0;

  const value = isValue
    ? options.find(
        (option) =>
          option.value?.toLowerCase() === formData[name]?.toLowerCase()
      )?.title
    : placeholder;

  return (
    <div className={containerClassname}>
      <div>
        <label className={cn(style.label)}>{label}</label>
        {required && <span className={cn(style.required)}>*</span>}
      </div>
      <div className={cn("container", style.container)}>
        {/* Value Wrapper */}
        <div
          ref={triggerRef}
          className={cn(
            "valueWrapper",
            style.valueWrapper,
            isValue ? style.isValue : "",
            className
          )}
          onClick={handleToggleShow}
        >
          <div
            className={cn(
              "value",
              value === placeholder ? style.placeholder : style.value
            )}
          >
            {value || ""}
          </div>
          <div className={cn(style.iconWrapper, "iconWrapper")}>
            <ArrowIcon />
          </div>
        </div>

        {/* Options Popup using createPortal */}
        {show &&
          position.width > 0 && // Only render when position is calculated
          createPortal(
            <OptionPopup
              containerRef={containerRef}
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
              position={position}
              dropdownClassname={dropdownClassname}
            />,
            document.body
          )}
      </div>
    </div>
  );
};

export default Select;
