import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "10x", label: "Average Platform Speedup" },
  { value: "$450M+", label: "Client Revenue Processed" },
  { value: "0.2s", label: "Global Edge Latency" },
  { value: "24/7", label: "Dedicated SOC Support" }
];

const Metrics = () => {
  return (
    <section id="metrics" className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-4 border-orange-500 pl-6"
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm font-semibold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;