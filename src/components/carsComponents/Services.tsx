import React from "react";
import { Shield, Clock, Sparkles, Award } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-primary-700" />,
      title: "Insurance Included",
      description:
        "All our rental prices include Collision Damage Waiver with zero excess.",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary-700" />,
      title: "Free Cancellation",
      description:
        "Change or cancel your booking for free up to 48 hours before pick-up.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary-700" />,
      title: "Clean & Sanitized",
      description:
        "Every vehicle is thoroughly cleaned and sanitized for your safety.",
    },
    {
      icon: <Award className="w-12 h-12 text-primary-700" />,
      title: "No Hidden Fees",
      description:
        "Know exactly what you're paying for with transparent pricing.",
    },
  ];

  return (
    <section className="section bg-white ">
      <div className="container -mt-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Mengapa memilih kami ?</h2>
          <p className="text-neutral-600">
            Kami menawarkan harga yang transparan, beragam pilihan kendaraan
            yang terawat dengan baik, serta layanan pelanggan yang luar biasa
            untuk memastikan pengalaman sewa Anda berjalan lancar dan
            menyenangkan.
          </p>
        </div>

        <div className="items-center text-center space-x-4">
          {/* <a href="#" className="text-primary-700 hover:text-primary-800 font-medium flex items-center text-sm">
              <UserCircle className="mr-1" size={20} />
              Sign In / Register
            </a> */}
          <a href="https://wa.link/21zsn2" target="_blank" className="btn-blue">
            Booking Sekarang
          </a>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-neutral-200 bg-white text-center hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div> */}

        {/* <div className="mt-12 bg-primary-50 rounded-xl p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Join our Rewards Program
              </h3>
              <p className="text-neutral-700 mb-6">
                Get exclusive benefits, earn points with every rental, and enjoy
                special discounts and priority service as a rewards member.
              </p>
              <a href="#" className="btn-primary">
                Join Now - It's Free
              </a>
            </div>
            <div className="md:pl-6">
              <ul className="space-y-3">
                {[
                  "Earn 1 point for every dollar spent",
                  "Free upgrades after 3 rentals",
                  "Priority pickup and drop-off",
                  "Exclusive member-only discounts",
                  "No blackout dates on redemptions",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-primary-700 text-white rounded-full w-5 h-5 text-xs mr-2 mt-0.5">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
