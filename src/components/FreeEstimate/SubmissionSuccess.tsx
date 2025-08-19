'use client';

import React from 'react';

type SubmissionSuccessProps = {
  onSendAnother: () => void;
};

export const SubmissionSuccess = ({ onSendAnother }: SubmissionSuccessProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <svg
            className="mx-auto mb-6 text-green-500"
            width={64}
            height={64}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2l4-4" />
          </svg>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in our dental services. Our team will contact you within the next 24 hours to provide you with your free estimate.
          </p>
          <button
            onClick={onSendAnother}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    </div>
  );
};

SubmissionSuccess.displayName = 'SubmissionSuccess';
