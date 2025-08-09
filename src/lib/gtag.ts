// src/lib/gtag.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

type ConsentState = 'granted' | 'denied';

interface GtagConfig {
  send_page_view?: boolean;
  page_path?: string;
  page_title?: string;
  user_id?: string;
  currency?: string;
  debug_mode?: boolean;
  [key: string]: unknown;
}

type GtagEventParams = Record<string, unknown>;

type GtagGlobals = {
  currency?: string;
  user_id?: string;
  debug_mode?: boolean;
  [key: string]: unknown;
};

interface ConsentParams {
  ad_storage?: ConsentState;
  analytics_storage?: ConsentState;
  ad_user_data?: ConsentState;
  ad_personalization?: ConsentState;
  wait_for_update?: number;
}

type Gtag = {
  (command: 'js', date: Date): void;
  (command: 'config', targetId: string, config?: GtagConfig): void;
  (command: 'event', eventName: string, params?: GtagEventParams): void;
  (command: 'set', params: GtagGlobals): void;
  (command: 'set', key: 'user_properties', params: Record<string, unknown>): void;
  (command: 'consent', action: 'default' | 'update', params: ConsentParams): void;
  (command: 'get', targetId: string, fieldName: string, callback: (value: unknown) => void): void;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: Gtag;
  }
}

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};