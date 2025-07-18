import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.



const ProjectPageParticles = (props) => {

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "rgba(0,0,0,0.5)",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'attract',
          },
        },
        modes: {
          push: {
            quantity:5,
          },
          attract: {
            distance: 175,
            duration: 5,
            factor:0.5,
          },
        },
      },
      particles: {
        color: {
          value: [
            "rgba(210, 70, 21, 1)",
            "rgb(207, 39, 2)",
            "rgb(134, 42, 5)",
          ] 
        },
        links: {
          color: "rgba(0,0,0,0.5)",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 125,
        },
        opacity: {
          value: [
            "1.0",
            "0.5",
            "0.8",
          ]
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ProjectPageParticles;