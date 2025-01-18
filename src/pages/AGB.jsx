// src/pages/AGB.jsx
import React from 'react';

const AGB = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background-light to-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">§1 Geltungsbereich und Anbieter</h2>
            <p className="mb-4">
              (1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Aufträge, Leistungen und Dienstleistungen zwischen der
              TREU Service GmbH - nachfolgend &quot;roketX&quot; genannt - und dem Kunden.
            </p>
            <p className="mb-4">
              TREU Service GmbH<br />
              Rheinische Straße 220<br />
              44147 Dortmund<br />
              Handelsregister: HRB 20627<br />
              Registergericht: Dortmund
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§2 Vertragsgegenstand</h2>
            <p className="mb-4">
              (1) RoketX bietet folgende Dienstleistungen an:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Start-up All-in-One</li>
              <li>Digital Transformation</li>
              <li>Brand Makeover</li>
              <li>Growth</li>
            </ul>
            <p className="mb-4">
              (2) Der genaue Umfang der Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung im Angebot.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§3 Vertragsschluss</h2>
            <p className="mb-4">
              (1) Die Darstellung der Dienstleistungen stellt kein rechtlich bindendes Angebot dar.
            </p>
            <p className="mb-4">
              (2) Nach Eingang einer Anfrage erstellt RoketX ein individuelles Angebot. Der Vertrag kommt durch die 
              Annahme des Angebots durch den Kunden zustande.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§4 Vergütung und Zahlungsbedingungen</h2>
            <p className="mb-4">
              (1) Die Vergütung richtet sich nach dem vereinbarten Paketpreis oder Stundensatz.
            </p>
            <p className="mb-4">
              (2) Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="mb-4">
              (3) Die Zahlung erfolgt per Überweisung und ist wie folgt fällig:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>50% der Vergütung bei Vertragsschluss</li>
              <li>50% nach Fertigstellung bzw. Abnahme</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§5 Leistungserbringung und Mitwirkungspflichten</h2>
            <p className="mb-4">
              (1) RoketX erbringt die vereinbarten Leistungen nach bestem Wissen und Gewissen.
            </p>
            <p className="mb-4">
              (2) Der Kunde ist verpflichtet, RoketX alle für die Leistungserbringung notwendigen Unterlagen und 
              Informationen rechtzeitig zur Verfügung zu stellen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§6 Abnahme</h2>
            <p className="mb-4">
              (1) Nach Fertigstellung der vereinbarten Leistungen wird der Kunde zur Abnahme aufgefordert.
            </p>
            <p className="mb-4">
              (2) Die Abnahme gilt als erfolgt, wenn der Kunde nicht innerhalb von 14 Tagen nach 
              Aufforderung zur Abnahme wesentliche Mängel schriftlich rügt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§7 Kündigung und Stornierung</h2>
            <p className="mb-4">
              (1) Der Vertrag kann von beiden Seiten mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.
            </p>
            <p className="mb-4">
              (2) Bei Stornierung durch den Kunden gelten folgende Stornierungsgebühren:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Bis 14 Tage vor Projektbeginn: 25% der Auftragssumme</li>
              <li>Bis 7 Tage vor Projektbeginn: 50% der Auftragssumme</li>
              <li>Danach: 75% der Auftragssumme</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§8 Gewährleistung und Haftung</h2>
            <p className="mb-4">
              (1) RoketX haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.
            </p>
            <p className="mb-4">
              (2) Die Haftung ist auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
            </p>
            <p className="mb-4">
              (3) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§9 Vertraulichkeit und Datenschutz</h2>
            <p className="mb-4">
              (1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten Informationen 
              vertraulich zu behandeln.
            </p>
            <p className="mb-4">
              (2) Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">§10 Schlussbestimmungen</h2>
            <p className="mb-4">
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mb-4">
              (2) Gerichtsstand für alle Streitigkeiten ist Dortmund.
            </p>
            <p className="mb-4">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen 
              Bestimmungen unberührt.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Stand: Januar 2024<br />
              TREU Service GmbH (RoketX)<br />
              Rheinische Straße 220, 44147 Dortmund
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AGB;