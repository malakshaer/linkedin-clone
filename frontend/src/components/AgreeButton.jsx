import React from "react";

const AgreeButton = ({ text, onClick, color }) => {
  return (
    <button className={color + " Sign-in-btn"} onClick={onClick}>
      {text}
    </button>
  );
};

AgreeButton.defaultProps = {
  text: "Agree & Join",
};
export default AgreeButton;
