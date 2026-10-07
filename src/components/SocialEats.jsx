import { social } from '../content.js'
import Rich from './Rich.jsx'
import Placeholder from './Placeholder.jsx'

export default function SocialEats() {
  return (
    <section id="social" className="social" aria-labelledby="social-title">
      <div className="social__hero">
        <Placeholder label={social.image} />
        <div className="social__card">
          <h2 id="social-title"><Rich value={social.title} /></h2>
          <p className="lede">{social.body}</p>
          <a className="btn" href="#how">{social.cta}</a>
        </div>
      </div>
      <div className="integrations">
        <h3 className="eyebrow">{social.integrationsLabel}</h3>
        <ul>
          {social.integrations.map((i) => (
            <li key={i.name}>
              {i.logo
                ? <img src={`${import.meta.env.BASE_URL}${i.logo}`} alt={i.name} />
                : <span>{i.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
