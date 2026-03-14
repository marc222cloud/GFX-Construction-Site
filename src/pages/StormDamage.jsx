

import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import stormHero from "../assets/stormdamage.jpg";
import "./StormDamage.css";

export default function StormDamage() {
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
            <h1>Storm Damage</h1>
            <p>
              Fast, dependable repairs to restore your home after severe
              weather.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="Storm Damage" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Storm Damage Repair & Restoration</h2>
          <p>
            When storms hit, quick action matters. We help homeowners recover
            from wind, fallen branches, roof damage, and exterior issues with
            dependable repairs and clear communication every step of the way.
            Our goal is to restore safety, protect your property, and get your
            home back in shape as efficiently as possible.
          </p>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}