import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { H3, H4, BodyText } from '@/components/common/Typography';
import  Button  from '@/components/ui/Button';
import { packages } from '@/components/sections/PackageComparison/packageData';

// Input & Textarea Komponenten
const FormInput = ({ label, error, className = '', ...props }) => (
  <div className={className}>
    <label className="block text-main-tertiary text-sm font-medium mb-2">
      {label}
    </label>
    <input
      className={`
        w-full bg-white border-2 transition-all duration-200
        ${error ? 'border-red-500' : 'border-main-tertiary/10'}
        rounded-xl px-4 py-3 text-main-secondary placeholder-main-tertiary/50
        focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary
      `}
      {...props}
    />
    {error && (
      <motion.p 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="mt-1 text-sm text-red-500"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const FormTextarea = ({ label, error, className = '', ...props }) => (
  <div className={className}>
    <label className="block text-main-tertiary text-sm font-medium mb-2">
      {label}
    </label>
    <textarea
      className={`
        w-full bg-white border-2 transition-all duration-200
        ${error ? 'border-red-500' : 'border-main-tertiary/10'}
        rounded-xl px-4 py-3 text-main-secondary placeholder-main-tertiary/50
        focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary
        min-h-[120px] resize-y
      `}
      {...props}
    />
    {error && (
      <motion.p 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="mt-1 text-sm text-red-500"
      >
        {error}
      </motion.p>
    )}
  </div>
);

// Package Option Komponente
const PackageOption = ({ pkg, isSelected, onSelect }) => {
  const descriptions = {
    startup: 'Ideal für Neugründungen und Entrepreneure',
    digital: 'Ideal für etablierte, aber analog arbeitende Unternehmen',
    makeover: 'Ideal für Unternehmen in der Umbruchphase',
    growth: 'Ideal für wachstumsorientierte Firmen'
  };

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full p-4 rounded-xl text-left transition-all duration-300 border 
        group overflow-hidden
        ${isSelected 
          ? 'bg-white border-2 shadow-sm' 
          : 'bg-white hover:border-main-tertiary/30 border-main-tertiary/10'
        }
      `}
      style={{
        borderColor: isSelected ? pkg.color : undefined
      }}
    >
      {/* Subtle Gradient Background */}
      {isSelected && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `linear-gradient(45deg, ${pkg.color}22, transparent)`
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <H4 className={`
            font-semibold text-base transition-colors duration-300
            ${isSelected ? 'text-main-secondary' : 'text-main-secondary/80'}
          `}>
            {pkg.title}
          </H4>
          {pkg.isPopular && (
            <span className="px-2 py-0.5 text-xs font-medium bg-accent-primary/10 text-accent-primary rounded-full">
              Beliebt
            </span>
          )}
        </div>

        <BodyText className={`
          text-sm transition-colors duration-300
          ${isSelected ? 'text-main-tertiary' : 'text-main-tertiary/70'}
        `}>
          {descriptions[pkg.id]}
        </BodyText>
      </div>

      {/* Selected Indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3"
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: pkg.color }}
          />
        </motion.div>
      )}
    </motion.button>
  );
};
// Success State Component
const SuccessState = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="py-12 px-8 text-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-primary/10 flex items-center justify-center"
    >
      <Check className="w-8 h-8 text-accent-primary" />
    </motion.div>
    <H3 className="text-main-secondary mb-4">
      Nachricht erfolgreich gesendet!
    </H3>
    <BodyText className="text-main-tertiary">
      Wir werden uns schnellstmöglich bei Ihnen melden.
    </BodyText>
  </motion.div>
);

// Hauptkomponente
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name ist erforderlich';
    if (!formData.email) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    if (!formData.message) newErrors.message = 'Nachricht ist erforderlich';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      // Hier würde der API-Call kommen
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (error) {
      setErrors({ submit: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <SuccessState />;
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-6">
      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Ihr Name"
          error={errors.name}
          required
        />
        <FormInput
          label="E-Mail"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="ihre@email.de"
          error={errors.email}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="Telefon (optional)"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="+49"
        />
        <FormInput
          label="Unternehmen (optional)"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          placeholder="Ihr Unternehmen"
        />
      </div>

      {/* Package Selection */}
      <div>
        <label className="block text-main-tertiary text-sm font-medium mb-3">
          Interessiertes Paket
        </label>
        <div className="grid md:grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <PackageOption
              key={pkg.id}
              pkg={pkg}
              isSelected={formData.package === pkg.id}
              onSelect={() => setFormData({...formData, package: pkg.id})}
            />
          ))}
        </div>
      </div>

      {/* Message */}
      <FormTextarea
        label="Ihre Nachricht"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Fragen..."
        error={errors.message}
        required
      />

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          className="min-w-[200px]"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              Wird gesendet...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Nachricht senden
              <Send size={16} />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}