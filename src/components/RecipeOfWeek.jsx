import { recipeOfWeek as r } from '../content.js'
import Placeholder from './Placeholder.jsx'

export default function RecipeOfWeek() {
  return (
    <section id="recipe" className="rule" aria-labelledby="rotw-title">
      <div className="wrap split">
        <div className="circle"><Placeholder label={r.image} /></div>
        <div>
          <p className="eyebrow em">{r.label}</p>
          <h2 id="rotw-title">{r.title}</h2>
          <p className="lede">{r.body}</p>
          <a className="btn" href="#">{r.cta}</a>
        </div>
      </div>
    </section>
  )
}
