import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon.jsx'
import './SkillChip.css'

const rowVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function SkillRow({ name, level, color, status }) {
  return (
    <motion.li className="skill-row" variants={rowVariants} style={{ '--row-color': color }}>
      <span className="skill-row__icon">
        <SkillIcon name={name} />
      </span>

      <span className="skill-row__name">{name}</span>

      <span className="skill-row__track">
        <motion.span
          className="skill-row__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          style={{ background: `linear-gradient(90deg, #0f2c4c, ${color})` }}
        />
      </span>

      <span className="skill-row__value">{status || `${level}%`}</span>
    </motion.li>
  )
}

export default SkillRow
