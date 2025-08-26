'use client';

import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  tti: number;
  fcp: number;
}

interface SEOmetrics {
  pageLoadTime: number;
  coreWebVitals: PerformanceMetrics;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
}

interface PerformanceAnalyticsProps {
  pageUrl: string;
  targetKeywords: string[];
  className?: string;
}

export default function PerformanceAnalytics({ 
  targetKeywords, 
  className = '' 
}: Omit<PerformanceAnalyticsProps, 'pageUrl'>) {
  const [metrics, setMetrics] = useState<SEOmetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetrics = useCallback((entry: PerformanceEntry) => {
    if ('value' in entry && typeof entry.value === 'number') {
      setMetrics(prev => {
        if (!prev) return null;
        
        const newMetrics = { ...prev };
        
        switch (entry.name) {
          case 'largest-contentful-paint':
            newMetrics.coreWebVitals.lcp = entry.value as number;
            break;
          case 'first-input':
            newMetrics.coreWebVitals.fid = entry.value as number;
            break;
          case 'layout-shift':
            newMetrics.coreWebVitals.cls = entry.value as number;
            break;
        }
        
        // Calculate SEO score based on Core Web Vitals
        newMetrics.seoScore = calculateSEOScore(newMetrics.coreWebVitals);
        
        return newMetrics;
      });
    }
  }, []);

  const startPerformanceMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        updateMetrics(entry);
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => prev ? { ...prev, pageLoadTime: loadTime } : null);
    });
  }, [updateMetrics]);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      startPerformanceMonitoring();
    }
  }, [startPerformanceMonitoring]);

  const calculateSEOScore = (coreWebVitals: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (target: <2.5s)
    if (coreWebVitals.lcp > 4000) score -= 30;
    else if (coreWebVitals.lcp > 2500) score -= 15;
    
    // FID scoring (target: <100ms)
    if (coreWebVitals.fid > 300) score -= 20;
    else if (coreWebVitals.fid > 100) score -= 10;
    
    // CLS scoring (target: <0.1)
    if (coreWebVitals.cls > 0.25) score -= 20;
    else if (coreWebVitals.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getCoreWebVitalsStatus = (metric: keyof PerformanceMetrics, value: number): {
    status: 'good' | 'needs-improvement' | 'poor';
    color: string;
    message: string;
  } => {
    const thresholds: Record<keyof PerformanceMetrics, { good: number; poor: number }> = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      tti: { good: 3800, poor: 7300 },
      fcp: { good: 1800, poor: 3000 }
    };

    if (value <= thresholds[metric].good) {
      return { status: 'good', color: 'text-green-600', message: 'Good' };
    } else if (value <= thresholds[metric].poor) {
      return { status: 'needs-improvement', color: 'text-yellow-600', message: 'Needs Improvement' };
    } else {
      return { status: 'poor', color: 'text-red-600', message: 'Poor' };
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Performance Analytics
        </h3>
        <p className="text-gray-600">
          Real-time monitoring of Core Web Vitals and SEO performance
        </p>
      </div>

      {/* Performance Overview */}
      {metrics && (
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Overall SEO Score</h4>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {getPerformanceGrade(metrics.seoScore)}
              </div>
              <div className="text-2xl font-bold text-blue-800">
                {metrics.seoScore}/100
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Page Load Time</h4>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {metrics.pageLoadTime ? `${Math.round(metrics.pageLoadTime)}ms` : 'N/A'}
              </div>
              <div className="text-sm text-green-700">
                Target: &lt;3 seconds
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Core Web Vitals */}
      {metrics && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(metrics.coreWebVitals).map(([metric, value]) => {
              const status = getCoreWebVitalsStatus(metric as keyof PerformanceMetrics, value);
              return (
                <div key={metric} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 uppercase">
                      {metric}
                    </span>
                    <span className={`text-sm font-semibold ${status.color}`}>
                      {status.message}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {metric === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Target: {metric === 'cls' ? '<0.1' : metric === 'lcp' ? '<2.5s' : '<100ms'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Target Keywords */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Target Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {targetKeywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Performance Recommendations */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-900 mb-3">
          Performance Recommendations
        </h4>
        <div className="space-y-2 text-yellow-800 text-sm">
          <div>• Optimize images with WebP/AVIF format</div>
          <div>• Implement lazy loading for below-fold content</div>
          <div>• Minimize JavaScript execution time</div>
          <div>• Use critical CSS inlining for above-fold content</div>
          <div>• Implement proper caching strategies</div>
        </div>
      </div>

      {/* Monitoring Status */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Monitoring Status: {isMonitoring ? 'Active' : 'Inactive'}
          </span>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">
              {isMonitoring ? 'Real-time tracking enabled' : 'Monitoring disabled'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Performance utility functions
export const performanceUtils = {
  // Measure Time to Interactive
  measureTTI: () => {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'TTI' && 'value' in entry) {
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
        if (entry.name === 'first-contentful-paint' && 'value' in entry) {
          console.log(`First Contentful Paint: ${entry.value}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
  },

  // Generate performance report
  generateReport: (metrics: SEOmetrics) => {
    return {
      overallScore: metrics.seoScore,
      grade: metrics.seoScore >= 90 ? 'A' : metrics.seoScore >= 80 ? 'B' : metrics.seoScore >= 70 ? 'C' : 'D',
      recommendations: [
        'Optimize Core Web Vitals',
        'Improve page load speed',
        'Enhance user experience',
        'Implement SEO best practices'
      ]
    };
  }
};
