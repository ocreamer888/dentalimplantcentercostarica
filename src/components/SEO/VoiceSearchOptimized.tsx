'use client';

import { useState } from 'react';

interface VoiceSearchProps {
  question: string;
  answer: string;
  relatedQuestions: string[];
  conversationalKeywords: string[];
  className?: string;
}

export default function VoiceSearchOptimized({
  question,
  answer,
  relatedQuestions,
  conversationalKeywords,
  className = ''
}: VoiceSearchProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulate voice response
  const handleVoiceResponse = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger text-to-speech
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <div className={`bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500 ${className}`}>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-purple-900">
            {question}
          </h3>
          <button
            onClick={handleVoiceResponse}
            className={`p-2 rounded-full transition-colors ${
              isPlaying 
                ? 'bg-purple-600 text-white' 
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
            aria-label="Listen to answer"
          >
            {isPlaying ? '' : '🔊'}
          </button>
        </div>
        
        <p className="text-gray-700 leading-relaxed text-lg">
          {answer}
        </p>
      </div>

      {/* Related Voice Questions */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-purple-800 mb-3">
          Related Voice Search Questions:
        </h4>
        <div className="space-y-2">
          {relatedQuestions.map((relatedQ, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <span className="text-purple-500 mr-2">🎤</span>
              <span className="italic">&ldquo;{relatedQ}&rdquo;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conversational Keywords */}
      <div>
        <h4 className="text-lg font-semibold text-purple-800 mb-3">
          Voice Search Keywords:
        </h4>
        <div className="flex flex-wrap gap-2">
          {conversationalKeywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-purple-200">
        <div className="flex items-center text-purple-600 text-sm">
          <span className="mr-2"></span>
          <span>Optimized for voice search and conversational queries</span>
        </div>
      </div>
    </div>
  );
}

// Pre-built voice search configurations for dental topics
export const dentalVoiceSearch = {
  cost: {
    question: 'How much do dental implants cost?',
    answer: 'Dental implants in Costa Rica start at $1,850 for single tooth implants, $19,950 for All-on-4, and $24,950 for All-on-6. This represents 60-70% savings compared to US prices.',
    relatedQuestions: [
      'What is the cheapest place to get dental implants?',
      'How much money can I save on dental implants?',
      'Where can I get affordable dental implants?'
    ],
    conversationalKeywords: [
      'cheap dental implants',
      'affordable dental work',
      'save money on teeth',
      'dental implants cost',
      'cheapest dental implants'
    ]
  },
  
  location: {
    question: 'Where is the best place to get dental implants?',
    answer: 'Costa Rica is one of the best places for dental implants, offering 60-70% cost savings, experienced surgeons, and luxury accommodations. Many patients travel from the US for treatment.',
    relatedQuestions: [
      'What country has the best dental implants?',
      'Where should I go for cheap dental work?',
      'Is Costa Rica good for dental tourism?'
    ],
    conversationalKeywords: [
      'best place for dental implants',
      'dental tourism destinations',
      'Costa Rica dental work',
      'travel for dental care',
      'international dental treatment'
    ]
  }
};
