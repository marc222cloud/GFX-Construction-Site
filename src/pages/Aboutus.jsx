import teamworking from "../assets/teamworking.jpeg";
import "./Aboutus.css";

const aboutPageText = {
  en: {
    title: "Built on experience. Backed by integrity.",
    intro:
      "GFX Construction has proudly served homeowners and businesses with dependable craftsmanship for over 20 years. From roofing and siding to interior remodeling and general contracting, we approach every project with honesty, attention to detail, and a commitment to quality work that lasts.",
    imageAlt: "GFX Construction team working on a project",
    detailsTitle: "Why Homeowners Choose GFX",
    detailsBody:
      "We know that inviting a contractor into your home is a big decision. That’s why we focus on clear communication, reliable timelines, and workmanship you can trust. Whether the job is a simple repair or a full renovation, our goal is to make the process smooth, professional, and stress-free from start to finish.",
  },
  es: {
    title: "Construido con experiencia. Respaldado por integridad.",
    intro:
      "GFX Construction ha servido con orgullo a propietarios y negocios con mano de obra confiable por más de 20 años. Desde techos y revestimiento hasta remodelaciones interiores y construcción general, abordamos cada proyecto con honestidad, atención al detalle y un compromiso con trabajo de calidad que perdura.",
    imageAlt: "Equipo de GFX Construction trabajando en un proyecto",
    detailsTitle: "Por Qué los Propietarios Eligen GFX",
    detailsBody:
      "Sabemos que invitar a un contratista a su hogar es una decisión importante. Por eso nos enfocamos en comunicación clara, tiempos confiables y mano de obra en la que pueda confiar. Ya sea una reparación simple o una renovación completa, nuestro objetivo es hacer que el proceso sea fluido, profesional y sin estrés de principio a fin.",
  },
};

export default function Aboutus({ language }) {
  const text = aboutPageText[language];
  return (
    <main className="about-page">
      <section className="about-page__hero">
        <div className="about-page__container">
          <h1>{text.title}</h1>

          <p className="about-page__intro">
            {text.intro}
          </p>

          <div className="about-page__image-wrap">
            <img
              src={teamworking}
              alt={text.imageAlt}
              className="about-page__image"
            />
          </div>

          <div className="about-page__details">
            <h2>{text.detailsTitle}</h2>

            <p className="about-page__body">
              {text.detailsBody}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}