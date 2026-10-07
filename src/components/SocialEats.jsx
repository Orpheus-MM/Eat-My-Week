import { social } from '../content.js'
import Rich from './Rich.jsx'
import Placeholder from './Placeholder.jsx'

export default function SocialEats() {
  return (
    <section id="social" className="social" aria-labelledby="social-title">
      <Placeholder label={social.image} />
      <div className="social__card">
        <h2 id="social-title"><Rich value={social.title} /></h2>
        <p className="lede">{social.body}</p>
        <a className="btn" href="#how">{social.cta}</a>
      </div>
    </section>
  )
}
