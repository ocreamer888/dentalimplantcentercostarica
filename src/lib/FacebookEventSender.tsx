'use client';
import { useState } from 'react';

export default function FacebookEventSender() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sendConversion = async () => {
    console.log('Sending conversion with:', { email, phone });
    
    const res = await fetch('/api/facebook-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: 'Lead',
        email,
        phone,
        custom_data: {
          content_name: 'Dental Implants',
          currency: 'USD',
          value: 50
        }
      })
    });

    const data = await res.json();
    console.log('API Response:', data);
    
    if (data.success) {
      alert('Evento enviado correctamente a Facebook 🎯');
    } else {
      console.error('Error:', data.error);
      alert('Error al enviar evento a Facebook');
    }
  };

  return (
    <div className="p-4 border rounded shadow max-w-md mx-auto">
      <h2 className="text-xl mb-2">Simular Evento Facebook</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={sendConversion} className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar Evento
      </button>
    </div>
  );
}
