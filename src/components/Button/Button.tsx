import { FiDownload } from "react-icons/fi";
import "./button.css";
import { ButtonProps } from "./types";
import React, { PropsWithChildren } from "react";

const Button = ({
  variant = "primary",
  disabled,
  children,
  type,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const className = ` button ${variant}`;

  return (
    <>
      <button
        className={className}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

/* <button className={className} disabled={disabled} onClick={onClick}>
        <FiDownload />
        {children}
      </button> */
