'use client';

import { useEffect } from 'react';

export function CSSLoader() {
  useEffect(() => {
    // Load non-critical CSS after page load
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/non-critical.css';
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  }, []);

  return null;
}
