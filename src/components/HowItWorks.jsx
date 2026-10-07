import { week } from '../content.js'
import Rich from './Rich.jsx'
import Placeholder from './Placeholder.jsx'

export default function HowItWorks() {
  return (
    <section id="how" className="how rule" aria-labelledby="how-title">
      <div className="wrap">
        <div className="how__head">
          <h2 id="how-title"><Rich value={week.title} /></h2>
          <a className="btn" href="#download">{week.cta}</a>
        </div>
        <div className="how__grid">
          {week.items.map((c) => (
            <article className="how__card" key={c.title}>
              <Placeholder label={c.image} />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <a href="#">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
