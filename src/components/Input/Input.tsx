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
  onChange,
  required = true,
}: Inputprops) => {
  // const className = `input-box input-${variant}`;

  const className = errorMessage ? "input-error " : "input-box ";

  return (
    <>
      <label
        htmlFor="fname"
        className={`${errorMessage ? "label-error" : "label"} ${
          required ? "required" : ""
        }`}
      >
        {lable}
      </label>
      {/* <label htmlFor="fname" className={errorMessage ? "label-error" : "label"}
      ></label> */}
      <br />
      <input
        value={value}
        id="fname"
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={className}
      />
      {infoMessage && <p className="info-message">{infoMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};

export default Input;
