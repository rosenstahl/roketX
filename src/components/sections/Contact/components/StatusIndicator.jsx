import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { BodyText } from '@/components/common/Typography';

const pulseAnimation = {
  scale: [1, 1.1, 1],
  opacity: [0.5, 1, 0.5],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export function StatusIndicator({ className = '' }) {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const dayOfWeek = now.getDay();
  
  const isBusinessDay = dayOfWeek >= 1 && dayOfWeek <= 5;
  const isBusinessHours = hour >= 9 && hour < 17;
  const isAvailable = isBusinessDay && isBusinessHours;
  
  // Berechne nächste Verfügbarkeit
  const getNextAvailability = () => {
    if (!isBusinessDay || hour >= 17) {
      if (dayOfWeek === 5) {
        return "am Montag ab 9:00 Uhr";
      } else if (dayOfWeek === 6) {
        return "am Montag ab 9:00 Uhr";
      } else {
        return "morgen ab 9:00 Uhr";
      }
    }
    if (hour < 9) {
      return "heute ab 9:00 Uhr";
    }
    return "morgen ab 9:00 Uhr";
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <motion.div 
        initial={false}
        animate={isAvailable ? pulseAnimation : {}}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full text-sm
          ${isAvailable 
            ? 'bg-green-50 text-green-600' 
            : 'bg-main-tertiary/5 text-main-tertiary'
          }
        `}
      >
        <span className={`
          w-2 h-2 rounded-full
          ${isAvailable ? 'bg-green-500' : 'bg-main-tertiary'}
        `} />
        <span className="font-medium">
          {isAvailable ? 'Jetzt verfügbar' : 'Nicht verfügbar'}
        </span>
      </motion.div>

      <div className="flex items-center gap-2 px-4 py-2 bg-main-tertiary/5 rounded-full">
        <Clock size={14} className="text-accent-primary" />
        <BodyText className="text-sm">
          Mo-Fr, 9-17 Uhr
        </BodyText>
      </div>

      {!isAvailable && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm text-main-tertiary"
        >
          Wieder verfügbar {getNextAvailability()}
        </motion.div>
      )}
    </div>
  );
}

export default StatusIndicator;