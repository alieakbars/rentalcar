import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Car,
  MapPin,
  Mail,
  PhoneCall,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-5 pb-6">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full shadow-lg">
            <div>
              <a
                href="#"
                className="flex items-center font-bold text-xl text-white mb-4"
              >
                <img
                  src="/muezza-logo.png"
                  alt="Car Icon"
                  className="mr-2 w-8 h-8 object-contain"
                />
                <span>Muezza RentCar Medan</span>
              </a>
              <p className="mb-4">
                Making car rental easy and accessible for everyone, with 3,000+
                locations across 100+ countries.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 text-accent-500" />
                  <span>
                    Jalan Garu 1 No.106 A. Harjosari I <br /> Kec.Medan Amplas
                    <br />
                    Sumatera Utara. 20147
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneCall size={18} className="mr-2 text-accent-500" />
                  <a
                    href="https://wa.link/21zsn2"
                    className="hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0812-1234-5678
                  </a>
                </li>
                <li className="flex items-center">
                  <Instagram size={18} className="mr-2 text-accent-500" />
                  <a
                    href="https://www.instagram.com/rentalmobilmedan_id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @rentalmobilmedan_id
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 text-sm">
          <div className="flex flex-col items-center text-center">
            <p>© 2025 Muezza RentCar Medan. All rights reserved.</p>
            {/* <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
