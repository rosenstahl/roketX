// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const budgetOptions = [
  "Bis 10.000€",
  "10.000€ bis 25.000€",
  "25.000€ bis 50.000€",
  "Über 50.000€",
  "Noch nicht festgelegt"
];

const ContactForm = () => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    goal: '',
    deadline: '',
    details: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kommt später die Submit-Logik
    console.log(formData, selectedBudget);
  };

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-2">
            Let&apos;s start a project
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Erzählen Sie uns von Ihrer Vision, wir machen sie zur Realität.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Hi! Mein Name ist</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">und ich arbeite bei</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Ich suche Unterstützung bei</label>
                <input
                  type="text"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Mit einem geplanten Abschluss bis</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Budget */}
              <div className="relative">
                <label className="block text-sm text-gray-400 mb-1">Mein Budget liegt bei etwa</label>
                <button
                  type="button"
                  onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors text-left flex justify-between items-center"
                >
                  <span className={selectedBudget ? 'text-gray-900' : 'text-gray-400'}>
                    {selectedBudget || 'Budget auswählen'}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showBudgetDropdown ? 'transform rotate-180' : ''}`} />
                </button>
                
                {showBudgetDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none transition-colors"
                        onClick={() => {
                          setSelectedBudget(option);
                          setShowBudgetDropdown(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Sie erreichen mich unter</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Weitere Details zu meinem Projekt</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Anfrage senden
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;