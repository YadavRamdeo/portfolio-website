'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 overflow-hidden"
          >
            <motion.span
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white rounded-full text-sm font-bold tracking-wide shadow-lg"
            >
              ✨ Welcome to my portfolio ✨
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="gradient-text">RAMDEO YADAV</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Software Engineer | GenAI Integration Specialist | Data Analyst
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="text-gray-700 dark:text-gray-300">Software Engineer with 3+ years of experience in </span>
              <motion.span
                animate={{ color: ["#3b82f6", "#8b5cf6", "#3b82f6"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-bold text-lg"
              >
                Django, REST API development, and Generative AI integration
              </motion.span>
              <span className="text-gray-700 dark:text-gray-300">. Skilled in building scalable, data-driven applications with expertise in </span>
              <motion.span
                animate={{ color: ["#8b5cf6", "#3b82f6", "#8b5cf6"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="font-bold text-lg"
              >
                LLMs, cloud deployment, databases, and system design
              </motion.span>
              <span className="text-gray-700 dark:text-gray-300">.</span>
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button onClick={scrollToProjects} className="btn-primary">
              View My Work
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/YadavRamdeo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-700 hover:text-primary-600" />
            </a>
            <a
              href="https://linkedin.com/in/ramdeoyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-700 hover:text-primary-600" />
            </a>
            <a
              href="mailto:ramdeoyadav4545@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-gray-700 hover:text-primary-600" />
            </a>
          </motion.div>
        </div>
      </div >

      {/* Scroll Indicator */}
      < motion.div
        initial={{ opacity: 0, y: -20 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#skills" className="flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div >
    </section >
  );
}
