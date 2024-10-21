import { FiDownload } from "react-icons/fi";
import "./button.css";
import { ButtonProps } from "./types";
import React, { PropsWithChildren } from "react";

const Button = ({
  type = "primary",
  disabled,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const className = ` button ${type}`;

  return (
    <>
      <button className={className} disabled={disabled} onClick={onClick}>
        <FiDownload />
        {children}
      </button>
    </>
  );
};

export default Button;
