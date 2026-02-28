import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <NavLink to="/" className="logo">
          J & G Construction
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