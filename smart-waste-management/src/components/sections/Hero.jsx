// components/sections/HeroSection.jsx
import { Link } from 'react-router-dom'
import heroImage from '../../assets/waste-management-hero.jpg' 

const HeroSection = () => (
  <main className="relative w-full h-screen">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Waste Management"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    <div className="relative w-full h-full flex items-center justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl py-12 md:py-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Efficient Waste Management Solutions
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
          We offer a streamlined process for easy collection of waste, 
          distribution of routes, fee tracking, and reporting of waste 
          for collection.
        </p>
        <div>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-800 px-6 md:px-8 py-2.5 md:py-3 
                     text-sm md:text-base rounded-md hover:bg-blue-300 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </main>
)

export default HeroSection