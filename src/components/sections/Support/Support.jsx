// src/components/sections/Support/Support.jsx
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Rundum-Sorglos Setup",
    items: [
      "Persönlicher Ansprechpartner",
      "Komplette Einrichtung aller Services",
      "3h Grundlagen-Training für Ihr Team",
      "30 Tage intensive Betreuung"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: "Premium Support",
    items: [
      "Reaktionszeit unter 24h",
      "Remote-Support",
      "Notfall-Hotline",
      "Regelmäßige Updates"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Unsere Garantien",
    items: [
      "30 Tage Geld-zurück",
      "99.9% Verfügbarkeit",
      "DSGVO-konform",
      "Regelmäßige Backups"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Optional Buchbar",
    items: [
      "Extra Schulungen",
      "Content-Erstellung",
      "SEO-Optimierung",
      "Marketing-Beratung"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  }
];

export const Support = () => {
  return (
    <section className="w-full bg-[#EEEDEA] py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-['SF_Pro_Display'] font-bold text-[36px] md:text-[48px] text-main-secondary mb-4">
            Support & Garantie
          </h2>
          <p className="font-['Inter'] text-[18px] md:text-[20px] text-main-tertiary max-w-2xl mx-auto">
            Umfassende Unterstützung und Sicherheit für Ihren Erfolg
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-accent-primary mb-6">
                {feature.icon}
              </div>

              <h3 className="font-['SF_Pro_Display'] font-semibold text-xl text-main-secondary mb-4">
                {feature.title}
              </h3>

              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <svg className="w-5 h-5 mt-0.5 text-accent-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-main-tertiary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-main-tertiary mb-6">
            Haben Sie Fragen zu unseren Support-Leistungen?
          </p>
          <button className="px-8 py-4 bg-accent-primary text-white rounded-lg font-['SF_Pro_Display'] font-semibold hover:bg-accent-primary/90 transition-all duration-300 shadow-sm hover:shadow-md">
            Kontaktieren Sie uns
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;