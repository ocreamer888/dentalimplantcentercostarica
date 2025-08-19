'use client';

import { useEffect } from 'react';

export function CSSLoader() {
  useEffect(() => {
    // Load non-critical CSS after page load
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/(site)/non-critical.css'; // Fixed path to match the actual file location
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  }, []);

  return null;
}
