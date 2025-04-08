// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">T. Rodriguez</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
              <Link to="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-700">Call Us Anytime: 523-456-7890</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar