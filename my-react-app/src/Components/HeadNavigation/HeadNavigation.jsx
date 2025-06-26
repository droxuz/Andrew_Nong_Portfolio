import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeadNavigation.css";

const MotionLink = motion(Link);

function HeadNavigation() {
  const items = [
    { to: "/",    label: "Home"    },
    { to: "/about", label: "About"   },
    { to: "/project", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      className="naviBar"
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{ delay: 1, duration: 1}}
    >
      <ul>
        {items.map(({to, label}, i) => (
          <li key={to}>
            <MotionLink
              className="navLink"
              to={to}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.25 }}
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
    </motion.nav>
  );
}

export default HeadNavigation;