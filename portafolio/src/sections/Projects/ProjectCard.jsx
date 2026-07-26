import { useState, useCallback, useRef, useEffect } from 'react'
import './ProjectCard.css'

const DETAIL_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']
const AUTOPLAY_INTERVAL = 6000

function ProjectCard({ project, index }) {
  const [activeImg, setActiveImg] = useState(0)
  const [direction, setDirection] = useState('next')
  const [animKey, setAnimKey] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const images = project.images || []
  const hasImages = images.length > 0
  const dwgNumber = String(index + 1).padStart(2, '0')

  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const goTo = useCallback((newIndex, dir) => {
    setDirection(dir)
    setActiveImg(newIndex)
    setAnimKey((k) => k + 1)
  }, [])

  useEffect(() => {
    if (!hasImages || images.length < 2 || paused) {
      clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setDirection('next')
      setActiveImg((prev) => (prev + 1) % images.length)
      setAnimKey((k) => k + 1)
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(timerRef.current)
  }, [hasImages, images.length, paused])

  const prev = () => {
    const newIdx = (activeImg - 1 + images.length) % images.length
    goTo(newIdx, 'prev')
  }

  const next = () => {
    const newIdx = (activeImg + 1) % images.length
    goTo(newIdx, 'next')
  }

  return (
    <article className="blueprint-card reveal" style={{ transitionDelay: `${index * 0.06}s` }}>
      <span className="blueprint-card__corner blueprint-card__corner--tl" aria-hidden="true" />
      <span className="blueprint-card__corner blueprint-card__corner--tr" aria-hidden="true" />
      <span className="blueprint-card__corner blueprint-card__corner--bl" aria-hidden="true" />
      <span className="blueprint-card__corner blueprint-card__corner--br" aria-hidden="true" />

      <div
        className="blueprint-card__media"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {hasImages ? (
          <>
            <div className="blueprint-card__img-wrapper" key={animKey}>
              <img
                src={images[activeImg]}
                alt={`${project.title} — vista ${activeImg + 1}`}
                loading="lazy"
                className={`blueprint-card__img blueprint-card__img--slide-${direction}`}
              />
              <span className="blueprint-card__tint" aria-hidden="true" />
            </div>

            {images.length > 1 && (
              <div className="blueprint-card__nav">
                <button type="button" className="blueprint-card__arrow" onClick={prev} aria-label="Vista anterior">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div className="blueprint-card__details">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`blueprint-card__detail ${i === activeImg ? 'blueprint-card__detail--active' : ''}`}
                      onClick={() => goTo(i, i > activeImg ? 'next' : 'prev')}
                      aria-label={`Ver detalle ${DETAIL_LETTERS[i] || i + 1}`}
                    >
                      {DETAIL_LETTERS[i] || i + 1}
                    </button>
                  ))}
                </div>
                <button type="button" className="blueprint-card__arrow" onClick={next} aria-label="Siguiente vista">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            )}

            {images.length > 1 && (
              <div className="blueprint-card__progress-track">
                <div
                  key={animKey}
                  className={`blueprint-card__progress-bar ${paused ? 'blueprint-card__progress-bar--paused' : ''}`}
                />
              </div>
            )}
          </>
        ) : (
          <div className="blueprint-card__placeholder" aria-hidden="true">
            <span>{initials}</span>
          </div>
        )}

        <span className="blueprint-card__dwg">DWG–{dwgNumber}</span>
      </div>

      <div className="blueprint-card__body">
        <div className="blueprint-card__heading">
          <span className="blueprint-card__category">// {project.category}</span>
          <h3 className="blueprint-card__title">{project.title}</h3>
        </div>

        <p className="blueprint-card__desc">{project.description}</p>

        {project.learned && (
          <p className="blueprint-card__note">
            <span>Nota técnica —</span> {project.learned}
          </p>
        )}

        {project.tags?.length > 0 && (
          <div className="blueprint-card__stack">
            <span className="blueprint-card__stack-label">Stack</span>
            <div className="blueprint-card__ruler" aria-hidden="true" />
            <div className="blueprint-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="blueprint-card__tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        <div className="blueprint-card__links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              Ver demo <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repositorio <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
