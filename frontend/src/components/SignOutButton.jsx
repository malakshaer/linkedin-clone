import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutButton = ({ text, onClick, color }) => {
  const navigate = useNavigate();

  return (
    <button
      className={color + " Sign-out-btn"}
      onClick={() => {
        navigate("../LandingPage");
      }}
    >
      {text}
    </button>
  );
};

SignOutButton.defaultProps = {
  text: "Sign Out",
};
export default SignOutButton;
