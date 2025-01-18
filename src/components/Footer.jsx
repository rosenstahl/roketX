import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-4 gap-20">
          {/* Kontakt Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-8 block font-display">
              roketX
            </Link>
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white/40 flex-shrink-0 mt-1" />
                <p className="text-[15px] leading-relaxed">
                  Rheinische Str. 220<br />
                  44147 Dortmund
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white/40 flex-shrink-0" />
                <a href="tel:01738528482" 
                   className="text-[15px] hover:text-white transition-all duration-300">
                  0173 852 84 82
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/40 flex-shrink-0" />
                <a href="mailto:info@roketx.de" 
                   className="text-[15px] hover:text-white transition-all duration-300">
                  info@roketx.de
                </a>
              </div>
            </div>
          </div>

          {/* Pakete */}
          <div>
            <h3 className="font-display text-[15px] font-medium text-white mb-8 uppercase tracking-wide">
              Unsere Pakete
            </h3>
            <ul className="space-y-5">
              {['Startup All-in-One', 'Digital Transform', 'Brand Makeover', 'Growth & Scale'].map((item) => (
                <li key={item}>
                  <Link to={`/#${item.toLowerCase().replace(' ', '-')}`} 
                        className="text-[15px] hover:text-white transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-display text-[15px] font-medium text-white mb-8 uppercase tracking-wide">
              Rechtliches
            </h3>
            <ul className="space-y-5">
              {[
                { label: 'Impressum', path: '/impressum' },
                { label: 'Datenschutzerklärung', path: '/datenschutz' },
                { label: 'AGB', path: '/agb' }
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} 
                        className="text-[15px] hover:text-white transition-all duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="font-display text-[15px] font-medium text-white mb-8 uppercase tracking-wide">
              Bereit durchzustarten?
            </h3>
            <div className="space-y-6">
              <Link
                to="/contact"
                className="block px-8 py-4 bg-white text-black rounded-xl text-center 
                         hover:bg-gray-100 transition-all duration-300 text-[15px] font-medium"
              >
                Jetzt Anfragen
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-[14px] text-white/40">
          © {currentYear} roketX. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;