import SheetSection from '../../components/layout/SheetSection.jsx'
import { personalInfo } from '../../data/personalInfo.js'
import './About.css'

const WORKFLOW_STEPS = [
  {
    id: 'arch',
    label: 'Paso 1',
    heading: 'Arquitectura',
    desc: 'Diseño la estructura del proyecto, separo responsabilidades y organizo el código antes de escribir una sola línea.',
  },
  {
    id: 'front',
    label: 'Paso 2',
    heading: 'Frontend',
    desc: 'Construyo interfaces modernas con React 19, Vite, Tailwind CSS y Zustand.',
  },
  {
    id: 'back',
    label: 'Paso 3',
    heading: 'Backend',
    desc: 'Implemento APIs REST con Node.js, Express, Spring Boot o C#.',
  },
  {
    id: 'deploy',
    label: 'Paso 4',
    heading: 'Deploy',
    desc: 'Contenerizo con Docker, configuro bases de datos y despliego a producción.',
  },
]

const STAT_TAGS = ['React', 'Node', 'Spring Boot', 'PostgreSQL']

function About() {
  return (
    <SheetSection id="sobre-mi" index={2}>
      <div className="about">
        {/* Constellation decoration */}
        <div className="about__constellation" aria-hidden="true">
          <div
            className="about__constellation-line"
            style={{ top: '15%', left: '10%', width: '180px', transform: 'rotate(25deg)' }}
          />
          <div
            className="about__constellation-line"
            style={{ top: '40%', right: '5%', width: '140px', transform: 'rotate(-15deg)' }}
          />
          <div
            className="about__constellation-line"
            style={{ bottom: '25%', left: '30%', width: '200px', transform: 'rotate(40deg)' }}
          />
        </div>

        {/* LEFT: Timeline */}
        <div className="about__timeline">
          <h2 className="about__timeline-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Cómo trabajo
          </h2>

          <div className="timeline">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.id} className={`timeline__step timeline__step--${step.id}`}>
                <div className="timeline__dot">
                  <div className="timeline__dot-inner" />
                </div>
                <div className="timeline__label">{step.label}</div>
                <div className="timeline__heading">{step.heading}</div>
                <div className="timeline__desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Stats Card */}
        <div className="about__stats">
          <div className="about__card">
            <div className="about__hero-stat">
              <div className="about__hero-stat-value">
                {personalInfo.facts.find(f => f.label === 'Experiencia')?.value.split(' ').slice(0, 2).join(' ') || '1+ Año'}
              </div>
              <span className="about__hero-stat-label">Experiencia</span>
            </div>

            <dl className="about__card-facts">
              {personalInfo.facts
                .filter(f => f.label !== 'Experiencia')
                .map((fact) => (
                  <div key={fact.label} className="about__card-fact">
                    <dt>{fact.label}</dt>
                    <dd>
                      {fact.label === 'Stack' ? (
                        <div className="about__tags">
                          {STAT_TAGS.map((tag) => (
                            <span key={tag} className="about__tag">{tag}</span>
                          ))}
                        </div>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </div>
    </SheetSection>
  )
}

export default About
