import { FiDownload } from "react-icons/fi";
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
    if (password !== confirmPassword) {
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
      <h1 className="heading">HELLO USER</h1>

      <div className="page-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6 ">
              <Input lable="First Name" infoMessage="name should be [a-zA-Z]" />
            </div>
            <div className="col-md-6">
              <Input lable="First Name" />
            </div>
          </div>

          <div className="col-md-12">
            <Input
              lable="Email"
              type="email"
              infoMessage="email should be @gmail.com"
            />
          </div>
          <div className="col-md-12">
            <Input
              lable="Enter Password"
              type="password"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="col-md-12">
            <Input
              lable="Re-Enter Password"
              type="password"
              onChange={handleConfirmPasswordChange}
              errorMessage={error ? error : ""}
            />
          </div>

          <div className="row g-3 ">
            <div className="col-md-6 btn">
              <Button variant="secondary" type="reset" onClick={handleReset}>
                RESET
              </Button>
            </div>
            <div className="col-md-6 btn">
              <Button variant="primary" className="" type="submit">
                SUBMIT
              </Button>
            </div>
          </div>
          <div className="container text-center btn-ter">
            <div className="row btn">
              <Button variant="ternary" className="" type="submit">
                OPEN GOOGLE WEBSITE <FiDownload />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
