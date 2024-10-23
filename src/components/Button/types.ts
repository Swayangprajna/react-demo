export type ButtonProps = {
  type?: "primary" | "secondary" | "ternary";
  disabled?: boolean;
  onClick?: () => void;
};
export type Inputprops = {
  type?: "text" | "password";
  variant: "default" | "error" | "password_view" | "password_hidden" | "info";
  disabled?: boolean;
  placeholder?: string;
  infoText?: string;
};
