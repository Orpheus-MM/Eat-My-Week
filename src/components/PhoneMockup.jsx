import { Search, Doc, Fork, Compass, Note, Flame, Home, User } from './Icons.jsx'

const Card = ({ title, sub }) => (
  <div className="phone__card phone__card--tall">
    <p className="phone__h">{title}</p>
    <p>{sub}</p>
    <Flame />
  </div>
)

export default function PhoneMockup() {
  return (
    <div className="phone" role="img" aria-label="Eat My Week app home screen: search, My Plans, Soundtrack of my bites, Hot Recipes and Best Restaurants">
      <div className="phone__logo">EM<i>W</i></div>
      <div className="phone__hi">Welcome back Emily!</div>
      <div className="phone__sub">Small text for Sections or drawers, body text.</div>
      <div className="phone__search"><Search /> What are you craving?</div>
      <div className="phone__tiles">
        <div className="phone__tile"><Doc /></div>
        <div className="phone__tile"><Fork /></div>
        <div className="phone__tile"><Compass /></div>
      </div>
      <div className="phone__card">
        <p className="phone__h">My Plans</p>
        <p>Small text for Sections or drawers, body text.</p>
        <Doc />
      </div>
      <div className="phone__card">
        <p className="phone__h">Soundtrack of my <span className="em">bites</span></p>
        <Note />
      </div>
      <div className="phone__grid">
        <Card title={<><span className="em">Hot</span> Recipes!</>} sub="What’s cookin’ good looking" />
        <Card title={<><span className="em">Best</span> Restaurants</>} sub="Scouring the town" />
        <Card title={<><span className="em">Hot</span> Recipes!</>} sub="What’s cookin’ good looking" />
        <Card title={<><span className="em">Best</span> Restaurants</>} sub="Scouring the town" />
      </div>
      <div className="phone__more">····</div>
      <div className="phone__nav"><Home /><Doc /><User /></div>
    </div>
  )
}
