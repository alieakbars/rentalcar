import React, { useState } from "react";
import { Car, Calendar, Antenna, Search } from "lucide-react";
import { CarFilter } from "../../App";
import moment from "moment";
import Cars from "../../data/car";
import { CarType } from "../../types/car";

interface SearchFormProps {
  onFilter: (filter: CarFilter) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onFilter }) => {
  const [pickBrand, setPickBrand] = useState<string>("All");
  const [pickTransmisi, setPickTransmisi] = useState<string>("All");
  const [pickTahun, setPickTahun] = useState<string>(moment().format("YYYY"));

  const cars: CarType[] = Cars;

  const uniqueBrands = cars.filter(
    (car, index, self) =>
      car.brand && index === self.findIndex((c) => c.brand === car.brand)
  );

  const transmisiSet = new Set();

  cars.forEach((car) => {
    (car.transmission || []).forEach((brand) => {
      if (typeof brand === "string") {
        transmisiSet.add(brand.trim()); // bisa tambahkan .toLowerCase() jika perlu normalisasi
      }
    });
  });

  const uniqueTransmisi = [...transmisiSet];

  React.useEffect(() => {}, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof onFilter !== "function") {
      console.error("onFilter is not a function", onFilter);
      return;
    }

    onFilter({
      brand: pickBrand,
      transmission: pickTransmisi,
      year: pickTahun,
    });

    console.log(pickBrand, pickTransmisi, pickTahun);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl text-neutral-800 p-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {
            <div>
              <label
                htmlFor="dropoff"
                className="block text-sm font-medium mb-1"
              >
                Search Form
              </label>
            </div>
          }

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label
                htmlFor="pickup-date"
                className="block text-sm font-medium mb-1 text-left"
              >
                Brand
              </label>
              <div className="relative">
                <Car
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
                  size={18}
                />
                <select
                  id="pickup-date"
                  value={pickBrand}
                  onChange={(e) => setPickBrand(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  required
                >
                  <option value="All">Semua Brand</option>
                  {uniqueBrands.map((car) => (
                    <option key={car.brand} value={car.brand}>
                      {car.brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="pickup-time"
                className="block text-sm font-medium mb-1 text-left"
              >
                Transmisi
              </label>
              <div className="relative">
                <Antenna
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
                  size={18}
                />
                <select
                  id="pickup-time"
                  value={pickTransmisi}
                  onChange={(e) => setPickTransmisi(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  required
                >
                  <option value="All">Semua Transmisi</option>
                  {(uniqueTransmisi as string[]).map((transmisi) => (
                    <option key={transmisi} value={transmisi}>
                      {transmisi}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="dropoff-date"
                className="block text-sm font-medium mb-1 text-left"
              >
                Tahun
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
                  size={18}
                />

                <select
                  id="pickup-time"
                  value={pickTahun}
                  onChange={(e) => setPickTahun(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  required
                >
                  {Array.from({ length: 15 }).map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div>
              <div className="relative">
                <button
                  type="submit"
                  className="w-full mt-7 bg-sky-500/100 hover:bg-blue-500 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <Search size={18} className="mr-2" />
                  Cari Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
