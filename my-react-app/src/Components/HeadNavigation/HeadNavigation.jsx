import { fadeInfromTop } from "../../Animations/HeadNavigationAnims";
import "./HeadNavigation.css";
import {motion} from 'framer-motion';

function HeadNavigation(){
    return(
        <nav class="naviBar">
            <ul>
                <li>
                    <motion.a
                    initial="initial"
                    animate="animate"
                    transition= {{ delay: 0.5, duration: 0.7}}
                    variants={fadeInfromTop}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.5},
                        textShadow: "0px 0px 8px rgb(215, 160, 252)",
                    }}
                    href=""
                    >
                        Home
                </motion.a></li>
                <li>
                    <motion.a
                    initial="initial"
                    animate="animate"
                    transition= {{ delay: 0.5, duration: 0.9}}
                    variants={fadeInfromTop}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.5},
                        textShadow: "0px 0px 8px rgb(215, 160, 252)",
                    }}
                    href=""
                    >
                        About
                    </motion.a>
                </li>

                <li>
                    <motion.a
                    initial="initial"
                    animate="animate"
                    transition= {{ delay: 0.5, duration: 1.1}}
                    variants={fadeInfromTop}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.5},
                        textShadow: "0px 0px 8px rgb(215, 160, 252)",
                    }}
                    href=""
                    >
                        Projects
                    </motion.a>
                </li>

                <li>
                    <motion.a
                    initial="initial"
                    animate="animate"
                    transition= {{ delay: 0.5, duration: 1.3}}
                    variants={fadeInfromTop}
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.5},
                        textShadow: "0px 0px 8px rgb(215, 160, 252)",
                    }}
                    href=""
                    >
                        Contact
                    </motion.a>
                </li>
                
            </ul>
        </nav>
    );
}
export default HeadNavigation;