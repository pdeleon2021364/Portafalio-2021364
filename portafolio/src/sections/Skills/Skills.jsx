import { motion } from 'framer-motion'
import SheetSection from '../../components/layout/SheetSection.jsx'
import SkillChip from '../../components/ui/SkillChip.jsx'
import { skillGroups } from '../../data/skills.js'
import './Skills.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const cardVariants = {
  hidden: { y: -500, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 12,
      mass: 0.9,
    },
  },
}

function Skills() {
  return (
    <SheetSection id="habilidades" index={3} tone="dark">
      <div className="skills">
        <div className="skills__head reveal">
          <span className="section-kicker skills__kicker">Habilidades</span>
          <h2 className="section-title skills__title">Caja de herramientas</h2>
          <p className="section-sub skills__sub">
            Agrupadas por especialidad — pasa el cursor sobre cada chip para ver su brillo característico.
          </p>
        </div>

        <motion.div
          className="bento"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillGroups.map((group, gi) => {
            const barDelay = 1.4 + gi * 0.18
            return (
              <motion.div
                key={group.title}
                className="bento__card"
                variants={cardVariants}
              >
                <div className="bento__header">
                  <h3 className="bento__title">{group.title}</h3>
                  <p className="bento__desc">{group.description}</p>
                </div>
                <div className="bento__chips">
                  {group.skills.map((skill, si) => (
                    <SkillChip
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      status={skill.status}
                      barDelay={barDelay + si * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SheetSection>
  )
}

export default Skills
