import { FC, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { TAnimatedTextArea } from "../../lib/types/InputType";

// InputField component with TS types
const AnimatedTextArea: FC<TAnimatedTextArea> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const {
    label,
    name,
    formData,
    className = "",
    disabled = false,
    onChange,
  } = props;

  const handleFocus = () => {
    if (!disabled && ref.current) {
      ref.current.focus();
      setFocused(true);
    }
  };

  const handleBlur = () => {
    if (ref.current) {
      setFocused(false);
    }
  };

  // Focus the input when `focused` is set to true
  useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus();
    }
  }, [focused]);

  const isValue =
    typeof formData?.[name] === "number"
      ? formData?.[name] > 0
      : formData?.[name]?.length > 0;

  return (
    <div className="animate-input">
      <div
        className={cn("w-full h-24 relative overflow-visible", className)}
        onClick={() => setFocused(true)}
      >
        <label
          className={cn(
            "text-sm font-medium text-primary-300 bg-white px-1 absolute top-[15px] left-2.5 -translate-y-1/2 transition-all duration-300 z-10",
            {
              "-top-2.5 left-4 translate-x-0 translate-y-0": focused || isValue,
              "text-secondary-700": focused,
              "text-primary": isValue && !focused,
            }
          )}
        >
          {label || "Type something"}
        </label>
        <textarea
          ref={ref}
          name={name}
          value={formData[name] || ""}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={cn(
            "block w-full h-full p-2.5 caret-white border rounded-[8px] text-base outline-none disabled:grayscale transition-colors",
            {
              "border-secondary-700 caret-current": focused,
              "border-primary": isValue && !focused,
            }
          )}
        />
      </div>
    </div>
  );
};
export default AnimatedTextArea;
