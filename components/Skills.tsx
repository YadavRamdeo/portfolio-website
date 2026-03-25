'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Braces, Wrench } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
}

const iconMap: Record<string, React.ReactNode> = {
  'Code2': <Code2 size={32} />,
  'Database': <Database size={32} />,
  'Braces': <Braces size={32} />,
  'Wrench': <Wrench size={32} />,
};

const defaultIcon = <Braces size={32} />;

const categoryIcons: Record<string, React.ReactNode> = {
  'GenAI': <Code2 size={32} />,
  'Backend': <Braces size={32} />,
  'Frontend': <Code2 size={32} />,
  'Database': <Database size={32} />,
  'Analytics': <Database size={32} />,
  'Cloud': <Database size={32} />,
  'DevOps': <Wrench size={32} />,
};

const categoryColors: Record<string, string> = {
  'GenAI': 'pink',
  'Backend': 'blue',
  'Frontend': 'purple',
  'Database': 'green',
  'Analytics': 'orange',
  'Cloud': 'orange',
  'DevOps': 'purple',
};

const colorClasses: Record<string, string> = {
  'blue': 'from-blue-500 to-blue-600',
  'purple': 'from-purple-500 to-purple-600',
  'green': 'from-green-500 to-green-600',
  'orange': 'from-orange-500 to-orange-600',
  'pink': 'from-pink-500 to-pink-600',
};

export default function Skills() {
  // Static skills data as fallback
  const skills: Skill[] = [
    // Languages & Core
    { id: 1, name: 'Python', category: 'Backend', level: 95 },
    { id: 2, name: 'JavaScript', category: 'Frontend', level: 85 },

    // Frontend Development
    { id: 27, name: 'React.js', category: 'Frontend', level: 85 },
    { id: 28, name: 'TypeScript', category: 'Frontend', level: 80 },
    { id: 29, name: 'Tailwind CSS', category: 'Frontend', level: 85 },
    { id: 30, name: 'HTML/CSS', category: 'Frontend', level: 90 },
    { id: 31, name: 'Responsive Design', category: 'Frontend', level: 85 },

    // Backend Development
    { id: 3, name: 'Django & DRF', category: 'Backend', level: 90 },
    { id: 4, name: 'FastAPI', category: 'Backend', level: 90 },
    { id: 5, name: 'Flask', category: 'Backend', level: 88 },
    { id: 6, name: 'REST APIs', category: 'Backend', level: 92 },
    { id: 7, name: 'Microservices Architecture', category: 'Backend', level: 85 },

    // Databases
    { id: 8, name: 'PostgreSQL & MySQL', category: 'Database', level: 90 },
    { id: 9, name: 'MongoDB', category: 'Database', level: 88 },
    { id: 10, name: 'Redis', category: 'Database', level: 85 },
    { id: 11, name: 'System Design', category: 'Database', level: 85 },

    // Cloud & DevOps
    { id: 12, name: 'AWS (EC2, S3, IAM)', category: 'Cloud', level: 85 },
    { id: 13, name: 'Docker & Containerization', category: 'Cloud', level: 85 },
    { id: 14, name: 'GitHub Actions', category: 'Cloud', level: 85 },
    { id: 15, name: 'Jenkins', category: 'Cloud', level: 80 },
    { id: 16, name: 'Git & Version Control', category: 'Cloud', level: 90 },
    { id: 17, name: 'Linux', category: 'Cloud', level: 85 },

    // GenAI & LLMs
    { id: 18, name: 'LLM APIs & Integration', category: 'GenAI', level: 90 },
    { id: 19, name: 'Prompt Engineering', category: 'GenAI', level: 88 },
    { id: 21, name: 'JSON Output Optimization', category: 'GenAI', level: 85 },
    { id: 23, name: 'AI-Powered Backend Workflows', category: 'GenAI', level: 85 },

    // Additional Concepts
    { id: 24, name: 'API Optimization', category: 'Analytics', level: 88 },
    { id: 25, name: 'Performance Optimization', category: 'Analytics', level: 88 },
    { id: 26, name: 'Scalable System Design', category: 'Analytics', level: 85 },
  ];

  // Group skills by category
  const groupedSkills: Record<string, Skill[]> = {};
  skills.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  // Get unique categories in desired order
  const categoryOrder = ['Backend', 'Frontend', 'Database', 'Cloud', 'GenAI', 'Analytics', 'DevOps'];
  const categories = categoryOrder.filter(cat => groupedSkills[cat]);

  // Get icon for category
  const getIconForCategory = (category: string) => {
    return categoryIcons[category] || defaultIcon;
  };

  // Get color for category
  const getColorForCategory = (category: string) => {
    return categoryColors[category] || 'blue';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[getColorForCategory(category)]} text-white`}>
                  {getIconForCategory(category)}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {category}
                </h3>
              </div>

              <div className="space-y-4">
                {groupedSkills[category].map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${colorClasses[getColorForCategory(category)]} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
