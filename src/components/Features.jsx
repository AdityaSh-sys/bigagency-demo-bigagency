import React from 'react';

const features = [
  { title: "Real-time Analytics", desc: "Get instant insights into your user behavior with powerful dashboards." },
  { title: "Automated Workflows", desc: "Save hours every week by automating repetitive manual tasks." },
  { title: "Security First", desc: "Enterprise-grade security to keep your company and user data safe." }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900 italic">Built for the next generation.</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-orange-accent/10 flex items-center justify-center rounded-xl mb-6 text-orange-accent group-hover:bg-orange-accent group-hover:text-white transition-colors font-bold text-xl">
                0{i+1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;