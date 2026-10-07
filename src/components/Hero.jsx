import { hero, links } from '../content.js'
import Rich from './Rich.jsx'
import PhoneMockup from './PhoneMockup.jsx'
import { Apple, Play } from './Icons.jsx'

export function StoreButtons() {
  return (
    <div className="btn-row store">
      <a className="btn btn--red" href={links.appStore}><Apple /> App Store</a>
      <a className="btn" href={links.googlePlay}><Play /> Google Play</a>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__in">
        <div>
          <p className="eyebrow">{hero.kicker}</p>
          <h1 id="hero-title"><Rich value={hero.title} /></h1>
          <p className="lede">{hero.body}</p>
          <div id="download"><StoreButtons /></div>
        </div>
        <div className="hero__phone">
          <div className="hero__stamp" aria-hidden="true">Eat<br />my<br />week</div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
