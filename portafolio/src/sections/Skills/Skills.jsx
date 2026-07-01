import SheetSection from '../../components/layout/SheetSection.jsx'
import GaugeBar from '../../components/ui/GaugeBar.jsx'
import { skillGroups } from '../../data/skills.js'
import './Skills.css'

function Skills() {
  return (
    <SheetSection id="habilidades" index={3} tone="dark">
      <div className="skills">
        <div className="skills__head reveal">
          <span className="section-kicker skills__kicker">Habilidades</span>
          <h2 className="section-title skills__title">Caja de herramientas</h2>
          <p className="section-sub skills__sub">
            Agrupadas por especialidad, con el nivel actual de cada una.
          </p>
        </div>

        <div className="skills__groups">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="skills__group reveal"
              style={{ transitionDelay: `${gi * 0.06}s` }}
            >
              <div className="skills__group-head">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="skills__group-bars">
                {group.skills.map((skill) => (
                  <GaugeBar
                    key={skill.name}
                    label={skill.name}
                    level={skill.level}
                    status={skill.status}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SheetSection>
  )
}

export default Skills
