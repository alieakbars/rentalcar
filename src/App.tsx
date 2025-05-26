import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import CarDetail from "./pages/CarDetail";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
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
