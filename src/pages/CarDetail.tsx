import React, { useState } from "react";
import FeaturedCarsDetail from "../components/cardetailComponents/FeaturedCarsDetail";
import { useParams } from "react-router-dom";

export interface CarFilter {
  brand: string;
  transmission: string;
  year: string;
}

const CarsDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <main>
        <FeaturedCarsDetail id={id} />
      </main>
    </div>
  );
};

export default CarsDetail;
