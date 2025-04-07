import './LandingPage.css'

import HeadNavigation from '../../Components/HeadNavigation/HeadNavigation';
import {motion} from 'framer-motion'
function LandingPage(){
    return(
        <div className="LandingContainer">
            
            <div className="WelcomeMSG">
            <h1 className='Greeting'>Welcome</h1>
            <p className='Greeting'>I am Andrew and this is my portfolio</p>
            </div>
            
            <div className="NavigationBlock">
                <ul className="NavigationList">

                    <li>
                        <motion.a
                        whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.75},
                            textShadow: "0px 0px 8px rgb(215, 160, 252)",}}
                        href="">
                        ABOUT
                        </motion.a>
                    </li>

                    <li>
                        <motion.a 
                        whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.75},
                            textShadow: "0px 0px 8px rgb(215, 160, 252)",}} 
                        href="">
                        PROJECTS
                        </motion.a>
                    </li>

                    <li>
                        <motion.a 
                        whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.75},
                            textShadow: "0px 0px 8px rgb(215, 160, 252)",}} 
                        href="">
                        CONTACT
                        </motion.a>
                    </li>

                    
                </ul>
            </div>
        </div>
        
        
    );
}
export default LandingPage;