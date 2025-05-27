import React from "react";

const Contact = () => {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Kontak Kami</h2>
        </div>

        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in text-center">
            <div className="mt-5 mb-5">
              <h2 className="font-bold mb-5 mt-5">Muezza RentCar Medan</h2>
              <p className="text-gray-600 text-xl mt-5 mb-5">
                Hubungi kontak kami untuk informasi lebih lanjut :
              </p>
              <a
                href="https://wa.link/21zsn2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-600 mt-2 text-xl ">
                  <img
                    src="/image/whatsapp.png"
                    alt="Logo"
                    className="w-15 h-10 inline-block"
                  />
                  0812-1234-5678 (Rental Mobil Medan Muezza)
                </p>
              </a>
              <a
                href="https://www.instagram.com/rentalmobilmedan_id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-600 text-xl ">
                  <img
                    src="/image/instagram.png"
                    alt="Logo"
                    className="w-15 h-10 inline-block"
                  />
                  Rental Mobil Medan Muezza
                </p>
              </a>
            </div>
            <img src="/image/about.jpeg" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
