import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'portfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export async function query(sql: string, params?: any[]) {
  const [results] = await pool.execute(sql, params);
  return results;
}

export async function initDatabase() {
  // Create contact_submissions table
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(200),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  // Create projects table
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS projects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      category VARCHAR(100),
      image_url VARCHAR(500),
      project_url VARCHAR(500),
      github_url VARCHAR(500),
      technologies JSON,
      featured BOOLEAN DEFAULT FALSE,
      display_order INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  // Create skills table
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS skills (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      category VARCHAR(50) NOT NULL,
      proficiency INT DEFAULT 50,
      icon VARCHAR(50),
      display_order INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  console.log('Database tables initialized successfully');
}

export default pool;
