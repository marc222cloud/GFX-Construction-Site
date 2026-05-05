import EstimateForm from "../components/EstimateForm";
import "./Contact.css";

const contactText = {
  en: {
    intro:
      "GFX Construction proudly serves homeowners throughout Yorkville, Utica, and the surrounding areas. Whether you're planning a renovation, repair, or new project, our team is ready to help. Fill out the form below and we'll get back to you as soon as possible to discuss your project and provide a free estimate.",
    formServiceName: "Contact",
    heading: "Get in Touch",
    name: "Julio Solano",
    phone: "(315-269-6191)",
    company: "GFX Construction",
    addressLine1: "2021 Sunset Ave",
    addressLine2: "Utica, NY 13502",
    emailLabel: "Email:",
    email: "garciajuan4012@gmail.com",
  },
  es: {
    intro:
      "GFX Construction sirve con orgullo a propietarios en Yorkville, Utica y las áreas cercanas. Ya sea que esté planeando una renovación, reparación o un nuevo proyecto, nuestro equipo está listo para ayudar. Complete el formulario a continuación y nos comunicaremos lo antes posible para hablar sobre su proyecto y darle un estimado gratis.",
    formServiceName: "Contacto",
    heading: "Comuníquese con Nosotros",
    name: "Juan Garcia",
    phone: "(315-982-3057)",
    company: "GFX Construction",
    addressLine1: "2021 Sunset Ave",
    addressLine2: "Utica, NY 13502",
    emailLabel: "Correo:",
    email: "garciajuan4012@gmail.com",
  },
};

export default function Contact({ language }) {
  const text = contactText[language];
  return (
    <main className="contact-page">
      <section className="contact-page__section">
        <div className="contact-page__container">
          <div className="contact-page__left">
            <h1 className="contact-page__title">
              <span>GFX </span> Construction
            </h1>

            <p className="contact-page__intro">
              {text.intro}
            </p>

            <div className="contact-page__form-wrap">
              <EstimateForm serviceName={text.formServiceName} language={language} />
            </div>
          </div>

          <div className="contact-page__right">
            <h2>{text.heading}</h2>

            <div className="contact-page__info-block">
              <p className="contact-page__name">{text.name}</p>
              <p className="contact-page__phone">{text.phone}</p>
            </div>

            <div className="contact-page__info-block">
              <p>{text.company}</p>
              <p>{text.addressLine1}</p>
              <p>{text.addressLine2}</p>
            </div>

            <div className="contact-page__info-block">
              <p>{text.emailLabel}</p>
              <p>
                <a href={`mailto:${text.email}`}>{text.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}