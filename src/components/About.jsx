import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Why choose <span className="text-orange-accent">BigAgency</span>?</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We aren't just another SaaS tool. We are a dedicated partner in your growth. Our platform is built by engineers who understand the complexities of scaling a modern business.
            </p>
            <ul className="space-y-4">
              {['24/7 Priority Support', 'Dedicated Account Manager', 'Custom Enterprise Integration'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                  <div className="w-5 h-5 bg-orange-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square bg-orange-accent/5 rounded-3xl p-8 border border-orange-accent/10">
               <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center border border-gray-100">
                  <div className="text-center">
                     <div className="text-4xl font-bold text-black mb-2">99.9%</div>
                     <div className="text-slate-500 font-medium">Uptime Guaranteed</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;