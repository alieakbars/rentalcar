import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const Locations: React.FC = () => {
  const popularLocations = [
    'New York', 'Los Angeles', 'Chicago', 'Miami', 
    'Las Vegas', 'Orlando', 'San Francisco', 'Denver'
  ];
  
  const airports = [
    'JFK Airport', 'LAX Airport', 'O\'Hare Airport', 'Miami International',
    'Hartsfield-Jackson', 'Dallas/Fort Worth', 'Denver International', 'Seattle-Tacoma'
  ];

  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Rental Locations</h2>
          <p className="text-neutral-600">
            With over 3,000 locations worldwide, we make it easy to pick up and return your rental car wherever your journey takes you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
            <div className="flex items-center mb-4">
              <MapPin className="text-primary-700 mr-2" size={24} />
              <h3 className="text-xl font-semibold">Popular Cities</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {popularLocations.map((location, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="flex items-center text-neutral-700 hover:text-primary-700 transition-colors"
                >
                  <span className="mr-1">{location}</span>
                  <ChevronRight size={16} />
                </a>
              ))}
            </div>
            
            <a 
              href="#" 
              className="mt-6 inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              View all cities
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4">
              <MapPin className="text-primary-700 mr-2" size={24} />
              <h3 className="text-xl font-semibold">Airport Locations</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {airports.map((airport, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="flex items-center text-neutral-700 hover:text-primary-700 transition-colors"
                >
                  <span className="mr-1">{airport}</span>
                  <ChevronRight size={16} />
                </a>
              ))}
            </div>
            
            <a 
              href="#" 
              className="mt-6 inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              View all airports
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1486416/pexels-photo-1486416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-primary-800 bg-opacity-75"></div>
          <div className="relative p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">We're Global, Just Like Your Adventures</h3>
              <p className="mb-6 text-white text-opacity-90">
                Whether you're traveling for business or leisure, our extensive network of rental locations ensures you can find us wherever you go. With 24/7 support and flexible rental options, we're ready to serve you worldwide.
              </p>
              <a href="#" className="btn bg-white text-primary-800 hover:bg-neutral-100">
                Find Locations Near You
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;