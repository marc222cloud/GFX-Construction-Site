import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/GFXLogo.png";

const navText = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    siding: "Siding",
    roofing: "Roofing",
    bathroom: "Bathroom",
    stormDamage: "Storm Damage",
    kitchen: "Kitchen",
    generalContracting: "General Contracting",
    contact: "Contact",
    languageToggle: "ESPANOL",
  },
  es: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    siding: "Revestimiento",
    roofing: "Techos",
    bathroom: "Baños",
    stormDamage: "Daños por Tormenta",
    kitchen: "Cocinas",
    generalContracting: "Construcción General",
    contact: "Contacto",
    languageToggle: "ENGLISH",
  },
};

export default function Navbar({ language, setLanguage }) {
  const text = navText[language];
  const phoneNumber = language === "en" ? "315-982-3057" : "315-269-6191";
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
       <NavLink
  to="/"
  className="logo"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <img src={logo} alt="GFX Construction" className="logo-img" />
</NavLink>

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {text.home}
          </NavLink>
          <NavLink to="/about">{text.about}</NavLink>

          <div className="services-dropdown">
            <span className="services-link">
              {text.services}
            </span>

            <div className="dropdown-menu">
              <NavLink to="/services/siding">{text.siding}</NavLink>
              <NavLink to="/services/roofing">{text.roofing}</NavLink>
              <NavLink to="/services/bathroom">{text.bathroom}</NavLink>
              <NavLink to="/services/storm-damage">{text.stormDamage}</NavLink>
              <NavLink to="/services/kitchen">{text.kitchen}</NavLink>
              <NavLink to="/services/general-contracting">{text.generalContracting}</NavLink>
            </div>
          </div>

          <NavLink to="/contact">{text.contact}</NavLink>
        </nav>

        <button
          className="lang-btn"
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
        >
          {text.languageToggle}
        </button>

        {/* Phone Button */}
        <a href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`} className="phone-btn">
          {phoneNumber}
        </a>

      </div>
    </header>
  );
}