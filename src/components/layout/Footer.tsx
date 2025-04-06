import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Define the quick links with their proper routes
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Publications', path: '/publications' },
    { label: 'Events', path: '/events' },
    { label: 'Contact', path: '/contact' }
  ];

  const publicationLinks = [
    { label: 'Annual Magazine', path: '/publications/annual-magazine' },
    { label: 'College News', path: '/publications/college-news' },
    { label: 'Articles', path: '/publications/articles' },
    { label: 'Interviews', path: '/publications/interviews' }
  ];

  return (
    <footer className={cn(
      "border-t pt-16 pb-8",
      isHomePage 
        ? "bg-gray-50 dark:bg-[#000000] border-gray-200 dark:border-gray-800" 
        : "bg-theme-blue dark:bg-[#000000] border-white/20 dark:border-gray-800"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className={cn(
              "font-serif text-xl font-medium mb-4",
              isHomePage ? "text-theme-blue dark:text-white" : "text-white dark:text-white"
            )}>Club of Compendium</h3>
            <p className={cn(
              "text-sm mb-4 max-w-xs",
              isHomePage ? "text-gray-600 dark:text-gray-300" : "text-white/80 dark:text-gray-300"
            )}>
              A news and publication society allowing students to showcase their talent while gaining professional writing and reporting skills.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/thecompendium.iare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                 className={cn(
                   "transition-colors",
                   isHomePage 
                     ? "text-gray-500 hover:text-theme-blue dark:hover:text-white" 
                     : "text-white/60 hover:text-white dark:hover:text-white"
                 )}
                 aria-label="Instagram" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/the-compendium-iare-987b35212/?originalSubdomain=in" 
                 className={cn(
                   "transition-colors",
                   isHomePage 
                     ? "text-gray-500 hover:text-theme-blue dark:hover:text-white" 
                     : "text-white/60 hover:text-white dark:hover:text-white"
                 )}
                 aria-label="LinkedIn" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className={cn(
              "font-serif text-base font-medium mb-4",
              isHomePage ? "text-theme-blue dark:text-white" : "text-white dark:text-white"
            )}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className={cn(
                      "text-sm transition-colors",
                      isHomePage 
                        ? "text-gray-600 dark:text-gray-300 hover:text-theme-blue dark:hover:text-white" 
                        : "text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div className="col-span-1">
            <h3 className={cn(
              "font-serif text-base font-medium mb-4",
              isHomePage ? "text-theme-blue dark:text-white" : "text-white dark:text-white"
            )}>Publications</h3>
            <ul className="space-y-2">
              {publicationLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className={cn(
                      "text-sm transition-colors",
                      isHomePage 
                        ? "text-gray-600 dark:text-gray-300 hover:text-theme-blue dark:hover:text-white" 
                        : "text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className={cn(
              "font-serif text-base font-medium mb-4",
              isHomePage ? "text-theme-blue dark:text-white" : "text-white dark:text-white"
            )}>Contact Us</h3>
            <ul className="space-y-4">
              <li className={cn(
                "text-sm",
                isHomePage ? "text-gray-600 dark:text-gray-300" : "text-white/80 dark:text-gray-300"
              )}>
                <strong className={cn(
                  "font-medium",
                  isHomePage ? "text-theme-blue dark:text-white" : "text-white dark:text-white"
                )}>Email:</strong> 
                <a href="mailto:thecompendiumiare@gmail.com" 
                   className={cn(
                     "transition-colors",
                     isHomePage 
                       ? "hover:text-theme-blue dark:hover:text-white" 
                       : "hover:text-white dark:hover:text-white"
                   )}>
                  thecompendiumiare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={cn(
          "mt-16 pt-8 text-center text-sm",
          isHomePage 
            ? "border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300" 
            : "border-t border-white/20 dark:border-gray-800 text-white/80 dark:text-gray-300"
        )}>
          <p>&copy; {new Date().getFullYear()} Club of Compendium. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/terms" className={cn(
              "transition-colors",
              isHomePage 
                ? "hover:text-theme-blue dark:hover:text-white" 
                : "hover:text-white dark:hover:text-white"
            )}>Terms</Link>
            <Link to="/privacy" className={cn(
              "transition-colors",
              isHomePage 
                ? "hover:text-theme-blue dark:hover:text-white" 
                : "hover:text-white dark:hover:text-white"
            )}>Privacy</Link>
            <Link to="/cookies" className={cn(
              "transition-colors",
              isHomePage 
                ? "hover:text-theme-blue dark:hover:text-white" 
                : "hover:text-white dark:hover:text-white"
            )}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;