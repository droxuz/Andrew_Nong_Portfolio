import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import "./HeadNavigation.css";

const MotionLink = motion(Link);

function HeadNavigation() {
  const items = [
    { to: "/",    label: "Home"    },
    { to: "/about", label: "About"   },
    { to: "/project", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ];

  const threshold = 100; //Scroll threshold 
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // hide when scrolling down past threshold
      if (y > threshold && y > lastY.current) {
        setHidden(true);
      }
      // show when scrolling up
      else if (y < lastY.current) {
        setHidden(false);
      }

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <motion.nav 
      className="naviBar"
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
      variants={{
    visible: { y: 0, opacity: 1, pointerEvents: "auto" },
    hidden: { y: "-140%", opacity: 0, pointerEvents: "none" },
  }}

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