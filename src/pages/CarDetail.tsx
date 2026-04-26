import FeaturedCarsDetail from "../components/cardetailComponents/FeaturedCarsDetail";
import Tab from "../components/cardetailComponents/Tab";
import { useParams } from "react-router-dom";

export interface CarFilter {
  brand: string;
  transmission: string;
  year: string;
}

const CarsDetail = () => {
  const { mode, id } = useParams();

  // Jika mode kosong (karena akses /1), berikan default 'mobil'
  const currentMode = mode || "mobil";
  const arrayID = [id!, currentMode];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <main>
        <FeaturedCarsDetail id={arrayID} />
        <Tab id={id} />
      </main>
    </div>
  );
};

export default CarsDetail;
