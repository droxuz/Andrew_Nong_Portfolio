import "./LandingPage.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const MotionLink = motion(Link);

/* ─── Ember particle ─────────────────────────────────────────── */
function Ember({ style }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: 2,
        height: 2,
        borderRadius: "50%",
        background: "#c8860a",
        boxShadow: "0 0 4px 2px #c8860a88",
        ...style,
      }}
      animate={{
        y: [0, -120, -200],
        x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
        opacity: [0, 0.9, 0],
        scale: [1, 1.4, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 4,
        ease: "easeOut",
      }}
    />
  );
}

const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  bottom: `${10 + Math.random() * 30}%`,
}));

const NAV_ITEMS = [
  { label: "About",  to: "/about" },
  { label: "Projects",  to: "/project" },
  { label: "Contact",   to: "/contact" },
];

export default function LandingPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="LandingContainer">
      <div className="Vignette" />

      <motion.div
        className="ScratchLine"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 1.6, ease: "easeInOut" }}
      />

      <div className="EmberLayer">
        {EMBERS.map((e) => (
          <Ember key={e.id} style={{ left: e.left, bottom: e.bottom }} />
        ))}
      </div>

      <motion.div
        className="HeroSection"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
      >
        <motion.p
          className="SubTitle"
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 2, delay: 1.0 }}
        >
          Portfolio
        </motion.p>

        <h1 className="Greeting">
          ANDREW NONG 
        </h1>
      </motion.div>

      <nav className="NavigationBlock">
        <motion.div
          className="Chevron"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          ∧
        </motion.div>

        <ul className="NavigationList">
          {NAV_ITEMS.map((item, i) => {
            const isSelected = hovered === i;
            return (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.08 }}
              >
                <MotionLink
                  to={item.to}
                  className={`NavItem${isSelected ? " NavItem--active" : ""}`}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        className="NavGlow"
                        key="glow"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  {item.label}
                </MotionLink>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          className="Chevron"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          ∨
        </motion.div>
      </nav>

      <motion.footer
        className="FooterCredits"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2 }}
      >
        Portfolio @2026 Andrew Nong
      </motion.footer>
    </div>
  );
}