import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Siding from "./pages/Siding";
import Roofing from "./pages/Roofing";
import Bathroom from "./pages/Bathroom";
import Kitchen from "./pages/Kitchen";
import StormDamage from "./pages/StormDamage";
import General from "./pages/General";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";

export default function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="app">
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<Aboutus language={language} />} />
          <Route path="/services/siding" element={<Siding language={language} />} />
          <Route path="/services/roofing" element={<Roofing language={language} />} />
          <Route path="/services/bathroom" element={<Bathroom language={language} />} />
          <Route path="/services/kitchen" element={<Kitchen language={language} />} />
          <Route path="/services/storm-damage" element={<StormDamage language={language} />} />
          <Route path="/services/general-contracting" element={<General language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  );
}