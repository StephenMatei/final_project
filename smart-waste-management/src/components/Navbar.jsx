import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="bg-white text-white flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-cyan-600"
            >
              WasteManage
            </button>
          </div>

          {/* Desktop Menu */}
          <div className=" hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className=" text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('expertise')}
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              Contact
            </button>
            <Link to="/signin" className="text-blue-600 font-semibold hover:underline">Sign In</Link>
            <Link to="/signup" className="ml-2 bg-white text-white px-4 py-1 border border-blue-600 rounded hover:bg-blue-200 hover:text-white transition">Sign Up</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white-600 hover:text-cyan-400 hover:bg-gray-100 focus:outline-black"
            >
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Contact
            </button>
            <Link to="/signin" className="block px-3 py-2 rounded-md text-blue-600 font-semibold hover:bg-blue-50" onClick={toggleMenu}>Sign In</Link>
            <Link to="/signup" className="block px-3 py-2 rounded-md bg-white text-white border border-blue-600 hover:bg-blue-200" onClick={toggleMenu}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar