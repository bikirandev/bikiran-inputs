export type TSelectOption = {
  id: number;
  title: string;
  value: string;
};

export type TProps = {
  name: string;
  onChange: (value: any) => void;
  formData: Record<string, any>;
  options: TSelectOption[];
  placeholder?: string;
  className?: string;
  containerClassname?: string;
  label: string;
};

export type TSelectPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};
