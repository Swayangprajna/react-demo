import { FiDownload } from "react-icons/fi";
import "./button.css";
type ButtonProps = {
  text: string;
  type: "primary" | "secondary" | "ternary";
  subtype: "default" | "hover" | "clicked" | "disabled";
};
const Button = ({ text, type, subtype }: ButtonProps) => {
  const className = ` button-${type}-${subtype}`;
  console.log(className);
  return (
    <>
      <button className={className}>
        <FiDownload />
        {text}
      </button>
    </>
  );
};

export default Button;
