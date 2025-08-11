'use client';
import React, { useRef, useState } from 'react';
import { submitEstimate } from '@/lib/actions/estimateForm';
import Image from 'next/image';


const EstimateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    treatment: '',
    message: '',
    preferredContact: 'email',
    visitDate: ''
  });
  
  const [images, setImages] = useState<Array<{
    id: number;
    file: File;
    preview: string;
    name: string;
    size: number;
  }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const MAX_IMAGES = 5;
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  const treatments = [
    'Dental Implants',
    'All-on-4',
    'Crowns and Veneers',
    'Orthodontics',
    'Teeth Whitening',
    'Periodontics',
    'Endodontics (Root Canal)',
    'Oral Surgery',
    'Smile Design',
    'General Consultation',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addFiles = (files: File[]) => {
    if (images.length + files.length > MAX_IMAGES) {
      setError(`Max ${MAX_IMAGES} permited images.`);
      return;
    }

    const validFiles: File[] = [];
    const errors: string[] = [];

    files.forEach(file => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        errors.push(`${file.name}: Not valid format. Use JPG, PNG o WebP`);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: File is too large. Maximum 10MB`);
        return;
      }
      validFiles.push(file);
    });

    if (errors.length > 0) {
      setError(errors.join('. '));
      return;
    }

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            file,
            preview: e.target && typeof e.target.result === 'string' ? e.target.result : '',
            name: file.name,
            size: file.size
          }
        ]);
      };
      reader.readAsDataURL(file);
    });

    setError('');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(Array.from(e.target.files ?? []));
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files ?? []);
    if (files.length) addFiles(files);
  };

  const removeImage = (imageId: number) => {
    setImages((prev) => prev.filter((img: { id: number }) => img.id !== imageId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.treatment) {
      setError('Please complete the required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitEstimate({
        ...formData,
        images: images.map(img => ({
          name: img.name,
          url: img.preview, // or you might need to upload first
          size: img.size
        }))
      });
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '', email: '', phone: '', country: '', treatment: '',
          message: '', preferredContact: 'email', visitDate: ''
        });
        setImages([]);
      } else {
        setError(result.message || 'Error submitting form');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your form. Please try again. 🙂');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
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
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="estimate-form" className="flex flex-col -mt-8 pb-52 min-h-screen bg-gradient-to-t from-black/60 via-black/40 to-black/20 relative overflow-hidden">
      
      
      <div className="container mx-auto pt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-gray-100 mb-4">Free Estimate</h2>
            <p className="text-xl text-balance text-gray-100 max-w-3xl mx-auto">
            Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
            </p>
          </div>

          <div className="flex flex-col md:gap-8">
            {/* Contact Info */}
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center bg-white/80 w-full rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-6">Contact Information</h3>
                
                <div className="flex flex-col md:flex-row w-full justify-center items-center text-start gap-8">
                  <div className="flex items-center md:items-start">
                    <span role="img" aria-label="Dirección" className="text-purple-6000 mt-1" style={{ fontSize: 20 }}>📍</span>
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">Curridabat, 200m South of Pops<br />San José, Costa Rica</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center md:items-start space-x-3">
                    <span role="img" aria-label="Horarios" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>⏰</span>
                    <div>
                      <p className="font-medium text-gray-800">Hours</p>
                      <p className="text-gray-600">Monday to Friday: 8:30 - 17:30<br />Saturday and Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center md:items-start space-x-3">
                    <span role="img" aria-label="Teléfono" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>📞</span>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+1 (702) 595-3955</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center md:items-start space-x-3">
                    <span role="img" aria-label="Correo" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>✉️</span>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">info@ogcenter.cr</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-8 p-4 px-4 md:px-28 bg-purple-50/80 rounded-lg">
                  <h4 className="font-semibold text-2xl md:text-4xl text-purple-800 mb-2">Why choose OG Center?</h4>
                  <ul className="text-lg text-purple-700 space-y-1">
                    <li>• Digital technology of the latest generation</li>
                    <li>• Certified specialists</li>
                    <li>• International dental tourism</li>
                    <li>• More than 20 years of experience</li>
                  </ul>
                </div>
              </div>
            </div>

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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 888 8888-8888"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
                        Country of Origin
                      </label>
                      <input
                        id="country"
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="USA, Canada"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                      Interest in Treatment
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a treatment</option>
                      {treatments.map(treatment => (
                        <option key={treatment} value={treatment}>{treatment}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="visitDate" className="block text-sm font-medium text-gray-900 mb-2">
                        Preferred Visit Date
                      </label>
                      <input
                        id="visitDate"
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div className='flex flex-col items-start justify-center p-4'>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-400 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your current dental situation, symptoms, or any specific questions..."
                    />
                  </div>

                  <div className="flex flex-col gap-3 p-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Images (optional)
                    </label>

                    <div
                      onDragOver={onDragOver}
                      onDragLeave={onDragLeave}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={[
                        "w-full cursor-pointer rounded-xl border-2 border-dashed p-6 transition",
                        "bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600",
                        isDragging ? "border-purple-500 ring-2 ring-purple-200" : "border-gray-300 hover:border-purple-400"
                      ].join(" ")}
                    >
                      <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <div className="text-base text-gray-900">
                          <span className="text-xl text-gray-900">Drag and drop</span> images here, or <span className="text-xl text-blue-700 underline">browse</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Up to {MAX_IMAGES} images, max 10MB each (JPG, PNG, WebP).
                        </p>
                      </div>
                      <input
                        ref={fileInputRef}
                        id="images"
                        type="file"
                        multiple
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-flex h-6 items-center rounded-full bg-purple-100 px-3 font-medium text-purple-700">
                          {images.length} / {MAX_IMAGES}
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
                              width={100}
                              height={100}
                              className="h-28 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(img.id)}
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

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white py-4 px-6 rounded-full font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10l9-6 9 6M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6"
                          />
                        </svg>
                        <span>Request Free Estimate</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateForm;