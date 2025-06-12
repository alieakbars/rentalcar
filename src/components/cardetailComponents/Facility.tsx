import React from "react";
import { MapPin, ChevronRight } from "lucide-react";

const Facility: React.FC = () => {
  return (
    <div>
      <p className="text-sm ml-4 mb-2">
        Berikut ini adalah fasilitas yang Anda dapatkan pada saat menyewa unit
        ini:
      </p>
      <p className="text-sm ml-6 mb-1">✓ Mineral Water for Every Car</p>
      <p className="text-sm ml-6 mb-1">✓ Standard Health Protocol</p>
      <p className="text-sm ml-6 mb-1">✓ Snack</p>
      <p className="text-sm ml-6 mb-1">✓ Hand sanitizer</p>
      <p className="text-sm ml-6 mb-1">✓ Wet & Dry Tissue</p>
    </div>
  );
};

export default Facility;
