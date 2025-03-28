import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800">About Our System</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Our system simplifies waste management through tracking, analytics, and optimized collection schedules to promote sustainability.
      </p>
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
