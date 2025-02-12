import React, { FC } from "react";
import { InputOTPGroup, InputOTPSlot, InputOTP } from "./input-otp";
import { iconGenerate, iconGenerateFill } from "./icon";

type TProps = {
  disabled: boolean;
  value: string;
  handleOnChange: (value: string) => void;
  reSend?: () => void;
};
const OTPInputField: FC<TProps> = ({
  disabled,
  value,
  handleOnChange,
  reSend,
}) => {
  return (
    <div className="flex gap-1">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={handleOnChange}
        disabled={disabled}
      >
        <InputOTPGroup className="otp-input-grp">
          <InputOTPSlot index={0} className="h-11" />
          <InputOTPSlot index={1} className="h-11" />
          <InputOTPSlot index={2} className="h-11" />
          <InputOTPSlot index={3} className="h-11" />
          <InputOTPSlot index={4} className="h-11" />
          <InputOTPSlot index={5} className="h-11" />
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
