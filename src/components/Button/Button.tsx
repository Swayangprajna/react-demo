import { FiDownload } from "react-icons/fi";
import "./button.css";
import { ButtonProps } from "./types";

const Button = ({ type = "primary", disabled, children }: ButtonProps) => {
  const className = ` button ${type}`;
  const addClickHandler = () => {};

  return (
    <>
      <button
        className={className}
        disabled={disabled}
        onClick={addClickHandler}
      >
        <FiDownload />
        {children}
      </button>
    </>
  );
};

export default Button;
