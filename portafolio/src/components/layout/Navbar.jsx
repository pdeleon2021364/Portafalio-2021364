import { NavLink } from 'react-router-dom'
import './Navbar.css'

const NAV_ITEMS = [
  { path: '/', label: 'Inicio' },
  { path: '/sobre-mi', label: 'Sobre mí' },
  { path: '/habilidades', label: 'Skills' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/experiencia', label: 'Exp.' },
  { path: '/certificaciones', label: 'Certs' },
  { path: '/contacto', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="nb-wrap">
      <nav className="nb-tabs">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `nb-tab ${isActive ? 'nb-tab--on' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
