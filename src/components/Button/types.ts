export type ButtonProps = {
  variant?: "primary" | "secondary" | "ternary";
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};
