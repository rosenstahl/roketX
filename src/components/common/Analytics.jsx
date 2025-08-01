// src/components/common/Analytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Nur laden wenn Cookies akzeptiert wurden
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    
    if (!cookiesAccepted) return;

    // Google Analytics Script laden
    const script = document.createElement('script');
    // Get Google Analytics ID from window global (set by server)
    const gaId = window.__GOOGLE_ANALYTICS_ID__ || 'G-Q1RH9QSYP0';
    
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Google Analytics Konfiguration
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaId, {
      anonymize_ip: true, // DSGVO-konform
      cookie_domain: 'roketx.de',
      cookie_flags: 'SameSite=None;Secure'
    });

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Page View tracking bei Route-Änderungen
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    
    if (cookiesAccepted && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: location.pathname + location.search,
        page_location: window.location.href
      });
    }
  }, [location]);

  return null;
};

export default Analytics;