import { useState, useEffect } from 'react'
import GooeyNav from '../ui/GooeyNav.jsx'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'sobre-mi', label: 'Sobre mí', href: '#sobre-mi' },
  { id: 'habilidades', label: 'Skills', href: '#habilidades' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'experiencia', label: 'Exp.', href: '#experiencia' },
  { id: 'certificaciones', label: 'Certs', href: '#certificaciones' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [activeId, setActiveId] = useState('inicio')

  useEffect(() => {
    const observers = []

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const activeIndex = NAV_ITEMS.findIndex((item) => item.id === activeId)
  const gooeyItems = NAV_ITEMS.map(({ label, href }) => ({ label, href }))

  return (
    <header className="nb-wrap">
      <GooeyNav
        items={gooeyItems}
        particleCount={12}
        particleDistances={[80, 8]}
        particleR={80}
        activeIndex={activeIndex}
        animationTime={500}
        timeVariance={250}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </header>
  )
}

export default Navbar
