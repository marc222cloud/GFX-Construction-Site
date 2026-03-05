import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/J&GLogo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
       <NavLink to="/" className="logo">
  <img src={logo} alt="J & G Construction" className="logo-img" />
</NavLink>

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services/siding">Services</NavLink>
          <NavLink to="/book">Book</NavLink>
        </nav>

        {/* Phone Button */}
        <a href="tel:3159823057" className="phone-btn">
          315-982-3057
        </a>

      </div>
    </header>
  );
}