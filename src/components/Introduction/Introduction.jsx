import "./Introduction.css";
import React from "react";
//import { FaLinkedin, FaXing, FaRegShareSquare } from 'react-icons/fa'; // Assuming you're using React Icons for the icons

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <img src="profilepic.jpg" alt="profile" clasName="pofilepic" />
      <h1>Software engineer student, and believer</h1>
      <p>
      Welcome to my portfolio, where software engineering prowess meets student curiosity and belief in something greater. Here, you'll find a collection of my projects reflecting both technical skill and a commitment to purpose-driven innovation. Let's explore the intersection of technology, learning, and faith together.
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/angelina-marchuk-7494762b0/" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.xing.com/profile/yourprofile" target="_blank" rel="noopener noreferrer"></a>
        <a href="/share" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};

export default ProfileSection;
