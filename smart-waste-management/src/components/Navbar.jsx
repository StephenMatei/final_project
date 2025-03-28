import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-extrabold text-green-700">Smart Waste Management</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-green-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">About</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">Features</a>
          <a href="#" className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
