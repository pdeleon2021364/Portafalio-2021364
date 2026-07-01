import Tag from '../../components/ui/Tag.jsx'
import './ProjectCard.css'

function ProjectCard({ project, index }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="project-card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
      <div className="project-card__media">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{initials}</span>
          </div>
        )}
        <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="project-card__body">
        <span className="label-tag">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {project.learned && (
          <p className="project-card__learned">
            <span>Aprendizaje —</span> {project.learned}
          </p>
        )}

        <div className="project-card__tags">
          {project.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="project-card__links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              Ver demo ↗
            </a>
          )}
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repositorio ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
