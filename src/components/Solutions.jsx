import React from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  return (
    <section id="solutions" className="py-28 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-orange-500 font-bold uppercase tracking-wider text-xs mb-3 block">TRANSFORMATION CASE STUDY</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 leading-tight mb-6">
            How we helped <span className="text-orange-500">DataSync</span> scale from $2M to $25M ARR in 14 months.
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            DataSync's legacy infrastructure was buckling under peak user volume. BigAgency rebuilt their core telemetry engine and revamped their subscriber onboarding UX.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">✓</div>
              <span className="font-semibold text-slate-800">Latency reduced from 1.4s to 120ms</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">✓</div>
              <span className="font-semibold text-slate-800">Trial-to-Paid Conversion increased by +84%</span>
            </div>
          </div>
          <a href="#contact" className="inline-block bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-500 transition-colors">
            Read Full Engineering Case Study
          </a>
        </div>

        <div className="relative">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" 
            alt="Engineering Team"
            className="rounded-3xl shadow-2xl border border-slate-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;