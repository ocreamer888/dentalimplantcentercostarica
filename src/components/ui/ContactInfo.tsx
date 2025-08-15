'use client';

export function ContactInfo() {
    return (

<div className="flex max-w-4xl min-h-auto relative overflow-hidden">
<div className="flex flex-col items-center justify-around bg-white/80 overflow-hidden rounded-3xl p-4">
  <h3 className="text-3xl font-semibold text-purple-900 mb-6">Contact Information</h3>
  
  <div className="flex flex-col w-full justify-start items-start text-start gap-8">
  <div className="flex flex-row items-around justify-around w-full">
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
    </div>
    <div className="flex flex-row items-around justify-around w-full">
    <div className="flex items-center justify-start md:items-start space-x-3">
      <span role="img" aria-label="Phone" className="text-purple-600 mt-1" style={{ fontSize: 20 }}>📞</span>
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
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-8 p-4 bg-purple-50/80 rounded-lg">
    <h4 className="font-semibold text-2xl md:text-4xl text-balance text-purple-800 mb-2">Why choose OG Center?</h4>
    <ul className="text-lg text-purple-700 space-y-1">
      <li>• Digital technology of the latest generation</li>
      <li>• Certified specialists</li>
      <li>• International dental tourism</li>
      <li>• More than 20 years of experience</li>
    </ul>
  </div>
</div>
</div>
);
}