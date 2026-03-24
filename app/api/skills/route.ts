import { NextRequest, NextResponse } from 'next/server';
import { query, initDatabase } from '@/lib/db';

// Initialize database on first request
let dbInitialized = false;

async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase();
    dbInitialized = true;
  }
}

// GET /api/skills - Fetch all skills
export async function GET(request: NextRequest) {
  try {
    await ensureDatabase();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const grouped = searchParams.get('grouped');

    let sql = 'SELECT * FROM skills';
    const params: any[] = [];

    if (category) {
      sql += ' WHERE category = ?';
      params.push(category);
    }

    sql += ' ORDER BY display_order ASC, name ASC';

    const skills = await query(sql, params) as any[];

    if (grouped === 'true') {
      // Group skills by category
      const groupedSkills: Record<string, any[]> = {};
      skills.forEach((skill) => {
        if (!groupedSkills[skill.category]) {
          groupedSkills[skill.category] = [];
        }
        groupedSkills[skill.category].push(skill);
      });

      // Get unique categories
      const categories = await query(
        'SELECT DISTINCT category FROM skills ORDER BY category ASC'
      ) as any[];

      return NextResponse.json({
        success: true,
        data: groupedSkills,
        categories: categories.map((c) => c.category),
        count: skills.length,
      });
    }

    return NextResponse.json({
      success: true,
      data: skills,
      count: skills.length,
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    // Return sample data for fallback
    const sampleSkills = [
      { id: 1, name: "React", category: "Frontend", proficiency: 95, icon: "Code2" },
      { id: 2, name: "TypeScript", category: "Frontend", proficiency: 90, icon: "Code2" },
      { id: 3, name: "Node.js", category: "Backend", proficiency: 92, icon: "Braces" },
      { id: 4, name: "Python", category: "Backend", proficiency: 85, icon: "Braces" },
      { id: 5, name: "Tailwind CSS", category: "Frontend", proficiency: 95, icon: "Code2" },
      { id: 6, name: "PostgreSQL", category: "Database", proficiency: 88, icon: "Database" },
      { id: 7, name: "MySQL", category: "Database", proficiency: 90, icon: "Database" },
      { id: 8, name: "AWS", category: "DevOps", proficiency: 82, icon: "Cloud" },
    ];

    return NextResponse.json({
      success: true,
      data: sampleSkills,
      count: sampleSkills.length,
    });
  }
}

// POST /api/skills - Create a new skill (admin functionality)
export async function POST(request: NextRequest) {
  try {
    await ensureDatabase();

    const body = await request.json();
    const {
      name,
      category,
      proficiency = 50,
      icon,
      display_order = 0,
    } = body;

    // Validation
    if (!name || !category) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name and category are required',
        },
        { status: 400 }
      );
    }

    if (proficiency < 0 || proficiency > 100) {
      return NextResponse.json(
        {
          success: false,
          error: 'Proficiency must be between 0 and 100',
        },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO skills (name, category, proficiency, icon, display_order)
      VALUES (?, ?, ?, ?, ?)
    `;

    await query(sql, [name.trim(), category.trim(), proficiency, icon, display_order]);

    return NextResponse.json({
      success: true,
      message: 'Skill created successfully',
    });
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create skill',
      },
      { status: 500 }
    );
  }
}
