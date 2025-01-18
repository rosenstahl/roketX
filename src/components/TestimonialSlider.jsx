import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "Anfangs war ich skeptisch, ob ein externes Team unsere sehr speziellen Anforderungen verstehen würde. Nach dem ersten Workshop mit roketX war diese Sorge wie weggeblasen. Besonders gut fand ich, dass sie uns auch mal konstruktiv widersprochen haben - das hat am Ende zu einer viel besseren Lösung geführt.",
    name: "Lisa Burghardt",
    position: "Mitgründerin, BetterLife GmbH",
    award: "Gründerpreis Baden-Württemberg 2022",
  },
  {
    id: 2,
    content: "Als 40 Jahre altes Familienunternehmen taten wir uns schwer mit der Digitalisierung. Wir hatten schon zwei gescheiterte Projekte hinter uns, bevor wir roketX kennenlernten. Die haben erstmal in Ruhe zugehört und dann Schritt für Schritt mit uns einen Plan entwickelt. Klar gab's auch mal Rückschläge, aber heute läuft unser digitales Bestellsystem einwandfrei.",
    name: "Frank Weber",
    position: "Geschäftsführer, Weber & Söhne Metallbau",
    award: null,
  },
  {
    id: 3,
    content: "roketX hat für uns die Patientenverwaltung modernisiert. Was andere als 'unmöglich' bezeichnet haben, haben sie gelöst. Klar, manchmal mussten wir etwas länger auf Rückmeldungen warten wenn sie viel zu tun hatten - aber das macht die Top-Qualität der Arbeit mehr als wett.",
    name: "Ingridt Lose",
    position: "Leiterin Digitales, Praxisgemeinschaft Schmidt & Partner",
    award: null,
  },
  {
    id: 4,
    content: "Nach 6 Monaten Zusammenarbeit kann ich sagen: Die Investition hat sich gelohnt. Unser neues CRM-System spart dem Team täglich mindestens 2 Stunden Arbeitszeit. Was mir besonders gefällt: Die Kollegen von roketX sind auch nach dem Go-live noch erreichbar, wenn mal was klemmt.",
    name: "Yusuf Karadas",
    position: "Geschäftsführer, TechVision GmbH",
    award: "Innovationspreis der Wirtschaft 2023",
  },
  {
    id: 5,
    content: "Endlich mal ein IT-Dienstleister, der nicht in Fachchinesisch spricht! Das Team hat es geschafft, uns komplexe Themen so zu erklären, dass auch unsere nicht-technischen Mitarbeiter alles verstanden haben. Das neue Intranet wurde dadurch von Allen super angenommen - und das will bei 200 Mitarbeitern erst mal was heißen!",
    name: "Marina Kovač",
    position: "Teamleiterin Kommunikation, InnoSpace",
    award: null,
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    setNextIndex((currentIndex + 1) % testimonials.length);
  }, [currentIndex]);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Erfahren Sie, wie wir unseren Kunden dabei helfen, ihre digitale Transformation erfolgreich zu gestalten
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center min-h-[420px] mx-auto max-w-[1200px]">
            {testimonials.map((testimonial, idx) => {
              let position = idx - currentIndex;
              if (position < -2) position += testimonials.length;
              if (position > 2) position -= testimonials.length;
              
              const isCenter = position === 0;
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={testimonial.id}
                  animate={{
                    x: `${position * 110}%`,
                    scale: isCenter ? 1 : 0.8,
                    opacity: isCenter ? 1 : 0.3,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className={`absolute w-full max-w-2xl transform ${
                    isCenter ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  onClick={() => !isCenter && setCurrentIndex(idx)}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-12 backdrop-blur-xl">
                    <div className="space-y-8">
                      <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h3 className="text-2xl font-semibold text-gray-900">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-500 font-medium">
                              {testimonial.position}
                            </p>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        {testimonial.award && (
                          <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full">
                            <div className="w-4 h-4">
                              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary">
                                <path d="M12 15l-2 4h4l-2-4z" fill="currentColor" />
                                <circle cx="12" cy="8" r="6" fill="currentColor" />
                              </svg>
                            </div>
                            <span className="text-sm text-primary font-semibold">
                              {testimonial.award}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="relative">
                        <svg className="absolute -top-4 -left-4 w-8 h-8 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-600 leading-relaxed text-lg font-light italic">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors z-30 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors z-30 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-16 gap-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 bg-primary shadow-sm' 
                  : index === nextIndex
                    ? 'w-6 bg-primary/30'
                    : 'w-3 bg-gray-200'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;