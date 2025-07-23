import React, { useState } from "react";
import "./Topbar.css";
import Logo from "../../assets/Logo.svg";
import MenuIcon from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Menu", link: "/menu" },
  { id: 4, label: "Reservations", link: "/reservations" },
  { id: 5, label: "Order Online", link: "/orders" },
  { id: 6, label: "Login", link: "/login" }
];

const Topbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handles mobile menu toggle
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  // Handles logo click to go home
  const handleLogoClick = () => navigate("/");

  // TODO: Add user avatar when logged in

  return (
    <header className="topbar">
      <div className="logo">
        <img src={Logo} alt="logo" height={50} onClick={handleLogoClick} />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map(({ id, label, link }) => (
            <li key={id}>
              <a href={link} className="link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
    </header>
  );
};

export default Topbar;
