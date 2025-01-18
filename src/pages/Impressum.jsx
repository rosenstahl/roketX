// src/pages/Impressum.jsx
import React from 'react';

const Impressum = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background-light to-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-2">TREU Service GmbH</p>
            <p>Rheinische Straße 220</p>
            <p>44147 Dortmund</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Handelsregister</h2>
            <p>HRB 20627</p>
            <p>Registergericht: Dortmund</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
            <p>Hasan Hüseyin Yilmaz</p>
            <p>Geschäftsführer</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>Telefon: 0231 15044352</p>
            <p>E-Mail: info@roketx.de</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
            <p>DE362838091</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>Berufsbezeichnung: Handwerker</p>
            <p className="mt-2">Zuständige Kammer:</p>
            <p>Industrie-und Handelskammer zu Dortmund</p>
            <p>Märkische Str. 120</p>
            <p>44141 Dortmund</p>
            <p className="mt-2">Verliehen in: Deutschland</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Aufsichtsbehörde</h2>
            <p>Stadt Dortmund</p>
            <p>Olpe 1</p>
            <p>44135 Dortmund</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO</h2>
            <p className="mb-4">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a> finden.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und 
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impressum;