import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
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
    { label: 'Creative Writing', path: '/publications/creative-writing' },
    { label: 'Interviews', path: '/publications/interviews' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-serif text-xl font-medium mb-4 text-theme-blue dark:text-white">Club of Compendium</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-xs">
              A news and publication society allowing students to showcase their talent while gaining professional writing and reporting skills.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/thecompendium.iare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                 className="text-gray-500 hover:text-theme-blue dark:hover:text-white transition-colors" 
                 aria-label="Instagram" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/the-compendium-iare-987b35212/?originalSubdomain=in" 
                 className="text-gray-500 hover:text-theme-blue dark:hover:text-white transition-colors" 
                 aria-label="LinkedIn" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-serif text-base font-medium mb-4 text-theme-blue dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-theme-blue dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div className="col-span-1">
            <h3 className="font-serif text-base font-medium mb-4 text-theme-blue dark:text-white">Publications</h3>
            <ul className="space-y-2">
              {publicationLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-theme-blue dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-serif text-base font-medium mb-4 text-theme-blue dark:text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-sm text-gray-600 dark:text-gray-300">
                <strong className="font-medium text-theme-blue dark:text-white">Email:</strong> 
                <a href="mailto:thecompendiumiare@gmail.com" className="hover:text-theme-blue dark:hover:text-white transition-colors">
                  thecompendiumiare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Club of Compendium. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/terms" className="hover:text-theme-blue dark:hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-theme-blue dark:hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-theme-blue dark:hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;