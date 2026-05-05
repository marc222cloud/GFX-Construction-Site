import "./Hero.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg.avif";

const heroText = {
  en: {
    title: "GFX Construction",
    location: "Yorkville",
    description:
      "Delivering refined improvements to homes and helping restore the integrity and value of private properties. Book with us today!",
    button: "Get a Free Estimate",
  },
  es: {
    title: "GFX Construction",
    location: "Yorkville",
    description:
      "Ofrecemos mejoras de alta calidad para el hogar y ayudamos a restaurar la integridad y el valor de las propiedades privadas. ¡Reserve con nosotros hoy!",
    button: "Obtenga un Presupuesto Gratis",
  },
};

export default function Hero({ language }) {
  const text = heroText[language];
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero"
    >
      <div className="hero__overlay" />

      <div className="hero-content">
        <h1>{text.title}</h1>
        <h3 className="hero-location">{text.location}</h3>
        <p>{text.description}</p>

        <Link to="/book" className="hero-btn">
          {text.button}
        </Link>
      </div>
    </section>
  );
}