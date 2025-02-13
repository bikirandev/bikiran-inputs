import React, { FC } from "react";
import { InputOTPGroup, InputOTPSlot, InputOTP } from "./input-otp";
import { iconGenerate, iconGenerateFill } from "./icon";

type TProps = {
  disabled?: boolean;
  value: string;
  handleOnChange: (value: string) => void;
  reSend?: () => void;
  maxLength?: number;
};
const OTPInputField: FC<TProps> = ({
  disabled = false,
  value,
  handleOnChange,
  reSend,
  maxLength = 6,
}) => {
  const slots = Array.from({ length: maxLength }, (_, index) => index);

  return (
    <div className="flex gap-1">
      <InputOTP
        maxLength={maxLength}
        value={value}
        onChange={handleOnChange}
        disabled={disabled}
      >
        <InputOTPGroup className="otp-input-grp">
          {slots.map((index) => (
            <InputOTPSlot key={index} index={index} className="h-11" />
          ))}
        </InputOTPGroup>
      </InputOTP>
      {reSend && (
        <div className="group relative mb-1" onClick={() => reSend()}>
          <div className="absolute group-hover:hidden block ">
            {iconGenerate()}
          </div>
          <div className="absolute group-hover:block hidden">
            {iconGenerateFill()}
          </div>
        </div>
      )}
    </div>
  );
};

export default OTPInputField;
