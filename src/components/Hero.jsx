import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center gradient-bg text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Next-Gen SaaS for <br/><span className="text-blue-300">Modern Enterprises</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">
          Scale your operations, automate workflows, and unlock deep insights with BigAgency's intelligent platform.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg">
            Start Free Trial
          </button>
          <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition transform hover:-translate-y-1">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;