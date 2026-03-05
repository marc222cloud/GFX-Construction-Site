import "./Hero.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg.avif";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero"
    >
      <div className="hero__overlay" />

      <div className="hero-content">
        <h1>J&G Construction</h1>
        <h3 className="hero-location">Yorkville</h3>
        <p>Delivering refined improvements to homes and helping restore the integrity and value of private properties. Book with us today!</p>

        <Link to="/book" className="hero-btn">
          Get a Free Estimate
        </Link>
      </div>
    </section>
  );
}