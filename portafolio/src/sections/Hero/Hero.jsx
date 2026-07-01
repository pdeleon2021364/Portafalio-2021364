import { personalInfo } from '../../data/personalInfo.js'
import Button from '../../components/ui/Button.jsx'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <span className="hero__mark hero__mark--tl" aria-hidden="true" />
      <span className="hero__mark hero__mark--tr" aria-hidden="true" />
      <span className="hero__mark hero__mark--bl" aria-hidden="true" />
      <span className="hero__mark hero__mark--br" aria-hidden="true" />

      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__copy reveal">
          <span className="section-kicker hero__kicker">Portafolio · 2026</span>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__role">{personalInfo.role}</p>
          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__actions">
            <Button as="a" href="#proyectos" variant="primary">
              Ver proyectos
            </Button>
            <Button as="a" href={personalInfo.links.cv} variant="outline" download>
              Descargar CV
            </Button>
          </div>
        </div>

        <div className="hero__titleblock reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="titleblock">
            <div className="titleblock__row">
              <span className="titleblock__key">Proyecto</span>
              <span className="titleblock__val">Portafolio personal</span>
            </div>
            <div className="titleblock__row">
              <span className="titleblock__key">Autor</span>
              <span className="titleblock__val">{personalInfo.shortName}</span>
            </div>
            <div className="titleblock__row">
              <span className="titleblock__key">Ubicación</span>
              <span className="titleblock__val">{personalInfo.location}</span>
            </div>
            <div className="titleblock__row">
              <span className="titleblock__key">Estado</span>
              <span className="titleblock__val titleblock__val--accent">
                {personalInfo.availability}
              </span>
            </div>
            <div className="titleblock__row">
              <span className="titleblock__key">Escala</span>
              <span className="titleblock__val">1 : 1 — sin atajos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="label-tag">Desplázate</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}

export default Hero
