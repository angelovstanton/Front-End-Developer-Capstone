import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-white.png";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={Logo} alt="Little Lemon logo" />
        <nav className="footer-site-map" aria-label="Footer site map">
          <p className="footer-title">SITEMAP</p>
          <ul>
            <li><Link className="footer-item" to="/">Home</Link></li>
            <li><Link className="footer-item" to="/about">About</Link></li>
            <li><Link className="footer-item" to="/menu">Menu</Link></li>
            <li><Link className="footer-item" to="/reservations">Reservations</Link></li>
            <li><Link className="footer-item" to="/order-online">Order Online</Link></li>
            <li><Link className="footer-item" to="/login">Login</Link></li>
          </ul>
        </nav>
        <address className="footer-contact">
          <p className="footer-title">CONTACT</p>
          <p className="footer-item">123 Citrus Lane</p>
          <p className="footer-item">123-456-7890</p>
          <p className="footer-item">little.lemon@lemon.com</p>
        </address>
        <nav className="footer-social" aria-label="Footer social media">
          <p className="footer-title">SOCIAL MEDIA LINKS</p>
          <ul>
            <li><a className="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a className="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
