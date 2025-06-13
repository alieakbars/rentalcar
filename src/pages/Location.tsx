import Locations from "../components/locationComponents/Locations";
import Description from "../components/locationComponents/Description";

const Location = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Description />
      <Locations />
    </div>
  );
};

export default Location;
