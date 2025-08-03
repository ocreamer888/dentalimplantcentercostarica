import React from 'react';

// Define the contactData array
const contactData = [
  {
    title: "Typical US Cost (hidden fees)",
    icon: "PhoneIcon", // You'll need to import the actual icon component
    description: "$50,000+ (procedures only)"
  },
  {
    title: "Our Price & Services",
    icon: "MapPinIcon", // You'll need to import the actual icon component
    description: "$14,950–$19,950, includes flights, med, sedations, accommodations, procedures"
  }
];

export default function KeySection() {
  return (
    <section className="relative bg-purple-200/80 shadow-lg py-24 rounded-3xl p-4 mx-4">
      <div className="flex flex-col justify-center items-center text-gray-800">
        <h1 className='text-xl'>
          Transparent Pricing
        </h1>
        <h2 className='text-3xl font-semibold'>What&apos;s Included?</h2>
        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center gap-8 mt-8 md:mt-20 px-4 md:px-20">
          {contactData.map(({ title, icon, description }) => (
            <div key={title} className="flex flex-col w-full h-[50vh] justify-center items-center text-center text-blue-gray-900 p-6 rounded-3xl bg-purple-800/20 shadow-lg">
              <div className="flex flex-col items-center justify-center mb-6 h-14 w-14 rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                {React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
              </div>
              <h5 className="mb-2 text-3xl font-semibold text-blue-gray">
                {title}
              </h5>
              <p className="font-normal text-balance text-pretty text-xl px-4 md:px-20 text-blue-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}