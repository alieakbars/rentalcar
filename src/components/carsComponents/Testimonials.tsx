import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      comment: "The rental process was seamless from start to finish. The car was clean, well-maintained, and exactly what I needed for my business trip. I'll definitely use this service again!",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Los Angeles, USA',
      rating: 5,
      comment: 'Outstanding customer service! When my flight was delayed, they accommodated my late pickup without any extra charges. The car was perfect for our family vacation.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Miami, USA',
      rating: 4,
      comment: 'Very competitive prices and a great selection of vehicles. The pickup was quick and the staff was friendly. Would recommend to anyone visiting Miami!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Chicago, USA',
      rating: 5,
      comment: 'This was my first time using this car rental service and I was extremely impressed. The online booking was straightforward and the car exceeded my expectations.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const displayTestimonials = testimonials.slice(activeIndex, activeIndex + (window.innerWidth >= 768 ? 3 : 1));

  const handlePrev = () => {
    setActiveIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(Math.min(testimonials.length - (window.innerWidth >= 768 ? 3 : 1), activeIndex + 1));
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-neutral-600">
            Don't just take our word for it. Hear from thousands of satisfied customers who have enjoyed our premium rental service.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 gap-6"
              style={{ transform: `translateX(-${activeIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full md:min-w-[calc(33.333%-16px)] p-6 bg-neutral-50 rounded-xl border border-neutral-200 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-neutral-600">{testimonial.location}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Quote className="text-primary-200 w-8 h-8 mb-2" />
                    <p className="text-neutral-700">{testimonial.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full border border-neutral-300 ${
                activeIndex === 0 
                  ? 'text-neutral-400 cursor-not-allowed' 
                  : 'text-primary-700 hover:bg-primary-50'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              disabled={activeIndex >= testimonials.length - (window.innerWidth >= 768 ? 3 : 1)}
              className={`p-2 rounded-full border border-neutral-300 ${
                activeIndex >= testimonials.length - (window.innerWidth >= 768 ? 3 : 1)
                  ? 'text-neutral-400 cursor-not-allowed' 
                  : 'text-primary-700 hover:bg-primary-50'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {[
            { label: 'Happy Customers', value: '500K+' },
            { label: 'Cars Available', value: '20,000+' },
            { label: 'Locations', value: '3,000+' },
            { label: 'Years of Service', value: '15+' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-6 bg-primary-700 rounded-xl text-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-primary-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;