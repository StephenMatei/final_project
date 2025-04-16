// components/sections/ServicesSection.jsx
const ServicesSection = () => (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-gray-900 md:text-3xl font-bold mb-12">Comprehensive Waste Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Service cards */}
          <ServiceCard
            title="Real-time Monitoring"
            description="Tailored waste management services designed to meet specific environmental needs."
          />
          <ServiceCard
            title="Recycling Initiatives"
            description="Expert guidance on implementing recycling programs and waste reduction strategies."
          />
          <ServiceCard
            title="Hazardous Waste Handling"
            description="Specialized in the safe handling and disposal of hazardous waste materials."
          />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Regulatory Compliance"
            description="Ensuring compliance with waste management regulations and implementing top-notch safety standards."
          />
          <ServiceCard
            title="Customized Solutions"
            description="Innovative and customized waste management solutions to address diverse environmental requirements."
          />
        </div>
      </div>
    </section>
  )
  
  const ServiceCard = ({ title, description }) => (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="w-8 h-8 rounded-full border-2 border-gray-600 mb-4"></div>
      <h3 className="text-lg text-gray-900 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
  
  export default ServicesSection