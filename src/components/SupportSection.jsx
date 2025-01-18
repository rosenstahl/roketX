// src/components/SupportSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Headphones, Zap } from 'lucide-react';

const SupportSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Support & Garantie
          </h2>
          <p className="text-gray-600">
            Umfassender Support und Qualitätsgarantien für Ihren Erfolg
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Rundum-Sorglos Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-lg mr-3">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Rundum-Sorglos</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Persönlicher Ansprechpartner</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Komplette Einrichtung</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>3h Grundlagen-Training</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>30 Tage Betreuung</span>
              </li>
            </ul>
          </motion.div>

          {/* Premium Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-lg mr-3">
                <Headphones className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Premium Support</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Reaktionszeit unter 24h</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Remote-Support</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Notfall-Hotline</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Regelmäßige Updates</span>
              </li>
            </ul>
          </motion.div>

          {/* Garantien */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-lg mr-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Garantien</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>30 Tage Geld-zurück</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>99.9% Verfügbarkeit</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>DSGVO-konform</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Regelmäßige Backups</span>
              </li>
            </ul>
          </motion.div>

          {/* Optional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-lg mr-3">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Optional</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Extra Schulungen</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Content-Erstellung</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>SEO-Optimierung</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                <span>Marketing-Beratung</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;