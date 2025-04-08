import { fadeInfromTop } from "../../Animations/HeadNavigationAnims";
import "./HeadNavigation.css";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

function HeadNavigation(){
    return(
        <nav className="naviBar">
            <ul>
                <li>
                    <Link to={"/"}>
                    <motion.a
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.5, duration:0.75}}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.25},
                        textShadow: "0px 0px 8px rgb(208, 100, 64)",
                    }}
                    href=""
                    >
                        Home
                    </motion.a>
                    </Link>
                </li>
                    
                <li>
                    <Link to={"/about"}>
                    <motion.a
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition= {{ delay: 0.5, duration: 0.9}}
                    variants={fadeInfromTop}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.25},
                        textShadow: "0px 0px 8px rgb(208, 100, 64)",
                    }}
                    href=""
                    >
                        About
                    </motion.a>
                    </Link>
                </li>

                <li>
                    <Link to={"/project"}>
                    <motion.a
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition= {{ delay: 0.5, duration: 1.1}}
                    variants={fadeInfromTop}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.25},
                        textShadow: "0px 0px 8px rgb(208, 100, 64)",
                    }}
                    href=""
                    >
                        Projects
                    </motion.a>
                    </Link>
                </li>

                <li>
                    <Link to={"/contact"}>
                    <motion.a
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition= {{ delay: 0.5, duration: 1.3}}
                    variants={fadeInfromTop}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.25},
                        textShadow: "0px 0px 8px rgb(208, 100, 64)",
                    }}
                    href=""
                    >
                        Contact
                    </motion.a>
                    </Link>
                </li>
                
            </ul>
        </nav>
    );
}
export default HeadNavigation;