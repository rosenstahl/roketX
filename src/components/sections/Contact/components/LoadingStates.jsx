import { motion } from 'framer-motion';
import { BodyText } from '@/components/common/Typography';
import { Calendar, FileText } from 'lucide-react';

const LoadingContainer = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center justify-center py-12 space-y-4"
  >
    {children}
  </motion.div>
);

const LoadingSpinner = ({ color = "accent-primary" }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    className={`w-8 h-8 border-2 border-${color} border-t-transparent rounded-full`}
  />
);

export const CalendlyLoader = () => (
  <LoadingContainer>
    <div className="p-3 bg-accent-primary/10 rounded-xl mb-4">
      <Calendar size={24} className="text-accent-primary" />
    </div>
    <LoadingSpinner />
    <BodyText className="text-main-tertiary animate-pulse">
      Kalender wird geladen...
    </BodyText>
  </LoadingContainer>
);

export const FormLoader = () => (
  <LoadingContainer>
    <div className="p-3 bg-accent-primary/10 rounded-xl mb-4">
      <FileText size={24} className="text-accent-primary" />
    </div>
    <LoadingSpinner />
    <BodyText className="text-main-tertiary animate-pulse">
      Formular wird vorbereitet...
    </BodyText>
  </LoadingContainer>
);