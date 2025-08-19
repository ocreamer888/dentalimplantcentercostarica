import { useState, useCallback } from 'react';

type ImageFile = {
  id: number;
  file: File;
  preview: string;
  name: string;
  size: number;
};

export const useEstimateForm = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async (formData: FormData) => {
    images.forEach((image, index) => {
      formData.append(`image-${index}`, image.file);
    });
    formData.append('imageCount', images.length.toString());
    return formData;
  }, [images]);

  return {
    images,
    setImages,
    error,
    setError,
    submitted,
    setSubmitted,
    handleSubmit
  };
};
