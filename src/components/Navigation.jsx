import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('de');
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const closeMenus = (e) => {
      if (!e.target.closest('.lang-menu')) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenus);
    return () => document.removeEventListener('click', closeMenus);
  }, []);

  const languages = {
    de: 'Deutsch',
    en: 'English',
    tr: 'Türkçe'
  };

  const menuItems = [
    { id: 'home', label: { de: 'Start', en: 'Home', tr: 'Ana Sayfa' }, path: '/' },
    { id: 'packages', label: { de: 'Pakete', en: 'Packages', tr: 'Paketler' }, path: '/#packages' },
    { id: 'services', label: { de: 'Leistungen', en: 'Services', tr: 'Hizmetler' }, path: '/#services' },
    { id: 'about', label: { de: 'Über uns', en: 'About', tr: 'Hakkımızda' }, path: '/#about' },
    { id: 'contact', label: { de: 'Kontakt', en: 'Contact', tr: 'İletişim' }, path: '/kontakt' }
  ];

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-auto"
              src="/api/placeholder/48/48"
              alt="roketX Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="relative text-gray-700 hover:text-primary transition-colors duration-300
                           px-3 py-2 text-sm font-medium group"
                >
                  {item.label[currentLang]}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 
                                 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
            
            {/* Language Selector */}
            <div className="relative lang-menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 hover:text-primary px-3 py-2 
                         text-sm font-medium group gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setLangMenuOpen(!langMenuOpen);
                }}
              >
                <Globe className="h-4 w-4" />
                <span>{languages[currentLang]}</span>
                <motion.div
                  animate={{ rotate: langMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl 
                             ring-1 ring-black ring-opacity-5 border border-gray-100"
                  >
                    {Object.entries(languages).map(([code, name]) => (
                      <motion.button
                        key={code}
                        whileHover={{ backgroundColor: "#f3f4f6" }}
                        className={`block w-full text-left px-4 py-2 text-sm
                                  ${currentLang === code ? 'text-primary font-medium' : 'text-gray-700'}
                                  transition-colors duration-200`}
                        onClick={() => {
                          setCurrentLang(code);
                          setLangMenuOpen(false);
                        }}
                      >
                        {name}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/kontakt"
                className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium 
                         hover:bg-primary/90 transition-colors duration-300 shadow-md 
                         hover:shadow-lg hover:shadow-primary/20"
              >
                Jetzt durchstarten
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-primary 
                     hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(item => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium 
                             text-gray-700 hover:text-primary hover:bg-gray-50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label[currentLang]}
                  </Link>
                </motion.div>
              ))}
              {/* Language Selection Mobile */}
              <div className="px-4 py-3">
                <div className="flex flex-col space-y-2">
                  {Object.entries(languages).map(([code, name]) => (
                    <motion.button
                      key={code}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`text-left px-3 py-2 rounded-lg ${
                        currentLang === code 
                          ? 'text-primary bg-gray-50 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      } transition-colors`}
                      onClick={() => {
                        setCurrentLang(code);
                        setIsOpen(false);
                      }}
                    >
                      {name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;