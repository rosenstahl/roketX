// src/components/TrustedBySection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const partners = [
  { id: 1, name: 'Referenz 1' },
  { id: 2, name: 'Referenz 2' },
  { id: 3, name: 'Referenz 3' },
  { id: 4, name: 'Referenz 4' },
  { id: 5, name: 'Referenz 5' },
  { id: 6, name: 'Referenz 6' }
];

const InfiniteCarousel = () => (
  <div className="relative flex overflow-hidden py-12">
    <motion.div
      className="flex gap-8 min-w-full items-center"
      animate={{
        x: [-1000, 0]
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {/* Dupliziert für nahtlosen Loop */}
      {[...partners, ...partners].map((partner, index) => (
        <div
          key={`${partner.id}-${index}`}
          className="flex-shrink-0 group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="px-8 py-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10
                     hover:border-white/20 hover:bg-primary/5 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary-light" />
              </div>
              <span className="text-white/70 font-light tracking-wider group-hover:text-white/90 transition-colors">
                {partner.name}
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>

    {/* Gradient Edges */}
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-primary to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-primary to-transparent z-10" />
  </div>
);

const TrustedBySection = () => {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
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
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p 
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            VERTRAUT VON FÜHRENDEN UNTERNEHMEN
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <InfiniteCarousel />

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default TrustedBySection;