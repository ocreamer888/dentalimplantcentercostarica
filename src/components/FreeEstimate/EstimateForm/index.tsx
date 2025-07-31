'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { submitEstimate } from '@/lib/actions/estimateForm';


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

  const MAX_IMAGES = 5;
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  const treatments = [
    'Implantes Dentales',
    'All-on-4',
    'Coronas y Carillas',
    'Ortodoncia',
    'Blanqueamiento Dental',
    'Periodoncia',
    'Endodoncia',
    'Cirugía Oral',
    'Diseño de Sonrisa',
    'Consulta General',
    'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    
    if (images.length + files.length > MAX_IMAGES) {
      setError(`Máximo ${MAX_IMAGES} imágenes permitidas`);
      return;
    }

    const validFiles: File[] = [];
    const errors: string[] = [];

    files.forEach(file => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        errors.push(`${file.name}: Formato no válido. Use JPG, PNG o WebP`);
        return;
      }
      
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: Archivo muy grande. Máximo 10MB`);
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
        setImages((prev: typeof images) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            file: file,
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
      setError('Por favor complete todos los campos requeridos.');
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
      setError('Hubo un error al enviar su solicitud. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Solicitud Enviada!</h2>
            <p className="text-gray-600 mb-6">
              Gracias por su interés en nuestros servicios dentales. Nuestro equipo se pondrá en contacto con usted dentro de las próximas 24 horas para proporcionarle su estimación gratuita.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Otra Solicitud
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="estimate-form" className="flex flex-col mx-4 rounded-3xl min-h-screen bg-gradient-to-br from-purple-50 to-white">
      
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Free Estimate</h2>
            <p className="text-xl text-balance text-purple-600 max-w-3xl mx-auto">
            Get a personalized evaluation of our state-of-the-art dental treatments. Our team of specialists will provide you with a detailed and transparent treatment plan.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Contact Info */}
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center bg-white w-full rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-6">Información de Contacto</h3>
                
                <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
                  <div className="flex items-start">
                    <span role="img" aria-label="Dirección" className="text-purple-6000 mt-1" style={{ fontSize: 20 }}>📍</span>
                    <div>
                      <p className="font-medium text-gray-800">Dirección</p>
                      <p className="text-gray-600">Curridabat, 200m Sur de Pops<br />San José, Costa Rica</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span role="img" aria-label="Horarios" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>⏰</span>
                    <div>
                      <p className="font-medium text-gray-800">Horarios</p>
                      <p className="text-gray-600">Lunes a Viernes: 8:30 - 17:30<br />Sábados y Domingos: Cerrado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span role="img" aria-label="Teléfono" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>📞</span>
                    <div>
                      <p className="font-medium text-gray-800">Teléfono</p>
                      <p className="text-gray-600">+506 2000-0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span role="img" aria-label="Correo" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>✉️</span>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">info@ogcenter.cr</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-8 p-4 px-28 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold md:text-4xl text-purple-800 mb-2">¿Por qué elegir OG Center?</h4>
                  <ul className="text-lg text-purple-700 space-y-1">
                    <li>• Tecnología digital de vanguardia</li>
                    <li>• Especialistas certificados</li>
                    <li>• Turismo dental internacional</li>
                    <li>• Más de 20 años de experiencia</li>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Su nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="su.email@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+506 0000-0000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        País de Origen
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ej. Estados Unidos, Canadá"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tratamiento de Interés *
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Seleccione un tratamiento</option>
                      {treatments.map(treatment => (
                        <option key={treatment} value={treatment}>{treatment}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha Preferida de Visita
                      </label>
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Método Preferido de Contacto
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Teléfono</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Imágenes Dentales (Opcional)
                    </label>
                    <p className="text-sm text-gray-500 mb-4">
                      Comparta fotos de su sonrisa actual, radiografías o cualquier documentación dental relevante. 
                      Máximo {MAX_IMAGES} imágenes, 10MB cada una.
                    </p>
                    
                    <div className="space-y-4">
                      {/* Upload Area */}
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                          disabled={images.length >= MAX_IMAGES}
                        />
                        <label
                          htmlFor="image-upload"
                          className={`cursor-pointer ${images.length >= MAX_IMAGES ? 'cursor-not-allowed opacity-50' : ''}`}
                        >
                          <span className="mx-auto mb-2 text-gray-400 block" style={{ fontSize: 32 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                          </span>
                          <p className="text-gray-600">
                            {images.length >= MAX_IMAGES 
                              ? `Máximo ${MAX_IMAGES} imágenes alcanzado`
                              : 'Haga clic para seleccionar imágenes o arrastre aquí'
                            }
                          </p>
                          <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP - Máximo 10MB cada una</p>
                        </label>
                      </div>

                      {/* Image Previews */}
                      {images.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {images.map((image: { id: string | number; preview: string; name?: string; size?: number }) => (
                            <div key={image.id} className="relative group">
                              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                  src={image.preview}
                                  alt={image.name ?? ''}
                                  fill
                                  className="object-cover"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeImage(Number((image as { id: string | number }).id))}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                  aria-label="Eliminar imagen"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className="mt-1 text-xs text-gray-600 truncate">
                                {(image as { name?: string }).name ?? ''}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatFileSize((image as { size?: number }).size ?? 0)}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje Adicional
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describa su situación dental actual, síntomas, o cualquier pregunta específica..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Al enviar este formulario, acepta que OG Center se ponga en contacto con usted para proporcionarle información sobre nuestros servicios dentales. Sus datos personales serán tratados de acuerdo con nuestra política de privacidad.
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
                        <span>Enviando...</span>
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
                        <span>Solicitar Estimación Gratuita</span>
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