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
  const formattedCurrency = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="card group animate-fade-in flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden mt-5">
        <img
          src={car.image[0]}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-primary-700">
          {car.brand}
        </span> */}
      </div>

      <div className="p-2 flex flex-col justify-between flex-grow">
        <div className="text-center">
          <h3 className="text-lg font-semibold">{car.name}</h3>
          <span className="text-lg font-bold text-primary-700">
            {formattedCurrency(car.price[0])}/Hari
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <CalendarDays size={12} className="mr-1 text-primary-700" />
            {car.year}
          </span>

          {/* <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <Antenna size={12} className="mr-1 text-primary-700" />
            {car.transmission.join(", ")}
          </span> */}

          <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <Fuel size={12} className="mr-1 text-primary-700" />
            {car.fuel}
          </span>

          <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
            <RockingChair size={12} className="mr-1 text-primary-700" />
            {car.seat}
          </span>
        </div>

        <div className="flex flex-col text-center item mt-2">
          <span className="text-sm text-primary-700">Lepas Kunci</span>
          {car?.transmission.includes("Manual") ? (
            <span className="text-sm text-primary-700">
              {(car?.transmission[0] ? car?.transmission[0] :car?.transmission[1])} : {formattedCurrency(car.price[0] ? car.price[0] : car.price[1])}/Hari
            </span>
          ) : null}
          {car?.transmission.includes("Automatic") ? (
            <span className="text-sm text-primary-700">
              {(car?.transmission[1] ? car?.transmission[1] :car?.transmission[0])} : {formattedCurrency(car.price[1] ? car.price[1] : car.price[0])}/hari
            </span>
          ): null}
        </div>

        <div className="flex flex-col text-center item mt-2">
          <span className="text-sm text-primary-700">
            Mobil + Driver Dalam Kota
          </span>
          {car.transmission.includes("Manual") ? (
            <span className="text-sm text-primary-700">
              {formattedCurrency(car.price[0] ? car.price[0] + 150000 : car.price[1] + 150000)}/Hari
            </span>
          ) : (
            <span className="text-sm text-primary-700">
              {formattedCurrency(car.price[1] ? car.price[1] + 150000 : car.price[0] + 150000)}/Hari
            </span>
          )}
          {/* {car.transmission.includes("Automatic") && (
            <span className="text-sm text-primary-700">
              {car.transmission[1]} : {formattedCurrency(car.price[1])}/hari
            </span>
          )} */}
        </div>

        <div className="flex flex-col text-center item mt-2">
          <span className="text-sm text-primary-700">
            Mobil + Driver Luar Kota
          </span>
          {car.transmission.includes("Manual") ? (
            <span className="text-sm text-primary-700">
              {formattedCurrency(car.price[0] ? car.price[0] + 200000 : car.price[1] + 200000)}/Hari
            </span>
          ) : (
            <span className="text-sm text-primary-700">
              {formattedCurrency(car.price[1] ? car.price[1] + 200000 : car.price[0] + 200000)}/Hari
            </span>
          )}
          {/* {car.transmission.includes("Automatic") && (
            <span className="text-sm text-primary-700">
              {car.transmission[1]} : {formattedCurrency(car.price[1])}/hari
            </span>
          )} */}
        </div>

        <div className="p-2 border-t border-neutral-200 items-center text-center">
          {/* <div>
            <span className="text-neutral-600 text-sm">Mulai dari </span>
            <span className="text-2xl font-bold text-primary-700">
              {formattedCurrency(car.price[0])}
            </span>
          </div> */}
          <a href="https://wa.link/21zsn2" target="_blank" className="btn-blue">
            Booking Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
