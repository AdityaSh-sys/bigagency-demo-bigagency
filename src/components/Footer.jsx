import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-white text-2xl font-bold mb-6">BigAgency</h3>
            <p className="max-w-sm mb-6">Leading the way in intelligent SaaS solutions for the modern enterprise. We empower businesses to reach their full potential.</p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          © {new Date().getFullYear()} BigAgency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;