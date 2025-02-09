import React from "react";
import "./Button.css";

// Loading component
export const ButtonLoading: React.FC = () => {
  return (
    <div>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-loader-circle"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </span>
    </div>
  );
};

const cName = (variant: string) => {
  switch (variant) {
    case "primary":
      return "primary";
    case "primary-line":
      return "primary-line";
    case "secondary":
      return "secondary";
    case "secondary-line":
      return "secondary-line";
    case "secondary-line-bordered":
      return "secondary-line-bordered";
    case "blue":
      return "blue";
    case "blue-line":
      return "blue-line";
    case "blue-line-bordered":
      return "blue-line-bordered";
    case "red":
      return "red";
    case "red-line":
      return "red-line";
    case "red-line-bordered":
      return "red-line-bordered";
    case "pink":
      return "pink";
    case "pink-outline":
      return "pink-outline";
    case "pink-outline-bordered":
      return "pink-outline-bordered";
    case "green":
      return "green";
    case "green-outline":
      return "green-outline";
    case "gray":
      return "gray";
    case "yellow":
      return "yellow";
    case "yellow-outline":
      return "yellow-outline";
    default:
      return "primary";
  }
};

type TVariant =
  | "primary"
  | "primary-line"
  | "secondary"
  | "secondary-line"
  | "secondary-line-bordered"
  | "blue"
  | "blue-line"
  | "blue-line-bordered"
  | "red"
  | "red-line"
  | "red-line-bordered"
  | "pink"
  | "pink-outline"
  | "pink-outline-bordered"
  | "green"
  | "green-outline"
  | "yellow-outline"
  | "gray";

type ButtonProps = {
  title?: any;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: TVariant;

  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

export const Button = ({
  children,
  title,
  type = "button",
  variant = "primary",
  onClick,
  className,
  disabled,
  loading,
}: ButtonProps) => {
  const makeCNameImportant = (cName: string) => {
    return cName
      .split(" ")
      .map((c) => `${c} !important`)
      .join(" ");
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${cName(variant)} ${makeCNameImportant(
        className || ""
      )}`}
      disabled={disabled}
    >
      {children || title}

      {loading ? (
        <div className="loading-container">
          <ButtonLoading />
        </div>
      ) : null}
    </button>
  );
};

export default Button;
