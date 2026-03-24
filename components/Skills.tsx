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
  'Frontend': <Code2 size={32} />,
  'Development': <Braces size={32} />,
  'Database': <Database size={32} />,
  'Tools & Methods': <Wrench size={32} />,
};

const categoryColors: Record<string, string> = {
  'Frontend': 'blue',
  'Development': 'purple',
  'Database': 'green',
  'Tools & Methods': 'orange',
};

const colorClasses: Record<string, string> = {
  'blue': 'from-blue-500 to-blue-600',
  'purple': 'from-purple-500 to-purple-600',
  'green': 'from-green-500 to-green-600',
  'orange': 'from-orange-500 to-orange-600',
};

export default function Skills() {
  // Static skills data as fallback
  const skills: Skill[] = [
    { id: 1, name: 'Python', category: 'Development', level: 90 },
    { id: 2, name: 'Django', category: 'Development', level: 85 },
    { id: 3, name: 'JavaScript', category: 'Frontend', level: 85 },
    { id: 4, name: 'jQuery', category: 'Frontend', level: 80 },
    { id: 5, name: 'MySQL', category: 'Database', level: 85 },
    { id: 6, name: 'RESTful APIs', category: 'Development', level: 88 },
    { id: 7, name: 'HTML', category: 'Frontend', level: 90 },
    { id: 8, name: 'CSS', category: 'Frontend', level: 85 },
    { id: 9, name: 'Git', category: 'Tools & Methods', level: 80 },
    { id: 10, name: 'API Documentation', category: 'Tools & Methods', level: 82 },
  ];

  // Group skills by category
  const groupedSkills: Record<string, Skill[]> = {};
  skills.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  // Get unique categories and sort them
  const categories = Object.keys(groupedSkills).sort();

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
