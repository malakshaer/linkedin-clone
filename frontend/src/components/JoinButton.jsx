import React from "react";
import "../styles/LandingHeader.css";
import { useNavigate } from "react-router-dom";

const JoinButton = ({ text, color }) => {
  const navigate = useNavigate();
  return (
    <button
      className={color + " join-btn"}
      onClick={() => {
        navigate("../RegisterPage");
      }}
    >
      {text}
    </button>
  );
};

JoinButton.defaultProps = {
  text: "Join now",
};
export default JoinButton;
