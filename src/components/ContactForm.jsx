import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    email: '',
    details: ''
  });

  const serviceOptions = [
    { id: 'startup', name: 'Startup All-in-One', description: 'Von der Idee zur Marke – Alles, was Gründer brauchen.' },
    { id: 'digital', name: 'Digital Transformation', description: 'Machen Sie Ihr Unternehmen digital fit und zukunftssicher.' },
    { id: 'makeover', name: 'Brand Makeover', description: 'Ein frischer Look für mehr Sichtbarkeit und Umsatz.' },
    { id: 'growth', name: 'Growth', description: 'Strategien für schnelles Wachstum und neue Märkte.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">
          Gemeinsam zum Erfolg
          <br />
          <span className="text-gray-400">Paket wählen und</span>
          <br />
          <span className="text-primary"> sofort durchstarten! </span>
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div className="space-y-2">
            <p className="text-2xl">
              Mein Name ist{' '}
              <input
                type="text"
                name="name"
                className="border-b border-gray-300 focus:border-primary px-2 outline-none"
                placeholder="Vor- und Nachname"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {' '}und ich interessiere mich für:
            </p>
          </div>

          {/* Service Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFormData({...formData, service: option.id})}
                className={`p-6 rounded-xl text-left transition-all ${
                  formData.service === option.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <h3 className="font-bold mb-2">{option.name}</h3>
                <p className={`text-sm ${
                  formData.service === option.id ? 'text-white/80' : 'text-gray-600'
                }`}>{option.description}</p>
              </button>
            ))}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <p className="text-2xl">
            Sie erreichen mich unter{' '}
              <input
                type="email"
                name="email"
                className="border-b border-gray-300 focus:border-primary px-2 outline-none"
                placeholder="ihre@email.de"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </p>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <p className="text-2xl">
              Optional:{' '}
              <input
                type="text"
                name="details"
                className="border-b border-gray-300 focus:border-primary px- outline-none"
                placeholder="Projektbeschreibung"
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
              />
            </p>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-2"
          >
            Jetzt starten und Erfolg sichern
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;