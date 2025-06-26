import { useMemo } from 'react'
import HeadNavigation from "../../Components/HeadNavigation/HeadNavigation"
import ProjectPageSelection from "../../Components/ProjectPageSelection/ProjectPageSelection"
import ProjectPageParticles from '../../Components/ProjectPageParticles/ProjectPageParticles';
import "./ProjectPage.css"

function ProjectPage(){
  return (
    <div className="ProjectPageLayout"
      
    >
      <div>
      <br />
      <ProjectPageParticles/>
      <HeadNavigation/>
      <ProjectPageSelection/>
      </div>

      
    </div>
  )
}

export default ProjectPage

