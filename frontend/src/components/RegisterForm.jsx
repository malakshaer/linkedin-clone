import { React, useState } from "react";
import "../styles/registerSection.css";
import { useSignUp } from "../hooks/useSignUp";
import AgreeButton from "./AgreeButton";
import SignInButton from "./SignInButton";
import validation from "../validation";

const RegisterForm = ({ currentUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState("");
  const { mutate: signUp } = useSignUp(setMessage);

  const handleSignClick = (signType) => {
    setMessage("");
    let type = selected;
    if (!validation(signType, email, password, name, type))
      return setMessage("Not valid inputs");

    signType = signUp({ type, name, email, password });
  };

  return (
    <>
      {!currentUser && (
        <div className="register-section">
          <h1>Make the most of your professional life</h1>
          <form className="register-form">
            <label> Full Name</label>
            <input
              name="Name"
              type={"Name"}
              value={name}
              setSelected={setSelected}
              onClick={() => setName()}
            ></input>
            <br />
            <label>Email</label>
            <input
              name="Email"
              type={"email"}
              value={email}
              onClick={() => setEmail()}
            ></input>
            <br />
            <label>Password (6 or more character)</label>
            <input
              name="Password"
              type={"password"}
              value={password}
              onClick={() => setPassword()}
            />
            <p>
              By clicking Agree & Join, you agree to the LinkedIn
              <span> User Agreement, Privacy Policy,</span> and{" "}
              <span>Cookie Policy.</span>
            </p>
            <AgreeButton onClick={() => handleSignClick("signup")} />
            <div>
              <span>Already on LinkedIn?</span>
              <SignInButton />
            </div>
            <div className="invalid-msg">{message}</div>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
