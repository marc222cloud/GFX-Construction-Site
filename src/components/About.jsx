import "./About.css";
import teamworking from "../assets/teamworking.jpeg";

const aboutText = {
  en: {
    title: "About Us",
    p1:
      "GFX Construction is a family‑run contractor serving the local community with over 20 years of experience in home improvement and general contracting. Our goal is simple: deliver reliable work, honest communication, and results homeowners can trust.",
    p2:
      "From roofing and siding to kitchens, bathrooms, and storm repairs, we take pride in helping homeowners protect and improve their property. Every project is handled with attention to detail and a commitment to quality craftsmanship.",
    imageAlt: "GFX Construction team working on a home",
  },
  es: {
    title: "Sobre Nosotros",
    p1:
      "GFX Construction es un contratista familiar que sirve a la comunidad local con más de 20 años de experiencia en mejoras del hogar y construcción general. Nuestro objetivo es simple: ofrecer trabajo confiable, comunicación honesta y resultados en los que los propietarios puedan confiar.",
    p2:
      "Desde techos y revestimiento hasta cocinas, baños y reparaciones por tormentas, nos enorgullece ayudar a los propietarios a proteger y mejorar su propiedad. Cada proyecto se maneja con atención al detalle y un compromiso con la calidad.",
    imageAlt: "Equipo de GFX Construction trabajando en una casa",
  },
};

export default function About({ language }) {
  const text = aboutText[language];
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>{text.title}</h2>
          <p>
            {text.p1}
          </p>
          <p>
            {text.p2}
          </p>
        </div>

        <div className="about-image">
          <img
            src={teamworking}
            alt={text.imageAlt}
          />
        </div>
      </div>
    </section>
  );
}
