import "./Services.css";
import { Link } from "react-router-dom";

import sidingImg from "../assets/siding.jpg";
import roofingImg from "../assets/roofing.jpg";
import stormImg from "../assets/stormdamage.jpg";
import bathroomImg from "../assets/bathroom.jpg";
import kitchenImg from "../assets/kitchenremodel.jpg";
import generalImg from "../assets/general.png";

const servicesText = {
  en: {
    sectionTitle: "Services",
    button: "Get More Info",
  },
  es: {
    sectionTitle: "Servicios",
    button: "Más Información",
  },
};

const services = [
  {
    id: 1,
    title: { en: "Siding", es: "Revestimiento" },
    image: sidingImg,
    alt: "House exterior with new siding",
    description: {
      en: "Protect and refresh your home with durable vinyl or aluminum siding. We handle repairs, replacements, and full exterior upgrades built to last.",
      es: "Proteja y renueve su hogar con revestimiento duradero de vinilo o aluminio. Realizamos reparaciones, reemplazos y mejoras completas del exterior diseñadas para durar.",
    },
    link: "/services/siding",
  },
  {
    id: 2,
    title: { en: "Roofing", es: "Techos" },
    image: roofingImg,
    alt: "Residential asphalt shingle roof",
    description: {
      en: "From minor repairs to full roof replacements, we install high-quality roofing systems that protect your home in every season.",
      es: "Desde reparaciones menores hasta reemplazos completos de techos, instalamos sistemas de techado de alta calidad que protegen su hogar en todas las estaciones.",
    },
    link: "/services/roofing",
  },
  {
    id: 3,
    title: { en: "Storm Damage", es: "Daños por Tormenta" },
    image: stormImg,
    alt: "Storm damaged home with fallen tree",
    description: {
      en: "Fast, reliable restoration after wind or storm damage. We assess, repair, and restore your home safely and efficiently.",
      es: "Restauración rápida y confiable después de daños por viento o tormentas. Evaluamos, reparamos y restauramos su hogar de manera segura y eficiente.",
    },
    link: "/services/storm-damage",
  },
  {
    id: 4,
    title: { en: "Bathroom Remodeling", es: "Remodelación de Baños" },
    image: bathroomImg,
    alt: "Modern bathroom remodel",
    description: {
      en: "Modern, functional bathroom renovations tailored to your space. From tile and vanities to full redesigns, we bring your vision to life.",
      es: "Renovaciones modernas y funcionales de baños adaptadas a su espacio. Desde azulejos y tocadores hasta rediseños completos, hacemos realidad su visión.",
    },
    link: "/services/bathroom",
  },
  {
    id: 5,
    title: { en: "Kitchen Remodeling", es: "Remodelación de Cocina" },
    image: kitchenImg,
    alt: "Bright kitchen remodel",
    description: {
      en: "Upgrade your kitchen with custom layouts, cabinetry, and finishes designed for both style and everyday living.",
      es: "Mejore su cocina con diseños personalizados, gabinetes y acabados diseñados tanto para el estilo como para la vida diaria.",
    },
    link: "/services/kitchen",
  },
  {
    id: 6,
    title: { en: "And More...", es: "Y Más..." },
    image: generalImg,
    alt: "General contracting interior renovation",
    description: {
      en: "With over 20 years of experience, we provide reliable general contracting services for residential and commercial projects. Whatever the scope, our team has the expertise to get it done right.",
      es: "Con más de 20 años de experiencia, ofrecemos servicios confiables de contratación general para proyectos residenciales y comerciales. Cualquiera que sea el alcance, nuestro equipo tiene la experiencia para hacerlo bien.",
    },
    link: "/services/general-contracting",
  },
];

export default function Services({ language }) {
  const text = servicesText[language];

  return (
    <section className="services" aria-label="Services">
      <div className="services__container">
        <h2 className="services__title">{text.sectionTitle}</h2>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.alt}
                className="service-card__image"
              />

              <h3 className="service-card__title">
                {service.title[language]}
              </h3>

              <p className="service-card__description">
                {service.description[language]}
              </p>

              <Link to={service.link} className="service-card__button">
                {text.button}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
