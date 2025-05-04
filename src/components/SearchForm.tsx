import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Search } from 'lucide-react';

const SearchForm: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('10:00');
  const [sameLocation, setSameLocation] = useState(true);

  // Set default dates (today and tomorrow)
  React.useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    const formatDate = (date: Date) => {
      return date.toISOString().split('T')[0];
    };
    
    if (!pickupDate) setPickupDate(formatDate(today));
    if (!dropoffDate) setDropoffDate(formatDate(tomorrow));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ pickup, dropoff, pickupDate, pickupTime, dropoffDate, dropoffTime });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl text-neutral-800 p-6">
      <h2 className="text-2xl font-bold mb-6">Find Your Perfect Rental Car</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="pickup" className="block text-sm font-medium mb-1">
              Pick-up Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
              <input
                id="pickup"
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter city or airport"
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="same-location"
              type="checkbox"
              checked={sameLocation}
              onChange={() => setSameLocation(!sameLocation)}
              className="h-4 w-4 text-primary-700 border-neutral-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="same-location" className="ml-2 block text-sm">
              Return to same location
            </label>
          </div>
          
          {!sameLocation && (
            <div>
              <label htmlFor="dropoff" className="block text-sm font-medium mb-1">
                Drop-off Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
                <input
                  id="dropoff"
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Enter city or airport"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="pickup-date" className="block text-sm font-medium mb-1">
                Pick-up Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
                <input
                  id="pickup-date"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="pickup-time" className="block text-sm font-medium mb-1">
                Pick-up Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
                <select
                  id="pickup-time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  required
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                      {i.toString().padStart(2, '0')}:00
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="dropoff-date" className="block text-sm font-medium mb-1">
                Drop-off Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
                <input
                  id="dropoff-date"
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="dropoff-time" className="block text-sm font-medium mb-1">
                Drop-off Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
                <select
                  id="dropoff-time"
                  value={dropoffTime}
                  onChange={(e) => setDropoffTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  required
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                      {i.toString().padStart(2, '0')}:00
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
          >
            <Search size={18} className="mr-2" />
            Search for Cars
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;