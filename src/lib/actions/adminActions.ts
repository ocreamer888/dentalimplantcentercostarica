'use server'

import { getSupabaseClient } from '@/lib/supabaseClient'

export async function getContactMessages() {
  try {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching messages:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: errorMessage }
  }
}

export async function updateMessageStatus(messageId: string, status: string) {
  try {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', messageId)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error updating status:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: errorMessage }
  }
}

export async function addInternalNote(messageId: string, note: string) {
  try {
    const supabase = getSupabaseClient()
    
    // Get current notes
    const { data: current } = await supabase
      .from('contact_messages')
      .select('internal_notes')
      .eq('id', messageId)
      .single()

    const currentNotes = current?.internal_notes || []
    const newNotes = [...currentNotes, {
      note,
      timestamp: new Date().toISOString(),
      user: 'admin' // You can add user authentication later
    }]

    const { data, error } = await supabase
      .from('contact_messages')
      .update({ 
        internal_notes: newNotes,
        updated_at: new Date().toISOString()
      })
      .eq('id', messageId)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error adding note:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return { success: false, error: errorMessage }
  }
}
