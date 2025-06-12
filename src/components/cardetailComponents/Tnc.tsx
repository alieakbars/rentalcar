import React from "react";
import { MapPin, ChevronRight } from "lucide-react";

const Tnc: React.FC = () => {
  return (
    <div>
      <p className="text-sm ml-5">
        1. <strong>Car + Driver + Fuel (12 hours)</strong> In-City use only
        Price includes car, driver salary and petrol Usage up to 12 hours, It
        starts when the renter meets our driver.
      </p>
      <p className="text-sm ml-5">
        2. <strong>Car + Driver + Fuel (Full Day)</strong> In-City use only
        Price includes car, driver salary and petrol Use up to 12 hours or until
        23:59.
      </p>
      <p className="text-sm mt-2 mb-2">
        <strong>Part 1 & 2 Price Not Included</strong> Parking fees, toll fees,
        driver's meal allowance, Driver accommodation costs (if needed) Use
        outside the city (additional fees apply).
      </p>
      <p className="text-sm ml-5">
        3. <strong>All in (Full Day)</strong>
      </p>
      <p className="text-sm ml-6">
        In-City use only Price includes car, driver salary and petrol Use up to
        12 hours or until 23:59.
      </p>
      <p className="text-sm ml-6">
        Price Includes Parking Fees, Toll Fees, Driver Meal Allowance.
      </p>
    </div>
  );
};

export default Tnc;
