import React from "react";
import "./input.css";
import { Inputprops } from "./types";

const Input = ({
  type = "text",
  variant = "default",
  disabled = false,
  placeholder = "",
  lname,
  infoText,
}: Inputprops) => {
  const className = `input-box input-${variant}`;

  return (
    <>
      <label htmlFor="fname" className="label">
        {lname}
      </label>
      <br />
      <input
        id="fname"
        type={type}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
      />
      {infoText && <p className="info-text">{infoText}</p>}
    </>
  );
};

export default Input;
