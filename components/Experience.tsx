"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Trophy } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "AI Computer Science Engineer (Freelancer)",
      company: "Drytis Inc.",
      location: "United States · Remote",
      period: "Feb 2026 - Present",
      description: [
        "Integrated LLM APIs (OpenAI/Hugging Face) into backend workflows for content generation and evaluation systems",
        "Designed structured prompts to generate consistent JSON outputs, improving response reliability",
        "Built AI-powered backend services for summarization, evaluation, and automation workflows",
        "Optimized LLM responses using prompt tuning and output validation techniques",
        "Debugged and improved performance of REST APIs and backend systems",
      ]
    },
    {
      type: "work",
      title: "Software Engineer",
      company: "Aster DM Healthcare",
      location: "Gurugram, India",
      period: "Jul 2025 - Dec 2025",
      description: [
        "Developed scalable backend services using Django REST Framework for healthcare applications",
        "Designed APIs for dynamic patient workflows and questionnaire-based systems",
        "Reduced API response latency by ~30% through query optimization and efficient data validation",
        "Built secure and reliable backend systems handling sensitive healthcare data",
      ]
    },
    {
      type: "work",
      title: "Software Engineer (Freelancer)",
      company: "Remote",
      location: "United States · Remote",
      period: "Jan 2025 - Jun 2025",
      description: [
        "Built backend-heavy applications using Django and AWS infrastructure",
        "Developed REST APIs and optimized backend performance for scalable deployments",
        "Integrated frontend (React) with backend services for real-time applications",
      ]
    },
    {
      type: "work",
      title: "Software Engineer",
      company: "Ciena India Pvt Ltd",
      location: "Gurugram, India",
      period: "Jan 2022 - Jul 2024",
      description: [
        "Developed microservices using Django REST Framework",
        "Reduced deployment time by implementing CI/CD pipelines using GitHub Actions and Jenkins",
        "Worked with AWS (EC2, S3, IAM) for deployment and infrastructure",
        "Designed reusable backend components improving maintainability",
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      school: "National Institute of Technology Kurukshetra Haryana",
      location: "Haryan, India",
      period: "2019 - 2022",
      description: "Graduated with comprehensive knowledge in software development, algorithms, and data structures"
    }
  ];

  const certifications = [
    {
      name: "Full Stack Development with Generative AI",
      issuer: "BossCoder Academy",
      year: "2024 - 2025"
    }
  ];

  const achievements = [
    {
      title: "800+ LeetCode Problems Solved",
      description: "Strong problem-solving foundation with master-level algorithms and data structures expertise",
      link: "https://leetcode.com/u/RamdeoYadav/"
    },
    {
      title: "NIMCET AIR 332",
      description: "Achieved All India Rank 332 in National Institute of Technology Entrance Test"
    },
    {
      title: "Research Paper Published",
      description: "Research paper published in EPRA Journal in computer science domain"
    },
    {
      title: "Backend Performance Optimization",
      description: "Consistently optimized systems achieving 30%+ improvements in API latency and throughput"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Professional Experience
              </h3>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </motion.div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    {edu.location}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {cert.name}
                  </h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      {cert.issuer}
                    </span>
                    <span className="text-orange-600 dark:text-orange-400 font-medium">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 mb-6 mt-8"
            >
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl text-white">
                <Trophy size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Achievements
              </h3>
            </motion.div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500"
                >
                  {achievement.link ? (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-1 inline-block"
                    >
                      {achievement.title}
                    </a>
                  ) : (
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {achievement.title}
                    </h4>
                  )}
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
