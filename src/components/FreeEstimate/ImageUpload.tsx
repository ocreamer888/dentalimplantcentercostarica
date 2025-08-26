'use client';
import React, { useRef, useState } from 'react';
import { compressImage } from '@/utils/imageCompression';

type ImageFile = {
  id: number;
  file: File;
  preview: string;
  name: string;
  size: number;
};

interface ImageUploadProps {
  images: ImageFile[];
  onImagesChange: (images: ImageFile[]) => void;
  maxImages?: number;
  maxFileSize?: number;
  allowedTypes?: string[];
}

export const ImageUpload = ({ 
  images, 
  onImagesChange, 
  maxImages = 5, 
  maxFileSize = 2 * 1024 * 1024, // Reduce from 10MB to 2MB
  allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
}: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = async (files: File[]) => {
    if (images.length + files.length > maxImages) {
      return;
    }

    const validFiles: File[] = [];

    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        continue;
      }
      if (file.size > maxFileSize) {
        // Compress the image if it's too large
        try {
          const compressedFile = await compressImage(file, {
            maxWidth: 1200,
            maxHeight: 1200,
            quality: 0.8,
            maxSize: maxFileSize
          });
          validFiles.push(compressedFile);
        } catch (error) {
          console.error('Image compression failed:', error);
          continue;
        }
      } else {
        validFiles.push(file);
      }
    }

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage: ImageFile = {
          id: Date.now() + Math.random(),
          file,
          preview: e.target && typeof e.target.result === 'string' ? e.target.result : '',
          name: file.name,
          size: file.size
        };
        onImagesChange([...images, newImage]);
      };
      reader.readAsDataURL(file);
    });
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

  return (
    <div className="flex flex-col gap-3 p-4">
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
            Up to {maxImages} images, max 2MB each (JPG, PNG, WebP).
          </p>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/jpeg,image/jpg,image/png,image/webp"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};
