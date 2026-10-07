import { useState } from 'react'
import { marquee } from '../content.js'

const Row = ({ hidden }) => (
  <div aria-hidden={hidden || undefined}>
    {marquee.map((t) => (
      <span key={t}>{t}<b aria-hidden="true">✺</b></span>
    ))}
  </div>
)

export default function Marquee() {
  const [paused, setPaused] = useState(false)
  return (
    <section className={`marquee${paused ? ' paused' : ''}`} aria-label={marquee.join(', ')}>
      <div className="marquee__track" aria-hidden="true">
        <Row /><Row hidden /><Row hidden /><Row hidden />
      </div>
      <button className="marquee__toggle" type="button" aria-pressed={paused} aria-label="Pause scrolling text" onClick={() => setPaused(!paused)}>
        {paused ? '▶' : 'II'}
      </button>
    </section>
  )
}
