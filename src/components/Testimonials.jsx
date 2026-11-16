import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "BigAgency is the secret weapon behind our tech stack. Their team operates with the velocity of an in-house elite engineering unit.",
    author: "David Chen",
    role: "CTO, CloudPulse Software"
  },
  {
    quote: "The ROI was immediate. Our app performance quadrupled and user churn plummeted within the first quarter.",
    author: "Samantha Wright",
    role: "VP Product, MetricScale"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-bold uppercase tracking-wider text-xs mb-3 block">CLIENT VERDICT</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold">TRUSTED BY CTOs WORLDWIDE</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-800/80 p-10 rounded-3xl border border-slate-700 relative"
            >
              <p className="text-slate-200 text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-lg">{t.author}</h4>
                <p className="text-orange-400 text-sm font-semibold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;