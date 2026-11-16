import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-black text-white font-black text-xs flex items-center justify-center">B</div>
          <span className="font-extrabold text-slate-950">BIGAGENCY</span>
          <span className="text-slate-400">© {new Date().getFullYear()} Inc.</span>
        </div>
        <div className="flex gap-6 font-semibold">
          <a href="#features" className="hover:text-orange-500 transition">Platform</a>
          <a href="#solutions" className="hover:text-orange-500 transition">Solutions</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;