// src/components/sections/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

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
  { name: "Google Cloud", logo: "/images/partners/google-cloud.svg" },
  { name: "AWS Advanced Consulting", logo: "/images/partners/aws.svg" },
  { name: "Shopify Plus", logo: "/images/partners/shopify.svg" },
  { name: "Meta Business", logo: "/images/partners/meta.svg" }
];

const awards = [
  "Digital Transformation Award",
  "Best Agency for Startups",
  "Top 10 Innovative Companies",
  "Deutscher Gründerpreis"
];

export const About = () => {
  return (
    <section className="w-full bg-base-primary py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-['SF_Pro_Display'] font-bold text-[36px] md:text-[48px] text-main-secondary mb-4">
            Wir verwandeln Visionen in Markterfolge
          </h2>
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
              <h3 className="font-['SF_Pro_Display'] font-semibold text-2xl text-main-secondary mb-4">
                Unsere Geschichte
              </h3>
              <p className="text-main-tertiary leading-relaxed">
                Erfolg entsteht nicht nur durch großartige Ideen – sondern durch die perfekte Verbindung aus Strategie, Design und Technologie. Mit dieser Überzeugung gründeten wir RoketX 2019 in einem Dortmunder Co-Working Space.
              </p>
            </div>
            <div>
              <p className="text-main-tertiary leading-relaxed">
                Unsere Mission war von Anfang an klar: Unternehmen dabei zu unterstützen, komplexe Herausforderungen zu lösen und Visionen in messbare Erfolge umzuwandeln. Start-ups scheiterten oft an der Umsetzung, während etablierte Unternehmen den Anschluss verloren. Hier schlossen wir die Lücke – als One-Stop-Partner für nachhaltigen Unternehmenserfolg.
              </p>
            </div>
            <div>
              <p className="text-main-tertiary leading-relaxed">
                Heute inspirieren, beraten und fördern wir Start-ups sowie Branchenführer mit ganzheitlichen Strategien. Mit über 100 erfolgreich begleiteten Projekten vereinen wir strategische Präzision, kreative Exzellenz und technologische Innovation. Wir schaffen nicht nur Lösungen – wir formen Marktführer.
              </p>
            </div>
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
              {/* 2019 */}
              <div className="relative pl-16">
                <div className="absolute left-0 w-11 h-11 rounded-full bg-accent-primary/10 border-2 border-accent-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent-primary" />
                </div>
                <div>
                  <span className="font-['SF_Pro_Display'] font-bold text-accent-primary">2019</span>
                  <h4 className="font-['SF_Pro_Display'] font-semibold text-lg text-main-secondary mt-1 mb-2">
                    Die Gründung
                  </h4>
                  <p className="text-main-tertiary">Start in einem Dortmunder Co-Working Space mit der Vision, digitale Innovation zugänglich zu machen.</p>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative pl-16">
                <div className="absolute left-0 w-11 h-11 rounded-full bg-accent-primary/10 border-2 border-accent-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent-primary" />
                </div>
                <div>
                  <span className="font-['SF_Pro_Display'] font-bold text-accent-primary">2021</span>
                  <h4 className="font-['SF_Pro_Display'] font-semibold text-lg text-main-secondary mt-1 mb-2">
                    Expansion & Wachstum
                  </h4>
                  <p className="text-main-tertiary">50+ erfolgreiche Projekte und Aufbau eines starken Partnernetzwerks.</p>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative pl-16">
                <div className="absolute left-0 w-11 h-11 rounded-full bg-accent-primary/10 border-2 border-accent-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent-primary" />
                </div>
                <div>
                  <span className="font-['SF_Pro_Display'] font-bold text-accent-primary">2024</span>
                  <h4 className="font-['SF_Pro_Display'] font-semibold text-lg text-main-secondary mt-1 mb-2">
                    Marktführer
                  </h4>
                  <p className="text-main-tertiary">100+ Projekte, mehrfach ausgezeichnet und führend in digitaler Transformation.</p>
                </div>
              </div>
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
              <span className="font-['SF_Pro_Display'] font-bold text-4xl text-accent-primary block mb-2">
                {achievement.number}
              </span>
              <span className="text-main-tertiary">
                {achievement.text}
              </span>
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
            <h3 className="font-['SF_Pro_Display'] font-semibold text-2xl text-main-secondary mb-6">
              Starke Partnerschaften
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img src={partner.logo} alt={partner.name} className="w-6 h-6" />
                  <span className="text-main-tertiary">{partner.name}</span>
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
            <h3 className="font-['SF_Pro_Display'] font-semibold text-2xl text-main-secondary mb-6">
              Auszeichnungen 2023/24
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-main-tertiary">{award}</span>
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
          <p className="text-2xl text-main-secondary mb-8 max-w-2xl mx-auto">
            „Erfolg ist kein Zufall – sondern das Ergebnis der richtigen Strategie zur richtigen Zeit, mit den richtigen Partnern."
          </p>
          <button className="px-8 py-4 bg-accent-primary text-white rounded-lg font-['SF_Pro_Display'] font-semibold hover:bg-accent-primary/90 transition-all duration-300">
            Lassen Sie uns gemeinsam Ihre Erfolgsgeschichte schreiben
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;