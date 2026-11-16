import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
          BigAgency
        </div>
        <div className={`hidden md:flex space-x-8 font-medium ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#features" className="hover:text-blue-500 transition">Features</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;