import AboutPageProfile from "../../Components/AboutPageProfile/AboutPageProfile";
import HeadNavigation from "../../Components/HeadNavigation/HeadNavigation";
import "./AboutPage.css";

function AboutPage(){
    return(
        <div className="AboutPageDiv">
            <HeadNavigation />
            <AboutPageProfile/>
        </div>
    );
}
export default AboutPage;