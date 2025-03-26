import { FC, useEffect, useState } from "react";

import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import style from "./DateInput.module.css";
import { TInputChangeEvent } from "../../lib/types/InputType";
import "react-datepicker/dist/react-datepicker.css";

import { cn } from "../../lib/utils/cn";

type TInputDateProps = {
  name: string;
  formData: Record<string, any>;
  onChange: (e: TInputChangeEvent) => void;
  options?: Record<string, any>;
  disabled?: boolean;
  className?: string;
};

const DateInputField: FC<TInputDateProps> = ({
  name,
  formData,
  onChange,
  disabled = false,
  className = "",
}) => {
  const [date, setDate] = useState<Date | null>(
    formData[name] ? new Date(formData[name]) : new Date()
  );

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
    const event = {
      target: {
        name,
        value: selectedDate ? dayjs(selectedDate).format("YYYY-MM-DD") : "",
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };
  // Sync the local state with formData when it changes
  useEffect(() => {
    setDate(formData[name] ? new Date(formData[name]) : null);
  }, [formData[name]]);

  return (
    <div
      className={cn(style.wrapper, className, disabled ? style.disabled : "")}
    >
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select Date"
        disabled={disabled}
        wrapperClassName="size-full"
        className={cn(style.datePicker, "react-datepicker-input")}
      />
    </div>
  );
};

export default DateInputField;
