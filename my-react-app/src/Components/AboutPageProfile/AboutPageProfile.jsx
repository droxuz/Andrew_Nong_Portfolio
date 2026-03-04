import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./AboutPageProfile.css";

import sign from "../../Elements/goldSignature.png";
import snowboard from "../../Elements/mslm_snowboarding.jpeg";
import porsche from "../../Elements/porsche_rennsport.jpeg";
import gym_photo from "../../Elements/gym_photo.jpeg";
import good_eats from "../../Elements/good_eats.jpg";
import chairlift from "../../Elements/chairlift.jpg";

const AboutPageProfile = () => {
  const bio = useMemo(
    () => ({
      name: "Andrew Nong",
      headline: "Software Engineering • Full-Stack • Embedded",
      about: [
        "I’m Andrew, a fourth year Software Engineering student at York University. I’m looking for an opportunity to apply my skills and ship real impact with a strong team.",
        "I build across hardware and software: Arduino + FPGA work (Verilog, MATLAB, Java), and full-stack apps using React, Node.js, Firebase, Python, and PostgreSQL.",
        "Outside of engineering, I’m into fitness, gaming(Deadlock, Dark Souls, EFT), music, snowboarding, anime, and motorsports(F1, GT3).",
      ],
      highlights: [
        "Full-stack: React, Node.js, Firebase, PostgreSQL, Docker",
        "Embedded: Arduino, FPGA(DE10-Lite), Verilog, SystemVerilog",
        "Languages: Java, Python, JavaScript, MATLAB",
      ],
    }),
    []
  );

  const photos = useMemo(
    () => [
      
      { src: gym_photo, alt: "Gym Photo" },
      { src: snowboard, alt: "Snowboarding" },
      { src: porsche, alt: "Porsche Rennsport Photo" },
      { src: good_eats, alt: "Food Photo" },
      { src: chairlift, alt: "Chairlift Photo" },

    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex != null ? photos[activeIndex] : null;

  return (
    <section className="aboutModern">
      <motion.div
        className="aboutCard"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.35 }}
      >
        <div className="aboutHeader">
          <div className="aboutIdentity">
            <img src={sign} alt="Signature" className="aboutSignature" />
            <div>
              <h2 className="aboutTitle">{bio.name}</h2>
              <p className="aboutSubtitle">{bio.headline}</p>
            </div>
          </div>

          <div className="aboutPills">
            {bio.highlights.map((h) => (
              <span key={h} className="aboutPill">
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="aboutBody">
          {bio.about.map((p, i) => (
            <p key={i} className="aboutParagraph">
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="aboutCard"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.35, delay: 0.05 }}
      >
        <div className="aboutGalleryHeader">
          <h3 className="aboutSectionTitle">Gallery</h3>
          <p className="aboutSectionSub">A few snapshots from projects + life.</p>
        </div>

        <div className="aboutGalleryGrid">
          {photos.map((ph, i) => (
            <motion.button
              key={ph.alt}
              className="aboutThumb"
              type="button"
              onClick={() => setActiveIndex(i)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <img className="aboutThumbImg" src={ph.src} alt={ph.alt} loading="lazy" draggable={false} onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()}/>
              <span className="aboutThumbOverlay" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="aboutLightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="aboutLightboxInner"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img className="aboutLightboxImg" src={active.src} alt={active.alt} draggable={false} onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()}/>

              <div className="aboutLightboxControls">
                <button
                  className="aboutBtn"
                  type="button"
                  onClick={() =>
                    setActiveIndex((idx) => (idx == null ? 0 : (idx - 1 + photos.length) % photos.length))
                  }
                >
                  Prev
                </button>

                <button className="aboutBtn" type="button" onClick={() => setActiveIndex(null)}>
                  Close
                </button>

                <button
                  className="aboutBtn"
                  type="button"
                  onClick={() =>
                    setActiveIndex((idx) => (idx == null ? 0 : (idx + 1) % photos.length))
                  }
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutPageProfile;