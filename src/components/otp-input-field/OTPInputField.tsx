import React, { FC } from "react";
import { InputOTPGroup, InputOTPSlot, InputOTP } from "./input-otp";
import { TInputChangeEvent } from "../../lib/types/InputType";

type TProps = {
  disabled: boolean;
  value: string;
  handleOnChange: (e: TInputChangeEvent) => void;
};

const OTPInputField: FC<TProps> = ({ disabled, value, handleOnChange }) => {
  return (
    <InputOTP
      maxLength={6}
      value={value}
      onChange={() => handleOnChange}
      disabled={disabled}
    >
      <InputOTPGroup className="otp-input-grp">
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OTPInputField;
