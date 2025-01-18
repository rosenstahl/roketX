// src/pages/Datenschutz.jsx
import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background-light to-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortliche Stelle</h2>
            <p className="mb-4">
              TREU Service GmbH<br />
              Rheinische Straße 220<br />
              44147 Dortmund<br />
              Telefon: 0231 15044352<br />
              E-Mail: info@roketx.de
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Grundlegendes</h2>
            <p className="mb-4">
              Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen 
              Daten auf unserer Website. Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder 
              identifizierbare natürliche Person beziehen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
            <p className="mb-4">
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät 
              gespeichert werden. Ihr Browser greift auf diese Dateien zu. Wir verwenden folgende Arten von Cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Technisch notwendige Cookies:</strong> Diese sind erforderlich, damit die grundlegenden 
                Funktionen der Website ordnungsgemäß funktionieren.
              </li>
              <li>
                <strong>Präferenz-Cookies:</strong> Diese ermöglichen der Website, sich Informationen zu merken, 
                die das Verhalten oder Aussehen der Website beeinflussen.
              </li>
            </ul>
            <p className="mt-4">
              Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert und einzeln 
              über deren Annahme entscheiden oder die Annahme von Cookies generell ausschließen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Social Media Plugins</h2>
            <p className="mb-4">
              Auf unserer Website sind Social Media Plugins von Instagram integriert. Wenn Sie eine Seite unserer Website 
              aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von 
              Instagram her.
            </p>
            <p className="mb-4">
              Instagram erhält dadurch die Information, dass Sie die entsprechende Seite unseres Internetauftritts 
              aufgerufen haben. Wenn Sie zum Zeitpunkt des Besuchs in Ihrem Instagram-Account eingeloggt sind, kann 
              Instagram den Besuch Ihrem Konto zuordnen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte nach der DSGVO</h2>
            <p className="mb-4">Nach der DSGVO stehen Ihnen folgende Rechte zu:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre verarbeiteten 
                personenbezogenen Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder 
                die Vervollständigung Ihrer gespeicherten Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer gespeicherten 
                Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong>
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong>
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO)</strong>
              </li>
              <li>
                <strong>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</strong>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Kontakt</h2>
            <p className="mb-4">
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt 
              an unseren Datenschutzbeauftragten:
            </p>
            <p>
              TREU Service GmbH<br />
              Datenschutzbeauftragter<br />
              Rheinische Straße 220<br />
              44147 Dortmund<br />
              E-Mail: info@roketx.de
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Stand: Januar 2024
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;