'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 relative group',
                  activeSection === item.href.substring(1)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                )}
              >
                {item.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-200',
                    activeSection === item.href.substring(1)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  )}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 py-2',
                    activeSection === item.href.substring(1)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
