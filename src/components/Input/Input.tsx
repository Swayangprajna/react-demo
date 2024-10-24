import React from "react";
import "./input.css";
import { Inputprops } from "./types";

const Input = ({
  type = "text",
  disabled = false,
  placeholder = "",
  lable,
  value,
  infoMessage,
  errorMessage,
}: Inputprops) => {
  // const className = `input-box input-${variant}`;

  const className = errorMessage ? "input-error" : "input-box";

  return (
    <>
      <label htmlFor="fname" className="label">
        {lable}
      </label>
      <br />
      <input
        value={value}
        id="fname"
        type={type}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
      />
      {infoMessage && <p className="info-message">{infoMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};

export default Input;
