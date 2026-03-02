import "./ContactPageInfo.css";
import { motion } from "framer-motion";
import githubWhiteSVG from "../../Elements/github-mark-white.svg";
import gmailFull from "../../Elements/google_gmail_icon.svg";
import linkedinIcon from "../../Elements/linkedin-icon.svg";

export default function ContactPageInfo() {
  const contacts = [
    {
      label: "GitHub",
      sub: "@droxuz",
      href: "https://github.com/droxuz",
      icon: githubWhiteSVG,
      aria: "GitHub profile",
    },
    {
      label: "Email",
      sub: "andrewnong54@gmail.com",
      href: "mailto:andrewnong54@gmail.com?subject=Portfolio%20Inquiry",
      icon: gmailFull,
      aria: "Send email",
    },
    {
      label: "LinkedIn",
      sub: "in/andrew-nong-yorku",
      href: "https://www.linkedin.com/in/andrew-nong-yorku",
      icon: linkedinIcon,
      aria: "LinkedIn profile",
    },
  ];

  return (
    <section className="contactWrap">
      <header className="contactHeader">
        <motion.h2
          className="contactTitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="contactSubtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
        >
          Reach out for internships, collaborations, or questions about my projects.
        </motion.p>
      </header>

      <div className="contactGrid">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            className="contactCard"
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={c.aria}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.06 }}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="contactIconWrap" aria-hidden="true">
              <img className="contactIcon" src={c.icon} alt="" />
            </div>

            <div className="contactText">
              <div className="contactRow">
                <span className="contactLabel">{c.label}</span>
                <span className="contactArrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <span className="contactSub">{c.sub}</span>
            </div>
          </motion.a>
        ))}
      </div>

      <footer className="contactFooter">
        <p className="contactFooterText">
          Prefer a quick message? Email is best. I usually reply within 24–48 hours.
        </p>
      </footer>
    </section>
  );
}