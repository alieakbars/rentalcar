import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="section bg-gradient-to-r from-primary-700 to-primary-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Special Offers & Updates</h2>
          <p className="mb-8 opacity-90">
            Join our newsletter and be the first to know about exclusive deals, new locations, and travel tips.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white bg-opacity-10 rounded-lg p-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 mb-4">
                <Send size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
              <p>
                You're now on the list. Keep an eye on your inbox for special offers and travel inspiration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md text-neutral-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
                required
              />
              <button 
                type="submit" 
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Subscribe
                <Send size={18} className="ml-2" />
              </button>
            </form>
          )}
          
          <p className="mt-4 text-sm opacity-75">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;