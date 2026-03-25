"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "NLP-Based Answer Evaluation System",
      description: "Built AI-powered backend using NLP and cosine similarity for automated answer evaluation. Designed REST APIs for concurrent processing of large-scale responses. Implemented scalable evaluation engine with quality metrics and real-time feedback mechanisms.",
      category: "Backend",
      technologies: ["NLP", "Cosine Similarity", "REST APIs", "FastAPI", "Python", "Concurrent Processing"],
      image: "📝",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Inventory Management System",
      description: "Developed backend using Django REST APIs with React integration. Simplified complex data flows into efficient and user-friendly APIs. Implemented inventory tracking, stock management, and real-time synchronization between frontend and backend.",
      category: "Backend",
      technologies: ["Django", "REST APIs", "React", "PostgreSQL", "Real-time Updates", "System Design"],
      image: "📦",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Content Generation Backend",
      description: "Integrated LLM APIs (OpenAI/Hugging Face) into backend workflows for content generation and evaluation. Designed structured prompts to generate consistent JSON outputs with validation. Built microservices for summarization, evaluation, and automation workflows.",
      category: "GenAI",
      technologies: ["LLM APIs", "Django", "OpenAI", "Hugging Face", "JSON Optimization", "Microservices"],
      image: "🤖",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "High-Performance REST API Framework",
      description: "Designed and implemented scalable REST API framework using FastAPI for handling concurrent requests. Optimized query performance with database indexing and caching. Implemented request validation, error handling, and comprehensive logging for production-grade systems.",
      category: "Backend",
      technologies: ["FastAPI", "Redis", "PostgreSQL", "Performance Optimization", "Caching", "Logging"],
      image: "⚡",
      projectUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Data Processing Pipeline",
      description: "Developed scalable healthcare backend system for processing sensitive patient data. Designed APIs for dynamic workflows and questionnaire systems. Implemented data validation, security compliance, and performance optimization achieving 30% latency reduction.",
      category: "Backend",
      technologies: ["Django", "REST APIs", "Healthcare Data", "PostgreSQL", "Security", "Performance"],
      image: "🏥",
      projectUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Backend", "GenAI"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 mr-4 text-slate-600 dark:text-slate-400">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${filter === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.projectUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-slate-500 dark:text-slate-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
