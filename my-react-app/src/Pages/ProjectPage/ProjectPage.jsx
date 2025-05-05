import HeadNavigation from "../../Components/HeadNavigation/HeadNavigation";
import "./ProjectPage.css"
import darksign from '../../Elements/Darksign_29.webp';
import ProjectPageSelection from "../../Components/ProjectPageSelection/ProjectPageSelection";
function ProjectPage(){
    return(
        <div>
            {/*
            <HeadNavigation />
            <div className="darksignDiv">
                <img src={darksign} alt="Darksign Symbol" />

            </div>
            */}
            <HeadNavigation/>
            <ProjectPageSelection/>
        </div>
    );
}
export default ProjectPage;

