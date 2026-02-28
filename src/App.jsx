import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}