import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, ArrowRight, Rocket, Target, Lightbulb, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { value: "100+", label: "Erfolgreich umgesetzte Projekte" },
    { value: "97%", label: "Kundenzufriedenheit" },
    { value: "7+", label: "Jahre Branchenexpertise" }
  ];

  const partners = [
    "Google Cloud",
    "AWS Advanced Consulting",
    "Shopify Plus",
    "Meta Business"
  ];

  const awards = [
    "Digital Transformation Award",
    "Best Agency for Startups",
    "Top 10 Innovative Companies",
    "Deutscher Gründerpreis"
  ];

  const timelineSteps = [
    {
      year: "2019",
      icon: Rocket,
      title: "Die Gründung",
      content: "Erfolg entsteht nicht nur durch großartige Ideen – sondern durch die perfekte Verbindung aus Strategie, Design und Technologie. Mit dieser Überzeugung gründeten wir RoketX 2019 in einem Dortmunder Co-Working Space.",
      bgColor: "from-blue-500/20 to-purple-500/20"
    },
    {
      year: "2020-22",
      icon: Target,
      title: "Die Mission",
      content: "Unsere Mission war von Anfang an klar: Unternehmen dabei zu unterstützen, komplexe Herausforderungen zu lösen und Visionen in messbare Erfolge umzuwandeln. Start-ups scheiterten oft an der Umsetzung, während etablierte Unternehmen den Anschluss verloren. Hier schlossen wir die Lücke – als One-Stop-Partner für nachhaltigen Unternehmenserfolg.",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      year: "2023-24",
      icon: Users2,
      title: "Heute",
      content: "Heute inspirieren, beraten und fördern wir Start-ups sowie Branchenführer mit ganzheitlichen Strategien. Mit über 100 erfolgreich begleiteten Projekten vereinen wir strategische Präzision, kreative Exzellenz und technologische Innovation. Wir schaffen nicht nur Lösungen – wir formen Marktführer.",
      bgColor: "from-pink-500/20 to-orange-500/20"
    }
  ];


  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Wir verwandeln Visionen in Markterfolge
          </h2>
          <p className="text-lg text-gray-600">
            Unsere Geschichte
          </p>
        </motion.div>
        
        {/* New Timeline Section */}
        <div className="mb-20">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.2 }
                }
              }}
              className="relative"
            >
              {/* Connector Line */}
              {index !== timelineSteps.length - 1 && (
                <div className="absolute left-[41px] top-24 w-0.5 h-full bg-gradient-to-b from-primary/40 to-primary/10" />
              )}
              
              <div className="flex gap-8 mb-8">
                {/* Year and Icon Column */}
                <div className="flex flex-col items-center">
                  <div className="bg-white border-2 border-primary/20 rounded-full p-4 z-10">
                    {React.createElement(step.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <span className="mt-2 text-sm font-semibold text-gray-500">{step.year}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className={`relative group rounded-2xl p-8 bg-gradient-to-br ${step.bgColor} 
                                hover:shadow-lg transition-all duration-500 border border-white/40`}>
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 }
            }
          }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-100 
                        shadow-lg hover:shadow-xl transition-shadow">
            <Lightbulb className="h-8 w-8 text-primary mb-4" />
            <blockquote className="text-xl font-medium text-gray-900 italic leading-relaxed">
              &ldquo;Erfolg ist kein Zufall – sondern das Ergebnis der richtigen Strategie zur richtigen Zeit, 
              mit den richtigen Partnern.&rdquo; ~ Hasan Yilmaz
            </blockquote>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={statsVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Partners & Awards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Partners */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Starke Partnerschaften
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-gray-600 text-sm hover:shadow-md transition-shadow"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Auszeichnungen 2023/24
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-gray-600 text-sm hover:shadow-md transition-shadow"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="text-center"
        >
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl 
                     text-lg font-medium hover:bg-primary/90 transition-colors shadow-lg 
                     hover:shadow-xl hover:shadow-primary/20 group"
          >
            Lassen Sie uns gemeinsam Ihre Erfolgsgeschichte schreiben
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;