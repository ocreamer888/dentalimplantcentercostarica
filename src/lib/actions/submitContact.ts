'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'
import { sendContactNotification } from '@/lib/email'

export async function submitContact(formData: {
  name: string
  email: string
  subject: string
  message?: string
}) {
  try {
    console.log('Starting contact submission...', formData);
    
    const supabase = getSupabaseClient()
    console.log('Supabase client created');
    
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message || null,
        status: 'pending'
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, message: error.message || 'Database error occurred' }
    }

    console.log('Contact submitted successfully:', data);

    // Send email notification to staff
    console.log('About to send email notification...');
    try {
      await sendContactNotification({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message || 'No additional message provided'
      });
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the form submission if email fails
    }

    return { success: true, data }
  } catch (err) {
    console.error('Unexpected error:', err);
    return { success: false, message: 'Unexpected error occurred' }
  }
} 