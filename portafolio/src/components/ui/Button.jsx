import './Button.css'

function Button({
  as: Tag = 'button',
  href,
  variant = 'primary',
  icon,
  children,
  ...rest
}) {
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
