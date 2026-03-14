import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/J&GLogo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
       <NavLink
  to="/"
  className="logo"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <img src={logo} alt="J & G Construction" className="logo-img" />
</NavLink>

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>

          <div className="services-dropdown">
            <span className="services-link">
              Services
            </span>

            <div className="dropdown-menu">
              <NavLink to="/services/siding">Siding</NavLink>
              <NavLink to="/services/roofing">Roofing</NavLink>
              <NavLink to="/services/bathroom">Bathroom</NavLink>
              <NavLink to="/services/storm-damage">Storm Damage</NavLink>
              <NavLink to="/services/kitchen">Kitchen</NavLink>
              <NavLink to="/services/general-contracting">General Contracting</NavLink>
            </div>
          </div>

          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Phone Button */}
        <a href="tel:3159823057" className="phone-btn">
          315-982-3057
        </a>

      </div>
    </header>
  );
}