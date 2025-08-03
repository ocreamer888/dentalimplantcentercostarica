// src/lib/actions/estimateForm.ts
'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'

// Test function to check Supabase connection
export async function testSupabaseConnection() {
  try {
    const supabase = getSupabaseClient()
    
    // Try a simple query to test the connection
    const { error } = await supabase
      .from('estimate_requests')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Supabase connection test failed:', error)
      return { success: false, error: error.message }
    }
    
    return { success: true, message: 'Supabase connection successful' }
  } catch (error) {
    console.error('Supabase connection test error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

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
    
    // Check if environment variables are properly set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Missing Supabase environment variables')
      return { success: false, message: 'Server configuration error' }
    }

    const { data, error } = await supabase
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

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, message: `Database error: ${error.message}` }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error in submitEstimate:', error)
    return { success: false, message: 'Unexpected error occurred' }
  }
}
