import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const stats = [
  {
    value: 92,
    suffix: "%",
    emphasis: "der Startups scheitern",
    text: "in den ersten 3 Jahren ohne professionelles Branding und digitale Präsenz",
    gradient: "from-primary to-primary-dark"
  },
  {
    value: 340,
    suffix: "%",
    emphasis: "höhere Überlebensrate",
    text: "durch professionelle Markenentwicklung und Geschäftsausstattung von Beginn an",
    gradient: "from-accent-coral to-accent-gold"
  },
  {
    value: 76,
    suffix: "%",
    emphasis: "der traditionellen Unternehmen verlieren",
    text: "Marktanteile an digital-native Konkurrenz",
    gradient: "from-accent-teal to-primary-light"
  },
  {
    value: 83,
    suffix: "%",
    emphasis: "der Kunden erwarten",
    text: "heute digitale Interaktionsmöglichkeiten mit Unternehmen",
    gradient: "from-primary-light to-accent-coral"
  }
];

const AnimatedCounter = ({ value, suffix, delay }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const startTimeRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animate = () => {
            if (!startTimeRef.current) {
              startTimeRef.current = Date.now();
            }

            const timePassed = Date.now() - startTimeRef.current;
            const progress = Math.min(timePassed / 2000, 1); // 2000ms duration
            const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            const currentValue = Math.floor(easeProgress * value);

            setCount(currentValue);

            if (progress < 1) {
              requestRef.current = requestAnimationFrame(animate);
            }
          };

          const timeoutId = setTimeout(() => {
            requestRef.current = requestAnimationFrame(animate);
          }, delay);

          return () => {
            clearTimeout(timeoutId);
            if (requestRef.current) {
              cancelAnimationFrame(requestRef.current);
            }
          };
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      observer.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [value, delay]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// PropTypes für AnimatedCounter
AnimatedCounter.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  delay: PropTypes.number
};

// Default Props für AnimatedCounter
AnimatedCounter.defaultProps = {
  suffix: '',
  delay: 0
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            Verpassen Sie nicht den digitalen Anschluss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die Zahlen zeigen deutlich: Der Unterschied zwischen Erfolg und Scheitern
            liegt in der professionellen digitalen Präsenz
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                <div className="text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={index * 200} />
                </div>
              </div>
              <div className="font-medium text-lg mb-2">{stat.emphasis}</div>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;