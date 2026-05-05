


import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import stormHero from "../assets/stormdamage.jpg";
import stormDetail from "../assets/stormdamage1.jpg";
import "./StormDamage.css";

const stormText = {
  en: {
    heroTitle: "Storm Damage",
    heroDesc:
      "Fast, dependable repairs to restore your home after severe weather.",
    formService: "Storm Damage",
    infoTitle: "Storm Damage Repair & Restoration",
    infoDesc:
      "When storms hit, quick action matters. We help homeowners recover from wind, fallen branches, roof damage, and exterior issues with dependable repairs and clear communication every step of the way. Our goal is to restore safety, protect your property, and get your home back in shape as efficiently as possible.",
    detailTitle: "Fast & Reliable Storm Damage Repairs",
    detailDesc:
      "Backed by over 20 years of industry experience, our team understands how to properly evaluate storm damage and recommend the right solution. We inspect thoroughly, communicate clearly, and complete repairs efficiently so your home is secure and protected as soon as possible.",
  },
  es: {
    heroTitle: "Daños por Tormenta",
    heroDesc:
      "Reparaciones rápidas y confiables para restaurar su hogar después de condiciones climáticas severas.",
    formService: "Daños por Tormenta",
    infoTitle: "Reparación y Restauración de Daños por Tormenta",
    infoDesc:
      "Cuando ocurren tormentas, actuar rápidamente es clave. Ayudamos a los propietarios a recuperarse de daños por viento, ramas caídas, daños en el techo y problemas exteriores con reparaciones confiables y comunicación clara en cada paso. Nuestro objetivo es restaurar la seguridad, proteger su propiedad y devolver su hogar a su estado óptimo lo más rápido posible.",
    detailTitle: "Reparaciones Rápidas y Confiables de Daños por Tormenta",
    detailDesc:
      "Con más de 20 años de experiencia en la industria, nuestro equipo sabe cómo evaluar correctamente los daños por tormenta y recomendar la mejor solución. Inspeccionamos a fondo, comunicamos claramente y completamos las reparaciones de manera eficiente para que su hogar esté seguro lo antes posible.",
  },
};

export default function StormDamage({ language }) {
  const text = stormText[language];
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={stormHero}
            alt="Home with storm damage from a fallen tree"
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
            src={stormDetail}
            alt="Storm damaged home in need of repair"
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