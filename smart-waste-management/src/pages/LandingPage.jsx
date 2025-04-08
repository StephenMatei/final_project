// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import heroImage from '../assets/waste-management-hero.jpg' 

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="relative">
        <div className="relative h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Waste Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center h-full max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Efficient Waste Management Solutions
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                We offer a streamlined process for easy collection of waste, 
                distribution of routes, fee tracking, and reporting of waste 
                for collection.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-200 text-gray-800 px-8 py-3 
                           rounded-md hover:bg-blue-300 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage