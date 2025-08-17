'use client';

import { useEffect } from 'react';

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Site Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-md">
        <div className="text-6xl mb-4">😔</div>
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-lg opacity-80 mb-6">
          We are experiencing technical difficulties. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-white text-purple-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
