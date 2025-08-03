// src/lib/actions/estimateForm.ts
'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'

export async function submitEstimate(formData: {
  name: string
  email: string
  phone: string
  country?: string
  treatment: string
  message?: string
  preferredContact: string
  visitDate?: string
  images?: Array<{name: string, url: string, size: number}>
}) {
  try {
    const supabase = getSupabaseClient()
    const { data } = await supabase
  .from('estimate_requests')
  .insert([{
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    country: formData.country || null,
    treatment: formData.treatment,
    visit_date: formData.visitDate || null,
    preferred_contact: formData.preferredContact,
    images: formData.images || [],
    message: formData.message || null,
    status: 'pending'
  }])
  .select()

    return { success: true, data }
  } catch {
    return { success: false, message: 'Unexpected error occurred' }
  }
}
