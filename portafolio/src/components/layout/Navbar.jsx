import { useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'contacto', label: 'Contacto' },
]

function Navbar({ initials = 'PL' }) {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id))

  const handleNavigate = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a
          href="#inicio"
          className="navbar__brand"
          onClick={(e) => {
            e.preventDefault()
            handleNavigate('inicio')
          }}
        >
          <span className="navbar__brand-mark">{initials}</span>
          <span className="navbar__brand-text">PORTAFOLIO.SRC</span>
        </a>

        <nav className="navbar__links" aria-label="Navegación principal">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className={`navbar__link ${activeId === item.id ? 'is-active' : ''}`}
              onClick={() => handleNavigate(item.id)}
            >
              <span className="navbar__link-index">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`navbar__mobile ${open ? 'is-open' : ''}`} aria-label="Navegación móvil">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => handleNavigate(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
