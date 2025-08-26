'use client';
import React, { useState, useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitEstimate } from '@/lib/actions/estimateForm';
import Image from 'next/image';
import type { EstimateFormState } from '@/lib/schemas';
import { SubmissionSuccess } from './SubmissionSuccess';
import { ImageUpload } from './ImageUpload';
import { FormFields } from './FormFields';
import { FormTextarea } from './FormTextarea';
import { compressImage } from '@/utils/imageCompression';

type ImageFile = {
  id: number;
  file: File;
  preview: string;
  name: string;
  size: number;
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const EstimateForm = () => {
  const initialState: EstimateFormState = { message: '', errors: {}, success: false };
  const [state, dispatch] = useActionState(submitEstimate, initialState);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const treatments = [
    'Dental Implants', 'All-on-4', 'Crowns and Veneers', 'Orthodontics', 
    'Teeth Whitening', 'Periodontics', 'Endodontics (Root Canal)', 
    'Oral Surgery', 'Smile Design', 'General Consultation', 'Other'
  ];

  const treatmentOptions = treatments.map(t => ({ value: t, label: t }));
  const contactMethodOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'whatsapp', label: 'WhatsApp' },
  ];

  const handleSubmit = async (formData: FormData) => {
    // Calculate total payload size
    let totalSize = 0;
    const textFields = ['name', 'email', 'phone', 'country', 'treatment', 'message', 'preferredContact', 'visitDate'];
    
    textFields.forEach(field => {
      const value = formData.get(field);
      if (value) totalSize += value.toString().length;
    });
    
    // Add image sizes
    images.forEach(image => {
      totalSize += image.size;
    });
    
    // Vercel free tier limit is 4.5MB, use 4MB to be safe
    const VERCEL_LIMIT = 4 * 1024 * 1024; // 4MB
    
    if (totalSize > VERCEL_LIMIT) {
      setError(`Total form data (${(totalSize / 1024 / 1024).toFixed(1)}MB) exceeds the 4MB limit. Please reduce image sizes or remove some images.`);
      return;
    }
    
    images.forEach((image, index) => {
      formData.append(`image-${index}`, image.file);
    });
    formData.append('imageCount', images.length.toString());
    await dispatch(formData);
  };

  useEffect(() => {
    if (state.success) {
      setSubmitted(true);
      // formRef.current?.reset(); // This line is removed as per the new_code
      setImages([]);
    }
    // Display general server errors that are not field-specific
    if (!state.success && state.message && !state.errors) {
      setError(state.message);
    }
  }, [state]);

  if (submitted) {
    return <SubmissionSuccess onSendAnother={() => setSubmitted(false)} />;
  }

  return (
    <form action={handleSubmit} id="estimate-form" className="flex w-full max-w-4xl relative overflow-hidden">
            
      <div className="container mx-auto">
        <div className="mx-auto">
          

          <div className="flex flex-col">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-6">
                  {error && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <span role="img" aria-label="Error" className="text-red-600" style={{ fontSize: 20 }}>⚠️</span>
                      <span>{error}</span>
                    </div>
                  )}
                  {state.message && !state.success && state.errors && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <span role="img" aria-label="Error" className="text-red-600" style={{ fontSize: 20 }}>⚠️</span>
                      <span>{state.message}</span>
                    </div>
                  )}

                  <FormFields state={state} treatmentOptions={treatmentOptions} contactMethodOptions={contactMethodOptions} />

                  <FormTextarea
                    id="additionalMessage"
                    name="message"
                    label="Additional Message"
                    rows={4}
                    placeholder="Describe your current dental situation, symptoms, or any specific questions..."
                  />

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Sample Images</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
                      <div className="relative rounded-lg h-40 overflow-hidden">
                        <Image
                          src="/images/dentalimages/dentalside2.webp"
                          alt="Dental implant procedure"
                          width={112}
                          height={112}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                          quality={85}
                          loading="lazy"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                      <div className="relative rounded-lg h-40 overflow-hidden">
                        <Image
                          src="/images/dentalimages/dentalsmile.webp"
                          alt="Dental implant close-up"
                          width={112}
                          height={112}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                          quality={85}
                          loading="lazy"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                      <div className="relative rounded-lg h-40 overflow-hidden">
                        <Image
                          src="/images/dentalimages/frontdental.webp"
                          alt="Dental implant surgery"
                          width={112}
                          height={112}

                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                          quality={85}
                          loading="lazy"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                      <div className="relative rounded-lg h-40 overflow-hidden">
                        <Image
                          src="/images/dentalimages/dentaltop.webp"
                          alt="Dental implant result"
                          width={112}
                          height={112}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                          quality={85}
                          loading="lazy"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                       <div className="relative rounded-lg h-40 overflow-hidden">
                        <Image
                          src="/images/dentalimages/dentalside1.webp"
                          alt="Dental implant result"
                          width={112}
                          height={112}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                          quality={85}
                          loading="lazy"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Images (optional)
                    </label>

                    <ImageUpload 
                      images={images} 
                      onImagesChange={setImages} 
                    />

                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-flex h-6 items-center rounded-full bg-purple-100 px-3 font-medium text-purple-700">
                          {images.length} / 5
                        </span>
                        <span className="text-gray-500">selected</span>
                      </span>
                    </div>

                    {images.length > 0 && (
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {images.map(img => (
                          <li key={img.id} className="group relative overflow-hidden rounded-xl border bg-white">
                            <Image
                              src={img.preview}
                              alt={img.name}
                              width={112}
                              height={112}
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                              className="h-28 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                              quality={80}
                              loading="lazy"
                            />
                            <button
                              type="button"
                              onClick={() => setImages(images.filter(i => i.id !== img.id))}
                              className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm ring-1 ring-black/5 hover:bg-white"
                              aria-label={`Remove ${img.name}`}
                              title="Remove"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                            <div className="p-2">
                              <p className="truncate text-sm font-medium text-gray-800">{img.name}</p>
                              <p className="text-xs text-gray-500">{formatFileSize(img.size)}</p>
                            </div>
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      By submitting this form, you agree that OG Center will contact you to provide information about our dental services. Your personal data will be handled in accordance with our privacy policy.
                    </p>
                  </div>

                  <SubmitButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-purple-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
    >
      {pending ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          <span>Sending...</span>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-6 9 6M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
          </svg>
          <span>Request</span>
        </>
      )}
    </button>
  );
}

export default EstimateForm;
