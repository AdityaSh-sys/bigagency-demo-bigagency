import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-white min-h-[80vh] flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-orange-600 bg-orange-50 rounded-full">
            AI-POWERED SAAS SOLUTIONS
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.9]">
            Scale Your <br />
            <span className="text-orange-500">Vision.</span>
          </h1>
          <p className="text-slate-600 text-xl mb-10 leading-relaxed max-w-lg">
            BigAgency provides the infrastructure, data, and automation tools your SaaS needs to dominate the market.
          </p>
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" 
            alt="SaaS Growth" 
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;