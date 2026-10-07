import { useState } from 'react'
import { announcement } from '../content.js'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  const dismiss = () => {
    setOpen(false)
    document.querySelector('.header .logo')?.focus()
  }
  return (
    <aside className="announce eyebrow" aria-label="Announcement">
      <a href={announcement.href}>{announcement.text} <span className="em" aria-hidden="true">⟶</span></a>
      <button type="button" aria-label="Dismiss announcement" onClick={dismiss}>×</button>
    </aside>
  )
}
