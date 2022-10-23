import React from "react";
import Header from "./Header";
import "../styles/job.css";
import companyImage from "../assets/profile-image.jpg";
import Button from "./Button";

const Jobs = () => {
  return (
    <div>
      <Header />
      <div className="job-container">
        <div>
          <h2>Recommended for you</h2>
          <div className="join-card">
            <div>
              <img src={companyImage} alt="company" />
              <span>Name</span>
            </div>
            <p>Text</p>
            <Button className="apply-btn" text={"Apply now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
