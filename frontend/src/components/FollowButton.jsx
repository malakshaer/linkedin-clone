import React from "react";
import "../styles/homePage.css";

const FollowButton = ({ text, onClick, color }) => {
  return (
    <button className={color + " follow-btn"} onClick={onClick}>
      {text}
    </button>
  );
};

FollowButton.defaultProps = {
  text: "Follow",
};
export default FollowButton;
