import pool from './db';

export async function seedDatabase() {
  try {
    console.log('Seeding database...');

    // Seed skills
    const skills = [
      // Frontend
      ['React', 'Frontend', 95, 'Code2', 1],
      ['Next.js', 'Frontend', 92, 'Code2', 2],
      ['TypeScript', 'Frontend', 90, 'Code2', 3],
      ['Tailwind CSS', 'Frontend', 95, 'Code2', 4],
      ['Vue.js', 'Frontend', 85, 'Code2', 5],
      ['HTML5/CSS3', 'Frontend', 95, 'Code2', 6],
      // Backend
      ['Node.js', 'Backend', 92, 'Braces', 1],
      ['Python', 'Backend', 88, 'Braces', 2],
      ['Express.js', 'Backend', 90, 'Braces', 3],
      ['Django', 'Backend', 82, 'Braces', 4],
      ['GraphQL', 'Backend', 85, 'Braces', 5],
      // Database
      ['PostgreSQL', 'Database', 90, 'Database', 1],
      ['MySQL', 'Database', 92, 'Database', 2],
      ['MongoDB', 'Database', 85, 'Database', 3],
      ['Redis', 'Database', 80, 'Database', 4],
      // DevOps
      ['AWS', 'DevOps', 85, 'Cloud', 1],
      ['Docker', 'DevOps', 88, 'Cloud', 2],
      ['Git', 'DevOps', 95, 'Cloud', 3],
      ['CI/CD', 'DevOps', 82, 'Cloud', 4],
    ];

    for (const skill of skills) {
      await pool.execute(
        'INSERT IGNORE INTO skills (name, category, proficiency, icon, display_order) VALUES (?, ?, ?, ?, ?)',
        skill
      );
    }

    // Seed projects
    const projects = [
      [
        'E-Commerce Platform',
        'Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
        'Web Application',
        null,
        'https://demo.example.com',
        'https://github.com/example/ecommerce',
        JSON.stringify(['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis']),
        true,
        1,
      ],
      [
        'Task Management System',
        'Collaborative project management tool with real-time updates, Kanban boards, time tracking, and team collaboration features.',
        'Productivity',
        null,
        'https://demo.example.com',
        'https://github.com/example/taskmanager',
        JSON.stringify(['React', 'TypeScript', 'GraphQL', 'MongoDB', 'Socket.io']),
        true,
        2,
      ],
      [
        'Healthcare Portal',
        'Secure patient management system with appointment scheduling, medical records, and telemedicine capabilities. HIPAA compliant.',
        'Web Application',
        null,
        'https://demo.example.com',
        'https://github.com/example/healthcare',
        JSON.stringify(['Vue.js', 'Python', 'Django', 'AWS', 'Docker']),
        true,
        3,
      ],
      [
        'Social Media Dashboard',
        'Analytics platform for social media managers to track engagement, schedule posts, and generate reports across multiple platforms.',
        'Analytics',
        null,
        'https://demo.example.com',
        'https://github.com/example/socialdash',
        JSON.stringify(['React', 'Node.js', 'Chart.js', 'MySQL', 'AWS']),
        false,
        4,
      ],
      [
        'Real Estate Listing Platform',
        'Property listing website with advanced search filters, virtual tours, mortgage calculator, and agent contact system.',
        'Web Application',
        null,
        'https://demo.example.com',
        'https://github.com/example/realestate',
        JSON.stringify(['Next.js', 'TypeScript', 'PostgreSQL', 'Mapbox', 'AWS S3']),
        false,
        5,
      ],
      [
        'AI Content Generator',
        'AI-powered content generation tool for marketing copy, blog posts, and social media content using GPT integration.',
        'AI/ML',
        null,
        'https://demo.example.com',
        'https://github.com/example/aicontent',
        JSON.stringify(['Python', 'FastAPI', 'OpenAI', 'React', 'Redis']),
        false,
        6,
      ],
    ];

    for (const project of projects) {
      await pool.execute(
        'INSERT IGNORE INTO projects (title, description, category, image_url, project_url, github_url, technologies, featured, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        project
      );
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Run if called directly
if (require.main === module) {
  seedDatabase().then(() => process.exit(0));
}
