'use client';

import React from 'react';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  errors?: string[];
};

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, name, label, errors, required, ...props }, ref) => {
    const errorId = errors ? `${id}-error` : undefined;
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && '*'}
        </label>
        <input
          id={id}
          name={name}
          ref={ref}
          required={required}
          className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-describedby={errorId}
          {...props}
        />
        {errors && <p id={errorId} className="text-sm text-red-500 mt-1">{errors[0]}</p>}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
