import cssImg from '@/sections/Skills/images/css-brands-solid.png'
import databaseImg from '@/sections/Skills/images/database-solid.png'
import figmaImg from '@/sections/Skills/images/figma_logo_icon_147289.png'
import githubImg from '@/sections/Skills/images/github-brands-solid.png'
import htmlImg from '@/sections/Skills/images/html5-brands-solid.png'
import javaImg from '@/sections/Skills/images/java-brands-solid.png'
import jsImg from '@/sections/Skills/images/js-brands-solid.png'
import accessImg from '@/sections/Skills/images/microsoft_access_macos_bigsur_icon_189984.png'
import excelImg from '@/sections/Skills/images/microsoft_office_excel_logo_icon_145720.png'
import vscodeImg from '@/sections/Skills/images/microsoft_visual_studio_code_alt_macos_bigsur_icon_189954.png'
import wordImg from '@/sections/Skills/images/microsoft_word_macos_bigsur_icon_189948.png'
import nodeImg from '@/sections/Skills/images/node-js-brands-solid.png'
import postgresImg from '@/sections/Skills/images/postgresql-brands-solid.png'
import reactImg from '@/sections/Skills/images/react-brands-solid.png'
import tailwindImg from '@/sections/Skills/images/tailwind-css-brands-solid.png'

const imageMap = {
  HTML: htmlImg,
  CSS: cssImg,
  JavaScript: jsImg,
  React: reactImg,
  'Tailwind CSS': tailwindImg,
  'Node.js': nodeImg,
  Java: javaImg,
  MySQL: databaseImg,
  PostgreSQL: postgresImg,
  SQL: databaseImg,
  Git: githubImg,
  GitHub: githubImg,
  'VS Code': vscodeImg,
  Figma: figmaImg,
  Word: wordImg,
  Excel: excelImg,
  Access: accessImg,
}

function SkillIcon({ name, className = '' }) {
  const src = imageMap[name]
  if (!src) return null
  return (
    <img
      src={src}
      alt={`${name} logo`}
      className={`skill-icon ${className}`.trim()}
    />
  )
}

export default SkillIcon
