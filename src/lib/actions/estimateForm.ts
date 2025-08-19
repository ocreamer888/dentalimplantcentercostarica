// src/lib/actions/estimateForm.ts
'use server'

import { EstimateFormSchema } from '@/lib/schemas';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

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

export async function submitEstimate(
  prevState: any,
  formData: FormData
) {
  const supabase = getSupabaseClient();

  try {
    // Extract text fields
    const validatedFields = EstimateFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      country: formData.get('country'),
      treatment: formData.get('treatment'),
      message: formData.get('message'),
      preferredContact: formData.get('preferredContact'),
      visitDate: formData.get('visitDate'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Validation failed. Please check the fields.',
        success: false,
      };
    }

    const { data: validatedData } = validatedFields;

    // Handle image uploads
    const imageCount = parseInt(formData.get('imageCount') as string) || 0;
    const uploadedImageUrls: string[] = [];

    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const imageFile = formData.get(`image-${i}`) as File;
        
        if (imageFile && imageFile.size > 0) {
          try {
            // Generate unique filename
            const fileExt = imageFile.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            
            // Upload to Supabase Storage
            const { data: uploadData, error: uploadError } = await supabase.storage
              .from('estimate-images')
              .upload(fileName, imageFile, {
                cacheControl: '3600',
                upsert: false
              });

            if (uploadError) {
              console.error('Image upload error:', uploadError);
              return { 
                success: false, 
                message: `Failed to upload image: ${uploadError.message}`, 
                errors: {} 
              };
            }

            // Get public URL
            const { data: urlData } = supabase.storage
              .from('estimate-images')
              .getPublicUrl(fileName);

            uploadedImageUrls.push(urlData.publicUrl);
          } catch (uploadError) {
            console.error('Image upload error:', uploadError);
            return { 
              success: false, 
              message: 'Failed to upload one or more images', 
              errors: {} 
            };
          }
        }
      }
    }

    // Save to database with image URLs
    const { data, error } = await supabase
      .from('estimate_requests')
      .insert([{ 
        ...validatedData, 
        visit_date: validatedData.visitDate, 
        preferred_contact: validatedData.preferredContact,
        image_urls: uploadedImageUrls.length > 0 ? uploadedImageUrls : null
      }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return { 
        success: false, 
        message: `Database error: Could not save the estimate.`, 
        errors: {} 
      };
    }

    // Revalidate the page to show updated data
    revalidatePath('/free-estimate');

    return { 
      success: true, 
      message: 'Estimate request submitted successfully!', 
      errors: {} 
    };
  } catch (error) {
    console.error('Unexpected error in submitEstimate:', error);
    return { 
      success: false, 
      message: 'An unexpected server error occurred.', 
      errors: {} 
    };
  }
}
