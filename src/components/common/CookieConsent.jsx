import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      role="alertdialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:p-6 z-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h2 id="cookie-title" className="text-lg font-semibold">
              Wir verwenden Cookies 🍪
            </h2>
            <p id="cookie-desc" className="text-muted-foreground">
              Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. 
              Weitere Informationen finden Sie in unserer{' '}
              <Link to="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Ablehnen
            </Button>
            <Button
              onClick={handleAccept}
              className="w-full sm:w-auto"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;