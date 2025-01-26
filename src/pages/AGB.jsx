import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Briefcase, ShieldAlert, Gavel, ClipboardList, UserCheck, Mail } from 'lucide-react';
import { H1, H2, BodyText } from '@/components/common/Typography';
import { GlassEffect } from '@/components/ui/GlassEffect';

const sections = [
  {
    title: "§1 Geltungsbereich und Anbieter",
    icon: UserCheck,
    color: "#FF7043",
    content: [
      "(1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Aufträge, Leistungen und Dienstleistungen zwischen der TREU Service GmbH - nachfolgend 'roketX' genannt - und dem Kunden.",
      "TREU Service GmbH",
      "Rheinische Straße 220",
      "44147 Dortmund",
      "Handelsregister: HRB 20627",
      "Registergericht: Dortmund"
    ]
  },
  {
    title: "§2 Vertragsgegenstand",
    icon: Briefcase,
    color: "#007AFF",
    content: [
      "(1) RoketX bietet folgende Dienstleistungen an:",
      "- Start-up All-in-One",
      "- Digital Transformation",
      "- Brand Makeover",
      "- Growth",
      "(2) Der genaue Umfang der Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung im Angebot."
    ]
  },
  {
    title: "§3 Vertragsschluss",
    icon: Scale,
    color: "#00B27A",
    content: [
      "(1) Die Darstellung der Dienstleistungen stellt kein rechtlich bindendes Angebot dar.",
      "(2) Nach Eingang einer Anfrage erstellt RoketX ein individuelles Angebot. Der Vertrag kommt durch die Annahme des Angebots durch den Kunden zustande."
    ]
  },
  {
    title: "§4 Vergütung und Zahlungsbedingungen",
    icon: FileText,
    color: "#FF7043",
    content: [
      "(1) Die Vergütung richtet sich nach dem vereinbarten Paketpreis oder Stundensatz.",
      "(2) Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.",
      "(3) Die Zahlung erfolgt per Überweisung und ist wie folgt fällig:",
      "- 50% der Vergütung bei Vertragsschluss",
      "- 50% nach Fertigstellung bzw. Abnahme"
    ]
  },
  {
    title: "§5 Leistungserbringung und Mitwirkungspflichten",
    icon: ClipboardList,
    color: "#007AFF",
    content: [
      "(1) RoketX erbringt die vereinbarten Leistungen nach bestem Wissen und Gewissen.",
      "(2) Der Kunde ist verpflichtet, RoketX alle für die Leistungserbringung notwendigen Unterlagen und Informationen rechtzeitig zur Verfügung zu stellen."
    ]
  },
  {
    title: "§6 Abnahme",
    icon: Scale,
    color: "#00B27A",
    content: [
      "(1) Nach Fertigstellung der vereinbarten Leistungen wird der Kunde zur Abnahme aufgefordert.",
      "(2) Die Abnahme gilt als erfolgt, wenn der Kunde nicht innerhalb von 14 Tagen nach Aufforderung zur Abnahme wesentliche Mängel schriftlich rügt."
    ]
  },
  {
    title: "§7 Kündigung und Stornierung",
    icon: Gavel,
    color: "#FF7043",
    content: [
      "(1) Der Vertrag kann von beiden Seiten mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.",
      "(2) Bei Stornierung durch den Kunden gelten folgende Stornierungsgebühren:",
      "- Bis 14 Tage vor Projektbeginn: 25% der Auftragssumme",
      "- Bis 7 Tage vor Projektbeginn: 50% der Auftragssumme",
      "- Danach: 75% der Auftragssumme"
    ]
  },
  {
    title: "§8 Gewährleistung und Haftung",
    icon: ShieldAlert,
    color: "#007AFF",
    content: [
      "(1) RoketX haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.",
      "(2) Die Haftung ist auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.",
      "(3) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme."
    ]
  },
  {
    title: "§9 Vertraulichkeit und Datenschutz",
    icon: Mail,
    color: "#00B27A",
    content: [
      "(1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten Informationen vertraulich zu behandeln.",
      "(2) Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung."
    ]
  },
  {
    title: "§10 Schlussbestimmungen",
    icon: FileText,
    color: "#FF7043",
    content: [
      "(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.",
      "(2) Gerichtsstand für alle Streitigkeiten ist Dortmund.",
      "(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt."
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
                </BodyText>
              ))}
            </div>
          </div>
        </div>
      </GlassEffect>
    </motion.div>
  );
};

const AGB = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#171614]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-12"
        >
          <H1 className="text-white mb-4 text-2xl">
            Allgemeine Geschäftsbedingungen
          </H1>
          <BodyText className="text-white/80 text-sm">
            Die Rahmenbedingungen unserer Zusammenarbeit
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

export default AGB;
