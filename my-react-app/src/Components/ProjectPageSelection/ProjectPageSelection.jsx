import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ProjectPageSelection.css";
import HideoutHelperImage from "../../Elements/HideoutHelperImage.png";
import TiltTerrainImage from "../../Elements/rc_car.jpeg";
import WaterWizardImage from "../../Elements/WaterWizard.jpg";
import PlatePlanImage from "../../Elements/PlatePlan.png";
import PowderPredictorImage from "../../Elements/PowderPredictorImage.png";

export default function ProjectCards({
  projects = [
    {
      title: "Automatic Plant Watering System",
      description:
        "Developed an automated IoT-based plant watering system using Arduino Grove sensors and pump control. Implemented moisture-based decision logic with Java (Firmata) integration, and built real-time data visualization using StdDraw to monitor soil conditions.",
      href: "https://github.com/droxuz/PlantWateringSystem",
      linkLabel: "GitHub Repo",
      image: { src: WaterWizardImage, alt: "Automatic Plant Watering System preview" },
      keywords: ["Embedded Systems", "IoT", "Automation"],
      meta: "Java • Arduino • Firmata • Sensors • Data Visualization • Hardware Control",
    },
    {
      title: "HideoutHelper",
      description:
        "Built a full-stack web application to track Escape From Tarkov hideout upgrades, implementing dynamic UI rendering and NoSQL data modeling. Utilized Firebase Firestore for real-time data storage and hosting for deployment.",
      href: "https://hideouthelper-7c1a6.web.app/",
      linkLabel: "ENTER",
      image: { src: HideoutHelperImage, alt: "HideoutHelper project preview" },
      keywords: ["Full-Stack", "Firebase", "NoSQL"],
      meta: "JavaScript • React • Firestore • Firebase Hosting • Dynamic UI",
    },
    {
      title: "FPGA Bluetooth Controlled Car",
      description:
        "Designed and implemented an embedded system on an FPGA (DE10-Lite) using SystemVerilog, integrating SPI-based sensor communication and PWM motor control for real-time navigation. Enabled wireless control via ESP32 and implemented ultrasonic-based obstacle detection.",
      href: "https://github.com/droxuz/fpga-rc-car",
      linkLabel: "GitHub",
      image: { src: TiltTerrainImage, alt: "FPGA Bluetooth Controlled Car preview" },
      keywords: ["FPGA", "Embedded Systems", "Hardware Design"],
      meta: "SystemVerilog • DE10-Lite • ESP32 • SPI • PWM • Ultrasonic Sensing",
    },
    {
      title: "PlatePlan",
      description:
        "Developed a desktop-based restaurant management system using Java and PostgreSQL, supporting reservations, table management, authentication, and reporting. Implemented a GUI with Java Swing and structured relational database design.",
      href: "https://github.com/droxuz/Plate_Plan",
      linkLabel: "GitHub",
      image: { src: PlatePlanImage, alt: "PlatePlan project preview" },
      keywords: ["Java", "Full-Stack", "Relational Database"],
      meta: "Java • PostgreSQL • Swing • CRUD • Authentication • Reporting",
    },
    {
      title: "Powder Predictor",
      description:
        "Built a full-stack web application for analyzing ski conditions using real-time weather data. Designed a ‘powder score’ algorithm (0–100) based on snowfall, temperature, and wind, with data aggregation and forecasting powered by external APIs.",
      href: "https://powder-predictor.vercel.app/",
      linkLabel: "ENTER",
      image: { src: PowderPredictorImage, alt: "Powder Predictor project preview" },
      keywords: ["Full-Stack", "Next.js", "API Integration"],
      meta: "Next.js • TypeScript • PostgreSQL • Open-Meteo API • Data Aggregation • Forecasting",
    },
  ],
}) {
  const [active, setActive] = useState(null);

  const activeProject = useMemo(() => {if (active == null) return null; return projects[active] ?? null;}, [active, projects]);

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