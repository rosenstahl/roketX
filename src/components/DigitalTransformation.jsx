// src/components/DigitalTransformation.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = {
  brand: {
    id: "01",
    title: "Zukunfts-Check & Strategie",
    items: [
      {
        title: "Status & Potentialanalyse",
        subitems: [
          "Analyse der aktuellen Geschäftsprozesse",
          "Digitalisierungspotential-Check",
          "Wettbewerbsanalyse im digitalen Umfeld",
          "Quick-Wins Identifikation"
        ]
      },
      {
        title: "Digitale Strategie",
        subitems: [
          "Entwicklung der digitalen Vision",
          "Priorisierung der Digitalisierungsfelder",
          "Ressourcen- & Budget-Planung",
          "ROI-Berechnung der Maßnahmen"
        ]
      },
      {
        title: "Transformations-Roadmap",
        subitems: [
          "Detaillierter Implementierungsplan",
          "Meilenstein-Definition",
          "Risikomanagement-Strategie",
          "Qualitätssicherungs-Konzept"
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
        }
    ]
  },
  equipment: {
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
  },
  digital: {
    id: "04",
    title: "Social Media Transformation",
    items: [
      {
        title: "Kanalstrategie",
        subitems: [
          "Zielgruppenanalyse",
          "Wettbewerbsanalyse",
          "Kanalauswahl & -optimierung",
          "Content-Strategie"
        ]
      },
      {
        title: "Kanal-Setup & Optimierung",
        subitems: [
          "Instagram Business Account",
          "Facebook Unternehmensseite",
          "LinkedIn Unternehmensprofil",
          "YouTube Kanal (optional)"
        ]
      },
      {
        title: "Content-Produktion",
        subitems: [
          "Professionelles Fotoshooting",
          "Basis-Videopaket",
          "Content-Kalender (3 Monate)",
          "Design-Templates für Social Media"
        ]
      },
      {
        title: "Online Sichtbarkeit Optimierung",
        subitems: [
          "Suchmaschinen & Verzeichnisse",
          "Google Business Profil Optimierung",
          "Branchenverzeichnisse Update",
          "Local SEO Optimierung",
          "Bewertungsmanagement Setup"
        ]
      },
      {
        title: "Social Media Refresh",
        subitems: [
          "Instagram Business Account Modernisierung",
          "Facebook Unternehmensseite Update",
          "Profile & Content Audit",
          "Kanal-Optimierung"
        ]
      }
    ]
  }
};
const DigitalTransformation = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section id="GroDigitalTransformationwth">
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

export default DigitalTransformation;
