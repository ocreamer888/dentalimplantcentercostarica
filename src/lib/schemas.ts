import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

export const EstimateFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).max(100),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  country: z.string().optional(),
  treatment: z.string().min(1, { message: 'Please select a treatment.' }),
  message: z.string().max(5000, { message: 'Message cannot exceed 5000 characters.' }).optional(),
  preferredContact: z.enum(['email', 'phone', 'whatsapp']),
  visitDate: z.string().optional(),
  // It's better to validate files on the server when you implement a proper upload handler.
  // For now, we'll assume the client-side validation is a first line of defense.
  // The `images` array will be handled separately during the upload process.
});

export type EstimateFormState = {
  message: string;
  errors?: {
    [key in keyof z.infer<typeof EstimateFormSchema>]?: string[];
  };
  success: boolean;
}