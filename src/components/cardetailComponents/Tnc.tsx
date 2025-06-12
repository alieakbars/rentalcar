import React from "react";
import { MapPin, ChevronRight } from "lucide-react";

const Tnc: React.FC = () => {
  return (
    <div>
      <p className="text-sm ml-5">
        1. <strong>Mobil + Sopir (12 jam)</strong> Hanya untuk penggunaan dalam
        kota. Harga sudah termasuk mobil, gaji sopir, dan bahan bakar.
        Penggunaan hingga 12 jam. Waktu mulai dihitung saat penyewa bertemu
        dengan sopir kami.
      </p>
      <p className="text-sm ml-5">
        2. <strong>Mobil + Sopir (Sehari Penuh)</strong> Hanya untuk penggunaan
        dalam kota. Harga sudah termasuk mobil, gaji sopir, dan bahan bakar.
        Penggunaan hingga 12 jam atau sampai pukul 23:59.
      </p>
      <p className="text-sm mt-2 mb-2">
        <strong>Harga pada poin 1 & 2 belum termasuk:</strong> Biaya parkir,
        biaya tol, uang makan sopir, biaya akomodasi sopir (jika diperlukan),
        dan penggunaan di luar kota (akan dikenakan biaya tambahan).
      </p>
      <p className="text-sm ml-5">
        3. <strong>All in (Sehari Penuh)</strong>
      </p>
      <p className="text-sm ml-6">
        Hanya untuk penggunaan dalam kota. Harga sudah termasuk mobil, gaji
        sopir, dan bahan bakar. Penggunaan hingga 12 jam atau sampai pukul
        23:59.
      </p>
      <p className="text-sm ml-6">
        Harga sudah termasuk biaya parkir, biaya tol, dan uang makan sopir.
      </p>
    </div>
  );
};

export default Tnc;
