// Simplified error tracking without Sentry dependency
export const initErrorTracking = () => {
  // Simple console-based error tracking for Netcup deployment
  console.log('Error tracking initialized (console mode)');
};

export const trackError = (error, context = {}) => {
  console.error('Error:', error, 'Context:', context);
  
  // Send to server for logging (optional)
  if (typeof window !== 'undefined') {
    try {
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'error',
          data: {
            message: error.message || String(error),
            stack: error.stack,
            context,
            timestamp: new Date().toISOString(),
            url: window.location.href
          }
        })
      }).catch(() => {}); // Silent fail
    } catch (e) {
      // Silent fail
    }
  }
};