import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ui/ProfileCard.jsx'
import { personalInfo } from '../../data/personalInfo.js'
import './Hero.css'

const greetings = ['Bienvenid@', 'Welcome', 'Bienvenue', 'Willkommen', 'Benvenut@']

function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex(i => (i + 1) % greetings.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" />

      <div className="hero__layout container">
        <div className="hero__copy">
          <span className="hero__greeting" key={greetingIndex}>
            {greetings[greetingIndex]}
          </span>
          <h1 className="hero__name">{personalInfo.name.split(' ').slice(0, 2).join(' ')}</h1>

          <div className="hero__manifesto">
            <span className="hero__quote-mark" aria-hidden="true">&rdquo;</span>
            <p>
              Basta de introducciones largas. Buscas un desarrollador que escriba código limpio,
              resuelva problemas sin que le tiemble la mano y entregue a tiempo.
            </p>
            <p className="hero__emph">Ese soy yo.</p>
            <p>
              Menos charla,{' '}
              <span className="hero__highlight">más construcción</span>.
              Echa un vistazo a mis proyectos.
            </p>
          </div>

          <div className="hero__actions">
            <a href="#proyectos" className="hero__btn hero__btn--primary">
              Ver proyectos
            </a>
            <a href={personalInfo.links.cv} className="hero__btn hero__btn--outline" download>
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero__card-col">
          <ProfileCard showUserInfo={false} showText={false} />
        </div>
      </div>
    </section>
  )
}

export default Hero
