

import React from 'react';
import Link from 'next/link';

interface State {
  hasError: boolean;
  error?: Error;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
  seoFallback?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for monitoring
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as { gtag?: (command: string, action: string, params: Record<string, unknown>) => void }).gtag) {
      (window as { gtag: (command: string, action: string, params: Record<string, unknown>) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback component
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} />;
      }

      // SEO-optimized default fallback
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {this.props.seoFallback?.title || 'Something went wrong'}
            </h1>
            <p className="text-gray-600 mb-6">
              {this.props.seoFallback?.description || 
               'We encountered an error while loading this page. Please try again or contact our support team.'}
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// SEO-optimized fallback components for different page types
export const SEOFallbackComponents = {
  procedures: {
    title: 'Dental Implant Procedures - Page Error',
    description: 'We encountered an issue loading the dental implant procedures page. Please try again or contact our support team for assistance.',
    keywords: ['dental implant procedures', 'dental implants costa rica', 'all on 4', 'all on 6']
  },
  cost: {
    title: 'Dental Implant Costs - Page Error',
    description: 'We encountered an issue loading the dental implant cost information. Please try again or contact our support team for pricing details.',
    keywords: ['dental implant cost', 'dental implant prices', 'dental implants costa rica cost']
  },
  locations: {
    title: 'Dental Implants by Location - Page Error',
    description: 'We encountered an issue loading the location-specific dental implant information. Please try again or contact our support team.',
    keywords: ['dental implants los angeles', 'dental implants miami', 'dental tourism costa rica']
  }
};
