import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for estimate form
const EstimateSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  treatment: z.enum(['all-on-4', 'all-on-6', 'single-implant', 'multiple-implants']),
  message: z.string().optional(),
  images: z.array(z.string()).optional(),
});

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check - fix IP extraction
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    const now = Date.now();
    const rateLimit = rateLimitMap.get(ip);
    
    if (rateLimit && now < rateLimit.resetTime && rateLimit.count >= 5) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Reset rate limit if expired
    if (!rateLimit || now >= rateLimit.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    } else {
      rateLimit.count++;
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = EstimateSchema.parse(body);

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Integrate with CRM
    // 4. Log the submission

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Estimate request received successfully!',
      data: {
        id: `EST-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        ...validatedData
      }
    }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation failed',
        details: error.issues
      }, { status: 400 });
    }

    console.error('Estimate API error:', error);
    return NextResponse.json({
      error: 'Internal server error'
    }, { status: 500 });
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
