import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-xs mb-3 block">START SCALING TODAY</span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950">Book an Architecture Audit</h2>
        </div>

        {sent ? (
          <div className="bg-orange-50 border border-orange-200 p-12 rounded-3xl text-center">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
            <h3 className="text-2xl font-bold text-slate-950 mb-2">Request Received</h3>
            <p className="text-slate-600">Our principal solution architect will contact you within 4 business hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Name</label>
                <input required type="text" placeholder="Alex Mercer" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Work Email</label>
                <input required type="email" placeholder="alex@company.com" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Current ARR</label>
              <select className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:border-orange-500 transition-colors">
                <option>Pre-revenue / Seed</option>
                <option>$500k - $2M ARR</option>
                <option>$2M - $10M ARR</option>
                <option>$10M+ ARR</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Project Scope / Challenge</label>
              <textarea rows="4" placeholder="Describe your scaling bottlenecks or upcoming feature pipeline..." className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:border-orange-500 transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-black transition-all shadow-lg shadow-orange-500/20">
              Request Technical Consultation
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;