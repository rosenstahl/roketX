// src/components/StartUpAllInOne.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = {
  brand: {
    id: "01",
    title: "Markenentwicklung",
    items: [
      {
        title: "Namensfindung",
        subitems: [
          "Marken- & Domain-Check",
          "Sprach- & Kultur-Check",
          "5 finale Namensvorschläge"
        ]
      },
      {
        title: "Strategie",
        subitems: [
          "Marktpositionierung",
          "Zielgruppenanalyse",
          "Wettbewerbsanalyse",
          "Trendanalyse"
        ]
      },
      {
        title: "Identity",
        subitems: [
          "Vision",
          "Mission",
          "Values",
          "Slogan",
          "Story",
          "Voice & Tone"
        ]
      },
      {
        title: "Logo Design",
        subitems: [
          "3 Designkonzepte",
          "Logoversionen (Hauptlogo, Icon Version, Negativ Version)",
          "Typografie",
          "Farbpaletten",
          "Designrichtlinien"
        ]
      }
    ]
  },
  communication: {
    id: "02",
    title: "Business Kommunikation",
    items: [
      {
        title: "Business Mobilfunknummer All-Net-Flat",
        subitems: [
          "Unbegrenzte Anrufe in alle dt. Netze",
          "Unbegrenzte SMS in alle dt. Netze",
          "EU-Roaming inklusive",
          "3GB High-Speed Datenvolumen (5G-fähig)",
          "Komplett Umsonst"
        ]
      },
      {
        title: "Business Festnetznummer",
        subitems: [
          "Automatische Weiterleitung aufs Mobiltelefon",
          "Professionelle Mailbox mit Text-to-Speech",
        ]
      },
      {
        title: "Verifiziertes Business WhatsApp",
        subitems: [
        ],
      },
      {
        title: "Professionelle E-Mail-Adresse",
        subitems: [
          "Bis zu 5 personalisierte E-Mail-Adresse",
          "@ihre-domain.de"
        ]
      },
    ]
  },
  equipment: {
    id: "03",
    title: "Geschäftsausstattung",
    items: [
      {
        title: "500 Premium Visitenkarten",
        subitems: [
        ]
      },
      {
        title: "100 Premium Briefbögen",
        subitems: [
        ]
      },
      {
        title: "100 Premium Briefumschläge mit Fenster",
        subitems: [
        ]
      },
      {
        title: "100 Premium Briefumschläge ohne Fenster",
        subitems: [
        ]
      },
      {
        title: "1000 Premium Flyers",
        subitems: [
        ]
      },
      {
        title: "Angebotsmappe im Corporate Design",
        subitems: [
        ]
      },
      {
        title: "Firmenstempel",
        subitems: [
          "Digitaler Firmenstempel",
          "Physischer Premium-Firmenstempel",
        ]
      },
      {
        title: "Digitale Vorlagen",
        subitems: [
          "Oﬃce Vorlagen",
          "E-Mail Signatur",
          "Social Media Kit",
          "Digitale Vorlagen aller Printmaterialien"
        ]
      }
    ]
  },
  digital: {
    id: "04",
    title: "Digitale Präsenz",
    items: [
      {
        title: "Ihre Website",
        subitems: [
          "Art Direction & UI/UX Design",
          "Premium Webdesign im Corporate Design",
          "Responsive Design für alle Endgeräte",
          "Professionelle Film- & Fotografie",
          "Markenspezifische Bildsprache"
        ]
      },
      {
        title: "Content Strategie & Copywriting",
        subitems: [
          "Über uns/Team",
          "Leistungen/Produkte",
          "Kontakt & Support",
          "Referenzen & Testimonials"
        ]
      },
      {
        title: "Performance & Sicherheit",
        subitems: [
          "Performance-Optimierung",
          "SSL-Verschlüsselung (HTTPS)",
          "DSGVO-Komplettpaket inklusive:",
          "Cookie Management",
          "Datenschutzerklärung",
          "Impressum & AGB",
          "Tägliche Backups",
          "Hosting & Domain (12 Monate)"

        ]
      },
      {
        title: "Online Sichtbarkeit",
        subitems: [
          "Google Business Profil",
          "Branchenverzeichnisse (Gelbe Seiten & das Örtliche)",
          "Bewertungsmanagement (optional)",
          "Lokale Suchmaschinenoptimierung (optional)"
        ]
      },
      {
        title: "Social Media Präsenz",
        subitems: [
          "Instagram Business Account",
          "Facebook Unternehmensseite",
          "Kleinanzeigen Geschäftskonto"
        ]
      }
    ]
  }
};
const StartUpAllInOne = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section id="StartUpAllInOne">
    <section className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-16" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <span className="text-gray-400 text-sm">{servicesData.brand.id}</span>
              <h2 className="text-3xl font-medium">{servicesData.brand.title}</h2>
            </div>
            <div className="space-y-6">
              {servicesData.brand.items.map((item, index) => (
                <div key={index}>
                  <button
                    className="text-lg hover:text-gray-600 transition-colors w-full text-left flex items-center space-x-2"
                    onClick={() => toggleExpand(`brand-${index}`)}
                  >
                    <span>{item.title}</span>
                  </button>
                  <AnimatePresence>
                    {expandedItem === `brand-${index}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="pl-4 pt-2 space-y-2 text-gray-600">
                          {item.subitems.map((subitem, subIndex) => (
                            <li key={subIndex}>{subitem}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* communication Section */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <span className="text-gray-400 text-sm">{servicesData.communication.id}</span>
              <h2 className="text-3xl font-medium">{servicesData.communication.title}</h2>
            </div>
            <div className="space-y-6">
              {servicesData.communication.items.map((item, index) => (
                <div key={index}>
                  <button
                    className="text-lg hover:text-gray-600 transition-colors w-full text-left flex items-center space-x-2"
                    onClick={() => toggleExpand(`communication-${index}`)}
                  >
                    <span>{item.title}</span>
                  </button>
                  <AnimatePresence>
                    {expandedItem === `communication-${index}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="pl-4 pt-2 space-y-2 text-gray-600">
                          {item.subitems.map((subitem, subIndex) => (
                            <li key={subIndex}>{subitem}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-16" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* equipment Section */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <span className="text-gray-400 text-sm">{servicesData.equipment.id}</span>
              <h2 className="text-3xl font-medium">{servicesData.equipment.title}</h2>
            </div>
            <div className="space-y-6">
              {servicesData.equipment.items.map((item, index) => (
                <div key={index}>
                  <button
                    className="text-lg hover:text-gray-600 transition-colors w-full text-left flex items-center space-x-2"
                    onClick={() => toggleExpand(`equipment-${index}`)}
                  >
                    <span>{item.title}</span>
                  </button>
                  <AnimatePresence>
                    {expandedItem === `equipment-${index}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="pl-4 pt-2 space-y-2 text-gray-600">
                          {item.subitems.map((subitem, subIndex) => (
                            <li key={subIndex}>{subitem}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* digital Section */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <span className="text-gray-400 text-sm">{servicesData.digital.id}</span>
              <h2 className="text-3xl font-medium">{servicesData.digital.title}</h2>
            </div>
            <div className="space-y-6">
              {servicesData.digital.items.map((item, index) => (
                <div key={index}>
                  <button
                    className="text-lg hover:text-gray-600 transition-colors w-full text-left flex items-center space-x-2"
                    onClick={() => toggleExpand(`digital-${index}`)}
                  >
                    <span>{item.title}</span>
                  </button>
                  <AnimatePresence>
                    {expandedItem === `digital-${index}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="pl-4 pt-2 space-y-2 text-gray-600">
                          {item.subitems.map((subitem, subIndex) => (
                            <li key={subIndex}>{subitem}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-gray-200 mt-16" />
      </div>
      </section>
    </section>
  );
};

export default StartUpAllInOne;