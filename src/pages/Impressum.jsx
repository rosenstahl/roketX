import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Scale, User, Phone, Mail, Briefcase, FileText, Gavel, ShieldAlert, Copyright } from 'lucide-react';
import { H1, H2, BodyText } from '@/components/common/Typography';
import { GlassEffect } from '@/components/ui/GlassEffect';

const sections = [
  {
    title: "Angaben gemäß § 5 TMG",
    icon: Building2,
    color: "#FF7043",
    content: [
      "TREU Service GmbH",
      "Rheinische Straße 220",
      "44147 Dortmund"
    ]
  },
  {
    title: "Handelsregister",
    icon: Scale,
    color: "#007AFF",
    content: [
      "HRB 20627",
      "Registergericht: Dortmund"
    ]
  },
  {
    title: "Vertreten durch",
    icon: User,
    color: "#00B27A",
    content: [
      "Hasan Hüseyin Yilmaz",
      "Geschäftsführer"
    ]
  },
  {
    title: "Kontakt",
    icon: Phone,
    color: "#FF7043",
    content: [
      "Telefon: 0231 15044352",
      "E-Mail: info@roketx.de"
    ]
  },
  {
    title: "Umsatzsteuer-ID",
    icon: FileText,
    color: "#007AFF",
    content: [
      "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:",
      "DE362838091"
    ]
  },
  {
    title: "Berufsbezeichnung und berufsrechtliche Regelungen",
    icon: Briefcase,
    color: "#00B27A",
    content: [
      "Berufsbezeichnung: Handwerker",
      "Zuständige Kammer:",
      "Industrie-und Handelskammer zu Dortmund",
      "Märkische Str. 120",
      "44141 Dortmund",
      "Verliehen in: Deutschland"
    ]
  },
  {
    title: "Aufsichtsbehörde",
    icon: Gavel,
    color: "#FF7043",
    content: [
      "Stadt Dortmund",
      "Olpe 1",
      "44135 Dortmund"
    ]
  },
  {
    title: "Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO",
    icon: ShieldAlert,
    color: "#007AFF",
    content: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter https://ec.europa.eu/consumers/odr/ finden."
    ],
    hasLink: true
  },
  {
    title: "Urheberrecht",
    icon: Copyright,
    color: "#00B27A",
    content: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
    ]
  }
];

const Section = ({ data, index }) => {
  const IconComponent = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassEffect className="p-4 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/[0.02]">
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${data.color}20` }}
          >
            <IconComponent size={20} style={{ color: data.color }} />
          </motion.div>

          <div className="flex-1">
            <H2 className="text-white mb-3 text-lg">
              {data.title}
            </H2>
            <div className="space-y-1">
              {data.content.map((line, i) => (
                <BodyText
                  key={i}
                  className="text-white/80 text-sm"
                >
                  {line}
                  {data.hasLink && i === data.content.length - 1 && (
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary hover:underline ml-1"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  )}
                </BodyText>
              ))}
            </div>
          </div>
        </div>
      </GlassEffect>
    </motion.div>
  );
};

const Impressum = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#171614]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-12"
        >
          <H1 className="text-white mb-4 text-2xl">
            Impressum
          </H1>
          <BodyText className="text-white/80 text-sm">
            Rechtliche Informationen und Angaben zu unserem Unternehmen
          </BodyText>
        </motion.div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <Section
              key={section.title}
              data={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impressum;
