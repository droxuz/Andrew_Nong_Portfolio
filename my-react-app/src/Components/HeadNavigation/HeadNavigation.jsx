import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import "./HeadNavigation.css";

const MotionLink = motion(Link);

const Icons = {
  Home: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5L12 3l9 7.5V21H15v-6H9v6H3V10.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  About: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Projects: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Contact: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 5H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

const items = [
  { to: "/",        label: "Home",     Icon: Icons.Home     },
  { to: "/about",   label: "About",    Icon: Icons.About    },
  { to: "/project", label: "Projects", Icon: Icons.Projects },
  { to: "/contact", label: "Contact",  Icon: Icons.Contact  },
];

function HeadNavigation() {
  const location = useLocation();

  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 100 && y > lastY.current) setHidden(true);
      else if (y < lastY.current) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="dsNav"
      aria-label="Primary"
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden:  { y: "-130%", opacity: 0 },
      }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {/* top filigree bar */}
      <div className="dsNav__topBar" aria-hidden="true">
        <span className="dsNav__topBar-line" />
        <span className="dsNav__topBar-diamond" />
        <span className="dsNav__topBar-line" />
      </div>

      <ul className="dsNav__list">
        {items.map(({ to, label, Icon }, i) => {
          const isActive = location.pathname === to;
          return (
            <li key={to} className="dsNav__item">
              <MotionLink
                to={to}
                className={`dsNav__tab${isActive ? " dsNav__tab--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06, duration: 0.22 }}
              >
                {/* icon slot — the gilded square */}
                <span className="dsNav__iconSlot" aria-hidden="true">
                  <Icon />
                  {/* active shimmer overlay */}
                  {isActive && (
                    <motion.span
                      className="dsNav__iconShimmer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>

                <span className="dsNav__label">{label}</span>

                {/* active underline */}
                {isActive && (
                  <motion.span
                    className="dsNav__activeBar"
                    layoutId="activeBar"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </MotionLink>
            </li>
          );
        })}
      </ul>

      {/* bottom filigree bar */}
      <div className="dsNav__bottomBar" aria-hidden="true">
        <span className="dsNav__topBar-line" />
        <span className="dsNav__topBar-diamond" />
        <span className="dsNav__topBar-line" />
      </div>
    </motion.nav>
  );
}

export default HeadNavigation;