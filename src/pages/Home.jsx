import Hero from "../components/Hero";
import Services from "../components/Services"
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Gallery from "../components/Gallery";

export default function Home({ language }) {
  return (
    <>
      <Hero language={language} />
      <Services language={language} />
      <Gallery language={language} />
      <Testimonials language={language} />
      <About language={language} />
    </>
  );
}