import { features } from '../content.js'
import Rich from './Rich.jsx'
import Placeholder from './Placeholder.jsx'

export default function Features() {
  return (
    <section id="inside" className="features" aria-labelledby="inside-title">
      <Placeholder label={features.image} />
      <div className="features__body">
        <h2 id="inside-title" className="features__label">{features.label}</h2>
        <ul>
          {features.items.map((f, i) => (
            <li key={i}>
              <a href={f.href}>
                <div>
                  <h3><Rich value={f.title} /></h3>
                  <p>{f.body}</p>
                </div>
                <span className="arrow" aria-hidden="true">⟶</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
