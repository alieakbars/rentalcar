import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import Services from './components/Services';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero />
        <FeaturedCars />
        <Services />
        <Locations />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;