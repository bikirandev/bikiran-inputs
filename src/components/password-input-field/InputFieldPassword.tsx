import { FC, useState } from "react";
import { TInputChangeEvent } from "../../lib/types/InputType";
import { isValidPassword } from "./PasswordValidation";
import Copy from "../../lib/utils/Copy";
import { cn } from "../../lib/utils/cn";
import style from "./InputFieldPassword.module.css";
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
  userPhoto?: string | "null";
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
    <div className={cn(style.container, "parent-class")}>
      <label className={cn(style.label)}>{label}</label>
      <div className={cn(style.row)}>
        <div className={cn(style.inputWrapper)}>
          {/* Show when password type specified */}
          {passwordType && passwordType.length > 0 && (
            <div className={cn(style.iconLeftWrapper)}>
              {userPhoto !== "null" && (
                <div className={cn(style.leftIconSize)}>
                  {userPhoto ? (
                    <ImageComponent
                      src={userPhoto}
                      alt="user"
                      width={100}
                      height={100}
                      sizes="100vw"
                      className={cn(style.leftIconImg)}
                    />
                  ) : (
                    passwordTypeIcons()
                  )}
                </div>
              )}
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
              style.input,
              className,
              passwordType && passwordType.length > 0 && userPhoto !== "null"
                ? style.inputWithLeftIcon
                : ""
            )}
          />
          {/* Container for buttons */}
          <div className={cn(style.btns)}>
            {formData[name] !== "" ? (
              <>
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((st) => !st)}
                  className={cn(style.iconBtn)}
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
                    className={cn(style.iconImage)}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => copy(formData[name] || "")}
                  className={cn(style.iconBtn)}
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
            className={cn(style.generateBtn, "group")}
          >
            <ImageComponent
              alt="generate"
              src={
                "https://files.bikiran.com/assets/images/icon/icon-generate-inactive.svg"
              }
              width={0}
              height={0}
              className={cn(style.generateIconInactive, "group-hover:hidden")}
            />
            <ImageComponent
              alt="generate"
              src={
                "https://files.bikiran.com/assets/images/icon/icon-re-generate.svg"
              }
              width={0}
              height={0}
              className={cn(style.generateIconHover, "group-hover:block")}
            />
          </button>
        )}
      </div>
      {description === true ? (
        <div className={cn(style.desc)}>
          <div className={cn(style.descIcon)}>
            {valid ? iconTick() : iconAlert()}
          </div>
          <span
            className={cn(valid ? style.descTextValid : style.descTextInvalid)}
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
