import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center font-extrabold text-white text-xl">
            B<span className="text-orange-500">.</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-950">
            BIG<span className="text-orange-500">AGENCY</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
          <a href="#features" className="hover:text-orange-500 transition-colors">Platform</a>
          <a href="#solutions" className="hover:text-orange-500 transition-colors">Solutions</a>
          <a href="#metrics" className="hover:text-orange-500 transition-colors">Impact</a>
          <a href="#testimonials" className="hover:text-orange-500 transition-colors">Clients</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-500 transition-all duration-300 shadow-md">
            Book Demo
          </a>
        </div>

        <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-black p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenu ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-4 font-bold">
              <a href="#features" onClick={() => setMobileMenu(false)}>Platform</a>
              <a href="#solutions" onClick={() => setMobileMenu(false)}>Solutions</a>
              <a href="#metrics" onClick={() => setMobileMenu(false)}>Impact</a>
              <a href="#contact" onClick={() => setMobileMenu(false)} className="bg-orange-500 text-white text-center py-3 rounded-xl">Book Demo</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;