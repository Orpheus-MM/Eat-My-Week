import { useEffect, useState } from 'react'
import AnnouncementBar from './AnnouncementBar.jsx'
import { nav, links } from '../content.js'
import { Instagram, TikTok, Pinterest } from './Icons.jsx'

export function Socials() {
  return (
    <ul className="socials">
      <li><a href={links.instagram} aria-label="Instagram"><Instagram /></a></li>
      <li><a href={links.tiktok} aria-label="TikTok"><TikTok /></a></li>
      <li><a href={links.pinterest} aria-label="Pinterest"><Pinterest /></a></li>
    </ul>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = matchMedia('(min-width: 961px)')
    const onMq = (e) => e.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => { document.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq) }
  }, [open])

  return (
    <header className="header">
      <div className="wrap header__in">
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="site-nav" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav id="site-nav" className={open ? 'open' : ''} aria-label="Primary">
          <ul>
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <a className="logo" href="#main" aria-label="Eat My Week home">Eat My <i>Week</i></a>
        <div className="header__right">
          <Socials />
          <a className="btn btn--line-red" href="#download">Download</a>
        </div>
      </div>
    </header>
  )
}
