import HeadNavigation from "../../Components/HeadNavigation/HeadNavigation";
import "./ProjectPage.css"
import darksign from '../../Elements/Darksign_29.webp';
import ProjectPageSelection from "../../Components/ProjectPageSelection/ProjectPageSelection";

function ProjectPage(){
    return(
        <div className="pageLayout">
            
            <HeadNavigation/>
            <div className="selectionWheel">
                <ProjectPageSelection/>
            </div>

            <div className="footerLayout">
                
            </div>
            
        </div>
    );
}
export default ProjectPage;

