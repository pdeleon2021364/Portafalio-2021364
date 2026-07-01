import './Tag.css'

function Tag({ children, tone = 'default' }) {
  return <span className={`tag tag--${tone}`}>{children}</span>
}

export default Tag
