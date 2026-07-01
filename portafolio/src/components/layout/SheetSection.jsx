import './SheetSection.css'

/**
 * SheetSection — el elemento firma del diseño.
 * Envuelve cada sección como si fuera una "hoja" de un plano técnico:
 * marcas de registro en las esquinas + un índice de hoja (01/06, 02/06...).
 */
function SheetSection({
  id,
  index,
  total = 6,
  tone = 'light',
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`sheet sheet--${tone} ${className}`.trim()}
    >
      <span className="sheet__mark sheet__mark--tl" aria-hidden="true" />
      <span className="sheet__mark sheet__mark--tr" aria-hidden="true" />
      {index && (
        <span className="sheet__index" aria-hidden="true">
          HOJA {String(index).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
      )}
      <div className="sheet__content container">{children}</div>
    </section>
  )
}

export default SheetSection
