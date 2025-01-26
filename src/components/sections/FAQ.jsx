import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { H2, LeadText, BodyText } from '@/components/common/Typography';
import Button from '@/components/ui/Button';
import { GlassEffect } from '@/components/ui/GlassEffect';

const faqs = [
  {
    id: 1,
    question: "Was sind Ihre Kernleistungen als Unternehmensberatung?",
    answer: "Unsere Kernleistungen umfassen vier Hauptbereiche: Startup All-in-One für Neugründungen, Digital Transform für die digitale Transformation bestehender Unternehmen, Makeover für Neupositionierung und Growth für Unternehmen in der Wachstumsphase. Jedes Paket beinhaltet umfassende Leistungen von Markenentwicklung über Geschäftsausstattung bis hin zur digitalen Präsenz."
  },
  {
    id: 2,
    question: "Was unterscheidet roketX von anderen Beratungsunternehmen?",
    answer: "Wir bieten einen ganzheitlichen Ansatz mit All-in-One Lösungen, die speziell auf die jeweilige Unternehmensphase zugeschnitten sind. Unser Alleinstellungsmerkmal ist die Kombination aus strategischer Beratung und praktischer Umsetzung - von der Markenentwicklung bis zur technischen Implementierung, alles aus einer Hand."
  },
  {
    id: 3,
    question: "Für welche Unternehmensgrößen sind Ihre Leistungen geeignet?",
    answer: "Unsere Leistungen sind sowohl für Startups und Einzelunternehmer als auch für etablierte mittelständische Unternehmen konzipiert. Die Pakete sind flexibel und können an Ihre spezifischen Bedürfnisse angepasst werden, unabhängig von der Unternehmensgröße."
  },
  {
    id: 4,
    question: "Wie läuft die Zusammenarbeit konkret ab?",
    answer: "Nach der Erstberatung und Paketauswahl erstellen wir einen detaillierten Projektplan. Sie erhalten einen persönlichen Ansprechpartner, der Sie durch den gesamten Prozess begleitet. Die Umsetzung erfolgt schrittweise nach unserem bewährten System, wobei Sie in alle wichtigen Entscheidungen eingebunden werden."
  },
  {
    id: 5,
    question: "Wie lange dauert die Umsetzung der verschiedenen Pakete?",
    answer: "Die Umsetzungsdauer variiert je nach Paket und Anforderungen. Als Richtwerte gelten: Startup-Paket 8-12 Wochen, Digital Transform 8-10 Wochen, Makeover 10-12 Wochen und Growth-Paket 10-14 Wochen. Der genaue Zeitplan wird individuell mit Ihnen abgestimmt."
  },
  {
    id: 6,
    question: "Wie flexibel sind die Pakete anpassbar?",
    answer: "Alle Pakete können modular angepasst werden. Wir analysieren Ihren spezifischen Bedarf und können Leistungen hinzufügen oder entfernen. Die Grundstruktur der Pakete gewährleistet dabei, dass alle wichtigen Bereiche abgedeckt sind."
  },
  {
    id: 7,
    question: "Wie sind die Kosten strukturiert und welche Zahlungsoptionen gibt es?",
    answer: "Die Preise variieren je nach Paket und individuellem Umfang. Wir bieten verschiedene Zahlungsmodelle an, von Einmalzahlungen bis hin zu flexiblen Ratenmodellen. In einem kostenlosen Erstgespräch erstellen wir Ihnen ein maßgeschneidertes Angebot."
  },
  {
    id: 8,
    question: "Welche technischen Services sind in den Paketen enthalten?",
    answer: "Alle Pakete beinhalten professionelles Hosting, SSL-Zertifikate, regelmäßige Backups und technischen Support. Die Mobile- und Kommunikationspakete umfassen All-Net-Flats und Datenvolumen. Updates und Wartung sind für 12 Monate inklusive."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      className="overflow-hidden"
    >
      <GlassEffect className="mb-4 overflow-hidden transition-all duration-300">
        <button
          onClick={onClick}
          className="w-full px-6 py-6 flex justify-between items-center text-left"
          aria-expanded={isOpen}
        >
          <BodyText className="font-semibold pr-8">
            {question}
          </BodyText>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-6 h-6 text-accent-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 6v12M6 12h12" 
              />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <BodyText className="px-6 pb-6">
                {answer}
              </BodyText>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassEffect>
    </motion.div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/kontakt');
  };

  return (
    <section className="relative py-24 bg-base-primary overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-tertiary opacity-40" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <H2 className="mb-4">
            Häufig gestellte Fragen
          </H2>
          <LeadText>
            Alles, was Sie über unsere Services wissen müssen
          </LeadText>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <LeadText className="mb-6">
            Keine Antwort auf Ihre Frage gefunden?
          </LeadText>
          <Button
            onClick={handleContactClick}
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

export default FAQ;