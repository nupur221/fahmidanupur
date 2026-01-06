# Theme Module

This folder contains all theme-related functionality for the application.

## Files

- **ThemeContext.tsx** - React context provider for theme management
- **theme.config.ts** - Theme configuration and utility functions
- **ThemeScript.tsx** - Script component for preventing flash of unstyled content
- **index.ts** - Central export point for all theme functionality

## Usage

### Import Theme Hook
```typescript
import { useTheme } from '@/theme';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  // Use theme and toggleTheme
};
```

### Import Theme Provider
```typescript
import { ThemeProvider } from '@/theme';

// Wrap your app with ThemeProvider
<ThemeProvider>
  {children}
</ThemeProvider>
```

## Features

- ✅ Light/Dark theme toggle
- ✅ Persistent theme preference (localStorage)
- ✅ System preference detection
- ✅ Prevents flash of unstyled content
- ✅ TypeScript support

