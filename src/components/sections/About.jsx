import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { H2, H3, H4, BodyText, LeadText } from '@/components/common/Typography';
import  Button  from '@/components/ui/Button';
import { getPartnerLogo } from '@/utils/assetHelpers';

const achievements = [
  {
    number: "100+",
    text: "erfolgreich umgesetzte Projekte"
  },
  {
    number: "97%",
    text: "Kundenzufriedenheit"
  },
  {
    number: "7+",
    text: "Jahre Branchenexpertise"
  }
];

const partners = [
  { 
    name: "Google Cloud", 
    logo: getPartnerLogo("google-cloud.svg")
  },
  { 
    name: "AWS Advanced Consulting", 
    logo: getPartnerLogo("aws.svg")
  },
  { 
    name: "Shopify Plus", 
    logo: getPartnerLogo("shopify.svg")
  },
  { 
    name: "Meta Business", 
    logo: getPartnerLogo("meta.svg")
  }
];

const awards = [
  "Digital Transformation Award",
  "Best Agency for Startups",
  "Top 10 Innovative Companies",
  "Deutscher Gründerpreis"
];

const timelineEvents = [
  {
    year: "2019",
    title: "Die Gründung",
    description: "Start in einem Dortmunder Co-Working Space mit der Vision, digitale Innovation zugänglich zu machen."
  },
  {
    year: "2021",
    title: "Expansion & Wachstum",
    description: "50+ erfolgreiche Projekte und Aufbau eines starken Partnernetzwerks."
  },
  {
    year: "2024",
    title: "Marktführer",
    description: "100+ Projekte, mehrfach ausgezeichnet und führend in digitaler Transformation."
  }
];

export const About = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-base-primary py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <H2 className="text-main-secondary mb-4">
            Wir verwandeln Visionen in Markterfolge
          </H2>
        </motion.div>

        {/* Timeline & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <H3 className="text-main-secondary mb-4">
                Unsere Geschichte
              </H3>
              <BodyText className="text-main-tertiary">
                Erfolg entsteht nicht nur durch großartige Ideen – sondern durch die perfekte Verbindung aus Strategie, Design und Technologie. Mit dieser Überzeugung gründeten wir RoketX 2019 in einem Dortmunder Co-Working Space.
              </BodyText>
            </div>
            <BodyText className="text-main-tertiary">
              Unsere Mission war von Anfang an klar: Unternehmen dabei zu unterstützen, komplexe Herausforderungen zu lösen und Visionen in messbare Erfolge umzuwandeln. Start-ups scheiterten oft an der Umsetzung, während etablierte Unternehmen den Anschluss verloren. Hier schlossen wir die Lücke – als One-Stop-Partner für nachhaltigen Unternehmenserfolg.
            </BodyText>
            <BodyText className="text-main-tertiary">
              Heute inspirieren, beraten und fördern wir Start-ups sowie Branchenführer mit ganzheitlichen Strategien. Mit über 100 erfolgreich begleiteten Projekten vereinen wir strategische Präzision, kreative Exzellenz und technologische Innovation. Wir schaffen nicht nur Lösungen – wir formen Marktführer.
            </BodyText>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-accent-primary/20" />
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative pl-16">
                  <div className="absolute left-0 w-11 h-11 rounded-full bg-accent-primary/10 border-2 border-accent-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent-primary" />
                  </div>
                  <div>
                    <span className="font-bold text-accent-primary">{event.year}</span>
                    <H4 className="text-main-secondary mt-1 mb-2">
                      {event.title}
                    </H4>
                    <BodyText className="text-main-tertiary">
                      {event.description}
                    </BodyText>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="block text-4xl font-bold text-accent-primary mb-2">
                {achievement.number}
              </span>
              <BodyText className="text-main-tertiary">
                {achievement.text}
              </BodyText>
            </motion.div>
          ))}
        </div>

        {/* Partners & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <H3 className="text-main-secondary mb-6">
              Starke Partnerschaften
            </H3>
            <div className="grid grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img src={partner.logo} alt={partner.name} className="w-6 h-6" />
                  <BodyText className="text-main-tertiary">{partner.name}</BodyText>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <H3 className="text-main-secondary mb-6">
              Auszeichnungen 2023/24
            </H3>
            <div className="grid grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <BodyText className="text-main-tertiary">{award}</BodyText>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <LeadText className="text-main-secondary mb-8 max-w-2xl mx-auto">
            „Erfolg ist kein Zufall – sondern das Ergebnis der richtigen Strategie zur richtigen Zeit, mit den richtigen Partnern."
          </LeadText>
          
          <Button
            onClick={() => navigate('/kontakt')}
            variant="primary"
            size="large"
          >
            Lassen Sie uns gemeinsam Ihre Erfolgsgeschichte schreiben
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;