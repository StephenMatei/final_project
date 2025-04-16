// src/components/sections/Footer.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-500 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold mb-4">Smart Waste Management</h3>
            <p className="text-sm leading-relaxed">
              Transforming waste management through innovative technology solutions for a cleaner, 
              more sustainable future.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <SocialLink href="#" icon={faFacebookF} />
              <SocialLink href="#" icon={faTwitter} />
              <SocialLink href="#" icon={faLinkedinIn} />
              <SocialLink href="#" icon={faInstagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 ">
              <FooterLink text="Home" onClick={() => scrollToSection('home')} />
              <FooterLink text="About Us" onClick={() => scrollToSection('about')} />
              <FooterLink text="Services" onClick={() => scrollToSection('services')} />
              <FooterLink text="Contact" onClick={() => scrollToSection('contact')} />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 " >
            <li className="flex items-start space-x-3">
                <span>Waste Collection</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Recycling Solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Commercial Services</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Environmental Consulting</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-400 mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                <span>smartwaste@greenfuture.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-white text-lg font-semibold mb-2">
                Subscribe to Our Newsletter
              </h5>
              <p className="text-sm text-gray-400">
                Stay updated with our latest news and updates
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-full md:w-64 bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Smart Waste Management. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Helper Components
const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={icon} className="text-white text-sm" />
  </a>
)

const FooterLink = ({ text, href, onClick }) => (
  <li>
    {onClick ? (
      <button
        onClick={onClick}
        className="text-gray-400 hover:text-white transition duration-300"
      >
        {text}
      </button>
    ) : (
      <a
        href={href}
        className="text-gray-400 hover:text-white transition duration-300"
      >
        {text}
      </a>
    )}
  </li>
)

export default Footer