import AboutPageProfile from "../../Components/AboutPageProfile/AboutPageProfile";
import HeadNavigation from "../../Components/HeadNavigation/HeadNavigation";
import ProjectPageParticles from "../../Components/ProjectPageParticles/ProjectPageParticles";
import "./AboutPage.css";

function AboutPage(){
    return(
        <div className="AboutPageDiv">
            <ProjectPageParticles className="particles"/>
            <HeadNavigation/>
            <AboutPageProfile className="profile"/>
        </div>
    );
}
export default AboutPage;