import { useState } from 'react'
import SheetSection from '../../components/layout/SheetSection.jsx'
import './Services.css'

const INTRO_TAGS = [
  'Branding Estratégico',
  'Identidad Visual',
  'Diseño Web',
  'Diseño de Producto',
  'Social Media',
]

function IconLayers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 8 12 14 22 8 12 2" />
      <polyline points="2 13 12 19 22 13" />
      <polyline points="2 18 12 24 22 18" style={{ opacity: 0 }} />
    </svg>
  )
}

function IconTarget() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconWindow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <line x1="2.5" y1="9" x2="21.5" y2="9" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconShare() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <line x1="8.2" y1="10.8" x2="15.8" y2="6.2" />
      <line x1="8.2" y1="13.2" x2="15.8" y2="17.8" />
    </svg>
  )
}

const SERVICES = [
  {
    id: 'identidad',
    title: 'Identidad Visual',
    desc: 'Diseño marcas memorables que reflejan quién sos y lo que representás. Desde el logo hasta el sistema visual completo, todo conecta con tu audiencia.',
    icon: <IconLayers />,
  },
  {
    id: 'branding',
    title: 'Branding Estratégico',
    desc: 'Más que estética: diseño visual que genera impacto y construye lealtad. Traduzco tu visión en una marca sólida que deja huella desde el primer vistazo.',
    icon: <IconTarget />,
  },
  {
    id: 'web',
    title: 'Diseño Web',
    desc: 'Desarrollo sitios visuales y funcionales que proyectan tu esencia, refuerzan tu marca y se adaptan a cualquier pantalla.',
    icon: <IconWindow />,
  },
  {
    id: 'social',
    title: 'Social Media',
    desc: 'Creo contenido visual alineado a tu marca que conecta, comunica y genera interacción real en plataformas clave.',
    icon: <IconShare />,
  },
]

const MARQUEE_TAGS = [
  'Estrategia Visual',
  'Identidad Visual',
  'Branding Estratégico',
  'Presentaciones Profesionales',
  'Copywriting',
  'Gráficos de Marca',
  'IA Creativa',
  'Visibilidad de Marca',
  'Integraciones de Marca',
  'Diseño Web',
  'Landing Pages',
  'Social Media',
]

function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id)

  return (
    <SheetSection id="servicios" index={2}>
      <div className="services">
        {/* LEFT: Intro */}
        <div className="services__intro">
          <span className="services__eyebrow">Mis servicios de diseño</span>
          <h2 className="services__title">Servicios</h2>
          <p className="services__desc">
            Te apoyo a destacar con diseño estratégico que da forma a tu visión,
            conecta con tu audiencia y eleva el valor percibido de tu marca.
          </p>

          <div className="services__tags">
            {INTRO_TAGS.map((tag) => (
              <span key={tag} className="services__tag">{tag}</span>
            ))}
          </div>

          <div className="services__ctas">
            <a href="#contacto" className="services__btn services__btn--primary">
              Agendá una llamada
            </a>
            <a href="#proyectos" className="services__btn services__btn--ghost">
              Ver mis proyectos
            </a>
          </div>
        </div>

        {/* RIGHT: Accordion */}
        <div className="services__list">
          {SERVICES.map((service, i) => {
            const isActive = activeId === service.id
            return (
              <div
                key={service.id}
                className={`services__item ${isActive ? 'services__item--active' : ''}`}
              >
                <button
                  type="button"
                  className="services__item-header"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                >
                  <span className="services__item-index">0{i + 1}</span>
                  <span className="services__item-icon">{service.icon}</span>
                  <span className="services__item-heading">{service.title}</span>
                  <svg
                    className="services__item-chevron"
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>

                <div className="services__item-panel">
                  <div className="services__item-panel-inner">
                    <p className="services__item-desc">{service.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* BOTTOM: Marquee */}
      <div className="services__marquee" aria-hidden="true">
        <div className="services__marquee-track">
          {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
            <span key={i} className="services__marquee-tag">
              {tag}
              <span className="services__marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </SheetSection>
  )
}

export default Services
