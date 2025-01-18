import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import PropTypes from 'prop-types';

// src/components/PackageComparison.jsx - Teil 1: Datenstruktur

const packages = [
  {
    id: 'startup',
    title: 'Startup All-in-One',
    shortTitle: 'Gründung',
    description: 'Für Gründer und Entrepreneure',
    gradient: 'from-primary to-primary-light',
    gradientHover: 'from-primary/90 to-primary-light/90',
    highlights: [
      'Komplette Markenentwicklung',
      'Geschäftsausstattung',
      'Digitale Präsenz',
      'Business Kommunikation'
    ],
    features: [
      'Ideal für Neugründungen',
      'Komplette Grundausstattung',
      'Von null auf hundert'
    ]
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    shortTitle: 'Digitalisierung',
    description: 'Für etablierte, aber analog arbeitende Unternehmen',
    gradient: 'from-accent-coral to-accent-gold',
    gradientHover: 'from-accent-coral/90 to-accent-gold/90',
    highlights: [
      'Digitale Strategie',
      'Prozessoptimierung',
      'IT-Infrastruktur',
      'Mitarbeiter-Schulung'
    ],
    features: [
      'Für etablierte Unternehmen',
      'Digitale Transformation',
      'Modernisierung der Arbeitsweise'
    ]
  },
  {
    id: 'makeover',
    title: 'Brand Makeover',
    shortTitle: 'Neuausrichtung',
    description: 'Für Unternehmen, die sich neu erfinden müssen',
    gradient: 'from-accent-teal to-primary-light',
    gradientHover: 'from-accent-teal/90 to-primary-light/90',
    highlights: [
      'Brand Audit',
      'Corporate Redesign',
      'Content Refresh',
      'Markt-Neupositionierung'
    ],
    features: [
      'Für Unternehmen in der Umbruchphase',
      'Komplette Neupositionierung',
      'Frischer Wind für etablierte Firmen'
    ]
  },
  {
    id: 'growth',
    title: 'Growth',
    shortTitle: 'Wachstum',
    description: 'Für Unternehmen in der Wachstumsphase',
    gradient: 'from-primary-light to-accent-coral',
    gradientHover: 'from-primary-light/90 to-accent-coral/90',
    highlights: [
      'Wachstumsstrategie',
      'Marketing Automation',
      'Sales Optimierung',
      'Skalierbare Prozesse'
    ],
    features: [
      'Für wachstumsorientierte Firmen',
      'Skalierung und Optimierung',
      'Expansion und Prozessverbesserung'
    ]
  }
];
// PackageCard Komponente
const PackageCard = ({ pkg, onSelect, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Gradient Background Hover Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${pkg.gradient})`,
            opacity: 0.05
          }}
        />

        {/* Card Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <span className="inline-block text-sm text-primary font-medium mb-2">
              {pkg.shortTitle}
            </span>
            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
            <div className="flex items-baseline justify-between">
              <p className="text-gray-600">{pkg.description}</p>
              <span className="text-lg font-semibold text-primary">{pkg.price}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 mb-6 flex-grow">
            {pkg.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {pkg.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                {feature}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <motion.button
            onClick={() => onSelect(pkg.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto w-full py-3 px-6 rounded-xl bg-white 
                     border border-gray-200 text-primary font-medium
                     hover:bg-primary hover:text-white hover:border-primary
                     transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Details anzeigen</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 
                   group-hover:opacity-100 group-hover:border-primary/20 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
};
// PackageCard PropTypes
PackageCard.propTypes = {
  pkg: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    gradient: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};


const PackageDetailModal = ({ pkg, onClose }) => {
  if (!pkg) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">{pkg.title}</h2>
                <p className="text-gray-600">{pkg.description}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 inline-block px-4 py-2 bg-primary/10 rounded-lg">
              <span className="text-primary font-semibold">{pkg.price}</span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(pkg.fullFeatures).map(([category, features], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-6">{category}</h3>
                  <div className="space-y-4">
                    {features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (idx * 0.1) + (featureIdx * 0.05) }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <h4 className="text-lg font-semibold mb-4">Haben Sie Fragen?</h4>
              <p className="text-gray-600 mb-6">
                Unser Team berät Sie gerne persönlich und findet die optimale Lösung für Ihre Anforderungen.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Schließen
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Jetzt anfragen
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
// PackageDetailModal PropTypes
PackageDetailModal.propTypes = {
  pkg: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    fullFeatures: PropTypes.object
  }),
  onClose: PropTypes.func.isRequired
};

const PackageComparison = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-light to-background-primary/5" />
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
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
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4"
          >
            UNSERE PAKETE
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Wählen Sie das passende Paket für Ihre{' '}
            <span className="bg-gradient-to-r from-primary to-accent-coral bg-clip-text text-transparent">
              Unternehmensphase
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Jedes Paket ist speziell auf Ihre aktuelle Situation zugeschnitten und 
            enthält alle notwendigen Werkzeuge für Ihren Erfolg.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
              onSelect={(id) => setSelectedPackage(packages.find(p => p.id === id))}
            />
          ))}
        </div>

        {/* Package Detail Modal */}
        <PackageDetailModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8">
            Unsicher, welches Paket das richtige für Sie ist?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-primary text-white rounded-xl 
                     hover:bg-primary-dark transition-colors duration-300
                     shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
          >
            Kostenlose Beratung vereinbaren
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PackageComparison;
