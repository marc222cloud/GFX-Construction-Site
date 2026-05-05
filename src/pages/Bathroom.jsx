import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import bathroomHero from "../assets/bathroom.jpg";
import bathroomDetail from "../assets/bathroom2.avif";
import "./Bathroom.css";

const bathroomText = {
  en: {
    heroTitle: "Bathroom",
    heroDesc:
      "Modern bathroom renovations crafted for comfort, quality, and lasting value.",
    formService: "Bathroom",
    infoTitle: "Bathroom Remodeling & Repairs",
    infoDesc:
      "Upgrade your bathroom with modern design, quality craftsmanship, and long-lasting materials. Whether you're refreshing a small space or planning a full renovation, our team delivers results you'll love for years to come.",
    detailTitle: "Large & Small Bathroom Remodeling",
    detailDesc:
      "Backed by over 20 years of industry experience, our team brings expert craftsmanship and attention to detail to every bathroom project. We work closely with homeowners to design practical layouts, select quality materials, and deliver professional results that stand the test of time.",
  },
  es: {
    heroTitle: "Baño",
    heroDesc:
      "Renovaciones modernas de baños diseñadas para comodidad, calidad y valor duradero.",
    formService: "Baño",
    infoTitle: "Remodelación y Reparaciones de Baño",
    infoDesc:
      "Mejora tu baño con diseño moderno, mano de obra de calidad y materiales duraderos. Ya sea que estés renovando un espacio pequeño o planificando una remodelación completa, nuestro equipo ofrece resultados que disfrutarás por años.",
    detailTitle: "Remodelación de Baños Grandes y Pequeños",
    detailDesc:
      "Con más de 20 años de experiencia en la industria, nuestro equipo aporta mano de obra experta y atención al detalle en cada proyecto de baño. Trabajamos de cerca con los propietarios para diseñar distribuciones prácticas, seleccionar materiales de calidad y entregar resultados profesionales que perduren en el tiempo.",
  },
};

export default function Bathroom({ language }) {
  const text = bathroomText[language];
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={bathroomHero}
            alt="Modern bathroom remodel with vanity and tub"
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
              src={bathroomDetail}
              alt="Luxury freestanding bathtub in modern bathroom"
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
