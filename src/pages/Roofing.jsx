

import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import roofingHero from "../assets/roofing.jpg";
import "./Roofing.css";

export default function Roofing() {
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
            <h1>Roofing</h1>
            <p>
              Reliable roofing solutions built to protect your home year after
              year.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="Roofing" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Roofing Repair and Installation</h2>
          <p>
            From small repairs to full roof replacements, we provide durable,
            high-quality roofing services designed to protect your home through
            every season. Our team focuses on dependable workmanship, clean
            installation, and results built to last.
          </p>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}