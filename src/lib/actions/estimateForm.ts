// src/lib/actions/estimateForm.ts
'use server'

import { EstimateFormSchema, EstimateFormState } from '@/lib/schemas';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { revalidatePath } from 'next/cache';
import { sendEstimateEmail } from '@/lib/email';

export async function submitEstimate(
  prevState: EstimateFormState,
  formData: FormData
) {
  const supabase = getSupabaseClient();

  try {
    // Extract and validate text fields
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
    const uploadedImages: Array<{
      file_name: string;
      original_name: string;
      file_size: number;
      mime_type: string;
      storage_path: string;
      public_url: string;
    }> = [];

    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const imageFile = formData.get(`image-${i}`) as File;
        
        if (imageFile && imageFile.size > 0) {
          try {
            // Generate unique filename
            const fileExt = imageFile.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            
            // Upload to Supabase Storage
            const { error: uploadError } = await supabase.storage
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

            uploadedImages.push({
              file_name: fileName,
              original_name: imageFile.name,
              file_size: imageFile.size,
              mime_type: imageFile.type,
              storage_path: `estimate-images/${fileName}`,
              public_url: urlData.publicUrl
            });
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

    // Save estimate request to database
    const { data: estimateData, error: estimateError } = await supabase
      .from('estimate_requests')
      .insert([{ 
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        country: validatedData.country || null,
        treatment: validatedData.treatment,
        visit_date: validatedData.visitDate || null,
        preferred_contact: validatedData.preferredContact,
        message: validatedData.message || null,
        status: 'pending',
        priority: 'normal'
      }])
      .select()
      .single();

    if (estimateError) {
      console.error('Estimate request error details:', {
        error: estimateError,
        data: validatedData,
        table: 'estimate_requests'
      });
      return { 
        success: false, 
        message: `Database error: ${estimateError.message}`, 
        errors: {} 
      };
    }

    // Save image metadata if images were uploaded
    if (uploadedImages.length > 0) {
      const imageRecords = uploadedImages.map(img => ({
        estimate_id: estimateData.id,
        ...img
      }));

      const { error: imageError } = await supabase
        .from('estimate_images')
        .insert(imageRecords);

      if (imageError) {
        console.error('Image metadata error:', imageError);
        // Note: We don't fail here since the estimate was saved
        // Just log the error for debugging
      }
    }

    // Send email notification with all the data
    try {
      await sendEstimateEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        country: validatedData.country || undefined,
        treatment: validatedData.treatment,
        message: validatedData.message || undefined,
        preferredContact: validatedData.preferredContact,
        visitDate: validatedData.visitDate || undefined,
        images: uploadedImages.map(img => ({
          original_name: img.original_name,
          public_url: img.public_url,
          file_size: img.file_size,
          mime_type: img.mime_type,
        })),
      });
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the form submission if email fails
      // The data is already saved to the database
    }

    // Revalidate the page to show updated data
    revalidatePath('/free-estimate');

    return { 
      success: true, 
      message: 'Estimate request submitted successfully! You will receive a confirmation email shortly.', 
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
