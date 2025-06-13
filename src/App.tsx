import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import CarDetail from "./pages/CarDetail";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <Helmet>
          <title>
            Rental Mobil Medan Muezza - Sewa Mobil Murah & Fleksibel
          </title>
          <meta
            name="description"
            content="Muezza RentCar Medan, sewa mobil murah di Medan lepas kunci atau dengan sopir. Booking cepat, harga bersahabat!"
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Rental Mobil Medan Muezza" />
          <meta
            property="og:description"
            content="Sewa mobil Medan murah dengan Muezza RentCar. Nyaman dan fleksibel!"
          />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/:id" element={<CarDetail />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
