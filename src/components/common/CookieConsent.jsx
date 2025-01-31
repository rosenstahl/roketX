import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { H3, H4, BodyText, SmallText } from '@/components/common/Typography';
import Button from '@/components/ui/Button';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasConsent = localStorage.getItem('cookieConsent');
      if (!hasConsent) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('analytics', 'true');
    localStorage.setItem('marketing', 'true');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('analytics', 'false');
    localStorage.setItem('marketing', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-gray-900 to-transparent"
      role="alertdialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <ScrollAnimation direction="up">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4 border-b border-gray-100 pb-4">
              <H3 id="cookie-title" className="text-gray-900">
                🍪 Cookie-Einstellungen
              </H3>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <BodyText id="cookie-desc" className="text-gray-600">
                Wir nutzen Cookies, um Ihr Nutzungserlebnis zu verbessern und unsere Dienste 
                optimal für Sie zu gestalten. Einige sind technisch notwendig, andere helfen 
                uns, die Website und unsere Angebote für Sie zu optimieren. Weitere Informationen 
                finden Sie in unserer{' '}
                <Link to="/datenschutz" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </BodyText>

              {showDetails && (
                <div className="mt-4 space-y-6 bg-gray-50 rounded-lg p-6">
                  <div>
                    <H4 className="text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">📋</span> Notwendige Cookies
                    </H4>
                    <SmallText className="text-gray-600">
                      Diese Cookies sind für den Betrieb der Website unerlässlich und können 
                      nicht deaktiviert werden. Sie speichern keine persönlichen Daten.
                    </SmallText>
                  </div>

                  <div>
                    <H4 className="text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">📊</span> Analyse Cookies
                    </H4>
                    <SmallText className="text-gray-600">
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                    </SmallText>
                  </div>

                  <div>
                    <H4 className="text-gray-900 mb-2 flex items-center">
                      <span className="mr-2">🎯</span> Marketing Cookies
                    </H4>
                    <SmallText className="text-gray-600">
                      Werden verwendet, um Besuchern relevante Werbung und Marketing-Kampagnen 
                      anbieten zu können.
                    </SmallText>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAcceptAll}
                  variant="primary"
                  size="large"
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={handleAcceptNecessary}
                  variant="secondary"
                  size="large"
                  className="shadow hover:shadow-lg transition-shadow"
                >
                  Nur notwendige
                </Button>
              </div>

              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="text"
                className="text-gray-500 hover:text-gray-700"
              >
                {showDetails ? 'Details ausblenden ↑' : 'Details anzeigen ↓'}
              </Button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default CookieConsent;