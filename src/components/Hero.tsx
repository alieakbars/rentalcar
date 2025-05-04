import React, { useState } from "react";
import { Search, MapPin, Calendar, Clock } from "lucide-react";
import SearchForm from "./SearchForm";

const Hero: React.FC = () => {
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
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find deals on SUVs, luxury cars, convertibles and more. Free
              cancellations at 3,000+ locations worldwide.
            </p>

            <div className="lg:ml-auto animate-slide-up">
              <SearchForm />
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <MapPin className="text-accent-500" size={24} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">3,000+ Locations</p>
                  <p className="text-sm opacity-80">Across 100+ countries</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <Calendar className="text-accent-500" size={24} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Free Cancellation</p>
                  <p className="text-sm opacity-80">On most bookings</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <Clock className="text-accent-500" size={24} />
                </div>
                <div className="ml-3">
                  <p className="font-medium">24/7 Support</p>
                  <p className="text-sm opacity-80">Customer service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
