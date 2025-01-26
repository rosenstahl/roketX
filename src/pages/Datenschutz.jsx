import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cookie, ShieldAlert, UserCheck, Mail } from 'lucide-react';
import { H1, H2, BodyText } from '@/components/common/Typography';
import { GlassEffect } from '@/components/ui/GlassEffect';

const sections = [
  {
    title: "Verantwortliche Stelle",
    icon: UserCheck,
    color: "#FF7043",
    content: [
      "TREU Service GmbH",
      "Rheinische Straße 220",
      "44147 Dortmund",
      "Telefon: 0231 15044352",
      "E-Mail: info@roketx.de"
    ]
  },
  {
    title: "Grundlegendes",
    icon: FileText,
    color: "#007AFF",
    content: [
      "Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf unserer Website.",
      "Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen."
    ]
  },
  {
    title: "Cookies",
    icon: Cookie,
    color: "#00B27A",
    content: [
      "Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Ihr Browser greift auf diese Dateien zu.",
      "Wir verwenden folgende Arten von Cookies:",
      "- Technisch notwendige Cookies: Diese sind erforderlich, damit die grundlegenden Funktionen der Website ordnungsgemäß funktionieren.",
      "- Präferenz-Cookies: Diese ermöglichen der Website, sich Informationen zu merken, die das Verhalten oder Aussehen der Website beeinflussen.",
      "Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert und einzeln über deren Annahme entscheiden oder die Annahme von Cookies generell ausschließen."
    ]
  },
  {
    title: "Social Media Plugins",
    icon: ShieldAlert,
    color: "#FF7043",
    content: [
      "Auf unserer Website sind Social Media Plugins von Instagram integriert. Wenn Sie eine Seite unserer Website aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Instagram her.",
      "Instagram erhält dadurch die Information, dass Sie die entsprechende Seite unseres Internetauftritts aufgerufen haben. Wenn Sie zum Zeitpunkt des Besuchs in Ihrem Instagram-Account eingeloggt sind, kann Instagram den Besuch Ihrem Konto zuordnen."
    ]
  },
  {
    title: "Ihre Rechte nach der DSGVO",
    icon: ShieldAlert,
    color: "#007AFF",
    content: [
      "Nach der DSGVO stehen Ihnen folgende Rechte zu:",
      "- Auskunftsrecht (Art. 15 DSGVO): Sie können Auskunft über Ihre verarbeiteten personenbezogenen Daten verlangen.",
      "- Recht auf Berichtigung (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer gespeicherten Daten verlangen.",
      "- Recht auf Löschung (Art. 17 DSGVO): Sie können die Löschung Ihrer gespeicherten Daten verlangen.",
      "- Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "- Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
      "- Widerspruchsrecht (Art. 21 DSGVO)",
      "- Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)"
    ]
  },
  {
    title: "Kontakt",
    icon: Mail,
    color: "#00B27A",
    content: [
      "Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an unseren Datenschutzbeauftragten:",
      "TREU Service GmbH",
      "Datenschutzbeauftragter",
      "Rheinische Straße 220",
      "44147 Dortmund",
      "E-Mail: info@roketx.de"
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

const Datenschutz = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#171614]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-12"
        >
          <H1 className="text-white mb-4 text-2xl">
            Datenschutzerklärung
          </H1>
          <BodyText className="text-white/80 text-sm">
            Informationen zum Datenschutz und zu Ihren Rechten
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

export default Datenschutz;
