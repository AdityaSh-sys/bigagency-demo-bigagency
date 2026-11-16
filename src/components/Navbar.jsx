import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-black flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-accent rounded-lg"></div>
          BigAgency
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-orange-accent transition">Product</a>
          <a href="#about" className="hover:text-orange-accent transition">Company</a>
          <a href="#contact" className="hover:text-orange-accent transition">Contact</a>
        </div>
        <a href="#contact" className="bg-black text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-accent transition-colors">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;