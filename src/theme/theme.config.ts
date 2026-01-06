/**
 * Theme Configuration
 * Centralized theme settings and utilities
 */

export type Theme = 'light' | 'dark';

export const themeConfig = {
  storageKey: 'theme',
  defaultTheme: 'dark' as Theme,
  classNames: {
    light: '',
    dark: 'dark',
  },
} as const;

/**
 * Get theme from localStorage
 */
export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(themeConfig.storageKey) as Theme | null;
}

/**
 * Save theme to localStorage
 */
export function saveTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(themeConfig.storageKey, theme);
}

/**
 * Apply theme class to document
 */
export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add(themeConfig.classNames.dark);
  } else {
    root.classList.remove(themeConfig.classNames.dark);
  }
}

/**
 * Get system preference
 */
export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

