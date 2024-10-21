export type ButtonProps = {
  type?: "primary" | "secondary" | "ternary";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
