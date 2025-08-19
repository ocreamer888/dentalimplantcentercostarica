'use client';

import { useEffect } from 'react';
import '../app/(site)/non-critical.css'; // Direct import

export function CSSLoader() {
  useEffect(() => {
    // CSS is now loaded via import, no need for dynamic loading
    // You can remove the dynamic link creation code
  }, []);

  return null;
}
