import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/GFXLogo.png";

const footerText = {
  en: {
    brand: "Construction",
    navigation: "Navigation",
    home: "Home",
    about: "About",
    contact: "Contact",
    contactTitle: "Contact",
    address: "18 6th St, Yorkville, NY 13495",
  },
  es: {
    brand: "Construcción",
    navigation: "Navegación",
    home: "Inicio",
    about: "Nosotros",
    contact: "Contacto",
    contactTitle: "Contacto",
    address: "18 6th St, Yorkville, NY 13495",
  },
};

export default function Footer({ language }) {
  const text = footerText[language];
  const phoneNumber = language === "en" ? "(315) 982-3057" : "(315) 269-6191";
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span>GFX</span> {text.brand}
      </div>

      <div className="footer__cols">
        <div>
          <h4>{text.navigation}</h4>
          <Link to="/">{text.home}</Link>
          <Link to="/about">{text.about}</Link>
          <Link to="/contact">{text.contact}</Link>
        </div>

        <div>
          <h4>{text.contactTitle}</h4>
          <a
            href="https://www.google.com/maps?q=18+6th+St,+Yorkville,+NY+13495"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.address}
          </a>
          <a href="mailto:Garciajuan4012@gmail.com">Garciajuan4012@gmail.com</a>
          <a href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}>{phoneNumber}</a>
        </div>
      </div>

      {/* Logo on right */}
      <div className="footer__logo">
        <Link to="/">
          <img src={logo} alt="GFX Construction logo" />
        </Link>
      </div>
    </footer>
  );
}