export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TState<T> = React.Dispatch<React.SetStateAction<T>>;


export type TInputField = {
    label: any;
    type?: string;
    autoComplete?: string;
    placeholder?: string;
    name: string;
    formData: Record<string, any>;
    onChange: (e: TInputChangeEvent | any) => void;
    onBlur?: (e: TInputChangeEvent) => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean | undefined;
    valid?: boolean | undefined;
    show?: boolean;
    unit?: string;
  };
  type TPassword = "account";

export  type TAnimateInputField = TInputField & {
    passwordType?: TPassword;
    calculate?: boolean;
    currency?: string;
    readOnly?: boolean;
    required?: boolean;
    hasCountry?: boolean;
  };

  export type TValidationField = TInputField & {
    required?: boolean;
    readOnly?: boolean;
    loadingIcon?: any;
    alertIcon?: any;
    tickIcon?: any;
  };

