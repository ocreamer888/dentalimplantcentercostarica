'use client';
import React from 'react';
import CardTwo from '../ui/CardTwo';

export default function TreatmentsD() {
  return (
    <div className='flex flex-col py-12 px-4 gap-4'>
    <div className='flex flex-col md:flex-row gap-4'>
    <CardTwo
        title="Dental Implants"
        description="Dental implants are the premier solution for replacing missing teeth. This effective and aesthetic treatment uses a titanium post, acting as a new root, to securely support a crown or bridge. At Dental Implant Center Costa Rica, our completely digital placement process ensures unmatched precision and safety, delivering a permanent and natural-looking smile with confidence."
        imageSrc="/images/icons/icon_treatment_1-1.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        buttonText="Free Estimate"
        cardButton="true"
        className="backdrop-blur-sm"
      />
      <CardTwo
        title="Dental Bridges"
        description="A dental bridge is a fixed dental restoration that replaces one or more missing teeth. It consists of one or more false teeth (prostheses) supported by adjacent natural teeth or implants. This restoration is designed to restore the appearance and function of the missing teeth, preventing the remaining teeth from shifting and maintaining proper bite alignment."
        imageSrc="/images/icons/icon_treatment_2.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        className="backdrop-blur-sm"
      />
    </div>
    <div className='flex flex-col md:flex-row gap-4'>
      <CardTwo
        title="All-on-6 Implants"
        description="All-on-6 implants are a comprehensive dental restoration solution that replaces an entire arch of teeth with a fixed bridge supported by 6 dental implants. This treatment is ideal for patients with severe tooth loss, providing a stable and long-lasting solution for a complete smile makeover."
        imageSrc="/images/icons/icon_treatment_3.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        className="backdrop-blur-sm"
      />
      <CardTwo
        title="All-on-4 Implants"
        description="All-on-4 implants are a comprehensive dental restoration solution that replaces an entire arch of teeth with a fixed bridge supported by 4 dental implants. This treatment is ideal for patients with severe tooth loss, providing a stable and long-lasting solution for a complete smile makeover."
        imageSrc="/images/icons/icon_treatment_4.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        className="backdrop-blur-sm"
      />
    </div>
    <div className='flex flex-col md:flex-row gap-4'>
      <CardTwo
        title="Dental Crowns"
        description="A dental crown is a dental restoration that completely covers a tooth, restoring its shape, size, and strength. It is typically made of porcelain or ceramic and is bonded to the tooth using a special adhesive. Crowns are used to restore the appearance and function of a tooth that has been damaged or weakened by decay, fractures, or other dental issues."
        imageSrc="/images/icons/icon_treatment_5.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        className="backdrop-blur-sm"
      />
      <CardTwo
        title="Dental Veneers"
        description="Dental veneers are thin, custom-made shells that are bonded to the front surface of teeth to improve their appearance. They are made from porcelain or composite resin and are designed to cover the front surface of the teeth, improving their shape, size, and color. Veneers are a popular cosmetic dental treatment that can be used to improve the appearance of teeth that are stained, chipped, or misaligned."
        imageSrc="/images/icons/icon_treatment_6.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        className="backdrop-blur-sm"
      />
    </div>
    <div className='flex flex-col md:flex-row gap-4'>
      <CardTwo
        title="Smile Makeover"
        description="A smile makeover is a comprehensive dental treatment plan that includes a combination of cosmetic and restorative procedures to improve the appearance of the teeth and smile. It typically includes a combination of dental veneers, crowns, and other cosmetic procedures to achieve a more aesthetically pleasing and functional smile."
        imageSrc="/images/icons/icon_treatment_7.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        className="backdrop-blur-sm"
      />
      <CardTwo
        title="Sedation"
        description="Sedation is a dental treatment that is used to help patients relax during dental procedures. It is typically performed by applying a sedative agent to the patient, which helps to reduce anxiety and pain. Sedation is a popular dental treatment that can be used to help patients relax during dental procedures."
        imageSrc="/images/icons/icon_treatment_8.webp"
        imageAlt="Dental Clinic"
        backgroundColor="bg-gradient-to-tl from-purple-900/90 via-purple-400/90 to-purple-400/80 md:bg-gradient-to-tl from-purple-300/90 via-purple-500/50 to-purple-400/80"
        className="backdrop-blur-sm"
      />
    </div>
    </div>
  );
}
