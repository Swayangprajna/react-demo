import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./registrationForm.css";
import { RegiFormProps } from "./types";

const RegistrationForm = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const handleReset = () => {
    setPassword("");
    setConfirmPassword("");
    setError("");
  };
  return (
    <>
      <h1 className="heading">HELLO USER </h1>
      <div className="page-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <Input lable="First Name" className="form-control" />
            </div>
            <div className="col">
              <Input lable="First Name" className="form-control" />
            </div>
          </div>

          <div className="col-md-12">
            <Input lable="Email" type="email" className="form-control" />
          </div>
          <div className="col-md-12">
            <Input
              lable="Enter Password"
              type="password"
              className="form-control"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="col-md-12">
            <Input
              lable="Re-Enter Password"
              type="password"
              className="form-control"
              onChange={handleConfirmPasswordChange}
              errorMessage={error ? error : ""}
            />
          </div>

          <div className="btn-container">
            <div className="btn">
              <Button
                variant="secondary"
                type="reset"
                className=""
                onClick={handleReset}
              >
                RESET
              </Button>
            </div>
            <div className="btn">
              <Button variant="primary" className="" type="submit">
                SUBMIT
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
