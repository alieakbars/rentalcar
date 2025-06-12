import React from "react";
import { DescripotionType } from "../../types/description";
import descriptionCar from "../../data/description";
import { useEffect, useState } from "react";

interface DescriptionProps {
  id?: string;
}

const Description: React.FC<DescriptionProps> = ({ id }) => {
  const descriptions: DescripotionType[] | null = descriptionCar;
  const [desc, setDesc] = useState<DescripotionType | null>(null);

  useEffect(() => {
    if (!id) return;

    const mobilId = parseInt(id);
    const found = descriptions.find((m) => m.id === mobilId);
    setDesc(found ?? null);
  }, [id]);

  return (
    <div>
      <h5 className="mb-2">{desc?.title}</h5>
      <ul>
        {Array.from({ length: 30 }, (_, index) => {
          const key = `d${index + 1}`;
          const item = desc?.[key];
          if (item && item.trim() !== "") {
            return (
              <li key={index}>
                <p className="text-sm mb-2">{item}</p>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Description;
