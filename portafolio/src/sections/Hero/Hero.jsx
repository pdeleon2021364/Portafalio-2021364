import { personalInfo } from '../../data/personalInfo.js'
import Button from '../../components/ui/Button.jsx'
import './Hero.css'

function Hero() {
  const date = new Date()
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

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
          <div className="parent">
            <div className="card">
              <div className="content-box">
                <span className="card-title">Portafolio personal</span>
                <p className="card-content">
                  {personalInfo.shortName} · {personalInfo.location}<br />
                  <span className="card-status">{personalInfo.availability}</span>
                </p>
                <a href="#proyectos" className="see-more">Ver proyectos</a>
              </div>
              <div className="date-box">
                <span className="month">{months[date.getMonth()]}</span>
                <span className="date">{date.getDate()}</span>
              </div>
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
