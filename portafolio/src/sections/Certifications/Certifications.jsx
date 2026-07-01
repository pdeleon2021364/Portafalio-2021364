import SheetSection from '../../components/layout/SheetSection.jsx'
import CertificationCard from './CertificationCard.jsx'
import { certifications } from '../../data/certifications.js'
import './Certifications.css'

function Certifications() {
  return (
    <SheetSection id="certificaciones" index={6}>
      <div className="certifications">
        <div className="certifications__head reveal">
          <span className="section-kicker">Certificaciones</span>
          <h2 className="section-title">Respaldo y constancia</h2>
          <p className="section-sub">Cursos, certificados y reconocimientos obtenidos.</p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.title + i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </SheetSection>
  )
}

export default Certifications
