import React, { PropsWithChildren } from "react";
import "./input.css";
import { Inputprops } from "./types";

const Input = ({
  type = "text",
  variant = "default",
  disabled = false,
  placeholder = "Enter your text",
  children,
  infoText,
}: PropsWithChildren<Inputprops>) => {
  const className = `input-box input-${variant}`;

  return (
    <>
      <label htmlFor="fname">{children}</label>
      <br></br>
      <input
        id="fname"
        type={type}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
      />
      <p className="info-text">{infoText}</p>
    </>
  );
};

export default Input;
