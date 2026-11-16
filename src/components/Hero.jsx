import React from 'react';

const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-6 bg-white">
      <div className="container mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-accent uppercase bg-orange-50 rounded-full">
          New: AI-Powered Analytics
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-slate-900">
          Scale your SaaS <br />
          <span className="text-orange-accent">Faster than ever.</span>
        </h1>
        <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The ultimate engine for modern software companies. Automate your operations, analyze your data, and dominate your niche.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-500/20">
            Start Free Trial
          </button>
          <button className="bg-white text-black border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-black transition">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;