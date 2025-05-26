import React, { useState } from "react";
import Hero from "../components/carsComponents/Hero";
import FeaturedCars from "../components/carsComponents/FeaturedCars";
import Services from "../components/carsComponents/Services";
import Locations from "../components/locationComponents/Locations";
import Testimonials from "../components/carsComponents/Testimonials";
import FAQ from "../components/carsComponents/FAQ";
import Newsletter from "../components/carsComponents/Newsletter";

export interface CarFilter {
  brand: string;
  transmission: string;
  year: string;
}

const Cars = () => {
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
        {/* <Locations />
        <Testimonials />
        <FAQ /> */}
        {/* <Newsletter /> */}
      </main>
    </div>
  );
};

export default Cars;
