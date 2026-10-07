import { testimonials } from '../content.js'
import Rich from './Rich.jsx'

export default function Testimonials() {
  return (
    <section className="quotes rule" aria-labelledby="quotes-title">
      <div className="wrap">
        <h2 id="quotes-title"><Rich value={testimonials.title} /></h2>
        <div className="quotes__grid">
          {testimonials.items.map((t, i) => (
            <figure key={i}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
