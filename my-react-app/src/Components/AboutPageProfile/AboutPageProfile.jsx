import React from 'react';
import './AboutPageProfile.css';
import darksign from "../../Elements/Darksign_29.webp";
import image from "../../Elements/logo.svg"
const AboutPageProfile = () => {
  const lines = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel assumenda id blanditiis atque aliquid sit reprehenderit. Sequi laudantium sed, porro voluptatum rem et modi delectus esse nisi, eligendi facere?"
  ];

  return (
    <div className="aboutPageProfile">
      <div className="profileHeader">
        <img src={image} alt="darksign image" className='profileIcon' />
        <h2 className="profileTitle">Andrew Nong</h2>
      </div>

      <div className="profileContent">
        
        {lines.map((text, i) => (
        <p className="profileParagraph" key={i}>{text}</p>
      ))}
      </div>
    </div>
  );
};

export default AboutPageProfile;