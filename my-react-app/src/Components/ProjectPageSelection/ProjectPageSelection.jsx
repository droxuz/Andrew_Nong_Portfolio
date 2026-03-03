import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ProjectPageSelection.css";
import HideoutHelperImage from "../../Elements/HideoutHelperImage.png";
import TiltTerrainImage from "../../Elements/rc_car.jpeg";
import WaterWizardImage from "../../Elements/WaterWizard.jpg";
import PlatePlanImage from "../../Elements/PlatePlan.png";

export default function ProjectCards({
  projects = [
    {
      title: "Automatic Plant Watering System",
      description:
        "Automated plant watering system using Arduino Grove, moisture sensing, and pump control. Java (Firmata) drives hardware while a live StdDraw graph visualizes moisture over time.",
      href: "https://github.com/droxuz/PlantWateringSystem",
      linkLabel: "GitHub Repo",
      image: { src: WaterWizardImage, alt: "WaterWizard project preview" },
      keywords: ["Arduino", "IoT", "Automation"],
      meta: "Java • Firmata • Sensors • MOSFET • Data visualization",
    },
    {
      title: "HideoutHelper",
      description:
        "Web app for Escape From Tarkov players to track hideout upgrades. Built with HTML/CSS/JavaScript and Firebase (Firestore + hosting) to learn full-stack fundamentals and NoSQL design.",
      href: "https://github.com/droxuz/HideoutHelper",
      linkLabel: "GitHub Repo",
      image: { src: HideoutHelperImage, alt: "HideoutHelper project preview" },
      keywords: ["Firebase", "NoSQL", "Web App"],
      meta: "JavaScript • Firestore • Full-Stack • UI/UX",
    },
    {
      title: "FPGA Bluetooth Controlled Car",
      description:
        "Designed and implemented in Verilog on a DE10-Lite board, integrating SPI-based sensor acquisition and PWM motor control for real-time speed and direction adjustment. Ultrasonic sensing enabled obstacle detection, while ESP32 wireless communication provided remote control capability. Demonstrates real time embedded systems design and hardware and software integration.",
      href: "",
      linkLabel: "",
      image: { src: TiltTerrainImage, alt: "FPGA Bluetooth-Controlled Car project preview" },
      keywords: ["FPGA", "Verilog", "Embedded"],
      meta: "DE10-Lite • ESP32 • SPI • Motor Control • Ultrasonic Sensor",
    },
    {
      title: "PlatePlan",
      description:
        "Standalone Java + PostgreSQL restaurant management system with reservations, table management, menus, analytics-ready data, and authentication. Built with a team; Java Swing for GUI.",
      href: "https://github.com/droxuz/Plate_Plan",
      linkLabel: "GitHub Repo",
      image: { src: PlatePlanImage, alt: "PlatePlan project preview" },
      keywords: ["Java", "PostgreSQL", "Full Stack"],
      meta: "Desktop app • Auth • CRUD • Reporting",
    },
  ],
}) {
  const [active, setActive] = useState(null);

  const activeProject = useMemo(() => {if (active == null) return null; return projects[active] ?? null;}, [active, projects]);
  //Whenever active or projects changes recalculate activeProject. If active is null, return null. Otherwise return projects[active] if it exists, else return null.

  const preloadProject = async (idx) => {
  const src = projects[idx]?.image?.src;
    if (!src) return;
    const img = new Image();
    img.src = src;
      if (img.decode) {
        try { await img.decode(); } catch {}
      } 
  };

  return (
    <section className="projectsSection">
      <header className="projectsHeader">
        <h2 className="projectsTitle">Projects</h2>
        <p className="projectsSubtitle">
          Selected work across hardware, web, and software systems.
        </p>
      </header>

      <div className="projectsGrid">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            className="projectCard"
            initial={ false }
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.15, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            onHoverStart={() => preloadProject(idx)}
            onFocus={() => preloadProject(idx)}
            onClick={() => { setActive(idx);}}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(idx);
            }}
          >
            <div className="projectImageWrap">
              <img className="projectImage" src={p.image.src} alt={p.image.alt} />
              <div className="projectImageOverlay" />
            </div>

            <div className="projectBody">
              <div className="projectTopRow">
                <h3 className="projectName">{p.title}</h3>
                <span className="projectMeta">{p.meta}</span>
              </div>

              <p className="projectDesc">{p.description}</p>

              <div className="projectTags">
                {p.keywords.slice(0, 3).map((k) => (
                  <span key={k} className="projectTag">
                    {k}
                  </span>
                ))}
              </div>

              <div className="projectCtaRow">
                <span className="projectCta">View details</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="projectOverlay"
            onClick={() => setActive(null) }
            
          >
            <motion.div
              className="projectModal"
              initial={{ opacity: 0.25, y: 16, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "tween", duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="projectModalTop">
                <div>
                  <h3 className="projectModalTitle">{activeProject.title}</h3>
                  <div className="projectModalTags">
                    {activeProject.keywords.slice(0, 3).map((k) => (
                      <span key={k} className="projectTag">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="projectModalClose" onClick={() => setActive(null)}>
                  Close
                </button>
              </div>

              <div className="projectModalGrid">
                <div className="projectModalLeft">
                  <p className="projectModalDesc">{activeProject.description}</p>

                  {activeProject.href ? (
                    <a
                      className="projectModalLink"
                      href={activeProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {activeProject.linkLabel || "Project Link"}
                    </a>
                  ) : (
                    <span className="projectModalMuted">Link not available</span>
                  )}

                  <div className="projectModalMeta">{activeProject.meta}</div>
                </div>

                <div className="projectModalRight">
                  <img
                    className="projectModalImage"
                    src={activeProject.image.src}
                    alt={activeProject.image.alt}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}