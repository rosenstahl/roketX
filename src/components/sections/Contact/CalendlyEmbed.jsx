import { useEffect, useState } from 'react';
import { H3, BodyText } from '@/components/common/Typography';
import { motion } from 'framer-motion';
import { Globe, Clock, ChevronLeft } from 'lucide-react';
import  Button  from '@/components/ui/Button';

export default function CalendlyEmbed({ onBack }) {
  const [timezone, setTimezone] = useState('');
  const [loading, setLoading] = useState(true);

  // Zeitzonen-Erkennung
  useEffect(() => {
    try {
      const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const formatter = new Intl.DateTimeFormat(undefined, {
        timeZoneName: 'long',
        timeZone: detectedTimezone
      });
      const formattedZone = formatter.formatToParts()
        .find(part => part.type === 'timeZoneName')?.value || detectedTimezone;
      
      setTimezone(formattedZone);
    } catch (error) {
      console.error('Fehler bei der Zeitzonen-Erkennung:', error);
      setTimezone('Europe/Berlin');
    }
  }, []);

  // Calendly laden
  useEffect(() => {
    if (typeof window !== 'undefined' && timezone) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        setLoading(false);
        // Calendly Widget initialisieren
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/hasanyilmaz1811/roketx',
          parentElement: document.getElementById('calendlyEmbed'),
          prefill: {
            email: '',
            firstName: '',
            lastName: '',
            customAnswers: {
              a1: timezone // Zeitzone als benutzerdefinierte Antwort übergeben
            }
          },
          utm: {
            utmSource: 'website',
            utmMedium: 'contact_page',
            utmCampaign: 'consultation'
          }
        });
      };

      return () => {
        document.body.removeChild(script);
        // Calendly Widget bereinigen
        if (window.Calendly) {
          window.Calendly.destroyBadge();
        }
      };
    }
  }, [timezone]);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <H3 className="text-main-secondary mb-3">
          Vereinbaren Sie einen Termin
        </H3>
        <BodyText className="text-main-tertiary mb-6">
          30 Minuten kostenlose Erstberatung
        </BodyText>
        
        {/* Timezone Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-main-tertiary/5 rounded-full text-sm text-main-tertiary"
        >
          <Globe size={14} className="text-accent-primary" />
          <span>Ihre Zeitzone: {timezone || 'Wird erkannt...'}</span>
        </motion.div>
      </div>

      {/* Loading State */}
      {loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 space-y-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full"
          />
          <BodyText className="text-main-tertiary animate-pulse">
            Kalender wird geladen...
          </BodyText>
        </motion.div>
      )}

      {/* Calendly Embed */}
      <div 
  id="calendlyEmbed"
  className={`transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
  style={{ height: '100vh', width: '100%' }}
/>


      {/* Navigation */}
      <div className="mt-6">
        <Button onClick={onBack} variant="ghost" type="button" className="mt-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Zurück zur Übersicht
        </Button>
      </div>

      {/* Time Slots Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-main-tertiary/5 rounded-xl"
      >
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-main-secondary mb-1">
              Verfügbare Zeitfenster
            </p>
            <p className="text-sm text-main-tertiary">
              Montag - Freitag, 9:00 - 17:00 Uhr
              {timezone && timezone !== 'Europe/Berlin' && ' (Ihre lokale Zeit)'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}