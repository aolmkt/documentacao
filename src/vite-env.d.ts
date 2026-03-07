/// <reference types="vite/client" />

interface Window {
  trackEvent: (name: string, data?: Record<string, unknown>) => void;
  trackingData: { external_id: string };
}
