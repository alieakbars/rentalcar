import React,{ useState } from 'react';
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

export interface CarFilter {
  brand: string;
  transmission: string;
  year: string;
}

function App() {

  const [filters, setFilters] = useState<CarFilter>({
    brand: '',
    transmission: '',
    year: '',
  });

    const handleSearch = (filter: CarFilter) => {
    setFilters(filter);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
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