import React from 'react';
import './AboutPageProfile.css';
import image from "../../Elements/logo.svg"
const AboutPageProfile = () => {
  const lines = [
    "Hey, I am Andrew and this is my portfolio that includes some projects that I have worked on previously and currently, I am currently a third year software engineering student at York University and currently looking for an opportunity to showcase my abilities. \n\n I have worked on projects involving hardware and embedded systems such as Arduino, FGPA, while using Verilog, MATLAB, and Java to program functionality. As for the fully software based projects, I have worked on projects including Java, Python, Firebase, React.js, Node.js, PostgreSQL. \n\n Outside of academia and projects I really enjoying lifting, gaming, and music. Some of my favorite games include Dark Souls 3, Elden Ring, Sekiro, and Escape from Tarkov. I am also a motorsport fan and watch F1 races when I can."
  ];

  return (
    <div className="aboutPageProfile">
      <div className="profileHeader">
        <img src={image} alt="image" className='profileIcon' />
        <h2 className="profileTitle">Andrew Nong - Software Engineering | Full-Stack</h2>
      </div>

      <div className="profileContent">
        <p className="profileParagraph">{lines}</p>
      </div>
    </div>
  );
};

export default AboutPageProfile;