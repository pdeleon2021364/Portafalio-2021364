import SheetSection from '../../components/layout/SheetSection.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <SheetSection id="proyectos" index={5}>
      <div className="blueprint-projects">
        <div className="blueprint-projects__head reveal">
          <span className="blueprint-projects__stamp">Sala de planos</span>
          <h2 className="blueprint-projects__title">Planos de lo construido</h2>
          <p className="blueprint-projects__sub">
            Cada proyecto, tendido como un plano técnico. Pasa el cursor sobre una vista
            para revelar el sistema terminado.
          </p>
        </div>

        <div className="blueprint-projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SheetSection>
  )
}

export default Projects
