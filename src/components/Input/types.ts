export type Inputprops = {
  type?: "text" | "password" | "email";
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  lable: string;
  infoMessage?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
