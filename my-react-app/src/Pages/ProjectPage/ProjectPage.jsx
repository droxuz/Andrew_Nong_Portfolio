import HeadNavigation from "../../Components/HeadNavigation/HeadNavigation";
import "./ProjectPage.css"
import darksign from '../../Elements/Darksign_29.webp';
function ProjectPage(){
    return(
        <div>
            <HeadNavigation />
            <div className="darksignDiv">
                <img src={darksign} alt="Darksign Symbol" />
            </div>
            <div>
                
            </div>
        </div>
    );
}
export default ProjectPage;

