import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold">BigAgency</div>
          <div className="flex gap-8 text-slate-400">
            <a href="#" className="hover:text-white transition">Product</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
          <div className="text-slate-500">
            © 2026 BigAgency Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;