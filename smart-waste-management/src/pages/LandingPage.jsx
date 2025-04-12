import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import heroImage from '../assets/waste-management-hero.jpg'

const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Waste Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
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

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Comprehensive Waste Management</h2>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Real-time Monitoring */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-8 h-8 rounded-full border-2 border-gray-600 mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-800">Tailored waste management services designed to meet specific environmental needs.</p>
            </div>

            {/* Recycling Initiatives */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-8 h-8 rounded-full border-2 border-gray-600 mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Recycling Initiatives</h3>
              <p className="text-gray-600">Expert guidance on implementing recycling programs and waste reduction strategies.</p>
            </div>

            {/* Hazardous Waste Handling */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-8 h-8 rounded-full border-2 border-gray-600 mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Hazardous Waste Handling</h3>
              <p className="text-gray-600">Specialized in the safe handling and disposal of hazardous waste materials.</p>
            </div>
          </div>

          {/* Bottom Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Regulatory Compliance */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-8 h-8 rounded-full border-2 border-gray-600 mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">Ensuring compliance with waste management regulations and implementing top-notch safety standards.</p>
            </div>

            {/* Customized Solutions */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-8 h-8 rounded-full border-2 border-gray-600 mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Customized Solutions</h3>
              <p className="text-gray-600">Innovative and customized waste management solutions to address diverse environmental requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Services Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <p className="text-sm text-gray-800 font-semibold mb-2">24/7 Waste Collection Services</p>
            <h2 className="text-2xl text-gray-800 md:text-3xl font-bold mb-4">Serving Residential and Commercial Clients</h2>
            <Link
              to="/contact"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="/path-to-your-phone-image.jpg"
              alt="Mobile App"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
      </section>

       {/* Our Expertise Section */}
       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl text-gray-900 md:text-3xl font-bold">Our Expertise</h2>
            <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <span className="text-gray-800 flex-items-center justify-center">→</span>
            </div>
          </div>
          
          <p className="text-gray-900 mb-12">
            Dedicated to providing high-quality waste management services across various locations.
          </p>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Residential Waste Solutions */}
            <div className="bg-blue-200 p-8 rounded-lg group hover:bg-gray-200 transition-all duration-300">
              <div className="text-3xl text-gray-900 mb-6 font-bold">+</div>
              <h3 className="text-xl text-gray-900 font-semibold mb-3">Residential Waste Solutions</h3>
              <p className="text-gray-800">
                Tailored waste management solutions for residential properties.
              </p>
            </div>

            {/* Commercial Waste Solutions */}
            <div className="bg-blue-200 p-8 rounded-lg group hover:bg-gray-200 transition-all duration-300">
              <div className="text-3xl  text-gray-900 mb-6 font-bold">+</div>
              <h3 className="text-xl  text-gray-900 font-semibold mb-3">Commercial Waste Solutions</h3>
              <p className="text-gray-800">
                Specialized waste management services for commercial establishments.
              </p>
            </div>

            {/* Industrial Waste Solutions */}
            <div className="bg-blue-200 p-8 rounded-lg group hover:bg-gray-200 transition-all duration-300">
              <div className="text-3xl  text-gray-900 mb-6 font-bold">+</div>
              <h3 className="text-xl text-gray-900 font-semibold mb-3">Industrial Waste Solutions</h3>
              <p className="text-gray-800">
                Innovative waste management solutions for industrial facilities and infrastructure.
              </p>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="mt-16 grid grid-cols-2 gap-4">
            <div className="relative h-64">
              <img
                src="/path-to-your-phone-image.jpg"
                alt="Mobile Application"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img
                src="/path-to-your-office-image.jpg"
                alt="Office Space"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Services Section */}
      <section className="bg-blue-100 py-16">
        {/* ... existing 24/7 services section code ... */}
      </section>
  
    </div>
  )
}

export default LandingPage