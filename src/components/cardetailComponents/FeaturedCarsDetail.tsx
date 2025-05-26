import React from "react";
import { CarType } from "../../types/car";
import Cars from "../../data/car";
import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

import {
  RockingChair,
  Antenna,
  Check,
  Heart,
  Fuel,
  CalendarDays,
} from "lucide-react";

interface FeaturedCarsDetailProps {
  id?: string;
}

const FeaturedCarsDetail: React.FC<FeaturedCarsDetailProps> = ({ id }) => {
  const cars: CarType[] = Cars;
  const [mobil, setMobil] = useState<CarType | null>(null);

  useEffect(() => {
    if (!id) return;

    const mobilId = parseInt(id);
    const found = cars.find((m) => m.id === mobilId);
    setMobil(found ?? null);
  }, [id]);

  if (!mobil) {
    return <div>Mobil tidak ditemukan</div>;
  }

  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-80"></div>
      </div>

      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="animate-fade-in">
          <div className="grid grid-flow-col grid-rows-2">
            <div className="row-span-3">
              {" "}
              <img
                src={mobil.image[0]}
                alt={mobil.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-2">
              <div className="card group animate-fade-in flex flex-col h-full">
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg text-neutral-700 font-semibold">
                      {mobil.name}
                    </h3>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
                      <CalendarDays
                        size={12}
                        className="mr-1 text-primary-700"
                      />
                      {mobil.year}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
                      <Fuel size={12} className="mr-1 text-primary-700" />
                      {mobil.fuel}
                    </span>

                    <span className="inline-flex items-center px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
                      <RockingChair
                        size={12}
                        className="mr-1 text-primary-700"
                      />
                      {mobil.seat}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col">
                    <span className="inline-flex items-center px-2 py-1  text-neutral-700 rounded text-xs">
                      <Antenna size={12} className="mr-1 text-primary-700" />
                      Pilih Transmisi :
                    </span>
                    <ButtonComponent
                      label=""
                      type="radio"
                      val={mobil.transmission}
                      size="small"
                    />
                  </div>

                  <div className="mt-3 flex flex-col">
                    <span className="inline-flex items-center px-2 py-1  text-neutral-700 rounded text-xs">
                      <Fuel size={12} className="mr-1 text-primary-700" />
                      Pilih Bahan Bakar :
                    </span>
                    <ButtonComponent
                      label=""
                      type="radio"
                      val={mobil.fuel}
                      size="small"
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <div>
                      <span className="text-neutral-600 text-sm">
                        Mulai dari{" "}
                      </span>
                    </div>
                    <a href="#" className="btn-blue">
                      Rent Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsDetail;
