import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team" className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for Efficiency, <br/>Designed for Growth</h2>
          <p className="text-lg text-gray-600 mb-6">
            At BigAgency, we believe that technology should empower, not complicate. Our platform is built on the foundation of user-centric design and powerful engineering.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-700">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
              Industry-leading ROI in under 6 months.
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
              Seamless integration with 200+ tools.
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
              Dedicated account support for every client.
            </li>
          </ul>
          <button className="text-blue-600 font-bold flex items-center hover:gap-2 transition-all">
            Learn more about our vision <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;