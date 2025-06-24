import React from 'react';
import './AboutPageProfile.css';

const AboutPageProfile = () => {
  const paragraphs = [
    "No Unkindled can ever truly claim the embers that burn within a champion's bosom, which is precisely what makes their yearning for warmth so keen.",
    "Gain the strength of flame and increased max HP until death.",
    "With the strength of fire, the summoning signs of Unkindled become visible, and seekers of embers can be summoned to join in co-operation. But beware, the embers may also attract invaders."
  ];

  return (
    <div className="about-page-profile">
      <div className="profile-header">
        <h2 className="profile-title">Ember</h2>
      </div>

      <div className="profile-content">
        {paragraphs.map((text, i) => (
          <React.Fragment key={i}>
            <p className="profile-paragraph">{text}</p>
            {i < paragraphs.length - 1 && <hr className="profile-separator" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutPageProfile;