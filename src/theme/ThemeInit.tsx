'use client';

import { useEffect } from 'react';

/**
 * ThemeInit Component
 * Runs immediately on client side to set theme before React hydrates
 * This prevents flash of unstyled content
 */
export function ThemeInit() {
  useEffect(() => {
    // This runs immediately when the component mounts
    try {
      const theme = localStorage.getItem('theme');
      
      // If theme is explicitly set, use it
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        // No saved theme, default to light mode
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // Fallback: default to light mode
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return null;
}

