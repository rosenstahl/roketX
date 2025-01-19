import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-base-secondary dark:bg-dark-card py-12 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kontakt */}
          <div>
            <h4 className="font-sf text-text-secondary dark:text-dark-text mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a
                href="tel:01738528482"
                className="flex items-center space-x-2 text-support-gray hover:text-text-primary dark:hover:text-dark-text transition-colors"
              >
                <Phone size={16} />
                <span>0173 852 84 82</span>
              </a>
              <a
                href="mailto:info@roketX.com"
                className="flex items-center space-x-2 text-support-gray hover:text-text-primary dark:hover:text-dark-text transition-colors"
              >
                <Mail size={16} />
                <span>info@roketX.com</span>
              </a>
              <address className="flex items-start space-x-2 text-support-gray not-italic">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Rheinische Str. 220, 44147 Dortmund</span>
              </address>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-sf text-text-secondary dark:text-dark-text mb-4">
              Rechtliches
            </h4>
            <div className="space-y-2">
              <Link
                to="/impressum"
                className="block text-support-gray hover:text-text-primary dark:hover:text-dark-text transition-colors"
              >
                Impressum
              </Link>
              <Link
                to="/agb"
                className="block text-support-gray hover:text-text-primary dark:hover:text-dark-text transition-colors"
              >
                AGB
              </Link>
              <Link
                to="/datenschutz"
                className="block text-support-gray hover:text-text-primary dark:hover:text-dark-text transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-sf text-text-secondary dark:text-dark-text mb-4">
              Social Media
            </h4>
            <motion.a
              href="https://instagram.com/roketx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-support-gray hover:text-text-primary dark:hover:text-dark-text transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={16} />
              <span>@roketx</span>
            </motion.a>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-sf text-text-secondary dark:text-dark-text mb-4">
              Starten Sie jetzt
            </h4>
            <p className="text-support-gray dark:text-gray-400 mb-4">
              Bereit für den nächsten Schritt? Lassen Sie uns gemeinsam Ihr Projekt verwirklichen.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn btn-primary inline-block"
              >
                Kontakt aufnehmen
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-support-lightGray dark:border-dark-muted">
          <p className="text-support-gray dark:text-gray-400 text-center">
            © {new Date().getFullYear()} roketX. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;