import React from "react";
import { LocationDescriptionType } from "../../types/locationDescription";
import locationDescription from "../../data/locationDescription";
import CarCard from "./CarCard";
import cars from "../../data/car";

const Description: React.FC = () => {
  const descriptions: LocationDescriptionType[] | null = locationDescription;
  return (
    <section className="section bg-white ">
      <div className="container -mt-10">
        {descriptions.map((desc, index) => (
          <div key={index} className="mb-8">
            <ul className="pl-5">
              {desc.description1.map((item, idx) =>
                idx === 0 ? (
                  <h2 key={idx} className="text-2xl font-bold mb-4">
                    {item}
                  </h2>
                ) : item.includes("image") ? (
                  <div className="flex justify-center my-4">
                    <img
                      src={item}
                      key={idx}
                      alt=""
                      className="block max-w-full h-auto"
                    />
                  </div>
                ) : (
                  <li key={idx} className="text-neutral-600 mb-2">
                    {item}
                  </li>
                )
              )}
            </ul>
            <div className="mt-6 bg-primary-50 rounded-xl p-5">
              {desc.description2.map((item, idx) =>
                idx === 0 ? (
                  <h2 key={idx} className="text-2xl font-bold mb-4">
                    {item}
                  </h2>
                ) : item.includes("image") ? (
                  <div className="flex justify-center my-4">
                    <img
                      src={item}
                      key={idx}
                      alt=""
                      className="block max-w-full h-auto"
                    />
                  </div>
                ) : (
                  <li key={idx} className="text-neutral-600 mb-2">
                    {item}
                  </li>
                )
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
            <ul className="pl-5 mt-2">
              {desc.description3.map((item, idx) =>
                idx === 0 ? (
                  <h2 key={idx} className="text-2xl font-bold mb-4">
                    {item}
                  </h2>
                ) : item.includes("image") ? (
                  <div className="flex justify-center my-4">
                    <img
                      src={item}
                      key={idx}
                      alt=""
                      className="block max-w-full h-auto"
                    />
                  </div>
                ) : (
                  <li key={idx} className="text-neutral-600 mb-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        {/* <div className=" mx-auto mb-5">
          <h2 className="text-2xl font-bold mb-4">Mengapa memilih kami ?</h2>
          <p className="text-neutral-600">
            Kami menawarkan harga yang transparan, beragam pilihan kendaraan
            yang terawat dengan baik, serta layanan pelanggan yang luar biasa
            untuk memastikan pengalaman sewa Anda berjalan lancar dan
            menyenangkan.
          </p>
        </div> */}

        <div className="items-center text-center space-x-4">
          <a href="https://wa.link/21zsn2" target="_blank" className="btn-blue">
            Booking Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Description;
