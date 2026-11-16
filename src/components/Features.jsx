import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "AI-Driven Cloud Optimization",
    desc: "Reduce server overhead by up to 60% with intelligent load balancing and auto-scaling node architecture.",
    icon: "⚡"
  },
  {
    title: "Custom SaaS Frontend & Design",
    desc: "Bespoke, high-converting interfaces built with Next.js, React, and micro-animations that turn users into brand advocates.",
    icon: "🎨"
  },
  {
    title: "Enterprise Security & Compliance",
    desc: "SOC2 Type II, ISO27001, and GDPR compliance out-of-the-box with automated penetration auditing.",
    icon: "🔒"
  },
  {
    title: "Algorithmic Growth Engine",
    desc: "Integrated product analytics telemetry connected directly to retention and expansion funnels.",
    icon: "📈"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-xs mb-3 block">CORE CAPABILITIES</span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight mb-6">
            BUILT FOR ENTERPRISE <span className="text-orange-500">VELOCITY</span>.
          </h2>
          <p className="text-slate-600 text-lg">
            Everything your SaaS infrastructure needs to scale smoothly without refactoring every 6 months.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-3xl mb-6 text-orange-500">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;