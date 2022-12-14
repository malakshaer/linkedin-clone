import React from "react";
import profile_image from "../assets/profile-image.jpg";
import Button from "./Button";
import Header from "./Header";
import companyImage from "../assets/profile-image.jpg";
import post from "../assets/post-image.jpg";
import "../styles/homePage.css";

const posts = [
  {
    ProfileImage: { profile_image },
    name: "Malak",
    text: "Good Morning",
  },
];

const users = [
  {
    profile_image: { profile_image },
    name: "Mark",
  },
];

const Body = ({ user_name, name, text }) => {
  return (
    <div>
      <Header />
      <div className="body-container">
        <div className="left-container">
          <p>Welcome {user_name}</p>
        </div>
        <div className="center-container">
          <div className="enter-post">
            <img src={profile_image} alt="profile" />
            <input type={text} placeholder="Start a post"></input>
          </div>
          <div>
            <hr />
          </div>
          <div className="post-container">
            <div className="post-card">
              <div>
                <img src={companyImage} alt="company" />
                <span>Name</span>
              </div>
              <p>Text</p>
              <img src={post} alt="post" />
            </div>
          </div>
        </div>
        <div className="right-container">
          <h3>Add to your feed</h3>
          <div>
            {users.map((profile_image, name) => (
              <div>
                <img src={profile_image} alt="profile" />
                <span>{name}</span>
                <Button text={"Follow"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
// <div>
//           {posts.map((profileImage, name, text, index) => (
//             <li key={index} className="post-item">
//               <div>
//                 <img src={profileImage} alt="profilePhoto" />
//                 <p>{name}</p>
//               </div>
//               <div>
//                 <p>{text}</p>
//               </div>
//             </li>
//           ))}
//         </div>
