'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../theme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    console.log('Theme toggle clicked, current theme:', theme);
    toggleTheme();
  };

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-[rgba(5,7,13,0.9)] backdrop-blur-[12px] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] z-50 h-24">
      <div className="max-w-[150rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-black dark:text-white no-underline text-left transition-colors duration-300 ml-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)] dark:[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105">
              Nupur
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-baseline gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-600 dark:text-gray-300 py-3 px-4 xl:px-5 rounded-lg text-sm xl:text-base font-bold no-underline transition-all duration-300 border-2 border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-blue-600 dark:hover:border-blue-400 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(37,99,235,0.2)] ${isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 border-blue-600 dark:border-blue-400 -translate-y-0.5 shadow-[0_4px_8px_rgba(37,99,235,0.2)]'
                    : ''
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={handleThemeToggle}
              className="py-3 px-2 rounded-lg text-gray-600 dark:text-gray-300 bg-transparent border-2 border-transparent cursor-pointer transition-all duration-300 font-bold hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-blue-600 dark:hover:border-blue-400 hover:scale-110"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Current theme: ${theme === 'light' ? 'Light' : 'Dark'}. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                // Moon icon (shows when in light mode, to switch to dark)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                // Sun icon (shows when in dark mode, to switch to light)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button - Visible on mobile/tablet */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 bg-transparent border-2 border-transparent cursor-pointer transition-all duration-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-blue-600 dark:hover:border-blue-400 hover:scale-110"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Current theme: ${theme === 'light' ? 'Light' : 'Dark'}`}
            >
              {theme === 'light' ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 bg-transparent border-2 border-transparent cursor-pointer transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-blue-600 dark:hover:border-blue-400"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 right-0 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 shadow-lg z-40">
            <div className="py-4 px-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-gray-600 dark:text-gray-300 py-3 px-4 rounded-lg text-base font-bold no-underline transition-all duration-300 border-2 border-transparent mb-2 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-blue-600 dark:hover:border-blue-400 ${isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 border-blue-600 dark:border-blue-400'
                        : ''
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
