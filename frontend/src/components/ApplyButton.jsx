import React from "react";
import "../styles/LandingHeader.css";

const ApplyButton = ({ text, onClick, color }) => {
  return (
    <button className={color + " apply-btn"} onClick={onClick}>
      {text}
    </button>
  );
};

ApplyButton.defaultProps = {
  text: "Apply now",
};
export default ApplyButton;
