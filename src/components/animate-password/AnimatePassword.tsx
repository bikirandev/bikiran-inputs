import { FC, useEffect, useRef, useState } from "react";
import styles from "./InputField.module.css";
import { isValidPassword } from "./PasswordValidation";

import {
  iconAlert,
  iconCopy,
  iconCPanel,
  iconEmail,
  iconTick,
  iconUser,
} from "../password-input-field/icons/PasswordIcons";
import { TInputChangeEvent } from "../../lib/types/InputType";
import Copy from "../../lib/utils/Copy";
import { cn } from "../../lib/utils/cn";

type TPassword = "account" | "cp" | "email";

type TAnimatePassword = {
  label: string;
  autoComplete?: string;
  onBlur?: (ev: any) => void;
  required?: boolean;
  readOnly?: boolean;
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
  defaultShow?: boolean;
};

const AnimatePassword: FC<TAnimatePassword> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    label,
    autoComplete = "off",
    onBlur,
    required = false,
    readOnly = false,
    ImageComponent,
    formData,
    name,
    onChange,
    placeholder = "",
    className = "",
    disabled = false,
    generatePassword,
    description,
    passwordType,
    userPhoto,
    defaultShow = false,
  } = props;

  const handleFocus = () => {
    if (!disabled && ref.current) {
      ref.current.focus();
      setFocused(true);
    }
  };

  const handleBlur = (ev: TInputChangeEvent) => {
    if (onBlur) {
      onBlur(ev);
    }
    if (ref.current) {
      setFocused(false);
    }
  };

  useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus();
    }
  }, [focused]);

  const { copy, isCopied } = Copy();
  const [showPassword, setShowPassword] = useState(
    isCopied ? true : defaultShow
  );

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
  const inputValue = formData[name] ?? "";
  const isValue = inputValue !== "";

  return (
    <div className={cn(styles.container, "animate-input")}>
      <div className="flex items-center gap-2 relative">
        <div
          className={cn(styles.inputWrapper, className)}
          onClick={handleFocus}
        >
          <label
            className={cn(
              styles.label,
              focused || isValue ? styles.labelFocused : "",
              isValue && !focused ? styles.labelHasValue : ""
            )}
          >
            {label || "Type something"}
            {required && <span className="text-error opacity-75">*</span>}
          </label>

          {passwordType && passwordType.length > 0 && (
            <div className={styles.iconLeftWrapper}>
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
            ref={ref}
            type={showPassword ? "text" : "password"}
            required={required}
            name={name}
            value={inputValue}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete={autoComplete}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={focused ? placeholder : ""}
            className={cn(
              styles.input,
              focused ? styles.inputFocused : "",
              isValue && !focused ? styles.inputHasValue : "",
              disabled ? styles.inputDisabled : ""
            )}
          />

          <div className="absolute top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2">
            {formData[name] !== "" && (
              <>
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((st) => !st)}
                  className={styles.passwordToggleBtn}
                >
                  <ImageComponent
                    src={
                      showPassword
                        ? "https://files.bikiran.com/assets/images/icon/icon-pass-show.svg"
                        : "https://files.bikiran.com/assets/images/icon/icon-pass-hide.svg"
                    }
                    alt="eye"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={styles.passwordToggleIcon}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => copy(formData[name] || "")}
                  className={styles.copyBtn}
                >
                  {isCopied ? iconTick() : iconCopy()}
                </button>
              </>
            )}
          </div>
        </div>

        {generatePassword && (
          <button
            type="button"
            onClick={() => {
              generatePassword?.();
              setShowPassword(true);
            }}
            className={cn(styles.generateBtn, "group")}
          >
            <ImageComponent
              alt="generate"
              src="https://files.bikiran.com/assets/images/icon/icon-generate-inactive.svg"
              width={0}
              height={0}
              className={styles.generateIconInactive}
            />
            <ImageComponent
              alt="generate"
              src="https://files.bikiran.com/assets/images/icon/icon-re-generate.svg"
              width={0}
              height={0}
              className={styles.generateIconHover}
            />
          </button>
        )}
      </div>

      {description && (
        <div className={styles.passwordDescription}>
          <div className="w-4 h-4 mt-[3px]">
            {valid ? iconTick() : iconAlert()}
          </div>
          <span
            className={
              valid
                ? styles.passwordDescriptionTextValid
                : styles.passwordDescriptionTextInvalid
            }
          >
            Your Password should contain at least one uppercase letter, one
            lowercase letter, one digit and one special character.
          </span>
        </div>
      )}
    </div>
  );
};

export default AnimatePassword;
