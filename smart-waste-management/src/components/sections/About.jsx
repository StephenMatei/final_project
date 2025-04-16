// src/components/sections/AboutSection.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faRecycle, faCity, faHandshake } from '@fortawesome/free-solid-svg-icons'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
             <div className="flex items-center justify-center gap-4 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
                      </div>
            
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Transforming Waste into Opportunity
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a passionate team committed to building cleaner, more sustainable 
              communities through technology. Our smart waste management system is designed 
              to streamline waste operations, promote accountability, and empower both 
              municipal councils and citizens to take action toward sustainable urban living.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              By focusing on simplicity, scalability, and impact, our platform bridges 
              the gap between waste generation and responsible disposal — aligning perfectly 
              with the UN Sustainable Development Goals (SDG 11 & SDG 12).
            </p>

            {/* SDG Goals Badges */}
            <div className="flex space-x-4">
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="font-semibold text-blue-800">SDG 11</span>
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="font-semibold text-green-800">SDG 12</span>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <FeatureCard 
              icon={faLeaf}
              title="Sustainable"
              color="text-green-500"
              bgColor="bg-green-100"
            />
            <FeatureCard 
              icon={faRecycle}
              title="Circular Economy"
              color="text-blue-500"
              bgColor="bg-blue-100"
            />
            <FeatureCard 
              icon={faCity}
              title="Smart Cities"
              color="text-purple-500"
              bgColor="bg-purple-100"
            />
            <FeatureCard 
              icon={faHandshake}
              title="Community"
              color="text-orange-500"
              bgColor="bg-orange-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, title, color, bgColor }) => (
  <div className={`${bgColor} p-6 rounded-xl text-center transform transition-transform hover:-translate-y-1`}>
    <FontAwesomeIcon icon={icon} className={`${color} text-3xl mb-3`} />
    <h3 className="font-semibold text-gray-900">{title}</h3>
  </div>
)

export default AboutSection