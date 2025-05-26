import SearchForm from "./SearchForm";
import { CarFilter } from "../../App";

interface HeroProps {
  onFilter: (filter: CarFilter) => void;
}

const Hero: React.FC<HeroProps> = ({ onFilter }) => {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-80"></div>
      </div>

      <div className="container relative py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-8 items-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Mau Sewa Mobil Apa?
            </h1>

            <div className="lg:ml-auto animate-slide-up">
              <SearchForm onFilter={onFilter} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
