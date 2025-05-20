import React, { useState } from "react";
import Hero from "../components/homeComponents/Hero";
import FeaturedCars from "../components/homeComponents/FeaturedCars";
import Services from "../components/homeComponents/Services";
import Locations from "../components/locationComponents/Locations";
import Testimonials from "../components/homeComponents/Testimonials";
import FAQ from "../components/homeComponents/FAQ";
import Newsletter from "../components/homeComponents/Newsletter";

const Location = () => {
  return (
    <div className="flex flex-col bg-neutral-50">
      <Locations />
    </div>
  );
};

export default Location;
