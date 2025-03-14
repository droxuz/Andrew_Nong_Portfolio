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