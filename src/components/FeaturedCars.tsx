import React, { useState } from 'react';
import { Filter, ChevronRight } from 'lucide-react';
import CarCard from './CarCard';
import { CarType } from '../types/car';
import { CarFilter } from "../App";

interface FeaturedCarsProps {
  filter: CarFilter | null;
}

const FeaturedCars: React.FC<FeaturedCarsProps> = ({ filter  }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const cars: CarType[] = [
    {
      id: 1,
      name: 'Toyota Camry',
      brand: 'toyota',
      transmission: 'automatic',
      price: 49,
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['5 Seats', 'Automatic', 'A/C', '2 Bags'],
      rating: 4.8,
      reviews: 342,
      year: 2025
    },
    {
      id: 2,
      name: 'Honda CR-V',
      brand: 'honda',
      transmission: 'automatic',
      price: 65,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['5 Seats', 'Automatic', 'A/C', '3 Bags'],
      rating: 4.7,
      reviews: 286,
      year: 2025
    },
    {
      id: 3,
      name: 'BMW 3 Series',
      brand: 'bmw',
      transmission: 'automatic',
      price: 89,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['5 Seats', 'Automatic', 'A/C', '2 Bags'],
      rating: 4.9,
      reviews: 412,
      year: 2025
    },
    {
      id: 4,
      name: 'Chevrolet Spark',
      brand: 'chevrolet',
      transmission: 'automatic',
      price: 35,
      image: 'https://images.pexels.com/photos/1503863/pexels-photo-1503863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['4 Seats', 'Manual', 'A/C', '1 Bag'],
      rating: 4.5,
      reviews: 198,
      year: 2025
    },
    {
      id: 5,
      name: 'Ford F-150',
      brand: 'ford',
      transmission: 'manual',
      price: 79,
      image: 'https://images.pexels.com/photos/9553908/pexels-photo-9553908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['5 Seats', 'Automatic', 'A/C', '4 Bags'],
      rating: 4.6,
      reviews: 256,
      year: 2025
    },
    {
      id: 6,
      name: 'Mercedes-Benz E-Class',
      brand: 'mercedes',
      transmission: 'triptonic',
      price: 99,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['5 Seats', 'Automatic', 'A/C', '3 Bags'],
      rating: 4.9,
      reviews: 378,
      year: 2025
    }
  ];

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
    if (!filter) return true; // kalau belum difilter, tampilkan semua

    return (
      (!filter.brand || car.brand === filter.brand) &&
      (!filter.transmission || car.transmission === filter.transmission) &&
      (!filter.year || car.year === Number(filter.year))
    );
  });

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <a href="#" className="btn-primary flex items-center">
            View All Cars
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;