import React from "react";
import "../styles/homePage.css";
import Logo from "../assets/home-logo.png";
// import Home from "../assets/discover.png";
// import Jobs from "../assets/people.svg";
// import notifications from "../assets/learning.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = ({ text }) => {
  const navigate = useNavigate();

  return (
    <div className="top-nav-bar">
      <div className="linkedin-logo-header">
        <img src={Logo} alt="Logo" />
        <input type={text} placeholder="Search"></input>
      </div>

      <div>
        <div>
          <ul className="nav-list">
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Jobs">Jobs</a>
            </li>
            <li>
              <a href="/Notification">Notification</a>
            </li>
            <li>
              <a href="/Profile">Profile</a>
            </li>
            <Button
              className="Sign-out-btn"
              text={"Sign Out"}
              color={"brown"}
              onClick={() => {
                navigate("../LandingPage");
              }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
