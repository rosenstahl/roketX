import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const servicesData = [
  {
  id: 'startup',
  title: 'StartUp AllInOne',
  price: '4.999€',
  shortDescription: 'Das komplette Paket für Ihren erfolgreichen Start.',
  description: 'Von der Markenentwicklung bis zur digitalen Präsenz - alles aus einer Hand.',
  color: 'from-primary to-accent-coral',
  content: {
    sections: [
      {
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
          // ... weitere Items aus servicesData.brand
        ]
      },
      {
        id: "02",
        title: "Business Kommunikation",
        items: servicesData.communication.items
      },
      {
        id: "03",
        title: "Geschäftsausstattung",
        items: servicesData.equipment.items
      },
      {
        id: "04",
        title: "Digitale Präsenz",
        items: servicesData.digital.items
      }
    ]
  }
}
];


const StartUpAllInOne = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section className="relative min-h-screen bg-surface py-24 overflow-hidden">
      {/* Animierter Hintergrund */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-coral/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            STARTUP ALL-IN-ONE PAKET
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Von null auf{' '}
            <span className="bg-gradient-to-r from-primary via-accent-coral to-primary bg-clip-text text-transparent">
              hundert
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Das perfekte Paket für Ihre Unternehmensgründung. Alle essentiellen Services aus einer Hand.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(servicesData).map(([key, section]) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8"
            >
              {/* Section Header */}
              <div className="flex items-start gap-4 mb-8">
                <span className="text-primary/60 font-medium">{section.id}</span>
                <h3 className="text-2xl font-display font-bold text-gray-900">{section.title}</h3>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0">
                    <motion.button
                      onClick={() => toggleExpand(`${key}-${index}`)}
                      className="w-full py-4 flex items-center justify-between text-left group"
                    >
                      <span className="text-lg font-medium text-gray-800 group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      {item.subitems?.length > 0 && (
                        <motion.div
                          animate={{ rotate: expandedItem === `${key}-${index}` ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-primary" />
                        </motion.div>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {expandedItem === `${key}-${index}` && item.subitems?.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pb-4"
                        >
                          <ul className="space-y-2 pl-4">
                            {item.subitems.map((subitem, subIndex) => (
                              <motion.li
                                key={subIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                className="flex items-center text-gray-600"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 mr-3" />
                                {subitem}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-xl font-medium text-gray-900 mb-2">
              Bereit durchzustarten?
            </p>
            <p className="text-gray-600 mb-8">
              Starten Sie jetzt mit unserem All-in-One Paket ab 4.999€
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark 
                       transition-colors flex items-center justify-center mx-auto space-x-2"
            >
              <span>Jetzt Beratungsgespräch vereinbaren</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartUpAllInOne;