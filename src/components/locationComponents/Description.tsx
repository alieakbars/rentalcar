import React from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { CarType } from "../../types/car";
import Cars from "../../data/car";
import { useEffect, useState } from "react";

interface DescriptionProps {
  id?: string;
}

const Description: React.FC<DescriptionProps> = ({ id }) => {
  const cars: CarType[] = Cars;
  const [mobil, setMobil] = useState<CarType | null>(null);

  useEffect(() => {
    if (!id) return;

    const mobilId = parseInt(id);
    const found = cars.find((m) => m.id === mobilId);
    setMobil(found ?? null);
  }, [id]);

  return (
    <div>
      {mobil?.description}
    </div>
  );
};

export default Description;
