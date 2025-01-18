// src/components/Growth.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = {
  brand: {
    id: "01",
    title: "Wachstumsanalyse",
    items: [
      {
        title: "Marktpotentialanalyse",
        subitems: [
        ]
      },
      {
        title: "Zielmarktidentifikation",
        subitems: [
        ]
      },
      {
        title: "Markteintrittsbarrieren",
        subitems: [
        ]
      },
      {
        title: "Marktvolumen-Berechnung",
        subitems: [
        ]
      },
      {
        title: "Wettbewerbsanalyse und -positionierung",
        subitems: [
        ]
      },
      {
        title: "Wettbewerbsvorteile & UPS",
        subitems: [
        ]
      },
      {
        title: "Gap-Analyse",
        subitems: [
        ]
      },
      {
        title: "Growth Strategie",
        subitems: [
          "Wachstumshebel-Identifikation",
          "Skalierungsmodell",
          "Expansionsstrategie",
          "KPI-Definition",
          "Meilensteinplanung"
        ]
      }
    ]
  },
  communication: {
    id: "02",
    title: "Marketing Acceleration",
    items: [
      {
        title: "Content Marketing Strategie",
        subitems: [
        ]
      },
      {
        title: "Social Media Marketing Plan",
        subitems: [
        ]
      },
      {
        title: "E-Mail Marketing Setup",
        subitems: [
        ]
      },
      {
        title: "Lead Generation Optimierung",
        subitems: [
        ]
      },
      {
        title: "Google Ads Kampagnen",
        subitems: [
        ]
      },
      {
        title: "Social Media Advertising",
        subitems: [
        ]
      },
      {
        title: "Content Produktion",
        subitems: [
          "Content Calendar",
          "SEO-optimierte Artikel",
          "Social Media Inhalte",
          "E-Mail Vorlagen",
          "Marketing Materialien"
        ]
      }
    ]
  },
  equipment: {
    id: "03",
    title: "Vertrieb ausbauen",
    items: [
      {
        title: "Vertriebsoptimierung",
        subitems: [
          "Sales Funnel Entwicklung",
          "Vertriebsprozess-Setup",
          "Pitch Deck Professional",
          "Verkaufspräsentationen",
        ]
      },
      {
        title: "Angebotsvorlagen Premium",
        subitems: [
        ]
      },
      {
        title: "Vertriebsmaterial",
        subitems: [
          "Sales One-Pager",
          "Produktkataloge",
          "Case Studies",
          "Referenzmarketing",
          "Testimonial-Sammlung",
        ]
      },
      {
        title: "Corporate Identity Expansion",
        subitems: [
          "Brand Guidelines 2.0",
          "Submarken-Entwicklung",
          "Design-System Erweiterung",
        ]
      },
    ]
  },
  digital: {
    id: "04",
    title: "Digitale Skalierung",
    items: [
      {
        title: "Webpräsenz 2.0",
        subitems: [
          "Multistandort SEO",
          "Conversion Optimierung",
          "A/B Testing Setup",
          "Landing Page System",
        ]
      },
      {
        title: "Online Reputation",
        subitems: [
          "PR-Strategie",
          "Pressemitteilungs-System",
          "Medienkit",
          "Award-Planung",
          "Thought Leadership Setup"
        ]
      },
      {
        title: "International & Multi-Sprachen",
        subitems: [
          "Mehrsprachige Website",
          "Multi-Language Content",
          "Internationales Social Media",
          "Lokalisierte Marketing-Materialien",
          "Internationale SEO"
        ]
      }
    ]
  }
};
const Growth = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section id="Growth">
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

export default Growth;