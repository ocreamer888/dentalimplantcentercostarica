import { hashSHA256 } from '../../utils/hash';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { event_name, email, phone, custom_data } = req.body;
    console.log('Received request:', { event_name, email, phone, custom_data });

    const hashedEmail = email ? hashSHA256(email) : null;
    const hashedPhone = phone ? hashSHA256(phone) : null;
    console.log('Hashed data:', { hashedEmail, hashedPhone });

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          user_data: {
            em: hashedEmail ? [hashedEmail] : [],
            ph: hashedPhone ? [hashedPhone] : []
          },
          custom_data
        }
      ]
    };
    console.log('Facebook payload:', payload);

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PIXEL_ID}/events?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    const result = await response.json();
    console.log('Facebook API response:', result);

    if (!response.ok) {
      console.error('Error Facebook:', result);
      return res.status(500).json({ error: result.error || 'Error desconocido' });
    }

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Error interno:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}
