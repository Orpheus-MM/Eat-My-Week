import { useEffect, useRef, useState } from 'react'
import { newsletter } from '../content.js'

const KEY = 'emw-newsletter-seen'

export default function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    try { if (localStorage.getItem(KEY)) return } catch { /* storage blocked */ }
    const t = setTimeout(() => setOpen(true), 4000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement
    const el = ref.current
    el.querySelector('input')?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key !== 'Tab') return
      const f = el.querySelectorAll('button, input')
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); prev?.focus() }
  }, [open])

  function close() {
    try { localStorage.setItem(KEY, '1') } catch { /* storage blocked */ }
    setOpen(false)
  }

  if (!open) return null
  return (
    <div className="modal-bg" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="nl-title" ref={ref}>
        <button className="close" type="button" aria-label="Close" onClick={close}>×</button>
        <h2 id="nl-title">{newsletter.title}</h2>
        <p>{newsletter.body}</p>
        <form onSubmit={(e) => { e.preventDefault(); close() }}>
          <label className="eyebrow" htmlFor="nl-email" hidden>Email</label>
          <input id="nl-email" type="email" required placeholder="Email address" aria-label="Email address" autoComplete="email" />
          <button className="btn btn--light" type="submit">{newsletter.cta}</button>
        </form>
      </div>
    </div>
  )
}
