// HeadNavigation.js
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeadNavigation.css";

// wrap the router Link so it accepts Framer props
const MotionLink = motion(Link);

function HeadNavigation() {
  const items = [
    { to: "/",    label: "Home"    },
    { to: "/about", label: "About"   },
    { to: "/project", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="naviBar">
      <ul>
        {items.map(({to, label}, i) => (
          <li key={to}>
            <MotionLink
              className="navLink"
              to={to}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.25 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgb(208,100,64)"
              }}
            >
              {label}
            </MotionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeadNavigation;