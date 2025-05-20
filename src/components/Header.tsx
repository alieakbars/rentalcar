import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Car,
  MenuIcon,
  UserCircle,
  X,
  ChevronDown,
  Globe,
  Phone,
} from "lucide-react";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="hidden lg:block bg-primary-700 text-white py-1">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <a
              href="#"
              className="flex items-center hover:text-accent-300 transition-colors"
            >
              <Globe size={16} className="mr-1" />
              Worldwide Rentals
            </a>
            <a
              href="#"
              className="flex items-center hover:text-accent-300 transition-colors"
            >
              <Phone size={16} className="mr-1" />
              24/7 Support: 1-800-RENT-CAR
            </a>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="hover:text-accent-300 transition-colors">
              Help
            </a>
            <a href="#" className="hover:text-accent-300 transition-colors">
              Rewards
            </a>
            <a href="#" className="hover:text-accent-300 transition-colors">
              USD $
            </a>
            <a href="#" className="hover:text-accent-300 transition-colors">
              English
            </a>
          </div>
        </div>
      </div>

      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center font-bold text-xl text-primary-700 mr-8"
            >
              <img
                src="/muezza-logo.png"
                alt="Car Icon"
                className="mr-2 w-10 h-10 object-contain"
              />
              <span>Muezza RentCar Medan</span>
            </a>

            <div className="hidden md:flex items-center space-x-1">
              {[{name:"Home",link:"/"},
                {name:"Locations",link:"#"},
                {name:"About",link:"/about"},
                {name:"Vehicle Types",link:"#"},
                {name:"For Business",link:"#"}].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="px-3 py-2 text-neutral-700 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-primary-700 flex items-center"
                >
                  {item.name}
                  {/* <ChevronDown size={16} className="ml-1" /> */}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* <a href="#" className="text-primary-700 hover:text-primary-800 font-medium flex items-center text-sm">
              <UserCircle className="mr-1" size={20} />
              Sign In / Register
            </a> */}
            <a href="#" className="btn-blue">
              Book Now
            </a>
          </div>

          <button
            className="md:hidden rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-neutral-900 bg-opacity-50 z-50">
          <div className="bg-white h-full w-80 max-w-[80%] flex flex-col animate-slide-up">
            <div className="flex items-center justify-between p-4 border-b">
              <a
                href="#"
                className="flex items-center font-bold text-xl text-primary-700"
              >
                <Car className="mr-2 text-accent-500" size={24} />
                <span>ICANRENT</span>
              </a>
              <button
                className="rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {[
                  "Car Rentals",
                  "Locations",
                  "Deals",
                  "Vehicle Types",
                  "For Business",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-neutral-700 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-primary-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t space-y-2">
                <a
                  href="#"
                  className="block px-3 py-2 text-neutral-700 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-primary-700"
                >
                  Sign In / Register
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 bg-accent-500 text-white rounded-md text-sm font-medium hover:bg-accent-600 text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
