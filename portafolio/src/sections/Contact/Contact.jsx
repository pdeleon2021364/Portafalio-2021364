import { personalInfo } from '../../data/personalInfo.js'
import Button from '../../components/ui/Button.jsx'
import './Contact.css'

const SOCIAL_LINKS = [
  { key: 'email', label: 'Correo' },
  { key: 'whatsapp', label: 'WhatsApp' },
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'instagram', label: 'Instagram' },
]

function Contact() {
  return (
    <section id="contacto" className="contact">
      <span className="contact__mark contact__mark--tl" aria-hidden="true" />
      <span className="contact__mark contact__mark--tr" aria-hidden="true" />

      <div className="container contact__inner">
        <div className="contact__copy reveal">
          <span className="section-kicker contact__kicker">Contacto</span>
          <h2 className="contact__title">Hablemos de tu próximo proyecto</h2>
          <p className="contact__sub">
            Disponible para prácticas, colaboraciones o proyectos pequeños. Escríbeme y
            respondo lo antes posible.
          </p>
          <div className="contact__actions">
            <Button as="a" href={personalInfo.links.email} variant="primary">
              Escribir un correo
            </Button>
            <Button as="a" href={personalInfo.links.whatsapp} variant="outline">
              WhatsApp
            </Button>
          </div>
        </div>

        <ul className="contact__links reveal" style={{ transitionDelay: '0.1s' }}>
          {SOCIAL_LINKS.map(({ key, label }) => (
            <li key={key}>
              <a href={personalInfo.links[key]} target="_blank" rel="noreferrer">
                <span className="contact__links-label">{label}</span>
                <span className="contact__links-arrow">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
