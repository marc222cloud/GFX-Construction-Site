import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import roofingHero from "../assets/roofing.jpg";
import roofingDetail from "../assets/roof2.jpg";
import "./Roofing.css";

const roofingText = {
  en: {
    heroTitle: "Roofing",
    heroDesc:
      "Reliable roofing solutions built to protect your home year after year.",
    formService: "Roofing",
    infoTitle: "Roofing Repair and Installation",
    infoDesc:
      "From small repairs to full roof replacements, we provide durable, high-quality roofing services designed to protect your home through every season. Our team focuses on dependable workmanship, clean installation, and results built to last.",
    detailTitle: "Your Local Go-To Roofers",
    detailDesc:
      "Backed by over 20 years of industry experience, our team understands what it takes to build and maintain a dependable roofing system. We assess your roof thoroughly, provide honest recommendations, and complete every job with clean, professional results that stand the test of time.",
  },
  es: {
    heroTitle: "Techos",
    heroDesc:
      "Soluciones de techado confiables diseñadas para proteger su hogar año tras año.",
    formService: "Techos",
    infoTitle: "Reparación e Instalación de Techos",
    infoDesc:
      "Desde pequeñas reparaciones hasta reemplazos completos de techos, ofrecemos servicios de techado duraderos y de alta calidad diseñados para proteger su hogar en cada temporada. Nuestro equipo se enfoca en mano de obra confiable, instalación limpia y resultados que perduran.",
    detailTitle: "Sus Expertos Locales en Techos",
    detailDesc:
      "Con más de 20 años de experiencia en la industria, nuestro equipo sabe lo que se necesita para construir y mantener un sistema de techado confiable. Evaluamos su techo a fondo, brindamos recomendaciones honestas y completamos cada trabajo con resultados profesionales que resisten el paso del tiempo.",
  },
};

export default function Roofing({ language }) {
  const text = roofingText[language];
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={roofingHero}
            alt="Residential asphalt shingle roof"
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
              src={roofingDetail}
              alt="Residential asphalt shingle roof"
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