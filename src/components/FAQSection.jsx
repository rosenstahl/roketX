import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import PropTypes from 'prop-types';

const faqs = [
  {
    id: 1,
    question: "Was sind Ihre Kernleistungen als Unternehmensberatung?",
    answer: "Unsere Kernleistungen umfassen vier Hauptbereiche: Startup All-in-One für Neugründungen, Digital Transformation für die digitale Transformation bestehender Unternehmen, Brand Makeover für Neupositionierung und Growth für Unternehmen in der Wachstumsphase. Jedes Paket beinhaltet umfassende Leistungen von Markenentwicklung über Geschäftsausstattung bis hin zur digitalen Präsenz."
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
    answer: "Die Umsetzungsdauer variiert je nach Paket und Anforderungen. Als Richtwerte gelten: Startup-Paket 4-6 Wochen, Digital Transformation 8-12 Wochen, Brand Makeover 6-10 Wochen und Growth-Paket 10-14 Wochen. Der genaue Zeitplan wird individuell mit Ihnen abgestimmt."
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

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-start text-left group focus:outline-none"
      >
        <span className="text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <span className="ml-4 flex-shrink-0">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-full bg-primary/10 p-2"
          >
            {isOpen ? (
              <Minus className="h-6 w-6 text-primary" />
            ) : (
              <Plus className="h-6 w-6 text-primary" />
            )}
          </motion.div>
        </span>
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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pb-6 pr-12"
            >
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

FAQItem.propTypes = {
  faq: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HÄUFIG GESTELLTE FRAGEN
          </motion.p>
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Alles was Sie wissen müssen
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Finden Sie Antworten auf die wichtigsten Fragen rund um unsere Dienstleistungen
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Noch Fragen? Wir sind für Sie da.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark 
                     transition-colors shadow-lg shadow-primary/20"
          >
            Kontakt aufnehmen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;