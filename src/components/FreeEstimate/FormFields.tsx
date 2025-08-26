import React from 'react';
import type { EstimateFormState } from '@/lib/schemas';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';

interface FormFieldsProps {
  state: EstimateFormState;
  treatmentOptions: { value: string; label: string; }[];
  contactMethodOptions: { value: string; label: string; }[];
}

export const FormFields = ({ state, treatmentOptions, contactMethodOptions }: FormFieldsProps) => (
  <>
    <div className="grid md:grid-cols-2 gap-4">
      <FormInput
        id="name"
        name="name"
        label="Full Name"
        type="text"
        required
        placeholder="Your full name"
        errors={state.errors?.name}
      />
      <FormInput
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        placeholder="your.email@example.com"
        errors={state.errors?.email}
      />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <FormInput
        id="phone"
        name="phone"
        label="Phone"
        type="tel"
        required
        placeholder="+1 888 8888-8888"
        errors={state.errors?.phone}
      />
      <FormInput 
        id="country" 
        name="country" 
        label="Country of Origin" 
        type="text" 
        placeholder="USA, Canada" 
      />
    </div>

    <FormSelect
      id="treatment"
      name="treatment"
      label="Interest in Treatment"
      required
      defaultValue=""
      options={treatmentOptions}
      placeholder="Select a treatment"
      errors={state.errors?.treatment}
    />

    <div className="grid md:grid-cols-2 gap-6">
      <FormInput
        id="visitDate"
        name="visitDate"
        label="Preferred Visit Date"
        type="date"
        min={new Date().toISOString().split('T')[0]}
        errors={state.errors?.visitDate}
      />
      <FormSelect
        id="preferredContact"
        name="preferredContact"
        label="Preferred Contact Method"
        options={contactMethodOptions}
        defaultValue="email"
      />
    </div>
  </>
);