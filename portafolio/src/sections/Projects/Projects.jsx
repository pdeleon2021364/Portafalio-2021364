import SheetSection from '../../components/layout/SheetSection.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <SheetSection id="proyectos" index={5}>
      <div className="projects">
        <div className="projects__head reveal">
          <span className="section-kicker">Proyectos</span>
          <h2 className="section-title">Trabajo construido</h2>
          <p className="section-sub">
            Una selección de proyectos: qué hacen, qué aprendí y dónde verlos.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SheetSection>
  )
}

export default Projects
