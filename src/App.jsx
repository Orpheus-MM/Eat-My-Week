import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import NewsletterModal from './components/NewsletterModal.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import RecipeOfWeek from './components/RecipeOfWeek.jsx'
import Mission from './components/Mission.jsx'
import Features from './components/Features.jsx'
import SocialEats from './components/SocialEats.jsx'
import Banner from './components/Banner.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import FeaturedIn from './components/FeaturedIn.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <RecipeOfWeek />
        <Mission />
        <Features />
        <SocialEats />
        <Banner />
        <HowItWorks />
        <Testimonials />
        <FeaturedIn />
      </main>
      <Footer />
      <NewsletterModal />
    </>
  )
}
