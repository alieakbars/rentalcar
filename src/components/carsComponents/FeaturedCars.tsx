import React from "react";
import CarCard from "./CarCard";
import { CarType } from "../../types/car";
import { CarFilter } from "../../App";
import Cars from "../../data/car";
import { Link } from "react-router-dom";


interface FeaturedCarsProps {
  filter: CarFilter | null;
}

const FeaturedCars: React.FC<FeaturedCarsProps> = ({ filter }) => {

  const cars: CarType[] = Cars;

  const isYearInRange = (filterYear: number, carYearString: string) => {
    if (!carYearString || !filterYear) return false;

    const yearStr = carYearString.trim();

    if (!yearStr.includes("-")) {
      const carYear = parseInt(yearStr, 10);
      return carYear === filterYear;
    }

    const [startStr, endStr] = yearStr
      .split("-")
      .map((str: string) => str.trim());
    const start = parseInt(startStr, 10);
    const end = parseInt(endStr, 10);

    if (isNaN(start) || isNaN(end)) return false;

    return filterYear >= start && filterYear <= end;
  };

  // const filters = [
  //   { id: 'all', label: 'All Cars' },
  //   { id: 'economy', label: 'Economy' },
  //   { id: 'sedan', label: 'Sedan' },
  //   { id: 'suv', label: 'SUV' },
  //   { id: 'luxury', label: 'Luxury' },
  //   { id: 'pickup', label: 'Pickup' }
  // ];

  // const filteredCars = activeFilter === 'all'
  //   ? cars
  //   : cars.filter(car => car.category === activeFilter);

  const filteredCars = cars.filter((car) => {
    if (!filter) return true;

    return (
      (!filter.brand || filter.brand === "All" || car.brand === filter.brand) &&
      (!filter.transmission ||
        filter.transmission === "All" ||
        car.transmission.includes(filter.transmission)) &&
      (!filter.year ||
        filter.year === "All" ||
        isYearInRange(Number(filter.year), car.year))
    );
  });

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        {/* <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Vehicles</h2>
            <p className="text-neutral-600">Find the perfect car for your next trip</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center overflow-x-auto pb-2 md:pb-0 gap-2">
            <span className="flex items-center text-neutral-700 mr-2">
              <Filter size={16} className="mr-1" />
              Filter:
            </span>
            {filteredCars.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id.toString())}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                  activeFilter === filter.id.toString()
                    ? 'bg-primary-700 text-white'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                {filter.brand}
              </button>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <Link to={`/${car.id}`} className="no-underline" key={car.id}>
              <CarCard key={car.id} car={car} />
            </Link>
          ))}
        </div>

        {/* <div className="mt-10 flex justify-center">
          <a href="#" className="btn-primary flex items-center">
            View All Cars
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedCars;
