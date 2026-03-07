import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
      <About />
    </>
  );
}