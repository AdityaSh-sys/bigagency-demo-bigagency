import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-blue-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-10 text-lg">Join 500+ companies that trust BigAgency for their SaaS needs.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
             <input type="email" placeholder="Enter your work email" className="px-6 py-4 rounded-xl text-gray-900 w-full md:w-80 outline-none" />
             <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition">Get Started Now</button>
          </div>
          <p className="mt-6 text-sm text-blue-200">No credit card required. 14-day free trial.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;