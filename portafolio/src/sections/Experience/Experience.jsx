import SheetSection from '../../components/layout/SheetSection.jsx'
import { experience } from '../../data/experience.js'
import './Experience.css'

function Experience() {
  return (
    <SheetSection id="experiencia" index={6}>
      <div className="experience">
        <div className="experience__head reveal">
          <span className="section-kicker">Experiencia</span>
          <h2 className="section-title">Línea de tiempo</h2>
          <p className="section-sub">Formación y práctica, en orden cronológico.</p>
        </div>

        <ol className="experience__list">
          {experience.map((item, i) => (
            <li
              key={item.title}
              className="experience__item reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="experience__period label-tag">{item.period}</div>
              <div className="experience__dot" aria-hidden="true" />
              <div className="experience__content">
                <h3>{item.title}</h3>
                <p className="experience__place">{item.place}</p>
                <p className="experience__desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SheetSection>
  )
}

export default Experience
