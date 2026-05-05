import EstimateForm from "../components/EstimateForm";
import Testimonials from "../components/Testimonials";
import sidingHero from "../assets/siding.jpg";
import sidingDetail from "../assets/siding1.jpg";
import "./Siding.css";

const sidingText = {
  en: {
    heroTitle: "Siding",
    heroDesc:
      "Durable, low-maintenance siding that enhances and protects your home’s exterior.",
    formService: "Siding",
    infoTitle: "Vinyl Siding Repair and Installation",
    infoDesc:
      "Protect and refresh your home with durable vinyl or aluminum siding. Whether you need a repair or a full replacement, our team delivers clean, professional results built to last.",
    detailTitle: "Your Local Siding Installers",
    detailDesc:
      "With years of hands-on experience, we help homeowners choose the right siding style and materials to match their home and budget. Our goal is simple: strong protection, clean finishes, and results that last for years to come.",
  },
  es: {
    heroTitle: "Revestimiento",
    heroDesc:
      "Revestimiento duradero y de bajo mantenimiento que mejora y protege el exterior de su hogar.",
    formService: "Revestimiento",
    infoTitle: "Reparación e Instalación de Revestimiento",
    infoDesc:
      "Proteja y renueve su hogar con revestimiento duradero de vinilo o aluminio. Ya sea que necesite una reparación o un reemplazo completo, nuestro equipo ofrece resultados limpios y profesionales que perduran.",
    detailTitle: "Sus Instaladores Locales de Revestimiento",
    detailDesc:
      "Con años de experiencia práctica, ayudamos a los propietarios a elegir el estilo y los materiales de revestimiento adecuados para su hogar y presupuesto. Nuestro objetivo es simple: protección sólida, acabados limpios y resultados duraderos.",
  },
};

export default function Siding({ language }) {
  const text = sidingText[language];
  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero__image-wrap">
          <img
            src={sidingHero}
            alt="House exterior with new siding"
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
              src={sidingDetail}
              alt="Close up of vinyl siding"
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