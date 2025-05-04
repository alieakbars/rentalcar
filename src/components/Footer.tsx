import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Car, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center font-bold text-xl text-white mb-4">
              <Car className="mr-2 text-accent-500" size={28} />
              <span>ICANRENT</span>
            </a>
            <p className="mb-4">
              Making car rental easy and accessible for everyone, with 3,000+ locations across 100+ countries.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {[
                'About Us', 'Locations', 'Vehicle Models', 'Special Offers',
                'Reservations', 'Careers', 'Blog', 'FAQs'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-2">
              {[
                'Help Center', 'Contact Us', 'Returns & Refunds',
                'Rental Terms', 'Privacy Policy', 'Safety Tips'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-accent-500" />
                <span>
                  1234 Rental Avenue, <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent-500" />
                <a href="tel:+18007368227" className="hover:text-white">1-800-RENT-CAR</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent-500" />
                <a href="mailto:info@icanrentacar.com" className="hover:text-white">info@icanrentacar.com</a>
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="text-white text-sm font-medium mb-2">Download Our App</h4>
              <div className="flex space-x-3">
                <a href="#" className="flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-10"
                  />
                </a>
                <a href="#" className="flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Play Store" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-neutral-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 ICANRENT. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;