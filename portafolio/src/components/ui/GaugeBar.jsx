import SkillIcon from './SkillIcon.jsx'
import './GaugeBar.css'

function GaugeBar({ label, level = 0, status }) {
  return (
    <div className="gauge">
      <div className="gauge__head">
        <span className="gauge__label-wrap">
          <SkillIcon name={label} />
          <span className="gauge__label">{label}</span>
        </span>
        <span className="gauge__value">
          {status || `${level}%`}
        </span>
      </div>
      <div className="gauge__track" role="img" aria-label={`${label}: ${level}%`}>
        <div className="gauge__fill" style={{ width: `${Math.min(level, 100)}%` }} />
        <div className="gauge__ticks">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GaugeBar
