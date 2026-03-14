import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Siding from "./pages/Siding";
import Roofing from "./pages/Roofing";
import Bathroom from "./pages/Bathroom";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/siding" element={<Siding />} />
          <Route path="/services/roofing" element={<Roofing />} />
          <Route path="/services/bathroom" element={<Bathroom />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}