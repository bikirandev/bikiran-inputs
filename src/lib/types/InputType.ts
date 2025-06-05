export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TState<T> = React.Dispatch<React.SetStateAction<T>>;

export type TInputField = {
  label: any;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  name: string;
  formData: Record<string, any>;
  onFocus?: (e: TInputChangeEvent | any) => void;
  onChange: (e: TInputChangeEvent | any) => void;
  onBlur?: (e: TInputChangeEvent | any) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean | undefined;
  required?: boolean;
  parentClassName?: string;
  error?: boolean;
};

export type TValidationField = TInputField & {
  required?: boolean;
  readOnly?: boolean;
  loadingIcon?: any;
  alertIcon?: any;
  tickIcon?: any;
  valid?: boolean | undefined;
  placeholder?: string;
};

export type TCalculationInputField = TInputField & {
  calculate: boolean;
  currency?: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  unit?: string;
};

export type TAnimatedTextArea = {
  label: string;
  name: string;
  formData: Record<string, any>;
  onChange: (ev: any) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
};

export type TAnimateInputField = {
  label: string;
  type?: string;
  autoComplete?: string;
  name: string;
  formData: Record<string, any>;
  onChange: (ev: any) => void;
  onBlur?: () => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
};
