import './LandingPage.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
function LandingPage(){
    return(
        <div className="LandingContainer">
            
            <div className="WelcomeMSG">
                <h1 className='Greeting'>Welcome</h1>
                <p></p>
            </div>
            
            <div className="NavigationBlock">
                <ul className="NavigationList">

                    <li>
                        <Link to={"/about"}>
                        <motion.a
                        whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.75},
                            textShadow: "0px 0px 8px rgb(208, 100, 64)",}}
                        href="">
                        ABOUT
                        </motion.a>
                        </Link>
                    </li>

                    <li>
                        <Link to={"/project"}>
                        <motion.a 
                        whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.75},
                            textShadow: "0px 0px 8px rgb(208, 100, 64)",}} 
                        href="">
                        PROJECTS
                        </motion.a>
                        </Link>
                    </li>

                    <li>
                        <Link to={"/contact"}>
                        <motion.a 
                        whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.75},
                            textShadow: "0px 0px 8px rgb(208, 100, 64)",}} 
                        href="">
                        CONTACT
                        </motion.a>
                        </Link>
                    </li>

                    
                </ul>
            </div>
        </div>
        
        
    );
}
export default LandingPage;