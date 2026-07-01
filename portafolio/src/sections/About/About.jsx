import SheetSection from '../../components/layout/SheetSection.jsx'
import { personalInfo } from '../../data/personalInfo.js'
import './About.css'

function About() {
  return (
    <SheetSection id="sobre-mi" index={2}>
      <div className="about">
        <div className="about__copy reveal">
          <span className="section-kicker">Sobre mí</span>
          <h2 className="section-title">Cómo trabajo</h2>
          {personalInfo.about.map((paragraph, i) => (
            <p key={i} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="about__facts reveal" style={{ transitionDelay: '0.1s' }}>
          {personalInfo.facts.map((fact) => (
            <div key={fact.label} className="about__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SheetSection>
  )
}

export default About
