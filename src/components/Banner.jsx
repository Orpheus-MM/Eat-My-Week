import { banner } from '../content.js'
import Rich from './Rich.jsx'

export default function Banner() {
  return (
    <section className="banner rule" aria-labelledby="banner-title">
      <div className="wrap banner__in">
        <h2 id="banner-title"><Rich value={banner.title} /><small>{banner.aside}</small></h2>
        <a className="btn btn--red" href="#download">{banner.cta}</a>
      </div>
    </section>
  )
}
