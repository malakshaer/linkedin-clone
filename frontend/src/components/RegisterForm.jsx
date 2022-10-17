import React from "react";
import "../styles/registerSection.css";
import AgreeButton from "./AgreeButton";
import SignInButton from "./SignInButton";

const RegisterForm = ({ text }) => {
  return (
    <div className="register-section">
      <h1>Make the most of your professional life</h1>
      <form className="register-form">
        <label> Full Name</label>
        <input type={text}></input>
        <br />
        <label>Email</label>
        <input type={text}></input>
        <br />
        <label>Password (6 or more character)</label>
        <input type={text}></input>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <span> User Agreement, Privacy Policy,</span> and{" "}
          <span>Cookie Policy.</span>
        </p>
        <AgreeButton />
        <div>
          <span>Already on LinkedIn?</span>
          <SignInButton />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
