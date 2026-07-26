import './CertificationCard.css'

function CertificationCard({ cert, index }) {
  return (
    <article className="cert-card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
      {cert.image && (
        <div className="cert-card__preview">
          <img src={cert.image} alt={cert.title} className="cert-card__image" />
        </div>
      )}
      <div className="cert-card__top">
        <span className="cert-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="cert-card__date label-tag">{cert.date}</span>
      </div>
      <h3 className="cert-card__title">{cert.title}</h3>
      <p className="cert-card__issuer">{cert.issuer}</p>
      <p className="cert-card__desc">{cert.description}</p>
      {cert.document && (
        <a
          className="cert-card__download"
          href={cert.document}
          download
          target="_blank"
          rel="noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Descargar
        </a>
      )}
    </article>
  )
}

export default CertificationCard
