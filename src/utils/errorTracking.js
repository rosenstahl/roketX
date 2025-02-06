// src/utils/errorTracking.js
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export const initErrorTracking = () => {
  if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      integrations: [new BrowserTracing()],
      environment: import.meta.env.VITE_APP_ENV,
      tracesSampleRate: 1.0,
    });
  }
};