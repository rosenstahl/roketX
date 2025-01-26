import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Server, Shield, Clock, PlusCircle } from 'lucide-react';
import { H2, H3, LeadText, BodyText } from '@/components/common/Typography';
import Button from '@/components/ui/Button';

const features = [
  {
    title: "Rundum-Sorglos Setup",
    items: [
      "Persönlicher Ansprechpartner",
      "Komplette Einrichtung aller Services",
      "3h Grundlagen-Training für Ihr Team",
      "30 Tage intensive Betreuung"
    ],
    Icon: Server,
    color: '#FF7043'  // startup color
  },
  {
    title: "Premium Support",
    items: [
      "Reaktionszeit unter 24h",
      "Remote-Support",
      "Notfall-Hotline",
      "Regelmäßige Updates"
    ],
    Icon: Clock,
    color: '#007AFF'  // digital color
  },
  {
    title: "Unsere Garantien",
    items: [
      "30 Tage Geld-zurück",
      "99.9% Verfügbarkeit",
      "DSGVO-konform",
      "Regelmäßige Backups"
    ],
    Icon: Shield,
    color: '#00B27A'  // makeover color
  },
  {
    title: "Optional Buchbar",
    items: [
      "Extra Schulungen",
      "Content-Erstellung",
      "SEO-Optimierung",
      "Marketing-Beratung"
    ],
    Icon: PlusCircle,
    color: '#9C27B0'  // growth color
  }
];

const FeatureCard = ({ feature, index }) => {
  const IconComponent = feature.Icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-white/10"
    >
      <motion.div
        className="mb-6 relative w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${feature.color}20` }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <IconComponent size={20} style={{ color: feature.color }} />
        </motion.div>
      </motion.div>

      <H3 className="text-main-secondary text-lg mb-4">
        {feature.title}
      </H3>

      <ul className="space-y-2.5">
        {feature.items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
            className="flex items-start gap-2"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="p-0.5 rounded-full mt-1"
              style={{ backgroundColor: `${feature.color}20` }}
            >
              <svg 
                className="w-3 h-3" 
                style={{ color: feature.color }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <BodyText className="text-main-tertiary text-sm">
              {item}
            </BodyText>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Support = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-base-primary py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <H2 className="text-main-secondary mb-4">
            Support & Garantie
          </H2>
          <LeadText className="max-w-2xl mx-auto">
            Umfassende Unterstützung und Sicherheit für Ihren Erfolg
          </LeadText>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <BodyText className="text-main-tertiary mb-6">
            Haben Sie Fragen zu unseren Support-Leistungen?
          </BodyText>
          <Button
            onClick={() => navigate('/kontakt')}
            variant="primary"
            size="large"
          >
            Kontaktieren Sie uns
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;