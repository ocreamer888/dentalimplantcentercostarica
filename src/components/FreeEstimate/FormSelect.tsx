'use client';

import React from 'react';

type SelectOption = {
  value: string;
  label: string;
};

type FormSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  options: SelectOption[];
  errors?: string[];
  placeholder?: string;
};

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ id, name, label, options, errors, required, placeholder, ...props }, ref) => {
    const errorId = errors ? `${id}-error` : undefined;

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && '*'}
        </label>
        <select
          id={id}
          name={name}
          ref={ref}
          required={required}
          className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-describedby={errorId}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {errors && <p id={errorId} className="text-sm text-red-500 mt-1">{errors[0]}</p>}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';

