// src/utils/performance.js
export const measurePerformance = () => {
  if (window.performance && window.performance.mark) {
    // Wichtige Metriken
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');

    // Ergebnisse loggen (in Produktion an Analytics senden)
    console.info('Performance Metrics:', {
      DNS: navigation.domainLookupEnd - navigation.domainLookupStart,
      TLS: navigation.connectEnd - navigation.connectStart,
      TTFB: navigation.responseStart - navigation.requestStart,
      FCP: fcp ? fcp.startTime : null,
      Load: navigation.loadEventEnd - navigation.startTime
    });
  }
};

// Core Web Vitals Metriken
export const reportWebVitals = ({ name, value, id }) => {
  // In Produktion an Analytics senden
  if (window.__APP_ENV__ === 'production') {
    console.info(`Web Vital: ${name}`, { value, id });
  }
};