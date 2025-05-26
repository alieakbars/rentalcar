import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      question: 'What do I need to rent a car?',
      answer: 'To rent a car, you need a valid driver\'s license, a credit or debit card in your name, and proof of insurance. Age requirements vary, but most locations require drivers to be at least 21 years old, with an additional fee for drivers under 25.'
    },
    {
      question: 'Can I modify or cancel my reservation?',
      answer: 'Yes, you can modify or cancel your reservation online or by calling our customer service. Most reservations can be canceled for free up to 48 hours before the scheduled pickup time. Changes to your reservation may affect the rate.'
    },
    {
      question: 'Is insurance included in the rental price?',
      answer: 'Basic insurance coverage is included in all our rental prices, including Collision Damage Waiver (CDW) with zero excess. Additional coverage options are available at the time of booking or pickup.'
    },
    {
      question: 'What is your fuel policy?',
      answer: 'We operate a full-to-full fuel policy. This means you\'ll receive the car with a full tank and are expected to return it with a full tank. If you return the car with less fuel, you\'ll be charged for the missing fuel plus a refueling service fee.'
    },
    {
      question: 'Do you offer one-way rentals?',
      answer: 'Yes, one-way rentals are available at most of our locations for an additional fee. The one-way fee varies depending on the pickup and drop-off locations. You can select this option during the booking process.'
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'If you return the car later than the agreed time, an additional day\'s rental may be charged. We provide a grace period of 29 minutes after the scheduled return time. If you know you\'ll be late, please contact us as soon as possible.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-600">
            Find answers to the most common questions about our car rental service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-primary-700" />
                  ) : (
                    <ChevronDown size={20} className="text-primary-700" />
                  )}
                </button>
                
                <div 
                  className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-4 text-neutral-700">Still have questions?</p>
            <a href="#" className="btn-primary">
              Contact Customer Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;