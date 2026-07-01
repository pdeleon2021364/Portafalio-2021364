import './CertificationCard.css'

function CertificationCard({ cert, index }) {
  return (
    <article className="cert-card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
      <div className="cert-card__top">
        <span className="cert-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="cert-card__date label-tag">{cert.date}</span>
      </div>
      <h3 className="cert-card__title">{cert.title}</h3>
      <p className="cert-card__issuer">{cert.issuer}</p>
      <p className="cert-card__desc">{cert.description}</p>
      {cert.document && (
        <a className="cert-card__link" href={cert.document} target="_blank" rel="noreferrer">
          Ver documento ↗
        </a>
      )}
    </article>
  )
}

export default CertificationCard
