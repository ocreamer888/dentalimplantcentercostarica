'use client';
import React from 'react';
import LogoImageComponent from './LogoImage';

export default function LogoRow() {
  return (
    <div className='flex w-full -mt-12 pt-24 px-4 z-40'>
        <div className="flex flex-col md:flex-row rounded-3xl p-4 bg-white justify-center items-center">
      <LogoImageComponent
        imageSrc="/images/logo/SetLogo1.jpg"
        imageAlt="Example image one"
      />
      <LogoImageComponent
        imageSrc="/images/logo/SetLogo2.jpg"
        imageAlt="Example image two"
      />
      </div>
    </div> 
  );
}
