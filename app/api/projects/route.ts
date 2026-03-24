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

// GET /api/projects - Fetch all projects with optional filtering
export async function GET(request: NextRequest) {
  try {
    await ensureDatabase();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    let sql = 'SELECT * FROM projects';
    const params: any[] = [];
    const conditions: string[] = [];

    if (category && category !== 'All') {
      conditions.push('category = ?');
      params.push(category);
    }

    if (featured === 'true') {
      conditions.push('featured = true');
    }

    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
    }

    sql += ' ORDER BY display_order ASC, created_at DESC';

    const projects = await query(sql, params) as any[];

    // Parse JSON technologies for each project
    const processedProjects = projects.map((project: any) => ({
      ...project,
      technologies: typeof project.technologies === 'string'
        ? JSON.parse(project.technologies)
        : project.technologies || [],
    }));

    return NextResponse.json({
      success: true,
      data: processedProjects,
      count: processedProjects.length,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return sample data for fallback
    const sampleProjects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built using Next.js, Node.js, and PostgreSQL.",
        category: "Web Application",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
        image_url: null,
        project_url: "#",
        github_url: "#"
      },
      {
        id: 2,
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates, Kanban boards, time tracking, and team collaboration features.",
        category: "Productivity",
        technologies: ["React", "TypeScript", "GraphQL", "MongoDB", "Socket.io"],
        image_url: null,
        project_url: "#",
        github_url: "#"
      },
      {
        id: 3,
        title: "Healthcare Portal",
        description: "Secure patient management system with appointment scheduling, medical records, and telemedicine capabilities. HIPAA compliant.",
        category: "Web Application",
        technologies: ["Vue.js", "Python", "Django", "AWS", "Docker"],
        image_url: null,
        project_url: "#",
        github_url: "#"
      },
      {
        id: 4,
        title: "Social Media Dashboard",
        description: "Analytics platform for social media managers to track engagement, schedule posts, and generate reports across multiple platforms.",
        category: "Analytics",
        technologies: ["React", "Node.js", "Chart.js", "MySQL", "AWS"],
        image_url: null,
        project_url: "#",
        github_url: "#"
      },
      {
        id: 5,
        title: "Real Estate Listing Platform",
        description: "Property listing website with advanced search filters, virtual tours, mortgage calculator, and agent contact system.",
        category: "Web Application",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox", "AWS S3"],
        image_url: null,
        project_url: "#",
        github_url: "#"
      },
      {
        id: 6,
        title: "AI Content Generator",
        description: "AI-powered content generation tool for marketing copy, blog posts, and social media content using GPT integration.",
        category: "AI/ML",
        technologies: ["Python", "FastAPI", "OpenAI", "React", "Redis"],
        image_url: null,
        project_url: "#",
        github_url: "#"
      }
    ];

    return NextResponse.json({
      success: true,
      data: sampleProjects,
      count: sampleProjects.length,
    });
  }
}

// POST /api/projects - Create a new project (admin functionality)
export async function POST(request: NextRequest) {
  try {
    await ensureDatabase();

    const body = await request.json();
    const {
      title,
      description,
      category,
      image_url,
      project_url,
      github_url,
      technologies,
      featured = false,
      display_order = 0,
    } = body;

    // Validation
    if (!title || !description) {
      return NextResponse.json(
        {
          success: false,
          error: 'Title and description are required',
        },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO projects (
        title, description, category, image_url, project_url, github_url,
        technologies, featured, display_order
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      title,
      description,
      category || null,
      image_url || null,
      project_url || null,
      github_url || null,
      JSON.stringify(technologies || []),
      featured,
      display_order,
    ];

    await query(sql, params);

    return NextResponse.json({
      success: true,
      message: 'Project created successfully',
    });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create project',
      },
      { status: 500 }
    );
  }
}
