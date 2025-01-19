import React, { useState } from "react";
import "./Navigation.css";
import { DarkInner } from "@theme-toggles/react";
import "@theme-toggles/react/css/DarkInner.css";

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className="nav-wrap">
      <ul className="nav-list">
        <li className="nav-item">
          <div className="theme-toggle">
            <DarkInner toggled={isDarkMode} toggle={toggleTheme} duration={750} />
          </div>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-item__link">
            <img src="/navigation/home.svg" alt="Home" className="image" />
            <span className="nav-item__label">Startseite</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/package" className="nav-item__link">
            <img src="/navigation/package.svg" alt="Package" className="image" />
            <span className="nav-item__label">Pakete</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/whatsapp" className="nav-item__link">
            <img src="/navigation/whatsapp.svg" alt="WhatsApp" className="image" />
            <span className="nav-item__label">WhatsApp</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-item__link">
            <img src="/navigation/contact.svg" alt="Contact" className="image" />
            <span className="nav-item__label">Kontakt</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/language" className="nav-item__link">
            <img src="/navigation/language.svg" alt="Language" className="image" />
            <span className="nav-item__label">Sprachen</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;