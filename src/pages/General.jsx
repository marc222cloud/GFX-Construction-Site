

import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import generalHero from "../assets/general.png";
import generalDetail from "../assets/general2.png";
import "./General.css";

export default function General() {
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
            <h1>General Contracting</h1>
            <p>
              Full-service construction backed by over 20 years of hands-on
              experience.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="General Contracting" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Best Local Contractors</h2>
          <p>
            Whether you’re planning a home addition, renovation, or new
            construction project, J&amp;G Construction provides dependable
            general contracting services backed by over 20 years of experience.
            We manage every phase of your project with clear communication,
            skilled craftsmanship, and attention to detail.
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
              <h3>One of the Top Local Construction Companies</h3>
              <p>
                With decades of hands-on industry experience, our team handles
                residential and commercial projects with precision and care. We
                work closely with homeowners and property owners to plan,
                organize, and execute every detail—making the construction
                process smooth, transparent, and stress-free from start to
                finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}