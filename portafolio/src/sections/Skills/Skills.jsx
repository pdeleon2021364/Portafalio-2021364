import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SheetSection from '../../components/layout/SheetSection.jsx'
import SkillRow from '../../components/ui/SkillChip.jsx'
import { skillGroups } from '../../data/skills.js'
import './Skills.css'

const panelVariants = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, x: -12, transition: { duration: 0.2, ease: 'easeIn' } },
}

const listVariants = {
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

function Skills() {
  const [active, setActive] = useState(0)
  const group = skillGroups[active]

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
            <span className="dossier__watermark" aria-hidden="true">
              {String(active + 1).padStart(2, '0')}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={group.title}
                className="dossier__content"
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <header className="dossier__panel-head">
                  <h3 className="dossier__panel-title">{group.title}</h3>
                  <p className="dossier__panel-desc">{group.description}</p>
                  <span className="dossier__panel-meta">
                    {String(group.skills.length).padStart(2, '0')} competencias registradas
                  </span>
                </header>

                <motion.ul
                  className="dossier__ledger"
                  variants={listVariants}
                  initial="initial"
                  animate="animate"
                >
                  {group.skills.map((skill) => (
                    <SkillRow key={skill.name} {...skill} />
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>

            <div className="dossier__stamp" aria-hidden="true">
              <span className="dossier__stamp-mark">AC</span>
              <span className="dossier__stamp-label">verificado · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </SheetSection>
  )
}

export default Skills
