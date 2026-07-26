import { useState, useEffect, useRef, useMemo } from 'react'
import SheetSection from '../../components/layout/SheetSection.jsx'
import { personalInfo } from '../../data/personalInfo.js'
import './Biography.css'

// Distributes n nodes evenly around a circle, starting from the top (-90deg)
function getOrbitPosition(index, total, radius) {
  const angle = -90 + index * (360 / total)
  const rad = (angle * Math.PI) / 180
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
    angle,
  }
}

function Biography() {
  const { paragraphs, details, traits, capabilities } = personalInfo.bio
  const [coreActive, setCoreActive] = useState(false)
  const [signalActive, setSignalActive] = useState(false)
  const [activeTrait, setActiveTrait] = useState(0)
  const [capsActive, setCapsActive] = useState(false)
  const sectionRef = useRef(null)

  const initials = personalInfo.shortName
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase())
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const orbitRadius = 92

  const positions = useMemo(
    () => traits.map((_, i) => getOrbitPosition(i, traits.length, orbitRadius)),
    [traits]
  )

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSignalActive(true)
          setTimeout(() => setCoreActive(true), 450)
          setTimeout(() => setCapsActive(true), 600)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  const current = traits[activeTrait]

  return (
    <SheetSection id="biografia" index={4}>
      <div className="bio" ref={sectionRef}>
        <div className="bio__constellation" aria-hidden="true">
          <div className="bio__constellation-line" style={{ top: '12%', right: '10%', width: '180px', transform: 'rotate(-18deg)' }} />
          <div className="bio__constellation-line" style={{ bottom: '22%', left: '5%', width: '150px', transform: 'rotate(25deg)' }} />
        </div>

        {/* LEFT: Signal panel + Identity Core */}
        <div className="bio__left">
          <h2 className="bio__title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <line x1="1.05" y1="12" x2="7" y2="12" />
              <line x1="17.01" y1="12" x2="22.96" y2="12" />
            </svg>
            Biografía
          </h2>

          {/* Signal / bio panel */}
          <div className={`bio__signal ${signalActive ? 'bio__signal--active' : ''}`}>
            <div className="bio__signal-bar">
              <span className="bio__signal-wave" aria-hidden="true">
                <span /><span /><span /><span />
              </span>
              <span className="bio__signal-label">TRANSMISIÓN // PERFIL.DATA</span>
              <span className="bio__signal-live">
                <span className="bio__signal-dot" /> EN VIVO
              </span>
            </div>

            <div className="bio__signal-body">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="bio__paragraph"
                  style={{ animationDelay: `${0.2 + i * 0.2}s` }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Identity Core — orbiting trait selector */}
          <div className={`bio__core ${coreActive ? 'bio__core--active' : ''}`}>
            <div className="bio__core-header">
              <span className="bio__core-label">NÚCLEO DE IDENTIDAD</span>
              <span className="bio__core-count">{traits.length} rasgos</span>
            </div>

            <div className="bio__core-body">
              <div className="bio__orbit-stage">
                <svg className="bio__orbit-rings" viewBox="0 0 240 240" aria-hidden="true">
                  <circle cx="120" cy="120" r={orbitRadius} className="bio__orbit-ring" />
                  <circle cx="120" cy="120" r={orbitRadius - 34} className="bio__orbit-ring bio__orbit-ring--inner" />
                </svg>

                <button type="button" className="bio__orbit-nucleus" aria-hidden="true" tabIndex={-1}>
                  <span>{initials}</span>
                </button>

                {traits.map((trait, i) => {
                  const pos = positions[i]
                  const isActive = i === activeTrait
                  return (
                    <button
                      key={trait.id}
                      type="button"
                      className={`bio__orbit-node ${isActive ? 'bio__orbit-node--active' : ''}`}
                      style={{
                        transform: `translate(${pos.x}px, ${pos.y}px)`,
                        animationDelay: `${0.15 * i}s`,
                      }}
                      onClick={() => setActiveTrait(i)}
                      aria-pressed={isActive}
                    >
                      <span className="bio__orbit-node-index">{String(i + 1).padStart(2, '0')}</span>
                      <span className="bio__orbit-node-label">{trait.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="bio__trait-panel" key={current.id}>
                <div className="bio__trait-panel-header">
                  <span className="bio__trait-tag">{current.tag}</span>
                  <span className="bio__trait-title">{current.label}</span>
                </div>
                <p className="bio__trait-desc">{current.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Data Matrix */}
        <div className="bio__right">
          <div className="bio__constellation-line" style={{ position: 'absolute', top: '8%', right: '-5%', width: '120px', transform: 'rotate(-25deg)' }} />

          <div className="bio__matrix">
            {/* Header */}
            <div className="bio__matrix-header">
              <span className="bio__matrix-title">IDENTIDAD.SYS</span>
              <span className="bio__matrix-version">v2.0</span>
            </div>

            {/* Avatar */}
            <div className="bio__matrix-avatar">
              <span className="bio__matrix-initials">{initials}</span>
              <div className="bio__matrix-avatar-ring" />
              <div className="bio__matrix-avatar-pulse" />
            </div>

            {/* Data Grid */}
            <div className="bio__matrix-data">
              {details.map((d, i) => (
                <div
                  key={d.label}
                  className="bio__matrix-cell"
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <span className="bio__matrix-cell-label">{d.label}</span>
                  <span className="bio__matrix-cell-value">{d.value}</span>
                </div>
              ))}
            </div>

            {/* Capability Bars */}
            <div className="bio__matrix-caps">
              <span className="bio__matrix-caps-title">CAPACIDADES</span>
              {capabilities.map((cap) => (
                <div key={cap.label} className="bio__matrix-cap">
                  <div className="bio__matrix-cap-header">
                    <span className="bio__matrix-cap-name">{cap.label}</span>
                    <span className="bio__matrix-cap-value">{cap.level}%</span>
                  </div>
                  <div className="bio__matrix-cap-track">
                    <div
                      className={`bio__matrix-cap-fill ${capsActive ? 'bio__matrix-cap-fill--animate' : ''}`}
                      style={{ '--cap-level': `${cap.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Status */}
            <div className="bio__matrix-footer">
              <span className="bio__matrix-status">
                <span className="bio__matrix-status-dot" />
                ONLINE
              </span>
              <span className="bio__matrix-id">ID:2021364</span>
            </div>
          </div>
        </div>
      </div>
    </SheetSection>
  )
}

export default Biography
