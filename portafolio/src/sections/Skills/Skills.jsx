import { useState } from 'react'
import SheetSection from '../../components/layout/SheetSection.jsx'
import SkillRow from '../../components/ui/SkillChip.jsx'
import { skillGroups } from '../../data/skills.js'
import './Skills.css'

function Skills() {
  const [active, setActive] = useState(0)

  return (
    <SheetSection id="habilidades" index={3} tone="dark">
      <div className="skills">
        <div className="skills__head reveal">
          <span className="section-kicker skills__kicker">Habilidades</span>
          <h2 className="section-title skills__title">Expediente de competencias</h2>
          <p className="section-sub skills__sub">
            Registro técnico organizado por especialidad — selecciona un área para ver el detalle.
          </p>
        </div>

        <div className="dossier">
          <nav className="dossier__tabs" aria-label="Categorías de habilidades">
            {skillGroups.map((g, i) => (
              <button
                key={g.title}
                type="button"
                className="dossier__tab"
                data-active={active === i}
                onClick={() => setActive(i)}
              >
                <span className="dossier__tab-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="dossier__tab-name">{g.title}</span>
              </button>
            ))}
          </nav>

          <div className="dossier__panel">
            {skillGroups.map((g, i) => (
              <div
                key={g.title}
                className="dossier__content"
                data-active={active === i}
                aria-hidden={active !== i}
              >
                <span className="dossier__watermark" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <header className="dossier__panel-head">
                  <h3 className="dossier__panel-title">{g.title}</h3>
                  <p className="dossier__panel-desc">{g.description}</p>
                  <span className="dossier__panel-meta">
                    {String(g.skills.length).padStart(2, '0')} competencias registradas
                  </span>
                </header>

                <ul className="dossier__ledger">
                  {g.skills.map((skill) => (
                    <SkillRow key={skill.name} {...skill} />
                  ))}
                </ul>

                <div className="dossier__stamp" aria-hidden="true">
                  <span className="dossier__stamp-mark">AC</span>
                  <span className="dossier__stamp-label">verificado · 2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SheetSection>
  )
}

export default Skills
