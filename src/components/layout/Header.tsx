import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    document.documentElement.classList.add('transition-colors');
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    
    setTimeout(() => {
      document.documentElement.classList.remove('transition-colors');
    }, 300);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'News & Articles', path: '/publications' },
    { label: 'Events', path: '/events' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled
          ? 'bg-white dark:bg-theme-blue shadow-sm border-b border-gray-200 dark:border-gray-800'
          : 'bg-white dark:bg-theme-blue'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = 'auto';
          }}
        >
          <BookOpen className="h-6 w-6 text-theme-blue dark:text-white transition-transform duration-300 group-hover:scale-110" />
          <span className="font-serif text-2xl font-bold tracking-tighter text-theme-blue dark:text-white transition-all duration-300 group-hover:text-primary">
            The Compendium
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link text-sm font-medium text-theme-blue dark:text-white transition-colors duration-300 hover:text-primary relative py-2",
                location.pathname === link.path && "text-primary nav-link-active"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-white animate-fade-in" />
            ) : (
              <Moon className="h-5 w-5 text-theme-blue animate-fade-in" />
            )}
          </button>
        </nav>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-white animate-fade-in" />
            ) : (
              <Moon className="h-5 w-5 text-theme-blue animate-fade-in" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-theme-blue dark:text-white animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 text-theme-blue dark:text-white animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 bg-white dark:bg-theme-blue z-40 pt-20 px-6 transform transition-all duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <nav className="flex flex-col space-y-6 py-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ 
                transitionDelay: `${index * 50}ms` 
              }}
              className={cn(
                "text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 text-theme-blue dark:text-white",
                location.pathname === link.path ? "text-primary" : "hover:text-primary",
                isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
