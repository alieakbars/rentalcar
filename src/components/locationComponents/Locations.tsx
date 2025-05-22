import React from "react";
import { MapPin, ChevronRight } from "lucide-react";

const Locations: React.FC = () => {
  const popularLocations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Miami",
    "Las Vegas",
    "Orlando",
    "San Francisco",
    "Denver",
  ];
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Lokasi Rental Mobil Medan Muezza</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.670578166947!2d98.70412633854481!3d3.5475970681680753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031308700044e7d%3A0x692de656dff63540!2sJl.%20Garu%201%20No.106%20A%2C%20Sitirejo%20III%2C%20Kec.%20Medan%20Amplas%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020147!5e0!3m2!1sid!2sid!4v1747715837995!5m2!1sid!2sid"
              className="w-full max-w-6xl h-[550px] rounded-lg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
