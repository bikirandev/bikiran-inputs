import { FC, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import SelectTrigger from "./SelectTrigger";
import { TProps, TSelectOption, TSelectPosition } from "./selectTypes";
import { OptionItem, PlaceholderOption } from "./Option";
import { cn } from "../../lib/utils/cn";

export const addOption = (id: any, title: any, value: any) => {
  return { id, title, value };
};

const SelectOptionsContent: FC<{
  containerRef: any;
  options: TSelectOption[];
  handleSelect: (val: any) => void;
  isValue: boolean;
  placeholder: string | undefined;
  position: TSelectPosition;
  name: string;
  formData: Record<string, any>;
}> = ({
  containerRef,
  options,
  handleSelect,
  isValue,
  placeholder,
  position,
  name,
  formData,
}) => {
  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute z-[2000] max-h-60 bg-white rounded-[8px] shadow-md border border-[#e5e7eb] overflow-auto"
      )}
      style={{
        top: position.top + 4,
        left: position.left,
        width: position.width,
        pointerEvents: "auto",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-1">
        <PlaceholderOption
          onClick={() => handleSelect("")}
          isValue={isValue}
          placeholder={placeholder}
        />
        {options.map((option: TSelectOption) => {
          const isActive: boolean = formData[name] === option.value?.toString();
          return (
            <OptionItem
              key={option.id}
              onClick={() => handleSelect(option.value?.toString())}
              option={option}
              isActive={isActive}
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
  placeholder = "Select an option",
  containerClassname,
  className,
}) => {
  const [show, setShow] = useState<boolean>(false);
  // Position state
  const [position, setPosition] = useState<TSelectPosition>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Handle Click Outside
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

  // Handle Select Option
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

  // Check if any value is selected
  const isValue = formData[name]?.length > 0;

  // Selected Option or Placeholder
  const value = isValue
    ? options.find((option) => option.value?.toString() === formData[name])
        ?.title
    : placeholder;

  // Update position when triggerRef is available or show changes
  useEffect(() => {
    if (triggerRef.current && show) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY, // Account for scroll
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [show]);

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

  return (
    <div className={containerClassname} id="selectField">
      <div>
        <label className="text-base font-medium text-primary">{label}</label>
      </div>
      <div className="w-full relative p-0">
        <SelectTrigger
          triggerRef={triggerRef}
          show={show}
          isValue={isValue}
          onClick={() => setShow((prev) => !prev)}
          value={value}
          placeholder={placeholder}
          className={className}
        />
        {show &&
          createPortal(
            <SelectOptionsContent
              containerRef={containerRef}
              options={options}
              handleSelect={handleSelect}
              isValue={isValue}
              placeholder={placeholder}
              position={position}
              name={name}
              formData={formData}
            />,
            document.body
          )}
      </div>
    </div>
  );
};

export default AnimatedSelect;
