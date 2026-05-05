import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import generalHero from "../assets/general.png";
import generalDetail from "../assets/general2.png";
import "./General.css";

const generalText = {
  en: {
    heroTitle: "General Contracting",
    heroDesc:
      "Full-service construction backed by over 20 years of hands-on experience.",
    formService: "General Contracting",
    infoTitle: "Best Local Contractors",
    infoDesc:
      "Whether you’re planning a home addition, renovation, or new construction project, GFX Construction provides dependable general contracting services backed by over 20 years of experience. We manage every phase of your project with clear communication, skilled craftsmanship, and attention to detail.",
    detailTitle: "One of the Top Local Construction Companies",
    detailDesc:
      "With decades of hands-on industry experience, our team handles residential and commercial projects with precision and care. We work closely with homeowners and property owners to plan, organize, and execute every detail—making the construction process smooth, transparent, and stress-free from start to finish.",
  },
  es: {
    heroTitle: "Construcción General",
    heroDesc:
      "Servicios completos de construcción respaldados por más de 20 años de experiencia práctica.",
    formService: "Construcción General",
    infoTitle: "Mejores Contratistas Locales",
    infoDesc:
      "Ya sea que esté planeando una ampliación de vivienda, renovación o un nuevo proyecto de construcción, GFX Construction ofrece servicios confiables de construcción general respaldados por más de 20 años de experiencia. Gestionamos cada fase del proyecto con comunicación clara, mano de obra experta y atención a los detalles.",
    detailTitle: "Una de las Mejores Empresas de Construcción Local",
    detailDesc:
      "Con décadas de experiencia en la industria, nuestro equipo maneja proyectos residenciales y comerciales con precisión y cuidado. Trabajamos de cerca con propietarios para planificar, organizar y ejecutar cada detalle, haciendo el proceso de construcción fluido, transparente y sin estrés.",
  },
};

export default function General({ language }) {
  const text = generalText[language];
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={generalHero}
            alt="General contracting interior renovation project"
            className="service-hero__image"
          />

          <div className="service-hero__overlay-content">
            <h1>{text.heroTitle}</h1>
            <p>
              {text.heroDesc}
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName={text.formService} language={language} />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>{text.infoTitle}</h2>
          <p>
            {text.infoDesc}
          </p>
        </div>
      </section>

      <section className="service-detail">
        <div className="service-detail__container">
          <div className="service-detail__image-wrap">
            <img
              src={generalDetail}
              alt="General contracting wall finishing work"
              className="service-detail__image"
            />

            <div className="service-detail__card">
              <h3>{text.detailTitle}</h3>
              <p>
                {text.detailDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials language={language} />
    </main>
  );
}