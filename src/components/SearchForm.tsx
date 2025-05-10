import React, { useState } from "react";
import { Car, Calendar, Antenna, Search } from "lucide-react";
import { Select } from "antd";

const SearchForm: React.FC = () => {
  const [pickBrand, setPickBrand] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffDate, setDropoffDate] = useState("");
  // Set default dates (today and tomorrow)

  const brands = [
    { value: "volvo", label: "Volvo" },
    { value: "saab", label: "Saab" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
  ];

    const transition = [
      { value: "random", label: "Random" },
      { value: "automatic", label: "Automatic" },
      { value: "electric", label: "Electric" },
    { value: "manual", label: "Manual" },
    { value: "triptonic", label: "Triptonic" },
  ];

  React.useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0];
    };

    if (!dropoffDate) setDropoffDate(formatDate(tomorrow));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
                  <option value=""> brand </option>
                  {brands.map((brand) => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
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
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  required
                >
                  {transition.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
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
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
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
                  className="w-full mt-7 bg-accent-500 hover:bg-accent-600 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
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
