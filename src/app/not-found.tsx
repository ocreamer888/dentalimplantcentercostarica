"use client";
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const [isHovered, setIsHovered] = useState({ home: false, back: false });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // In a real app, you'd use router.push('/')
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-8 p-6 text-center relative overflow-hidden">
      {/* Large 404 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent m-0">
          404
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 m-0">
          Page Not Found
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-2xl">
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={handleGoHome}
          onMouseEnter={() => setIsHovered({ ...isHovered, home: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, home: false })}
          className={`
            px-6 py-3 text-base font-medium border-none rounded-lg
            bg-gradient-to-r from-blue-500 to-purple-600 text-white cursor-pointer
            transition-all duration-200 shadow-lg hover:shadow-xl
            ${isHovered.home ? 'transform -translate-y-1 shadow-blue-500/40' : 'shadow-blue-500/30'}
          `}
        >
          Go Home
        </button>

        <button
          onClick={handleGoBack}
          onMouseEnter={() => setIsHovered({ ...isHovered, back: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, back: false })}
          className={`
            px-6 py-3 text-base font-medium rounded-lg cursor-pointer
            border-2 border-blue-500/30 bg-transparent text-gray-700 dark:text-gray-300
            transition-all duration-200
            ${isHovered.back ? 'border-blue-500/60 bg-blue-500/10' : 'border-blue-500/30'}
          `}
        >
          Go Back
        </button>
      </div>

      {/* Auto redirect countdown */}
      <div className="flex flex-col gap-2 opacity-60">
        <p className="text-sm m-0">
          Automatically redirecting to home in
        </p>
        <div className="text-2xl font-semibold text-blue-500">
          {countdown}s
        </div>
      </div>

      {/* Decorative floating elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full opacity-20 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      
      <div 
        className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full opacity-20 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />

      <div 
        className="absolute top-3/4 left-1/6 w-20 h-20 rounded-full opacity-10 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
          filter: 'blur(30px)',
          animation: 'float 10s ease-in-out infinite'
        }}
      />

      {/* Keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(120deg); 
          }
          66% { 
            transform: translateY(10px) rotate(240deg); 
          }
        }
      `}</style>
    </div>
  );
}