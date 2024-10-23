import React from "react";
import "./input.css";
import { Inputprops } from "./types";

const Input = ({
  type = "text",
  disabled = false,
  placeholder = "",
  lable,
  infoText,
}: Inputprops) => {
  // const className = `input-box input-${variant}`;
  const className = "input-box";

  return (
    <>
      <label htmlFor="fname" className="label">
        {lable}
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
