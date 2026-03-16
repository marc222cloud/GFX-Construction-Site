

import EstimateForm from "../components/EstimateForm";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-page__section">
        <div className="contact-page__container">
          <div className="contact-page__left">
            <h1 className="contact-page__title">
              <span>J&amp;G</span> Construction
            </h1>

            <p className="contact-page__intro">
              J &amp; G Construction proudly serves homeowners throughout
              Yorkville, Utica, and the surrounding areas. Whether you&apos;re
              planning a renovation, repair, or new project, our team is ready
              to help. Fill out the form below and we&apos;ll get back to you as
              soon as possible to discuss your project and provide a free
              estimate.
            </p>

            <div className="contact-page__form-wrap">
              <EstimateForm serviceName="Contact" />
            </div>
          </div>

          <div className="contact-page__right">
            <h2>Get in Touch</h2>

            <div className="contact-page__info-block">
              <p className="contact-page__name">Juan Garcia</p>
              <p className="contact-page__phone">(315-982-3057)</p>
            </div>

            <div className="contact-page__info-block">
              <p>J&amp;G Construction</p>
              <p>18 6th St</p>
              <p>Yorkville, NY 13495</p>
            </div>

            <div className="contact-page__info-block">
              <p>Email:</p>
              <p>
                <a href="mailto:Garciajuan4012@gmail.com">Garciajuan4012@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}