// src/components/sections/TrustedBy/TrustedBy.jsx
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'Altinzade', logo: '/logos/altinzade.svg' },
  { id: 2, name: 'VITA Betreuungshilfe', logo: '/logos/vita.svg' },
  { id: 3, name: 'TREU Service GmbH', logo: '/logos/treu.svg' },
  { id: 4, name: 'Mercedes-Benz', logo: '/logos/mercedes.svg' },
  { id: 5, name: 'Deutsche Bank', logo: '/logos/deutsche-bank.svg' },
  { id: 6, name: 'SAP', logo: '/logos/sap.svg' },
  { id: 7, name: 'Bosch', logo: '/logos/bosch.svg' },
];

export const TrustedBy = () => {
  return (
    <section className="w-full py-12 bg-[#171614] overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-center font-['SF_Pro_Display'] font-semibold text-[24px] text-[#EEEDEA] mb-8">
          Von führenden Unternehmen vertraut
        </h2>
      </div>

      {/* Double slider for infinite loop effect */}
      <div className="relative flex">
        {/* First slider */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="relative group w-[120px] h-[60px] flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-auto h-full object-contain transition-opacity duration-300 filter grayscale group-hover:grayscale-0 invert opacity-60 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-[#EEEDEA]/5 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </motion.div>

        {/* Second slider (duplicate for seamless loop) */}
        <motion.div
          className="flex gap-16 items-center absolute left-full"
          animate={{
            x: [-2000, -4000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`${partner.id}-${index}-duplicate`}
              className="relative group w-[120px] h-[60px] flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="w-auto h-full object-contain transition-opacity duration-300 filter grayscale group-hover:grayscale-0 invert opacity-60 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-[#EEEDEA]/5 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#171614] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#171614] to-transparent z-10" />
    </section>
  );
};

export default TrustedBy;