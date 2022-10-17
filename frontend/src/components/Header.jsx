import React, { useRef } from "react";
import "../styles/homePage.css";
import Logo from "../assets/home-logo.png";
import Home from "../assets/discover.png";
import Jobs from "../assets/people.svg";
import notifications from "../assets/learning.svg";
import SignOutButton from "./SignOutButton";

const Header = ({ text }) => {
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
            <SignOutButton />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
