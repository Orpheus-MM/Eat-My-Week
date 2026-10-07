import { mission } from '../content.js'
import Rich from './Rich.jsx'

export default function Mission() {
  return (
    <section className="mission rule" aria-labelledby="mission-title">
      <div className="wrap">
        <h2 id="mission-title"><Rich value={mission.title} /></h2>
        <p className="lede">{mission.body}</p>
        <a className="btn btn--red" href="#download">{mission.cta}</a>
      </div>
    </section>
  )
}
