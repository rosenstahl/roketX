import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNavigationIcon } from '@/utils/assetHelpers';
import { useNavigation } from './useNavigation';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState("Deutsch");
  
  // Hook einbinden
  useNavigation();
  
  const cycleLanguage = () => {
    const languages = ["Deutsch", "English", "Türkçe"];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    setCurrentLanguage(languages[nextIndex]);
  };
  
  const whatsappLink = "https://wa.me/491738528482";
  
  const scrollToPackages = () => {
    const packagesSection = document.querySelector('.package-comparison');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/?scrollTo=packages');
    }
  };

  return (
    <div className="nav-wrap">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-item__link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              <img src={getNavigationIcon('home.svg')} alt="Home" className="image" />
              <div className="nav-item__tooltip">
                <div>Startseite</div>
              </div>
            </Link>
          </li>
          
          <li className="nav-item">
            <button 
              onClick={scrollToPackages} 
              className="nav-item__link"
              type="button"
            >
              <img src={getNavigationIcon('package.svg')} alt="Package" className="image" />
              <div className="nav-item__tooltip">
                <div>Leistungen</div>
              </div>
            </button>
          </li>
          
          <li className="nav-item">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item__link"
            >
              <img src={getNavigationIcon('whatsapp.svg')} alt="WhatsApp" className="image" />
              <div className="nav-item__tooltip">
                <div>WhatsApp</div>
              </div>
            </a>
          </li>
          
          <li className="nav-item">
            <Link to="/kontakt" className="nav-item__link">
              <img src={getNavigationIcon('contact.svg')} alt="Contact" className="image" />
              <div className="nav-item__tooltip">
                <div>Kontakt</div>
              </div>
            </Link>
          </li>
          
          <li className="nav-item">
            <button 
              onClick={cycleLanguage} 
              className="nav-item__link"
              type="button"
            >
              <img src={getNavigationIcon('language.svg')} alt="Language Selector" className="image" />
              <div className="nav-item__tooltip">
                <div>{currentLanguage}</div>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;