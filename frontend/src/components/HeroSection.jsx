import { React } from "react";
import "../styles/heroSection.css";
import heroImage from "../assets/hero-image.svg";
import Login from "./Login";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <Login />
        <div>
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
