import { footer } from '../content.js'
import { Socials } from './Header.jsx'
import { StoreButtons } from './Hero.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="faq">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="logo" href="#main">Eat My <i>Week</i></a>
            <p className="footer__tag">{footer.tagline}</p>
            <Socials />
          </div>
          {footer.columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2>{c.title}</h2>
              <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </nav>
          ))}
        </div>
        <p className="footer__big" aria-hidden="true">Eat My Week</p>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Eat My Week. All rights reserved.</span>
          <span>Made for busy people who love to eat.</span>
        </div>
      </div>
    </footer>
  )
}
