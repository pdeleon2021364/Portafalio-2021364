import Tag from '../../components/ui/Tag.jsx'
import './ProjectStackCard.css'

function ProjectStackCard({ project }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="stack-card">
      <div className="stack-card__media">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="stack-card__placeholder" aria-hidden="true">
            <span>{initials}</span>
          </div>
        )}
      </div>
      <div className="stack-card__body">
        <span className="stack-card__category">{project.category}</span>
        <h3 className="stack-card__title">{project.title}</h3>
        <p className="stack-card__desc">{project.description}</p>
        {project.learned && (
          <p className="stack-card__learned">
            <span>Aprendizaje</span> — {project.learned}
          </p>
        )}
        <div className="stack-card__tags">
          {project.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="stack-card__links">
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

export default ProjectStackCard
