import React from "react";
import "../App.css";

const Button = ({ text, onClick, color }) => {
  return (
    <button className={color + " btn"} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
