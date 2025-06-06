import React from "react";
import {
  RockingChair,
  Antenna,
  Check,
  Heart,
  Fuel,
  CalendarDays,
} from "lucide-react";
import { CarType } from "../../types/car";

interface CarCardProps {
  car: CarType;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formattedCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(car.price[0]);

  return (
    <div className="card group animate-fade-in flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={car.image[0]}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-primary-700">
          {car.brand}
        </span>
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{car.name}</h3>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <CalendarDays size={12} className="mr-1 text-primary-700" />
            {car.year}
          </span>

          <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <Antenna size={12} className="mr-1 text-primary-700" />
            {car.transmission.join(", ")}
          </span>

          <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <Fuel size={12} className="mr-1 text-primary-700" />
            {car.fuel}
          </span>

          <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <RockingChair size={12} className="mr-1 text-primary-700" />
            {car.seat}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-between">
          <div>
            <span className="text-neutral-600 text-sm">Mulai dari </span>
            <span className="text-2xl font-bold text-primary-700">
              {formattedCurrency}
            </span>
          </div>
          <a href="#" className="btn-blue">
            Lihat Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
