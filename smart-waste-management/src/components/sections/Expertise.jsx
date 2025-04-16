// src/components/sections/ExpertiseSection.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      icon: "♻️",
      title: "Waste Collection Optimization",
      description: "We streamline waste collection schedules and routes to reduce operational costs and improve efficiency.",
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
      borderColor: "border-green-300"
    },
    {
      icon: "📊",
      title: "Data-Driven Decision Making",
      description: "Our system uses real-time and historical data to help authorities and organizations make informed waste management decisions.",
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      borderColor: "border-blue-300"
    },
    {
      icon: "🌍",
      title: "Community Engagement",
      description: "We empower communities through tools that promote responsible waste practices, reporting, and participation.",
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      borderColor: "border-purple-300"
    },
    {
      icon: "🛠",
      title: "Scalable Digital Infrastructure",
      description: "Our platform is built for growth from small towns to major cities, we adapt to scale.",
      color: "bg-orange-100",
      hoverColor: "hover:bg-orange-200",
      borderColor: "border-orange-300"
    },
    {
      icon: "🔐",
      title: "Security & Accessibility",
      description: "We ensure user data is protected with robust security practices, and the platform is designed to be user-friendly and accessible for all.",
      color: "bg-red-100",
      hoverColor: "hover:bg-red-200",
      borderColor: "border-red-300"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Expertise</h2>
            <FontAwesomeIcon icon={faCircleRight} className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated to providing high-quality waste management services through innovative solutions and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className={`relative group ${item.color} rounded-xl p-6 transition-all duration-300 ${item.hoverColor} 
                transform hover:-translate-y-1 hover:shadow-xl border-2 ${item.borderColor}`}
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full border-4 border-white 
                bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 
                transition-opacity duration-300" 
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-100"></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-200"></div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;