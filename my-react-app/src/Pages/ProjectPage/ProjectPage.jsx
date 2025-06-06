import { useMemo } from 'react'
import HeadNavigation from "../../Components/HeadNavigation/HeadNavigation"
import ProjectPageSelection from "../../Components/ProjectPageSelection/ProjectPageSelection"
import ProjectPageParticles from '../../Components/ProjectPageParticles/ProjectPageParticles';
import "./ProjectPage.css"

function ProjectPage(){
    const circleBg = useMemo(() => {
    const count  = 25
    const minR   = 5
    const maxR   = 7
    const width  = 500
    const height = 500
    
    
    const circles = Array.from({ length: count })
      .map(() => {
        const r  = Math.random() * (maxR - minR) + minR
        const cx = Math.random() * width
        const cy = Math.random() * height
        return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(210, 70, 21, 0.90)" />`
      })
      .join("")

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${circles}</svg>`
    const encoded = encodeURIComponent(svg)
      .replace(/'/g, "%27")
      .replace(/"/g, "%22")

    return `url("data:image/svg+xml,${encoded}")`
  }, [])

  return (
    <div className="pageLayout"
      
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

