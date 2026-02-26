import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import "./HeadNavigation.css";

const MotionLink = motion(Link);

function HeadNavigation() {
  const location = useLocation();

  const items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/project", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const threshold = 100;
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > threshold && y > lastY.current) setHidden(true);
      else if (y < lastY.current) setHidden(false);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="naviBar rpgNav"
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeOut" }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-120%", opacity: 0 },
      }}
      aria-label="Primary"
    >
      <ul className="rpgNavList">
        {items.map(({ to, label }, i) => {
          const isActive = location.pathname === to;
          return (
            <li key={to} className="rpgNavItem">
              <MotionLink
                to={to}
                className={`navLink rpgNavLink ${isActive ? "active" : ""}`}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06, duration: 0.2 }}
                whileHover={{
                  scale: 1.06,
                  textShadow: "0 0 10px rgb(208,100,64)",
                }}
              >
                {label}
                <span className="rpgUnderline" aria-hidden="true" />
              </MotionLink>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

export default HeadNavigation;