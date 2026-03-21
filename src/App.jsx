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
import Aboutus from "./pages/AboutUs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services/siding" element={<Siding />} />
          <Route path="/services/roofing" element={<Roofing />} />
          <Route path="/services/bathroom" element={<Bathroom />} />
          <Route path="/services/kitchen" element={<Kitchen />} />
          <Route path="/services/storm-damage" element={<StormDamage />} />
          <Route path="/services/general-contracting" element={<General />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}