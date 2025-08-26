'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Core Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Type-safe access to performance metrics
        if ('value' in entry && typeof entry.value === 'number') {
          // Log performance metrics
          console.log(`${entry.name}: ${entry.value}`);
          
          // Send to analytics if available
          const gtag = (window as { gtag?: (command: string, action: string, params: Record<string, unknown>) => void }).gtag;
          if (typeof gtag === 'function') {
            gtag('event', 'performance', {
              event_category: 'Web Vitals',
              event_label: entry.name,
              value: Math.round(entry.value),
              non_interaction: true,
            });
          }
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return null;
}

// Performance utility functions
export const performanceUtils = {
  // Measure time to interactive
  measureTTI: () => {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'TTI' && 'value' in entry && typeof entry.value === 'number') {
          console.log(`Time to Interactive: ${entry.value}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['measure'] });
  },

  // Measure First Contentful Paint
  measureFCP: () => {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint' && 'value' in entry && typeof entry.value === 'number') {
          console.log(`First Contentful Paint: ${entry.value}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
  }
};
