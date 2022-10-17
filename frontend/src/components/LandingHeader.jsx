import React, { useRef } from "react";
import "../styles/LandingHeader.css";
import Logo from "../assets/linkedin-logo.svg";
import discover from "../assets/discover.png";
import people from "../assets/people.svg";
import learning from "../assets/learning.svg";
import jobs from "../assets/jobs.svg";
import JoinButton from "./JoinButton";
import SignInButton from "./SignInButton";

const navLinks = [
  {
    image: { discover },
    display: "Discover",
    url: "#",
  },
  {
    image: { people },
    display: "People",
    url: "#",
  },

  {
    image: { learning },
    display: "Learning",
    url: "#",
  },
  {
    image: { jobs },
    display: "Jobs",
    url: "#",
  },
];

const LandingHeader = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <div className="top-nav-bar">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <div ref={menuRef} onClick={menuToggle}>
          <ul className="nav-list">
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.url}>{item.display}</a>
              </li>
            ))}
            <div>|</div>
            <JoinButton />
            <SignInButton />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LandingHeader;
