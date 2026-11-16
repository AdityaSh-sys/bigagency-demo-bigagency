import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-36 pb-24 px-6 bg-gradient-to-b from-orange-50/40 via-white to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200 text-orange-600 font-bold text-xs uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Enterprise SaaS Engineering & Growth Engine
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] mb-8">
            Engineered to scale <br />
            your SaaS to <span className="text-orange-500 underline decoration-orange-300 decoration-wavy">8-figures</span>.
          </h1>

          <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mb-10">
            BigAgency pairs high-level custom software development with algorithmic revenue architecture for ambitious tech organizations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-black transition-all shadow-lg shadow-orange-500/20 text-center">
              Schedule Architecture Review
            </a>
            <a href="#features" className="px-8 py-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-lg hover:bg-slate-200 transition-all text-center">
              Explore Platform
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-slate-100 pt-8">
            <div>
              <div className="text-3xl font-extrabold text-slate-950">99.99%</div>
              <div className="text-xs text-slate-500 font-semibold">Infrastructure Uptime</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <div className="text-3xl font-extrabold text-slate-950">$450M+</div>
              <div className="text-xs text-slate-500 font-semibold">Managed Client ARR</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80" 
              alt="Dashboard Preview" 
              className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-orange-600 uppercase">Live Pipeline Telemetry</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="text-2xl font-black text-slate-950">+342% ARR Growth</div>
              <p className="text-xs text-slate-500">Automated AI Scaling Workflow Active</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;