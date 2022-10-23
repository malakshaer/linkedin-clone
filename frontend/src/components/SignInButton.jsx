import React from "react";
// import { useNavigate } from "react-router-dom";

const SignInButton = ({ text, onClick, color }) => {
  // const navigate = useNavigate();
  return (
    <button className={color + " Sign-in-btn"} onClick={onClick}>
      {text}
    </button>
  );
};

SignInButton.defaultProps = {
  text: "Sign in",
};
export default SignInButton;
