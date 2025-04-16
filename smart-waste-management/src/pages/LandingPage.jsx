// pages/LandingPage.jsx
import Navbar from '../components/Navbar'
import HeroSection from '../components/sections/Hero'
import ServicesSection from '../components/sections/Services'
import ExpertiseSection from '../components/sections/Expertise'
import AboutSection from '../components/sections/About'
import ContactSection from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default LandingPage