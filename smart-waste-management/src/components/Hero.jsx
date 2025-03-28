import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-green-400 text-white text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">Efficient Waste Management for a Cleaner Future</h1>
        <p className="mt-4 text-lg opacity-90">Track waste collection, schedule pickups, and reduce pollution.</p>
        <button className="mt-6 px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
