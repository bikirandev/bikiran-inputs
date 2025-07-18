import { FC, useState } from "react";
import { TInputChangeEvent } from "../../lib/types/InputType";
import { isValidPassword } from "./PasswordValidation";
import Copy from "../../lib/utils/Copy";
import { cn } from "../../lib/utils/cn";
import {
  iconAlert,
  iconCopy,
  iconCPanel,
  iconEmail,
  iconTick,
  iconUser,
} from "./icons/PasswordIcons";

type TPassword = "account" | "cp" | "email";
type TInputFieldProps = {
  label: any;
  ImageComponent: any;
  formData: Record<string, any>;
  name: string;
  onChange: (e: TInputChangeEvent | any) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  generatePassword?: () => void;
  description?: boolean;
  passwordType: TPassword;
  userPhoto?: string;
};
// This is Input Field component with generate Password button and Copy button
const InputFieldPassword: FC<TInputFieldProps> = ({
  label,
  placeholder = "",
  name,
  formData,
  onChange,
  className = "",
  disabled = false,
  generatePassword,
  description,
  passwordType,
  userPhoto,
  ImageComponent,
}) => {
  const { copy, isCopied } = Copy();
  const [showPassword, setShowPassword] = useState(isCopied ? true : false);

  const passwordTypeIcons = () => {
    switch (passwordType) {
      case "account":
        return userPhoto || iconUser();
      case "cp":
        return iconCPanel();
      case "email":
        return iconEmail();
      default:
        return iconUser();
    }
  };

  const valid = isValidPassword(formData[name]);

  return (
    <div className="parentClass">
      <label className="text-base font-medium text-primary">{label}</label>
      <div className="flex items-center gap-2 mt-2">
        <div className="w-full h-[45px] relative">
          {/* Show when password type specified */}
          {passwordType && passwordType.length > 0 && (
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
              <div className="w-7">
                {userPhoto ? (
                  <ImageComponent
                    src={userPhoto}
                    alt="user"
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="w-full h-auto rounded-full"
                  />
                ) : (
                  passwordTypeIcons()
                )}
              </div>
            </div>
          )}
          <input
            type={showPassword ? "text" : "password"}
            name={name}
            value={formData[name] || ""}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "block w-full h-full px-2.5 border rounded-[8px] text-base outline-none disabled:grayscale pr-12",
              className,
              {
                "pl-11": passwordType && passwordType.length > 0,
              }
            )}
          />
          {/* Container for buttons */}
          <div className="absolute top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2">
            {formData[name] !== "" ? (
              <>
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((st) => !st)}
                  className="h-4 w-4 text-primary-700 select-none outline-none focus:outline-none opacity-70"
                >
                  <ImageComponent
                    src={
                      showPassword
                        ? "https://files.bikiran.com/assets/images/icon/icon-pass-show.svg"
                        : "https://files.bikiran.com/assets/images/icon/icon-pass-hide.svg"
                    }
                    alt="eye"
                    width={100}
                    height={100}
                    // sizes="100vw"
                    className="w-full h-auto"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => copy(formData[name] || "")}
                  className="h-4 w-4 text-primary-700 opacity-70"
                >
                  {isCopied ? iconTick() : iconCopy()}
                </button>
              </>
            ) : null}
          </div>
        </div>
        {generatePassword && (
          <button
            type="button"
            onClick={() => {
              if (generatePassword) {
                generatePassword();
                setShowPassword(true);
              }
            }}
            className="size-[45px] relative group flex-shrink-0"
          >
            <ImageComponent
              alt="generate"
              src={
                "https://files.bikiran.com/assets/images/icon/icon-generate-inactive.svg"
              }
              width={0}
              height={0}
              className="size-full group-hover:hidden"
            />
            <ImageComponent
              alt="generate"
              src={
                "https://files.bikiran.com/assets/images/icon/icon-re-generate.svg"
              }
              width={0}
              height={0}
              className="size-full hidden group-hover:block"
            />
          </button>
        )}
      </div>
      {description === true ? (
        <div className={`flex items-start gap-1 mt-2 `}>
          <div className="w-4 h-4 mt-[3px]">
            {valid ? iconTick() : iconAlert()}
          </div>
          <span
            className={`text-sm  ${valid ? "text-green-600" : "text-red-600"}`}
          >
            Your Password should contain at least one uppercase letter, one
            lowercase letter, one digit and one special character.
          </span>
        </div>
      ) : null}
    </div>
  );
};
export default InputFieldPassword;
