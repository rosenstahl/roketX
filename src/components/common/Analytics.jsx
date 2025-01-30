// src/components/common/Analytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics Script laden
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GOOGLE_ANALYTICS_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Google Analytics Konfiguration
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

    return () => {
      // Cleanup beim Unmount
      document.head.removeChild(script);
    };
  }, []);

  // Page View tracking bei Route-Änderungen
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;