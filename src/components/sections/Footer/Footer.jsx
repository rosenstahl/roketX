// src/components/sections/Footer/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../common/Logo/Logo';

export const Footer = () => {
  return (
    <footer className="w-full bg-main-primary text-base-primary py-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Column */}
          <div>
            <Logo size="md" withLink={false} isWhite={true} className="hover:opacity-80 transition-opacity duration-300" />
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-['SF_Pro_Display'] font-semibold text-xl mb-6 mt-1">
              Kontakt
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:01738528482" 
                className="flex items-center gap-2 hover:text-accent-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0173 852 84 82</span>
              </a>
              <a 
                href="mailto:info@roketX.com"
                className="flex items-center gap-2 hover:text-accent-primary transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@roketX.com</span>
              </a>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic">
                  Rheinische Str. 220<br />
                  44147 Dortmund
                </address>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-['SF_Pro_Display'] font-semibold text-xl mb-6 mt-1">
              Rechtliches
            </h4>
            <nav className="space-y-3">
              <motion.a 
                href="/impressum" 
                className="block hover:text-accent-primary transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Impressum
              </motion.a>
              <motion.a 
                href="/agb" 
                className="block hover:text-accent-primary transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                AGB
              </motion.a>
              <motion.a 
                href="/datenschutz" 
                className="block hover:text-accent-primary transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Datenschutz
              </motion.a>
            </nav>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-['SF_Pro_Display'] font-semibold text-xl mb-6 mt-1">
              Kontaktieren Sie uns
            </h4>
            <motion.button
              className="group relative w-full px-6 py-4 rounded-lg font-['SF_Pro_Display'] font-semibold overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span className="relative z-10 text-base-primary transition-colors duration-500">
                Kostenlose Erstberatung
              </span>
              <motion.div
                className="absolute inset-0 bg-accent-primary z-0"
                initial={false}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-main-secondary z-[1]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-base-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-base-primary/60">
              © 2024 roketX. Alle Rechte vorbehalten.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a 
                href="https://instagram.com/roketx" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-primary/60 hover:text-accent-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <span className="text-sm">Designed & Built in Dortmund</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;