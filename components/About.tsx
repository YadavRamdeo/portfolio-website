"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Software Engineer with 2+ years of experience in API development, database management, and JavaScript programming.
              Skilled in Python, Django, JavaScript, jQuery, and MySQL with hands-on experience in building RESTful APIs and dynamic web applications.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Demonstrated success in diverse projects including library management systems, pharmacy platforms, and social media applications.
              Passionate about learning new technologies and contributing to innovative software solutions. Strong collaborative skills with experience
              working in cross-functional teams to deliver high-quality software products.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">3+</div>
                <div className="text-slate-600 dark:text-slate-300">Technologies Mastered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
