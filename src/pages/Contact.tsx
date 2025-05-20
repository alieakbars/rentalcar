import React from 'react';

const Contact = () => {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Kontak Kami</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in justify-center">
            <img
              src="/image/about.jpeg"
              alt="Logo"
            />

            <div className='mt-5' >
                <h3 className="text-xl font-bold mb-2">Muezza Car Rental</h3>
                <p className="text-gray-600 mb-4">
                    Jl. Garu 1 No.106 A, Sitirejo III, Kec. Medan Amplas, Kota Medan, Sumatera Utara 20147
                </p>
                <p className="text-gray-600 mb-4">
                    <strong>Email:</strong> 
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;