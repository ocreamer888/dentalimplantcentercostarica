export function measurePerformance() {
  if (typeof window !== 'undefined') {
    // Measure LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstEntry = entries[0];
      console.log('FCP:', firstEntry.startTime);
    }).observe({ entryTypes: ['first-contentful-paint'] });

    // Measure CLS
    new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
}
