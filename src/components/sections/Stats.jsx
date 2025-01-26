import React from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { H2, LeadText, H3, BodyText, SmallText } from '@/components/common/Typography';
import { GlassEffect } from '@/components/ui/GlassEffect';
import Button from '@/components/ui/Button';

// Angepasste Farben zu den Paketfarben
const stats = [
  {
    percentage: 92,
    text: "der Startups scheitern in den ersten 3 Jahren ohne professionelles Branding und digitale Präsenz",
    subtext: "Die häufigste Ursache: mangelnde digitale Präsenz",
    accentColor: "#FF7043", // startup
    delay: 0.2
  },
  {
    percentage: 340,
    text: "höhere Überlebensrate durch professionelle Markenentwicklung und Geschäftsausstattung",
    subtext: "Der entscheidende Vorsprung für Ihr Business",
    accentColor: "#007AFF", // digital
    delay: 0.4
  },
  {
    percentage: 76,
    text: "der traditionellen Unternehmen verlieren Marktanteile an digital-native Konkurrenz",
    subtext: "Werden Sie Vorreiter statt Nachzügler",
    accentColor: "#00B27A", // makeover
    delay: 0.6
  },
  {
    percentage: 83,
    text: "der Kunden erwarten heute digitale Interaktionsmöglichkeiten mit Unternehmen",
    subtext: "Ihre Chance, genau diese Erwartungen zu erfüllen",
    accentColor: "#9C27B0", // growth
    delay: 0.8
  }
];

// Animierte Nummer Komponente
const AnimatedNumber = ({ value, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let animationFrame;
    let startTime;
    const duration = 2000; // 2 Sekunden

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isInView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-5xl font-bold font-sf">
      {displayValue}
    </span>
  );
};

// StatCard Komponente
const StatCard = ({ percentage, text, subtext, accentColor, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <GlassEffect className="relative h-full p-6 transition-all duration-300 hover:shadow-xl overflow-hidden">
        {/* Farbbalken oben statt links */}
        <div 
          className="absolute top-0 left-0 w-full h-1 rounded-t-lg" 
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />
        
        <div className="space-y-4">
          <H3 className="flex items-baseline gap-1">
            <AnimatedNumber value={percentage} delay={delay} />
            <span className="text-2xl">%</span>
          </H3>
          
          <BodyText>{text}</BodyText>
          
          <SmallText className="italic text-support-gray">
            {subtext}
          </SmallText>
        </div>
      </GlassEffect>
    </motion.div>
  );
};

// PropTypes
AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired
};

StatCard.propTypes = {
  percentage: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired
};

// Hauptkomponente
const Stats = () => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate('/kontakt');
  };

  return (
    <section className="relative py-24 overflow-hidden bg-base-primary">
      {/* Hintergrund-Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-tertiary opacity-40" />
      
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <H2 className="mb-6">
            Verpassen Sie nicht den digitalen Anschluss
          </H2>
          <LeadText>
            Die Zahlen zeigen deutlich: Der Unterschied zwischen Erfolg und Scheitern liegt in der professionellen digitalen Präsenz
          </LeadText>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard 
              key={`stat-${index}`}
              percentage={stat.percentage}
              text={stat.text}
              subtext={stat.subtext}
              accentColor={stat.accentColor}
              delay={stat.delay}
            />
          ))}
        </div>
        
        {/* CTA Bereich */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <H3 className="mb-8 text-accent-primary">
            Die gute Nachricht: Sie haben jetzt die Chance, es richtig zu machen
          </H3>
          
          <Button
            onClick={handleCtaClick}
            variant="primary"
            size="large"
          >
            Gratis Strategiegespräch vereinbaren
          </Button>
          
          <SmallText className="mt-4 text-support-gray">
            Daten basierend auf aktuellen Marktanalysen 2023/24
          </SmallText>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;