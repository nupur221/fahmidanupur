'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

            <ThemeToggle />
          </div>

          {/* Mobile menu button - Visible on mobile/tablet */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

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
