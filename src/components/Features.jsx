import React from 'react';

const features = [
  { title: "AI Automation", desc: "Automate repetitive tasks with our proprietary machine learning algorithms.", icon: "🤖" },
  { title: "Real-time Analytics", desc: "Get instant insights with our high-performance data processing engine.", icon: "📊" },
  { title: "Enterprise Security", desc: "Bank-grade encryption and compliance standards built into the core.", icon: "🛡️" },
  { title: "Global Scale", desc: "Deploy across regions with zero latency and 99.99% uptime guarantee.", icon: "🌍" },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to manage your business at scale, in one unified platform.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition duration-300 hover:-translate-y-2 bg-slate-50">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;