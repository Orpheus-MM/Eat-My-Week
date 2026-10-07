export default function Placeholder({ label, className = '', style }) {
  return (
    <div className={`ph ${className}`} style={style} role="img" aria-label={`Image placeholder: ${label}`}>
      <span>Img — {label}</span>
    </div>
  )
}
