import "./Footer.css";
import logo from "../assets/J&GLogo.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">J &amp; G Construction</div>

      <div className="footer__cols">
        <div>
          <h4>Navigation</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Address</a>
          <a href="mailto:info@jgconstruction.com">Email</a>
          <a href="tel:3159823057">Phone number</a>
        </div>
      </div>

      {/* Logo on right */}
      <div className="footer__logo">
        <a href="/">
          <img src={logo} alt="J & G Construction logo" />
        </a>
      </div>
    </footer>
  );
}