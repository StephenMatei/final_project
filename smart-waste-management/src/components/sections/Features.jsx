import React from "react";

const Features = () => {
  return (
    <section className="py-20 px-6 text-center bg-gray-50">
      <h2 className="text-4xl font-extrabold text-gray-800">Why Choose Our System?</h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-2">We provide innovative waste management solutions for a cleaner and smarter city.</p>

      <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="p-8 bg-white shadow-lg rounded-lg hover:scale-105 transition transform">
          <h3 className="text-2xl font-semibold text-green-700">Real-time Tracking</h3>
          <p className="mt-2 text-gray-600">Monitor waste collection schedules in real-time.</p>
        </div>
        <div className="p-8 bg-white shadow-lg rounded-lg hover:scale-105 transition transform">
          <h3 className="text-2xl font-semibold text-green-700">Easy Scheduling</h3>
          <p className="mt-2 text-gray-600">Request pickups with a single click.</p>
        </div>
        <div className="p-8 bg-white shadow-lg rounded-lg hover:scale-105 transition transform">
          <h3 className="text-2xl font-semibold text-green-700">Data Analytics</h3>
          <p className="mt-2 text-gray-600">Access waste management reports & insights.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
