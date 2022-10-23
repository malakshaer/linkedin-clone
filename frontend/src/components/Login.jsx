import { React, useState } from "react";
import SignInButton from "./SignInButton";
import { useSignIn } from "../hooks/useSignIn";
import validation from "../validation";
import "../styles/heroSection.css";
// import { useNavigate } from "react-router-dom";

const Login = ({ currentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { mutate: signIn } = useSignIn(setMessage);
  // const navigate = useNavigate();

  const handleSignClick = (signType) => {
    setMessage("");
    if (!validation(signType, email, password)) {
      return setMessage("Not valid inputs");
    }

    signType = signIn({ email, password });
  };

  return (
    <div>
      {!currentUser && (
        <div className="left-container-landing">
          <h1>Welcome to your professional community</h1>
          <form>
            <input
              name="Email"
              type={"email"}
              value={email}
              placeholder="Email"
              onClick={() => setEmail()}
            ></input>
            <input
              name="Password"
              type={"password"}
              value={password}
              placeholder="Password"
              onClick={() => setPassword()}
            />
            <div className="invalid-msg">{message}</div>
            <SignInButton onClick={() => handleSignClick(signIn)} />
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
