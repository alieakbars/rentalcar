import React, { useState } from "react";
import Hero from "../components/homeComponents/Hero";
import FeaturedCars from "../components/homeComponents/FeaturedCars";
import Services from "../components/homeComponents/Services";
import Locations from "../components/homeComponents/Locations";
import Testimonials from "../components/homeComponents/Testimonials";
import FAQ from "../components/homeComponents/FAQ";
import Newsletter from "../components/homeComponents/Newsletter";

export interface CarFilter {
  brand: string;
  transmission: string;
  year: string;
}

const Home = () => {
  const [filters, setFilters] = useState<CarFilter>({
    brand: "",
    transmission: "",
    year: "",
  });

  const handleSearch = (filter: CarFilter) => {
    setFilters(filter);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <main>
        <Hero onFilter={handleSearch} />
        <FeaturedCars filter={filters} />
        <Services />
        <Locations />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
    </div>
  );
};

export default Home;
