import "./Services.css";

import sidingImg from "../assets/siding.jpg";
import roofingImg from "../assets/roofing.jpg";
import stormImg from "../assets/stormdamage.jpg";
import bathroomImg from "../assets/bathroom.jpg";
import kitchenImg from "../assets/kitchenremodel.jpg";
import generalImg from "../assets/general.png";

const services = [
  {
    id: 1,
    title: "Siding",
    image: sidingImg,
    alt: "House exterior with new siding",
    description:
      "Protect and refresh your home with durable vinyl or aluminum siding. We handle repairs, replacements, and full exterior upgrades built to last.",
    link: "/services/siding",
  },
  {
    id: 2,
    title: "Roofing",
    image: roofingImg,
    alt: "Residential asphalt shingle roof",
    description:
      "From minor repairs to full roof replacements, we install high-quality roofing systems that protect your home in every season.",
    link: "/services/roofing",
  },
  {
    id: 3,
    title: "Storm Damage",
    image: stormImg,
    alt: "Storm damaged home with fallen tree",
    description:
      "Fast, reliable restoration after wind or storm damage. We assess, repair, and restore your home safely and efficiently.",
    link: "/services/storm-damage",
  },
  {
    id: 4,
    title: "Bathroom Remodeling",
    image: bathroomImg,
    alt: "Modern bathroom remodel",
    description:
      "Modern, functional bathroom renovations tailored to your space. From tile and vanities to full redesigns, we bring your vision to life.",
    link: "/services/bathroom",
  },
  {
    id: 5,
    title: "Kitchen Remodeling",
    image: kitchenImg,
    alt: "Bright kitchen remodel",
    description:
      "Upgrade your kitchen with custom layouts, cabinetry, and finishes designed for both style and everyday living.",
    link: "/services/kitchen",
  },
  {
    id: 6,
    title: "And More...",
    image: generalImg,
    alt: "General contracting interior renovation",
    description:
      "With over 20 years of experience, we provide reliable general contracting services for residential and commercial projects. Whatever the scope, our team has the expertise to get it done right.",
    link: "/services/general-contracting",
  },
];

export default function Services() {
  return (
    <section className="services" aria-label="Services">
      <div className="services__container">
        <h2 className="services__title">Services</h2>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.alt}
                className="service-card__image"
              />

              <h3 className="service-card__title">{service.title}</h3>

              <p className="service-card__description">{service.description}</p>

              <a href={service.link} className="service-card__button">
                Get More Info
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
