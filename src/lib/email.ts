import { Resend } from 'resend';

// Check if API key exists
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.warn('RESEND_API_KEY is not set. Email functionality will be disabled.');
}

const resend = apiKey ? new Resend(apiKey) : null;

export interface EstimateEmailData {
  name: string;
  email: string;
  phone: string;
  country?: string;
  treatment: string;
  message?: string;
  preferredContact: string;
  visitDate?: string;
  images: Array<{
    original_name: string;
    public_url: string;
    file_size: number;
    mime_type: string;
  }>;
}

export async function sendEstimateEmail(data: EstimateEmailData) {
  // If Resend is not configured, log to console for development
  if (!resend) {
    console.log('📧 ESTIMATE REQUEST RECEIVED (Email service not configured):');
    console.log('Patient:', data.name);
    console.log('Email:', data.email);
    console.log('Phone:', data.phone);
    console.log('Treatment:', data.treatment);
    console.log('Message:', data.message);
    console.log('Images:', data.images.length);
    
    // In development, you might want to throw an error to see it in the UI
    if (process.env.NODE_ENV === 'development') {
      throw new Error('Email service not configured. Check console for details.');
    }
    
    // In production, you might want to fail silently or use a fallback
    return { id: 'console-log' };
  }

  // Log the recipient email for debugging
  const recipientEmail = process.env.NOTIFICATION_EMAIL || 'your-email@example.com';
  console.log('📧 Sending email to:', recipientEmail);

  // Add this helper function at the top of sendEstimateEmail
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  try {
    // Prepare attachments by downloading images from Supabase
    const attachments = [];
    
    if (data.images.length > 0) {
      console.log('📎 Preparing image attachments...');
      
      for (const img of data.images) {
        try {
          console.log(` Downloading: ${img.original_name}`);
          
          const response = await fetch(img.public_url);
          if (response.ok) {
            const buffer = await response.arrayBuffer();
            const base64 = Buffer.from(buffer).toString('base64');
            
            attachments.push({
              filename: img.original_name,
              content: base64,
              encoding: 'base64',
              contentType: img.mime_type || 'image/png',
            });
            
            console.log(`✅ Downloaded: ${img.original_name} (${formatFileSize(img.file_size)})`);
          } else {
            console.warn(`⚠️ Failed to download ${img.original_name}: HTTP ${response.status}`);
          }
        } catch (downloadError) {
          console.warn(`⚠️ Failed to download image ${img.original_name}:`, downloadError);
          // Continue with other images
        }
      }
      
      console.log(`📎 Total attachments prepared: ${attachments.length}`);
    }

    const { data: emailResult, error } = await resend.emails.send({
      from: 'Dental Implant Center Costa Rica <noreply@dentalimplantcentercostarica.com>',
      to: [recipientEmail],
      subject: `New Estimate Request: ${data.name} - ${data.treatment}`,
      html: generateEstimateEmailHTML(data),
      attachments,
    });

    if (error) {
      console.error('Email sending failed:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('✅ Email sent successfully to:', recipientEmail);
    console.log(`📎 Email includes ${attachments.length} image attachments`);
    return emailResult;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
}

function generateEstimateEmailHTML(data: EstimateEmailData): string {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Estimate Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #7c3aed; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .section { margin-bottom: 20px; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; }
        .images-section { margin-bottom: 20px; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; background: #f8fafc; }
        .images-header { text-align: center; margin-bottom: 15px; }
        .images-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px; }
        .image-item { text-align: center; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; background: white; }
        .image-item img { max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .footer { margin-top: 30px; padding: 15px; background: #f9fafb; border-radius: 8px; text-align: center; color: #6b7280; }
        .attachment-notice { background: #e0f2fe; border: 1px solid #0288d1; border-radius: 6px; padding: 12px; margin: 15px 0; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🦷 New Estimate Request</h1>
          <p>A new dental estimate request has been submitted</p>
        </div>

        <div class="section">
          <h2>👤 Patient Information</h2>
          <div><span class="label">Name:</span> <div class="value">${data.name}</div></div>
          <div><span class="label">Email:</span> <div class="value">${data.email}</div></div>
          <div><span class="label">Phone:</span> <div class="value">${data.phone}</div></div>
          <div><span class="label">Country:</span> <div class="value">${data.country || 'Not specified'}</div></div>
        </div>

        <div class="section">
          <h2>🦷 Treatment Details</h2>
          <div><span class="label">Treatment Requested:</span> <div class="value">${data.treatment}</div></div>
          <div><span class="label">Preferred Contact Method:</span> <div class="value">${data.preferredContact}</div></div>
          <div><span class="label">Preferred Visit Date:</span> <div class="value">${formatDate(data.visitDate)}</div></div>
        </div>

        ${data.message ? `
        <div class="section">
          <h2> Additional Message</h2>
          <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
        </div>
        ` : ''}

        ${data.images.length > 0 ? `
        <div class="images-section">
          <div class="images-header">
            <h2> Submitted Images (${data.images.length})</h2>
            <p style="color: #6b7280; margin: 8px 0;">Images are attached to this email for easy download</p>
          </div>
          
          <div class="attachment-notice">
            <strong>📎 Image Attachments:</strong> Each image is attached to this email as a downloadable file. 
            You can save them directly to your computer for detailed review.
          </div>

          <div class="images-grid">
            ${data.images.map(img => `
              <div class="image-item">
                <img src="${img.public_url}" alt="${img.original_name}" style="max-width: 100%; height: auto;">
                <div style="margin-top: 12px;">
                  <div style="font-size: 13px; color: #374151; font-weight: 500;">${img.original_name}</div>
                  <div style="font-size: 11px; color: #6b7280; margin-top: 4px;">${formatFileSize(img.file_size)}</div>
                  <div style="font-size: 10px; color: #9ca3af; margin-top: 2px;">Click to view full size</div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 6px;">
            <p style="margin: 0; color: #0369a1;">
              <strong>💡 Tip:</strong> The images above are also attached as downloadable files to this email. 
              Check your email client's attachment section to save them.
            </p>
          </div>
        </div>
        ` : ''}

        <div class="footer">
          <p>This email was sent automatically from your dental implant center website.</p>
          <p>Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// ADD this new function at the end of the file
export async function sendContactNotification(contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const staffEmail = process.env.NOTIFICATION_EMAIL || 'your-staff-email@yourdomain.com';
  
  if (!staffEmail || staffEmail === 'your-staff-email@yourdomain.com') {
    throw new Error('NOTIFICATION_EMAIL not configured in environment variables');
  }

  // Add this check for resend
  if (!resend) {
    console.warn('RESEND_API_KEY not configured. Email notification skipped.');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Dental Implant Center Costa Rica <ivan@dentalimplantcentercostarica.com>',
      to: [staffEmail],
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #6b7280;">${contactData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #6b7280;">
                  <a href="mailto:${contactData.email}" style="color: #3b82f6; text-decoration: none;">
                    ${contactData.email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 8px 0; color: #6b7280;">${contactData.subject}</td>
              </tr>
            </table>
          </div>
          
          ${contactData.message ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Message</h3>
            <p style="color: #78350f; line-height: 1.6; margin: 0;">${contactData.message}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Quick Actions</h3>
            <p style="color: #1e3a8a; margin: 0;">
              • <a href="mailto:${contactData.email}?subject=Re: ${contactData.subject}" style="color: #3b82f6; text-decoration: none;">Reply directly to patient</a><br>
              • <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin/contact-messages" style="color: #3b82f6; text-decoration: none;">View in admin dashboard</a><br>
              • Mark as contacted when you follow up
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This notification was sent automatically by your contact form system.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend API error:', error);
      // Fix: Handle undefined error.message
      const errorMessage = error.message || 'Unknown email error';
      throw new Error(`Failed to send email: ${errorMessage}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}
