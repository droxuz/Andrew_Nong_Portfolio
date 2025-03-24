import {motion} from "framer-motion";

export const fadeInfromTop = {
    initial: { y: -50, opacity: 0 }, // Start 50px above and invisible
    animate: { y: 0, opacity: 1 }, // Move to original position and fade in  
  };
