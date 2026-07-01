import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon.jsx'
import './SkillChip.css'

function SkillChip({ name, level, color, status, barDelay = 0 }) {
  return (
    <div
      className="skill-chip"
      style={{ '--chip-color': color }}
    >
      <div className="skill-chip__top">
        <SkillIcon name={name} />
        <span className="skill-chip__name">{name}</span>
        <span className="skill-chip__level">{status || `${level}%`}</span>
      </div>
      <div className="skill-chip__bar-track">
        <motion.div
          className="skill-chip__bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: barDelay }}
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default SkillChip
