import { FC, useState } from "react";
import { TInputChangeEvent } from "../../lib/types/InputType";
import { cn } from "../../lib/utils/cn";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";

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

  return (
    <div
      className={cn(
        "[&_.react-datepicker-wrapper]:w-full !min-h-[45px]",
        className,
        {
          "pointer-events-none opacity-50": disabled,
        }
      )}
    >
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select Date"
        disabled={disabled}
        wrapperClassName="size-full"
        className="react-datepicker-input size-full bg-transparent rounded-8 block outline-none border px-2 md:px-3 text-primary text-sm leading-6 font-normal"
      />
    </div>
  );
};

export default DateInputField;
