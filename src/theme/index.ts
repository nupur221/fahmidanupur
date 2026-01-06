/**
 * Theme Module Exports
 * Central export point for all theme-related functionality
 */

export { ThemeProvider, useTheme } from './ThemeContext';
export { ThemeInit } from './ThemeInit';
export { ThemeScript } from './ThemeScript';
export type { Theme } from './theme.config';
export { 
  themeConfig, 
  getStoredTheme, 
  saveTheme, 
  applyTheme, 
  getSystemTheme 
} from './theme.config';

