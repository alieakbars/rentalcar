import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import CarDetail from "./pages/CarDetail";
import { Helmet } from "react-helmet-async";

function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: "Rental Mobil Muezza Medan",
    url: "https://rentalmobilmedanmuezza.com",
    telephone: "+6281269299521", // Ganti dengan nomor asli
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Garu 1 No.106, Sitirejo III, Kec. Medan Amplas",
      addressLocality: "Medan",
      addressRegion: "Sumatera Utara",
      addressCountry: "ID",
    },
    description:
      "Layanan rental mobil Medan terpercaya, murah, dan lepas kunci.",
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <Helmet>
          {/* Gunakan Judul Utama yang Paling Menjual */}
          <title>Rental Mobil Medan Murah & Lepas Kunci - Muezza Rental</title>

          <meta
            name="description"
            content="Muezza RentCar Medan: Sewa mobil murah di Medan lepas kunci atau dengan sopir. Armada terbaru, layanan 24 jam, dan harga bersahabat. Booking sekarang!"
          />

          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="rental mobil medan, sewa mobil medan, rental mobil kualanamu, rental mobil lepas kunci medan, sewa mobil medan murah"
          />

          {/* Open Graph untuk WhatsApp/Social Media */}
          <meta
            property="og:title"
            content="Rental Mobil Medan Muezza - Murah & Terpercaya"
          />
          <meta
            property="og:description"
            content="Layanan rental mobil Medan terpercaya, lepas kunci atau dengan driver. Harga mulai 300rb-an!"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://rentalmobilmedanmuezza.com"
          />

          {/* Schema JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/:mode?/:id" element={<CarDetail />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
