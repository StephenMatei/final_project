// src/components/sections/ContactSection.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-blue-100 px-4 py-1 rounded-full text-3xl md:text-4xl font-bold text-gray-900">
            📞 Contact Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Got questions or want to partner with us?
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <ContactInfo
                icon={faMapMarkerAlt}
                title="Address"
                content="Nairobi, Kenya"
                color="text-red-500"
              />
              <ContactInfo
                icon={faEnvelope}
                title="Email"
                content="smartwaste@greenfuture.co.ke"
                color="text-blue-500"
              />
              <ContactInfo
                icon={faPhone}
                title="Phone"
                content="+254 712 345 678"
                color="text-green-500"
              />
              <ContactInfo
                icon={faGlobe}
                title="Website"
                content="www.smartwaste.co.ke"
                color="text-purple-500"
              />
            </div>

            {/* Map or Additional Information */}
            <div className="mt-8 bg-blue-100 rounded-2xl p-6 text-center">
              <p className="text-blue-800">
                Visit our office to learn more about how we're transforming waste management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ContactInfo = ({ icon, title, content, color }) => (
  <div className="flex items-start space-x-4">
    <div className={`${color} bg-gray-100 p-3 rounded-full`}>
      <FontAwesomeIcon icon={icon} className="text-xl" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
)

export default ContactSection