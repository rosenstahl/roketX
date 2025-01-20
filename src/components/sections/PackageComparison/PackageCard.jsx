import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PackageCard = ({ title, subtitle, price, features, isPopular }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="relative w-full max-w-sm mx-auto"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={`
          bg-white rounded-xl shadow-lg overflow-hidden
          ${isPopular ? 'border-2 border-accent-primary' : 'border border-support-lightGray'}
        `}
      >
        {isPopular && (
          <div className="bg-accent-primary text-white text-sm font-semibold py-1 px-4 absolute top-4 right-4 rounded-full">
            Beliebt
          </div>
        )}

        <div className="p-6">
          <h3 className="text-h4 font-bold mb-2">{title}</h3>
          <p className="text-support-gray mb-4">{subtitle}</p>
          
          <div className="mb-6">
            <div className="text-h3 font-bold">{price}</div>
          </div>

          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg 
                  className="w-5 h-5 text-accent-primary mt-1 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-main-tertiary">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className={`
              w-full py-3 px-6 rounded-lg font-semibold transition-all
              ${isPopular 
                ? 'bg-accent-primary text-white hover:bg-accent-primary/90' 
                : 'bg-base-tertiary text-main-primary hover:bg-base-tertiary/80'
              }
            `}
          >
            Mehr erfahren
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;