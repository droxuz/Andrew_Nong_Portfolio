import "./LandingPage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

function LandingPage() {
  return (
    <div className="LandingContainer">
      <div className="HeroSection">
        <motion.h1
          className="Greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome
        </motion.h1>

        <motion.h2
          className="SubTitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Andrew's Portfolio
        </motion.h2>
      </div>

      <nav className="NavigationBlock">
        <ul className="NavigationList">
          <li>
            <MotionLink
              to="/about"
              className="NavItem"
              whileHover={{ scale: 1.08 }}
            >
              ABOUT
            </MotionLink>
          </li>

          <li>
            <MotionLink
              to="/project"
              className="NavItem"
              whileHover={{ scale: 1.08 }}
            >
              PROJECTS
            </MotionLink>
          </li>

          <li>
            <MotionLink
              to="/contact"
              className="NavItem"
              whileHover={{ scale: 1.08 }}
            >
              CONTACT
            </MotionLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingPage;