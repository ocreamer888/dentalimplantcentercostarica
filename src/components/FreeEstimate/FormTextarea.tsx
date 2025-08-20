'use client';

import React from 'react';

type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  name: string;
  label: string;
  errors?: string[];
  autocomplete?: string;
};

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ id, name, label, errors, required, autocomplete, ...props }, ref) => {
    const errorId = errors ? `${id}-error` : undefined;
    
    // Auto-generate autocomplete value based on field name if not provided
    const getAutocompleteValue = () => {
      if (autocomplete) return autocomplete;
      
      const nameLower = name.toLowerCase();
      if (nameLower.includes('message')) return 'off';
      return 'off';
    };

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && '*'}
        </label>
        <textarea
          id={id}
          name={name}
          ref={ref}
          required={required}
          autoComplete={getAutocompleteValue()}
          className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-describedby={errorId}
          {...props}
        />
        {errors && <p id={errorId} className="text-sm text-red-500 mt-1">{errors[0]}</p>}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

