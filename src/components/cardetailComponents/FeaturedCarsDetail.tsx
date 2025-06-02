import React from "react";
import { CarType } from "../../types/car";
import Cars from "../../data/car";
import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { InputNumber, DatePicker } from "antd";
import type { InputNumberProps, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";

import {
  RockingChair,
  Antenna,
  Check,
  Heart,
  Fuel,
  CalendarDays,
  ArrowUp10,
} from "lucide-react";

interface FeaturedCarsDetailProps {
  id?: string;
}

const FeaturedCarsDetail: React.FC<FeaturedCarsDetailProps> = ({ id }) => {
  const cars: CarType[] = Cars;
  const [mobil, setMobil] = useState<CarType | null>(null);
  const [day, setDay] = useState(1);
  const [transmisi, setTransmisi] = useState<any>(["Manual", 0]);
  const [price, setPrice] = useState<any>(0);
  const [tanggal, setTanggal] = useState<string>(dayjs().format("DD-MM-YYYY"));

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setTanggal(date.format("DD-MM-YYYY"));
    }
  };

  useEffect(() => {
    if (!id) return;

    const mobilId = parseInt(id);
    const found = cars.find((m) => m.id === mobilId);
    setMobil(found ?? null);
    setPrice((found?.price[transmisi[1]] ?? 0) * day);
  }, [transmisi, day, id]);

  const formattedCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  const handleSendWhatsApp = () => {
    const phoneNumber = "6281269299521"; // ganti dengan nomor tujuan (pakai kode negara, tanpa tanda +)
    const message = `Halo, saya ingin membooking Mobil ${mobil?.brand} dengan spesifikasi : Transmisi ${transmisi[0]}, Bahan bakar ${mobil?.fuel} selama ${day} hari. Total Harga ${formattedCurrency} !`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // buka di tab baru
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="row-span-2">
              {" "}
              <img
                src={mobil.image[0]}
                alt={mobil.name}
                className="w-full h-64 md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="card group animate-fade-in flex flex-col h-full">
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="flex justify-center items-start">
                    <h3 className="text-2xl md:text-3xl text-neutral-700 font-semibold">
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
                      onChange={(val, idx) => {
                        setTransmisi([val, idx]);
                      }}
                    />
                  </div>

                  <div className="mt-3 flex flex-row">
                    <div className="inline-flex flex-col">
                      <span className="inline-flex items-center px-2 py-1  text-neutral-700 rounded text-xs">
                        <ArrowUp10
                          size={12}
                          className="mr-1 text-primary-700"
                        />
                        Jumlah Hari:
                      </span>
                      <InputNumber
                        min={1}
                        // max={10}
                        defaultValue={1}
                        onChange={(value) => setDay(value ?? 1)}
                        changeOnWheel
                        size="small"
                      />
                    </div>

                    <div className="inline-flex flex-col ml-4">
                      <span className="inline-flex items-center px-2 py-1  text-neutral-700 rounded text-xs">
                        <CalendarDays
                          size={12}
                          className="mr-1 text-primary-700"
                        />
                        Tanggal Mulai Sewa :
                      </span>
                      <DatePicker
                        defaultValue={dayjs()}
                        format={"DD-MM-YYYY"}
                        size="small"
                        onChange={handleDateChange}
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-200 items-center justify-between">
                    <div>
                      <span className="text-neutral-600 text-sm">
                        <span className="text-2xl font-bold text-primary-700 mr-5">
                          Total :
                        </span>
                        <span className="text-2xl font-bold text-primary-700">
                          {formattedCurrency}
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-center md:justify-start mt-4">
                      <ButtonComponent
                        label="Rent Now"
                        type="primary"
                        val={""}
                        size="large"
                        onClick={handleSendWhatsApp}
                      />
                    </div>
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
