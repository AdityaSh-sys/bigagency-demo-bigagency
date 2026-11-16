import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <Solutions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;