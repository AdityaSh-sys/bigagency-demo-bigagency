import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    { title: "Real-time Analytics", desc: "Instantly visualize your growth metrics with our AI-driven dashboard.", icon: "📊" },
    { title: "Automated Growth", desc: "Scale operations seamlessly with our intelligent automation engine.", icon: "🚀" },
    { title: "Secure Infrastructure", desc: "Enterprise-grade protection for your most valuable user data.", icon: "🛡️" }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900"
        >
          Engineered for <span className="text-orange-500">Scaling</span>.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-orange-100 transition-all"
            >
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;