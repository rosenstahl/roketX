// src/components/sections/Contact/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const packages = [
  {
    id: 1,
    name: "Startup All-in-One",
    description: "Von der Idee zur Marke – Alles, was Gründer brauchen.",
    icon: "🚀"
  },
  {
    id: 2,
    name: "Digital Transformation",
    description: "Machen Sie Ihr Unternehmen digital fit und zukunftssicher.",
    icon: "💻"
  },
  {
    id: 3,
    name: "Brand Makeover",
    description: "Ein frischer Look für mehr Sichtbarkeit und Umsatz.",
    icon: "✨"
  },
  {
    id: 4,
    name: "Growth",
    description: "Strategien für schnelles Wachstum und neue Märkte.",
    icon: "📈"
  }
];

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative w-full min-h-screen bg-base-primary py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-3xl -top-48 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-['SF_Pro_Display'] font-bold text-[36px] md:text-[48px] text-main-secondary mb-4">
            Gemeinsam zum Erfolg
          </h2>
          <p className="font-['Inter'] text-[18px] md:text-[20px] text-main-tertiary max-w-2xl mx-auto">
            Paket wählen und sofort durchstarten!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center 
                  ${step >= number ? 'bg-accent-primary text-white' : 'bg-support-lightGray text-main-tertiary'}
                `}>
                  {number}
                </div>
                {number < 3 && (
                  <div className={`
                    w-full h-1 mx-2
                    ${step > number ? 'bg-accent-primary' : 'bg-support-lightGray'}
                  `} />
                )}
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-['SF_Pro_Display'] font-semibold text-2xl text-main-secondary mb-6">
                    Wählen Sie Ihr Paket
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`
                          p-6 rounded-xl cursor-pointer transition-all duration-300
                          ${selectedPackage === pkg.id ? 'bg-accent-primary/10 border-2 border-accent-primary' : 'bg-base-tertiary hover:bg-accent-primary/5'}
                        `}
                      >
                        <span className="text-2xl mb-2 block">{pkg.icon}</span>
                        <h4 className="font-['SF_Pro_Display'] font-semibold text-lg text-main-secondary mb-2">
                          {pkg.name}
                        </h4>
                        <p className="text-main-tertiary text-sm">
                          {pkg.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      onClick={handleNext}
                      disabled={!selectedPackage}
                      className="px-8 py-4 bg-accent-primary text-white rounded-lg font-['SF_Pro_Display'] font-semibold hover:bg-accent-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Weiter
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-['SF_Pro_Display'] font-semibold text-2xl text-main-secondary mb-6">
                    Ihre Kontaktdaten
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-main-secondary mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-support-lightGray focus:border-accent-primary outline-none"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-main-secondary mb-2">E-Mail</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-support-lightGray focus:border-accent-primary outline-none"
                        placeholder="ihre@email.de"
                      />
                    </div>
                    <div>
                      <label className="block text-main-secondary mb-2">Telefon (optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-support-lightGray focus:border-accent-primary outline-none"
                        placeholder="+49"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={handleBack}
                      className="px-8 py-4 border border-support-lightGray text-main-secondary rounded-lg font-['SF_Pro_Display'] font-semibold hover:bg-support-lightGray/10 transition-all duration-300"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email}
                      className="px-8 py-4 bg-accent-primary text-white rounded-lg font-['SF_Pro_Display'] font-semibold hover:bg-accent-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Weiter
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-['SF_Pro_Display'] font-semibold text-2xl text-main-secondary mb-6">
                    Zusätzliche Informationen
                  </h3>
                  <div>
                    <label className="block text-main-secondary mb-2">Ihre Nachricht (optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-support-lightGray focus:border-accent-primary outline-none min-h-[150px]"
                      placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Fragen..."
                    />
                  </div>
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={handleBack}
                      className="px-8 py-4 border border-support-lightGray text-main-secondary rounded-lg font-['SF_Pro_Display'] font-semibold hover:bg-support-lightGray/10 transition-all duration-300"
                    >
                      Zurück
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-4 bg-accent-primary text-white rounded-lg font-['SF_Pro_Display'] font-semibold hover:bg-accent-primary/90 transition-all duration-300"
                    >
                      Absenden
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;