import { NextRequest, NextResponse } from 'next/server';
import { query, initDatabase } from '@/lib/db';
import { validateEmail } from '@/lib/utils';

// Initialize database on first request
let dbInitialized = false;

async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase();
    dbInitialized = true;
  }
}

// POST /api/contact - Submit contact form
export async function POST(request: NextRequest) {
  try {
    await ensureDatabase();

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name, email, and message are required',
        },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name must be between 2 and 100 characters',
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide a valid email address',
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message must be between 10 and 2000 characters',
        },
        { status: 400 }
      );
    }

    // Validate subject if provided
    if (subject && subject.length > 200) {
      return NextResponse.json(
        {
          success: false,
          error: 'Subject must not exceed 200 characters',
        },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedSubject = subject ? subject.trim() : null;
    const sanitizedMessage = message.trim();

    // Insert into database
    const sql = `
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;

    const result = await query(sql, [sanitizedName, sanitizedEmail, sanitizedSubject, sanitizedMessage]);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      id: (result as any).insertId,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit contact form. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// GET /api/contact - Fetch all contact submissions (admin functionality)
export async function GET(request: NextRequest) {
  try {
    await ensureDatabase();

    const sql = 'SELECT * FROM contact_submissions ORDER BY created_at DESC';
    const submissions = await query(sql);

    return NextResponse.json({
      success: true,
      data: submissions,
      count: (submissions as any[]).length,
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch contact submissions',
      },
      { status: 500 }
    );
  }
}
