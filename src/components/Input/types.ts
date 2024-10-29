export type Inputprops = {
  type?: "text" | "password" | "email";
  disabled?: boolean;
  placeholder?: string;
  lable: string;
  className: string;
  infoMessage?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
