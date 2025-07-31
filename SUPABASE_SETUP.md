# Supabase Setup Guide

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
  images JSONB DEFAULT '[]',
  message TEXT,
  status TEXT DEFAULT 'pending',
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

### 2. Create the Storage Bucket

1. Go to your Supabase dashboard
2. Navigate to Storage
3. Create a new bucket called `estimate-images`
4. Set the bucket to public (or configure appropriate policies)

### 3. Storage Bucket Policies

Run this SQL to allow public uploads to the bucket:

```sql
-- Allow public uploads to estimate-images bucket
CREATE POLICY "Allow public uploads" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'estimate-images');

-- Allow public reads from estimate-images bucket
CREATE POLICY "Allow public reads" ON storage.objects
  FOR SELECT USING (bucket_id = 'estimate-images');
```

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

## Testing

After setup, test the form submission and check the browser console for detailed error messages. 

## Database Indexes Explanation

The three lines you've selected create **database indexes** on your `estimate_requests` table:

```sql
CREATE INDEX idx_estimate_requests_status ON estimate_requests(status);
CREATE INDEX idx_estimate_requests_created_at ON estimate_requests(created_at);
CREATE INDEX idx_estimate_requests_treatment ON estimate_requests(treatment);
```

### What are Database Indexes?

Think of indexes like the index in a book - instead of reading every page to find information, you can quickly look up what you need. Database indexes work the same way - they create a fast lookup structure for specific columns.

### Why These Indexes Matter for Your Dental Practice:

#### 1. **Status Index** (`idx_estimate_requests_status`)
```sql
CREATE INDEX idx_estimate_requests_status ON estimate_requests(status);
```

**Purpose**: Fast filtering by estimate status
**Use Cases**:
- Find all "pending" estimates that need review
- Show only "completed" estimates in reports
- Filter by "contacted" status for follow-up tracking

**Example Queries**:
```sql
-- Fast query to find pending estimates
SELECT * FROM estimate_requests WHERE status = 'pending';

-- Count estimates by status
SELECT status, COUNT(*) FROM estimate_requests GROUP BY status;
```

#### 2. **Created At Index** (`idx_estimate_requests_created_at`)
```sql
CREATE INDEX idx_estimate_requests_created_at ON estimate_requests(created_at);
```

**Purpose**: Fast sorting and filtering by date
**Use Cases**:
- Show newest estimates first
- Find estimates from last week/month
- Generate time-based reports
- Archive old estimates

**Example Queries**:
```sql
-- Get recent estimates (last 7 days)
SELECT * FROM estimate_requests 
WHERE created_at >= NOW() - INTERVAL '7 days';

-- Sort by newest first
SELECT * FROM estimate_requests 
ORDER BY created_at DESC;
```

#### 3. **Treatment Index** (`idx_estimate_requests_treatment`)
```sql
CREATE INDEX idx_estimate_requests_treatment ON estimate_requests(treatment);
```

**Purpose**: Fast filtering by dental treatment type
**Use Cases**:
- Find all "All-on-4" requests
- Generate treatment-specific reports
- Analyze which treatments are most popular
- Assign specialists based on treatment type

**Example Queries**:
```sql
-- Find all implant requests
SELECT * FROM estimate_requests 
WHERE treatment IN ('Implantes Dentales', 'All-on-4');

-- Count requests by treatment type
SELECT treatment, COUNT(*) FROM estimate_requests 
GROUP BY treatment;
```

### Performance Impact:

**Without Indexes**:
- Queries scan entire table (slow)
- 10,000 records = 10,000 row scans
- Response time: 500ms - 2 seconds

**With Indexes**:
- Queries use fast lookup (very fast)
- 10,000 records = ~10-20 index lookups
- Response time: 10-50ms

### Real-World Benefits for Your Dental Practice:

1. **Dashboard Performance**: Your admin dashboard loads instantly
2. **Search Speed**: Finding specific estimates is lightning fast
3. **Reporting**: Generate reports quickly without waiting
4. **User Experience**: Patients don't experience delays
5. **Scalability**: Performance stays good as you grow

### Storage Trade-off:

- **Cost**: Indexes take up extra storage space (~10-20% more)
- **Benefit**: Dramatically faster queries
- **Worth it**: Absolutely! The performance gain far outweighs the storage cost

### Best Practices Applied:

1. **Naming Convention**: `idx_tablename_columnname` makes indexes easy to identify
2. **Selective Indexing**: Only index columns you frequently query
3. **Composite Indexes**: Consider adding `(status, created_at)` if you often filter by both

These indexes will make your estimate management system fast and responsive, which is crucial for providing excellent patient service! 