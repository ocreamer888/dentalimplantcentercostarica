# Supabase Setup Guide for Dental Implant Center Costa Rica

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Database Setup

### 1. Create the `estimate_requests` table

Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE estimate_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT,
  treatment TEXT NOT NULL,
  visit_date DATE,
  preferred_contact TEXT DEFAULT 'email',
  message TEXT,
  status TEXT DEFAULT 'pending',
  priority TEXT DEFAULT 'normal',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE estimate_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for all users" ON estimate_requests
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow reads for authenticated users" ON estimate_requests
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 2. Create the `estimate_images` table

Run this SQL to create the table for storing image metadata:

```sql
CREATE TABLE estimate_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  estimate_id UUID REFERENCES estimate_requests(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  public_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE estimate_images ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for all users" ON estimate_images
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow reads for authenticated users" ON estimate_images
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 3. Create the Storage Bucket

1. Go to your Supabase dashboard
2. Navigate to Storage
3. Create a new bucket called `estimate-images`
4. Set the bucket to public (or configure appropriate policies)

### 4. Storage Bucket Policies

Run this SQL to allow public uploads to the bucket:

```sql
-- Allow public uploads to estimate-images bucket
CREATE POLICY "Allow public uploads" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'estimate-images');

-- Allow public reads from estimate-images bucket
CREATE POLICY "Allow public reads" ON storage.objects
  FOR SELECT USING (bucket_id = 'estimate-images');
```

### 5. Create Database Indexes

Run these SQL commands to optimize query performance:

```sql
-- Index for filtering by status (pending, completed, contacted, etc.)
CREATE INDEX idx_estimate_requests_status ON estimate_requests(status);

-- Index for sorting and filtering by creation date
CREATE INDEX idx_estimate_requests_created_at ON estimate_requests(created_at);

-- Index for filtering by treatment type
CREATE INDEX idx_estimate_requests_treatment ON estimate_requests(treatment);

-- Index for filtering by priority level
CREATE INDEX idx_estimate_requests_priority ON estimate_requests(priority);

-- Index for the estimate_images foreign key relationship
CREATE INDEX idx_estimate_images_estimate_id ON estimate_images(estimate_id);
```

## Project-Specific Features

### Treatment Types
Your application supports various dental treatments. The `treatment` field should contain values like:
- "Implantes Dentales"
- "All-on-4"
- "All-on-6"
- "Coronas Dentales"
- "Puentes Dentales"
- "Prótesis Dentales"

### Priority Levels
The system supports priority levels for estimate requests:
- `normal` - Standard priority
- `high` - Urgent cases
- `low` - Non-urgent consultations

### Contact Preferences
Patients can specify their preferred contact method:
- `email` - Email communication
- `phone` - Phone calls
- `whatsapp` - WhatsApp messaging

## File Structure

Your project uses the following Supabase-related files:

- `src/lib/supabase.ts` - Main Supabase client configuration
- `src/lib/supabaseClient.ts` - Helper function for creating Supabase clients
- `src/lib/actions/estimateForm.ts` - Server action for handling estimate form submissions
- `src/lib/schemas.ts` - Zod schemas for form validation

## Common Issues

### Empty Error Object `{}`
This usually means:
1. **Missing environment variables** - Check your `.env.local` file
2. **RLS blocking the operation** - Ensure policies allow the operation
3. **Table doesn't exist** - Create the table first

### 404 Errors
- Storage bucket doesn't exist
- Wrong bucket name

### 401/403 Errors
- Missing or incorrect API key
- RLS policies blocking the operation

### Image Upload Issues
- Check storage bucket permissions
- Verify bucket name matches `estimate-images`
- Ensure file size limits are appropriate

## Testing

After setup, test the form submission and check the browser console for detailed error messages. You can also use the built-in test function:

```typescript
// Test Supabase connection
import { testSupabaseConnection } from '@/lib/actions/estimateForm';

const result = await testSupabaseConnection();
console.log(result);
```

## Database Indexes Explanation

The indexes you've created will significantly improve your estimate management system's performance:

### 1. **Status Index** (`idx_estimate_requests_status`)
Fast filtering by estimate status for admin dashboard and reporting.

### 2. **Created At Index** (`idx_estimate_requests_created_at`)
Efficient sorting and date-based filtering for recent estimates and time-based reports.

### 3. **Treatment Index** (`idx_estimate_requests_treatment`)
Quick filtering by dental treatment type for specialist assignment and treatment analysis.

### 4. **Priority Index** (`idx_estimate_requests_priority`)
Fast filtering by priority level for urgent case management.

### 5. **Estimate Images Index** (`idx_estimate_images_estimate_id`)
Optimized lookups for retrieving images associated with specific estimates.

## Performance Benefits

**Without Indexes**: Queries scan entire tables (slow)
**With Indexes**: Queries use fast lookup structures (very fast)

- **Dashboard Performance**: Admin dashboard loads instantly
- **Search Speed**: Finding specific estimates is lightning fast
- **Reporting**: Generate reports quickly without waiting
- **User Experience**: Patients don't experience delays
- **Scalability**: Performance stays good as you grow

These indexes will make your dental practice's estimate management system fast and responsive, which is crucial for providing excellent patient service! 