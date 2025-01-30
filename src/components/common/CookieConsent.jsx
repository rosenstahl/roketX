import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { H3, H4, BodyText, SmallText } from '@/components/common/Typography';
import Button from '@/components/ui/Button';
import { GlassEffect } from '@/components/ui/GlassEffect';
import { ScrollAnimation } from '@/components/ui/ScrollAnimation';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Prüfe nach kurzer Verzögerung, ob Cookies bereits akzeptiert wurden
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
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      role="alertdialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <ScrollAnimation direction="up">
        <GlassEffect className="max-w-4xl mx-auto relative">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <H3 id="cookie-title" className="text-white">
                🍪 Cookie-Einstellungen
              </H3>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <BodyText id="cookie-desc" className="text-gray-300">
                Wir nutzen Cookies, um Ihr Nutzungserlebnis zu verbessern und unsere Dienste 
                optimal für Sie zu gestalten. Einige sind technisch notwendig, andere helfen 
                uns, die Website und unsere Angebote für Sie zu optimieren. Weitere Informationen 
                finden Sie in unserer{' '}
                <Link to="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </BodyText>

              {showDetails && (
                <div className="mt-4 space-y-4 bg-white/5 rounded-lg p-4">
                  <div>
                    <H4 className="text-white mb-2">
                      📋 Notwendige Cookies
                    </H4>
                    <SmallText className="text-gray-400">
                      Diese Cookies sind für den Betrieb der Website unerlässlich und können 
                      nicht deaktiviert werden. Sie speichern keine persönlichen Daten.
                    </SmallText>
                  </div>

                  <div>
                    <H4 className="text-white mb-2">
                      📊 Analyse Cookies
                    </H4>
                    <SmallText className="text-gray-400">
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                    </SmallText>
                  </div>

                  <div>
                    <H4 className="text-white mb-2">
                      🎯 Marketing Cookies
                    </H4>
                    <SmallText className="text-gray-400">
                      Werden verwendet, um Besuchern relevante Werbung und Marketing-Kampagnen 
                      anbieten zu können.
                    </SmallText>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAcceptAll}
                  variant="primary"
                  size="large"
                >
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={handleAcceptNecessary}
                  variant="secondary"
                  size="large"
                >
                  Nur notwendige
                </Button>
              </div>

              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="text"
                className="text-gray-400 hover:text-white"
              >
                {showDetails ? 'Details ausblenden' : 'Details anzeigen'}
              </Button>
            </div>
          </div>
        </GlassEffect>
      </ScrollAnimation>
    </div>
  );
}

export default CookieConsent;