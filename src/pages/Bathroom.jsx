import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import bathroomHero from "../assets/bathroom.jpg";
import "./Bathroom.css";

export default function Bathroom() {
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
            <h1>Bathroom</h1>
            <p>
              Modern bathroom renovations crafted for comfort, quality, and
              lasting value.
            </p>
          </div>
        </div>

        <div className="service-hero__form-wrap">
          <EstimateForm serviceName="Bathroom" />
        </div>
      </section>

      <section className="service-info">
        <div className="service-info__container">
          <h2>Bathroom Remodeling & Repairs</h2>
          <p>
            Upgrade your bathroom with modern design, quality craftsmanship, and
            long-lasting materials. Whether you're refreshing a small space or
            planning a full renovation, our team delivers results you'll love
            for years to come.
          </p>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
