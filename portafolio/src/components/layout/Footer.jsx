import { personalInfo } from '../../data/personalInfo.js'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__text">
          © {year} {personalInfo.name}
        </span>
        <span className="footer__text footer__text--mono">
          Diseñado &amp; construido a mano · Hoja 06/06
        </span>
      </div>
    </footer>
  )
}

export default Footer
