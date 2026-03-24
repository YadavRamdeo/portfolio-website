"use client";

import { Mail, Phone, Linkedin, Github, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">RAMDEO YADAV</h3>
            <p className="text-slate-400 mb-4">
              Software Engineer skilled in Python, Django, and JavaScript.
              Passionate about building efficient APIs and scalable web applications.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/ramdeo-yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ramdeoyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:ramdeoyadav4545@gmail.com"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={18} />
                <a href="mailto:ramdeoyadav4545@gmail.com" className="hover:text-white transition-colors">
                  ramdeoyadav4545@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone size={18} />
                <a href="tel:+917428071889" className="hover:text-white transition-colors">
                  +91 7428071889
                </a>
              </li>
              <li className="text-slate-400">
                📍 New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} RAMDEO YADAV. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
}
