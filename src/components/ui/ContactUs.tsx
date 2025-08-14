import React from 'react';
import ContactForm from '@/components/ui/contactForm';

export default function ContactUs() {
  return (
    <div className="relative flex flex-col lg:flex-row gap-4 justify-center items-center bg-gradient-to-br from-purple-100/50 via-purple-500/50 to-purple-900/50 md:px-8 -mt-8 h-auto pt-28 w-full">
        <div className="flex flex-col gap-4 justify-center items-center lg:w-2/5 lg:items-start px-4">
        <h1 className="text-5xl md:text-6xl font-semibold text-center md:text-left tracking-tight text-white">
            Contact Us
        </h1>
        <p className="text-xl text-balance font-medium text-pretty text-center md:text-left text-white">
            We're here to help you with any questions or concerns you may have.
        </p>
        </div>
    <div className="flex flex-col justify-center items-center gap-4 h-auto lg:max-w-2xl">
        <ContactForm />
    </div>
    </div>
  )
}