import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import kitchenHero from "../assets/kitchen.jpg";
import "./Kitchen.css";
const kitchenText = {
  en: {
    heroTitle: "Kitchen",
    heroDesc:
      "Custom kitchen upgrades designed for function, style, and everyday living.",
    formService: "Kitchen",
    infoTitle: "Kitchen Remodeling & Repairs",
    infoDesc:
      "Bring your kitchen to life with smart layout upgrades, quality craftsmanship, and finishes that feel brand new. Whether you're updating cabinets and countertops or planning a full remodel, we deliver clean work, clear communication, and results built to last.",
  },
  es: {
    heroTitle: "Cocina",
    heroDesc:
      "Mejoras de cocina personalizadas diseñadas para funcionalidad, estilo y uso diario.",
    formService: "Cocina",
    infoTitle: "Remodelación y Reparaciones de Cocina",
    infoDesc:
      "Dale nueva vida a tu cocina con mejoras de diseño inteligentes, mano de obra de calidad y acabados que se sienten como nuevos. Ya sea que estés actualizando gabinetes y encimeras o planeando una remodelación completa, ofrecemos trabajo limpio, comunicación clara y resultados duraderos.",
  },
};

export default function Kitchen({ language }) {
  const text = kitchenText[language];
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={kitchenHero}
            alt="Modern kitchen remodel with island and cabinetry"
            className="service-hero__image"
          />

          <div className="service-hero__overlay-content">
            <h1>{text.heroTitle}</h1>
            <p>{text.heroDesc}</p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName={text.formService} language={language} />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>{text.infoTitle}</h2>
          <p>{text.infoDesc}</p>
        </div>
      </section>

      <Testimonials language={language} />
    </main>
  );
}
