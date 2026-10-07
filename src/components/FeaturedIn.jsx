import { press } from '../content.js'

export default function FeaturedIn() {
  return (
    <section className="press" aria-labelledby="press-title">
      <div className="wrap press__in">
        <h2 id="press-title" className="eyebrow">As featured in</h2>
        <ul>{press.map((p, i) => <li key={i}>{p}</li>)}</ul>
      </div>
    </section>
  )
}
