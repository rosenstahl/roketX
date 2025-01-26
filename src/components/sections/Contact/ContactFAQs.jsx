import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Calendar, FileText } from 'lucide-react';
import { H3, BodyText } from '@/components/common/Typography';

const faqGroups = {
  general: {
    icon: MessageCircle,
    title: 'Allgemeine Fragen',
    items: [
      {
        q: 'Wie läuft die erste Kontaktaufnahme ab?',
        a: 'Nach Ihrer Anfrage melden wir uns innerhalb von 24 Stunden bei Ihnen. Bei der Terminbuchung können Sie direkt einen passenden Zeitpunkt für ein 30-minütiges Erstgespräch wählen.'
      },
      {
        q: 'In welchen Sprachen können wir kommunizieren?',
        a: 'Wir kommunizieren auf Deutsch und Englisch. Unsere Entwickler sprechen zusätzlich auch Türkisch.'
      }
    ]
  },
  meetings: {
    icon: Calendar,
    title: 'Termine & Verfügbarkeit',
    items: [
      {
        q: 'Wann sind Sie erreichbar?',
        a: 'Unsere Geschäftszeiten sind Montag bis Freitag von 9:00 bis 17:00 Uhr. In dringenden Fällen sind wir auch außerhalb dieser Zeiten per WhatsApp erreichbar.'
      },
      {
        q: 'Wie lange dauert ein Erstgespräch?',
        a: 'Das kostenlose Erstgespräch dauert 30 Minuten. Bei Bedarf können wir den Termin auch verlängern oder einen Folgetermin vereinbaren.'
      }
    ]
  },
  project: {
    icon: FileText,
    title: 'Projektanfragen',
    items: [
      {
        q: 'Welche Informationen benötigen Sie für ein Angebot?',
        a: 'Hilfreich sind: Projektumfang, Zeitrahmen, Budget-Vorstellung und spezielle Anforderungen. Je detaillierter, desto besser können wir ein passendes Angebot erstellen.'
      },
      {
        q: 'Wie schnell können Sie mit einem Projekt starten?',
        a: 'Die Startzeit variiert je nach aktuellem Projektaufkommen und Umfang Ihres Projekts. Typischerweise können wir innerhalb von 2-4 Wochen mit der Umsetzung beginnen.'
      }
    ]
  }
};

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <motion.div
    initial={false}
    animate={{ 
      backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
      transition: { duration: 0.2 }
    }}
    className="rounded-xl overflow-hidden"
  >
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 flex justify-between items-center text-left"
    >
      <span className={`
        font-medium transition-colors duration-200
        ${isOpen ? 'text-accent-primary' : 'text-main-secondary'}
      `}>
        {question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className={`
          flex-shrink-0 w-5 h-5
          ${isOpen ? 'text-accent-primary' : 'text-main-tertiary'}
        `}
      >
        <ChevronDown />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-6 pb-4">
            <BodyText className="text-main-tertiary">
              {answer}
            </BodyText>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function ContactFAQs() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (groupId, index) => {
    setOpenItems(prev => {
      const key = `${groupId}-${index}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  return (
    <div className="space-y-8">
      {Object.entries(faqGroups).map(([groupId, group]) => (
        <motion.div
          key={groupId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 rounded-2xl p-6 border border-white/10"
        >
          {/* Group Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/5 rounded-lg">
              <group.icon 
                size={20} 
                className="text-accent-primary"
              />
            </div>
            <H3 className="text-main-secondary">
              {group.title}
            </H3>
          </div>

          {/* FAQ Items */}
          <div className="space-y-2">
            {group.items.map((item, index) => (
              <FAQItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openItems[`${groupId}-${index}`]}
                onToggle={() => toggleItem(groupId, index)}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}