import { FC, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils/cn";
import { TAnimatedTextArea } from "../../lib/types/InputType";
import style from "./AnimatedTextArea.module.css";

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
        className={cn(style.wrapper, className)}
        onClick={() => setFocused(true)}
      >
        <label
          className={cn(
            style.label,
            focused || isValue ? style.labelFocused : "",
            isValue && !focused ? style.labelHasValue : ""
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
            style.input,
            focused ? style.inputIsFocused : "",
            isValue && !focused ? style.inputHasValue : ""
          )}
        />
      </div>
    </div>
  );
};
export default AnimatedTextArea;
