// src/components/sections/Stats/Stats.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const stats = [
  {
    percentage: 92,
    text: "der Startups scheitern in den ersten 3 Jahren ohne professionelles Branding und digitale Präsenz",
    subtext: "Die häufigste Ursache: mangelnde digitale Präsenz",
    color: "#FF4438", // Warnsignal Rot
    accent: "bg-[#FF4438]/10"
  },
  {
    percentage: 340,
    text: "höhere Überlebensrate durch professionelle Markenentwicklung und Geschäftsausstattung von Beginn an",
    subtext: "Der entscheidende Vorsprung für Ihr Business",
    color: "#00B27A", // Erfolgs-Grün
    accent: "bg-[#00B27A]/10"
  },
  {
    percentage: 76,
    text: "der traditionellen Unternehmen verlieren Marktanteile an digital-native Konkurrenz",
    subtext: "Werden Sie Vorreiter statt Nachzügler",
    color: "#FF7043", // Warn-Orange
    accent: "bg-[#FF7043]/10"
  },
  {
    percentage: 83,
    text: "der Kunden erwarten heute digitale Interaktionsmöglichkeiten mit Unternehmen",
    subtext: "Ihre Chance, genau diese Erwartungen zu erfüllen",
    color: "#007AFF", // Chancen-Blau
    accent: "bg-[#007AFF]/10"
  }
];

const Counter = ({ value, color }) => {
  const [count, setCount] = React.useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      setCount(0);
      let startTime;
      let animationFrame;

      const animation = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / 2000, 1); // 2 Sekunden Duration
        
        // Easing function für smoothere Animation
        const eased = 1 - Math.pow(1 - percentage, 3);
        
        setCount(Math.floor(value * eased));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animation);
        }
      };

      animationFrame = requestAnimationFrame(animation);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, controls]);

  return (
    <span ref={ref} style={{ color }} className="font-['SF_Pro_Display'] font-bold text-5xl md:text-6xl">
      {count}%
    </span>
  );
};

// Add prop validation
Counter.propTypes = {
  value: PropTypes.number.isRequired, // Validate value prop
  color: PropTypes.string.isRequired, // Validate color prop
};

export const Stats = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['SF_Pro_Display'] font-bold text-[36px] md:text-[48px] text-main-secondary mb-4">
            Verpassen Sie nicht den digitalen Anschluss
          </h2>
          <p className="font-['Inter'] text-[18px] md:text-[20px] text-main-tertiary max-w-3xl mx-auto">
            Die Zahlen zeigen deutlich: Der Unterschied zwischen Erfolg und Scheitern liegt in der professionellen digitalen Präsenz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`${stat.accent} rounded-2xl p-8`}>
                <Counter value={stat.percentage} color={stat.color} />
                
                <p className="font-['Inter'] text-main-secondary mt-4 mb-2 text-lg">
                  {stat.text}
                </p>
                
                <p className="font-['Inter'] text-main-tertiary text-sm">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-['SF_Pro_Display'] text-2xl text-main-secondary mb-8 max-w-2xl mx-auto">
            Die gute Nachricht: Sie haben jetzt die Chance, es richtig zu machen
          </p>
          
          <button className="group relative px-8 py-4 bg-accent-primary text-white rounded-lg font-['SF_Pro_Display'] font-semibold overflow-hidden hover:bg-accent-primary/90 transition-all duration-300">
            Gratis Strategiegespräch vereinbaren
          </button>

          <p className="text-main-tertiary text-sm mt-4">
            Daten basierend auf aktuellen Marktanalysen 2023/24
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;