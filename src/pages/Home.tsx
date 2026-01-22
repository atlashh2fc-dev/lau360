import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import Advantages from '../components/Advantages';
import CaseStudies from '../components/CaseStudies';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />

      <main className="relative">
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <Industries />
        <Advantages />
        <CaseStudies />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
