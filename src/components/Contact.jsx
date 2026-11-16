import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white rounded-t-[3rem] mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to grow your SaaS?</h2>
          <p className="text-slate-400 text-xl">Join 500+ companies scaling with BigAgency.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
               <input type="text" placeholder="Name" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl outline-none focus:border-orange-accent transition" />
               <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl outline-none focus:border-orange-accent transition" />
            </div>
            <textarea placeholder="Message" rows="4" className="w-full bg-white/10 border border-white/20 p-4 rounded-xl outline-none focus:border-orange-accent transition"></textarea>
            <button className="w-full bg-orange-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;