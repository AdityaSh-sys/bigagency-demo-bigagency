import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed w-full z-50 p-8 flex justify-between items-center">
    <div className="text-xl font-bold tracking-tighter bg-black text-white px-4 py-2">BIGAGENCY</div>
    <button className="text-sm font-bold border-b-2 border-black hover:text-orange-600 hover:border-orange-600 transition">MENU</button>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen pt-40 px-8">
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-8">
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "-0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 1 }}
          className="text-[10vw] font-bold leading-[0.8] mb-12"
        >
          SCALING<br/>SYSTEMS.
        </motion.h1>
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-col justify-end pb-10">
        <p className="text-xl leading-relaxed mb-8">We architect high-growth SaaS infrastructure with precision and scale. Modern tech, zero fluff.</p>
        <button className="w-full bg-orange-500 text-white py-6 text-xl font-bold rounded-lg hover:bg-black transition">START PROJECT</button>
      </div>
    </div>
    <div className="mt-20 border-t border-black pt-10 grid grid-cols-4 gap-8">
      {['CLOUD', 'AI-OPS', 'DATA', 'SECURITY'].map(tag => (
        <div key={tag} className="text-xs font-bold uppercase tracking-widest">{tag}</div>
      ))}
    </div>
  </section>
);

export default function App() {
  return <div className="bg-white text-black font-mono"><Navbar /><Hero /></div>;
}