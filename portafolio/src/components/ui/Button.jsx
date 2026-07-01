import './Button.css'

function Button({
  as = 'button',
  href,
  variant = 'primary',
  icon,
  children,
  ...rest
}) {
  const Tag = as === 'a' ? 'a' : 'button'
  return (
    <Tag
      className={`btn btn--${variant}`}
      href={Tag === 'a' ? href : undefined}
      {...rest}
    >
      <span>{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </Tag>
  )
}

export default Button
