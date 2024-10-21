import { FiDownload } from "react-icons/fi";
import "./button.css";
import { ButtonProps } from "./types";
const Button = ({ type, disabled }: ButtonProps) => {
  const className = ` button ${type}`;
  console.log(disabled);
  return (
    <>
      <button className={className} disabled={disabled}>
        <FiDownload />
        primary button
      </button>
    </>
  );
};

export default Button;
