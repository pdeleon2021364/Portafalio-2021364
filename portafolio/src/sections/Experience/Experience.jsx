import { useEffect, useRef } from 'react'
import SheetSection from '../../components/layout/SheetSection.jsx'
import { experience } from '../../data/experience.js'
import './Experience.css'

function Experience() {
  const listRef = useRef(null)

  useEffect(() => {
    const node = listRef.current
    if (!node) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('experience__list--active')
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <SheetSection id="experiencia" index={6}>
      <div className="experience">
        <div className="experience__head">
          <span className="section-kicker">Trayectoria</span>
          <h2 className="section-title">Evolución profesional</h2>
          <p className="section-sub">De los fundamentos a la experiencia práctica.</p>
        </div>

        <div className="experience__timeline" ref={listRef}>
          {experience.map((item, i) => (
            <div
              key={item.title}
              className="experience__card"
              style={{ '--delay': `${i * 0.2}s` }}
            >
              {/* Rail */}
              <div className="experience__rail">
                <div className="experience__rail-line" />
                <div className="experience__rail-node">
                  <span className="experience__rail-dot" />
                </div>
              </div>

              {/* Content */}
              <div className="experience__content">
                <div className="experience__content-header">
                  <span className="experience__period">{item.period}</span>
                  <span className="experience__place">{item.place}</span>
                </div>

                <h3 className="experience__title">{item.title}</h3>
                <p className="experience__desc">{item.description}</p>

                {item.tags && (
                  <div className="experience__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="experience__tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SheetSection>
  )
}

export default Experience
