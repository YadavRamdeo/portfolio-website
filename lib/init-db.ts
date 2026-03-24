import pool from './db';

async function initializeDatabase() {
  const connection = await pool.getConnection();

  try {
    // Create contact_submissions table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(200),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create projects table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(100),
        image_url VARCHAR(500),
        project_url VARCHAR(500),
        github_url VARCHAR(500),
        technologies JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create skills table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS skills (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(100),
        level INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database tables created successfully');

    // Insert sample projects
    const sampleProjects = [
      ['E-Commerce Platform', 'Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.', 'Web Application', null, '#', '#', JSON.stringify(['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'])],
      ['Task Management System', 'Collaborative project management tool with real-time updates, Kanban boards, and time tracking.', 'Productivity', null, '#', '#', JSON.stringify(['React', 'TypeScript', 'GraphQL', 'MongoDB', 'Socket.io'])],
      ['Healthcare Portal', 'Secure patient management system with appointment scheduling and telemedicine capabilities.', 'Web Application', null, '#', '#', JSON.stringify(['Vue.js', 'Python', 'Django', 'AWS', 'Docker'])],
      ['Social Media Dashboard', 'Analytics platform for social media managers to track engagement and schedule posts.', 'Analytics', null, '#', '#', JSON.stringify(['React', 'Node.js', 'Chart.js', 'MySQL', 'AWS'])],
      ['Real Estate Platform', 'Property listing website with advanced search filters and virtual tours.', 'Web Application', null, '#', '#', JSON.stringify(['Next.js', 'TypeScript', 'PostgreSQL', 'Mapbox', 'AWS S3'])],
      ['AI Content Generator', 'AI-powered content generation tool for marketing and social media.', 'AI/ML', null, '#', '#', JSON.stringify(['Python', 'FastAPI', 'OpenAI', 'React', 'Redis'])]
    ];

    for (const project of sampleProjects) {
      await connection.execute(
        'INSERT IGNORE INTO projects (title, description, category, image_url, project_url, github_url, technologies) VALUES (?, ?, ?, ?, ?, ?, ?)',
        project
      );
    }

    // Insert sample skills
    const sampleSkills = [
      ['React', 'Frontend', 95],
      ['Next.js', 'Frontend', 92],
      ['TypeScript', 'Frontend', 90],
      ['Vue.js', 'Frontend', 85],
      ['Tailwind CSS', 'Frontend', 92],
      ['Node.js', 'Backend', 92],
      ['Express', 'Backend', 90],
      ['Python', 'Backend', 85],
      ['Django', 'Backend', 80],
      ['GraphQL', 'Backend', 88],
      ['PostgreSQL', 'Database', 90],
      ['MySQL', 'Database', 92],
      ['MongoDB', 'Database', 85],
      ['Redis', 'Database', 82],
      ['AWS', 'DevOps', 88],
      ['Docker', 'DevOps', 85],
      ['Kubernetes', 'DevOps', 80],
      ['Git', 'Tools', 95],
      ['CI/CD', 'Tools', 90]
    ];

    for (const skill of sampleSkills) {
      await connection.execute(
        'INSERT IGNORE INTO skills (name, category, level) VALUES (?, ?, ?)',
        skill
      );
    }

    console.log('Sample data inserted successfully');

  } catch (error) {
    console.error('Database initialization error:', error);
  } finally {
    connection.release();
  }
}

// Run initialization if called directly
if (require.main === module) {
  initializeDatabase()
    .then(() => process.exit(0))
    .catch((error) => { console.error(error); process.exit(1); });
}

export default initializeDatabase;
