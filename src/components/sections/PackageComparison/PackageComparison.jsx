import React from 'react';
import PackageCard from './PackageCard';

const packages = [
  {
    title: "Startup All-in-One",
    subtitle: "Ideal für Neugründungen und Entrepreneure",
    price: "ab 3499€",
    isPopular: true,
    features: [
      "Komplette Markenentwicklung",
      "Business Kommunikation",
      "Professionelle Geschäftsausstattung",
      "Umfassende digitale Präsenz"
    ]
  },
  {
    title: "Digital Transform",
    subtitle: "Ideal für etablierte, aber analog arbeitende Unternehmen",
    price: "ab 2999€",
    isPopular: false,
    features: [
      "Zukunfts-Check & Strategie",
      "Business Kommunikation",
      "Digitale Präsenz",
      "Social Media Transformation"
    ]
  },
  {
    title: "Brand Makeover",
    subtitle: "Ideal für Unternehmen in der Umbruchphase",
    price: "ab 2499€",
    isPopular: false,
    features: [
      "Brand Audit & Neupositionierung",
      "Corporate Design Refresh",
      "Geschäftsausstattung Refresh",
      "Digitale Modernisierung"
    ]
  },
  {
    title: "Growth",
    subtitle: "Ideal für wachstumsorientierte Firmen",
    price: "Auf Anfrage",
    isPopular: false,
    features: [
      "Wachstumsanalyse",
      "Marketing Acceleration",
      "Vertriebsausbau",
      "Digitale Skalierung"
    ]
  }
];

export const PackageComparison = () => {
  return (
    <section id="packages" className="package-comparison min-h-screen py-20 px-4 bg-base-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-h2-mobile md:text-h2 font-bold text-center mb-8">
          Ihr Weg zum Erfolg
        </h2>
        <p className="text-lead text-center mb-6 max-w-3xl mx-auto">
          Die perfekte Lösung für jeden Entwicklungsschritt Ihres Unternehmens
        </p>
        <p className="text-base text-center mb-16 max-w-3xl mx-auto text-support-gray">
          Von der Gründungsidee bis zur Marktführerschaft – wir begleiten Sie mit dem richtigen Paket zum Erfolg
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              {...pkg}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-support-gray mb-4">
            Unsicher, welches Paket das richtige für Sie ist?
          </p>
          <button className="bg-accent-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent-primary/90 transition-all">
            Kostenlose Erstberatung sichern
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;