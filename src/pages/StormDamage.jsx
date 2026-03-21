

import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import stormHero from "../assets/stormdamage.jpg";
import stormDetail from "../assets/stormdamage1.jpg";
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

      <section className="service-detail">
        <div className="service-detail__container">
          <div className="service-detail__image-wrap">
          <img
            src={stormDetail}
            alt="Storm damaged home in need of repair"
            className="service-detail__image"
          />

            <div className="service-detail__card">
              <h3>Fast & Reliable Storm Damage Repairs</h3>
              <p>
                Backed by over 20 years of industry experience, our team
                understands how to properly evaluate storm damage and recommend
                the right solution. We inspect thoroughly, communicate clearly,
                and complete repairs efficiently so your home is secure and
                protected as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}