'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'

export async function submitContact(formData: {
  name: string
  email: string
  subject: string
  message?: string
}) {
  try {
    const supabase = getSupabaseClient()
    const { data } = await supabase
      .from('contact_messages')
      .insert([{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message || null,
        status: 'pending'
      }])
      .select()

    return { success: true, data }
  } catch {
    return { success: false, message: 'Unexpected error occurred' }
  }
} 