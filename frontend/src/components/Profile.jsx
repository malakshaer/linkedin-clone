import React from "react";
import Header from "./Header";
import "../styles/profile.css";
import profile from "../assets/profile-image.jpg";
import Button from "../components/Button";
import hiring from "../assets/hiring.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="profile-container">
        <div>
          <div className="info-container">
            <div>
              <img src={profile} alt="profile" />
              <p>
                <b>Malak Shaer</b>
              </p>
              <p>Lebanese University-Faculty of Science</p>
              <span>
                Beirut, Lebanon <a href="#">Content info</a>
              </span>
              <Button text={"Edit"} />
            </div>
          </div>
          <div>
            <div className="education-container">
              <div>
                <h3>Education</h3>
                <Button text={"Edit"} />
              </div>
              <p>Lebanese University</p>
            </div>
          </div>
        </div>
        <div className="profile-left">
          <img src={hiring} alt="hiring" onClick={() => navigate("../Jobs")} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
