{/* src/components/sections/PackageComparison/PackageComparison.jsx */}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const packages = [
  {
    id: 1,
    name: 'Startup All-in-One',
    tag: 'Für Gründer',
    description: 'Von der Idee zur Marke – Alles, was Gründer brauchen.',
    price: '3499€',
    accent: '#007AFF',
    isPopular: true,
    features: [
      'Komplette Markenentwicklung',
      'Business Kommunikation',
      'Professionelle Geschäftsausstattung',
      'Umfassende digitale Präsenz'
    ]
  },
  {
    id: 2,
    name: 'Digital Transform',
    tag: 'Für etablierte Unternehmen',
    description: 'Machen Sie Ihr Unternehmen digital fit und zukunftssicher.',
    price: '2999€',
    accent: '#FF7043',
    features: [
      'Zukunfts-Check & Strategie',
      'Business Kommunikation',
      'Digitale Präsenz',
      'Social Media Transformation'
    ]
  },
  {
    id: 3,
    name: 'Brand Makeover',
    tag: 'Für Neupositionierung',
    description: 'Ein frischer Look für mehr Sichtbarkeit und Umsatz.',
    price: '2499€',
    accent: '#00B27A',
    features: [
      'Brand Audit & Neupositionierung',
      'Corporate Design Refresh',
      'Geschäftsausstattung Refresh',
      'Digitale Modernisierung'
    ]
  },
  {
    id: 4,
    name: 'Growth',
    tag: 'Für Expansion',
    description: 'Strategien für schnelles Wachstum und neue Märkte.',
    price: 'Auf Anfrage',
    accent: '#333333',
    features: [
      'Wachstumsanalyse',
      'Marketing Acceleration',
      'Vertriebsausbau',
      'Digitale Skalierung'
    ]
  }
];

export const PackageComparison = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const [flippedCard, setFlippedCard] = useState(null);
  
  const handleCardClick = (packageId) => {
    if (selectedCard === packageId) {
      setFlippedCard(flippedCard === packageId ? null : packageId);
    } else {
      setFlippedCard(null);
      setSelectedCard(packageId);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#EEEDEA] py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-3xl -top-48 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-['SF_Pro_Display'] text-accent-primary mb-4">
            Unsere Pakete
          </span>
          <h2 className="font-['SF_Pro_Display'] font-bold text-[36px] md:text-[48px] text-main-secondary mb-4">
            Ihr Weg zum Erfolg
          </h2>
          <p className="font-['Inter'] text-[18px] md:text-[20px] text-main-tertiary max-w-2xl mx-auto">
            Die perfekte Lösung für jeden Entwicklungsschritt Ihres Unternehmens
          </p>
        </motion.div>

        <div className="relative h-[800px] flex justify-center items-start perspective-1000">
          {packages.map((pkg, index) => {
            const isSelected = selectedCard === pkg.id;
            const yOffset = isSelected ? 100 : index * 80;
            
            return (
              <motion.div
                key={pkg.id}
                className="absolute w-[340px] md:w-[400px]"
                style={{
                  zIndex: isSelected ? 40 : 30 - index,
                }}
                initial={false}
                animate={{
                  y: yOffset,
                  scale: isSelected ? 1 : 0.95,
                  rotateX: flippedCard === pkg.id ? 180 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {/* Clickable header for non-selected cards */}
                {!isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-32 cursor-pointer z-50"
                    onClick={() => handleCardClick(pkg.id)}
                  />
                )}

                <div
                  onClick={() => isSelected && handleCardClick(pkg.id)}
                  className={`
                    w-full rounded-2xl bg-white
                    ${isSelected ? 'cursor-pointer' : ''}
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    transition-all duration-500
                    perspective-1000
                    ${pkg.isPopular ? 'ring-2 ring-accent-primary ring-offset-2' : ''}
                  `}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Card Front */}
                  <div 
                    className={`p-8 ${flippedCard === pkg.id ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3"
                          style={{ 
                            backgroundColor: `${pkg.accent}10`,
                            color: pkg.accent 
                          }}
                        >
                          {pkg.tag}
                        </span>
                        <h3 className="font-['SF_Pro_Display'] font-semibold text-2xl text-main-secondary">
                          {pkg.name}
                        </h3>
                      </div>
                      {pkg.isPopular && (
                        <span className="flex items-center gap-1 text-accent-primary">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Beliebteste Wahl
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-main-tertiary mb-6">{pkg.description}</p>
                        
                        <div className="flex items-baseline mb-8">
                          <span className="font-['SF_Pro_Display'] font-bold text-3xl text-main-secondary">
                            {pkg.price}
                          </span>
                          {pkg.price !== 'Auf Anfrage' && (
                            <span className="ml-2 text-main-tertiary">/ Paket</span>
                          )}
                        </div>

                        <div className="space-y-4 mb-8">
                          {pkg.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <svg 
                                className="w-5 h-5 mt-0.5 flex-shrink-0" 
                                style={{ color: pkg.accent }} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="2" 
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-main-tertiary">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <button 
                          className="w-full py-4 rounded-lg font-['SF_Pro_Display'] font-semibold text-white transition-all duration-300"
                          style={{ 
                            backgroundColor: pkg.accent,
                            boxShadow: `0 4px 20px ${pkg.accent}30`
                          }}
                        >
                          Mehr erfahren
                        </button>
                      </motion.div>
                    )}
                  </div>

                  {/* Card Back */}
                  {isSelected && (
                    <div 
                      className={`absolute inset-0 p-8 ${flippedCard === pkg.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateX(180deg)',
                      }}
                    >
                      {/* Detailed content here */}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-main-tertiary mb-6">
            Unsicher, welches Paket das richtige für Sie ist?
          </p>
          <button className="group relative px-8 py-4 bg-main-secondary text-white rounded-lg font-['SF_Pro_Display'] font-semibold overflow-hidden transition-all duration-300">
            <span className="relative z-10">Kostenlose Erstberatung sichern</span>
            <div className="absolute inset-0 bg-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PackageComparison;