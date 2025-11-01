'use client';

import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './createAppTheme';

/**
 * Theme Context
 */
const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

/**
 * Custom hook to use theme context
 */
export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
}

/**
 * ThemeProvider Component
 *
 * Provides theme with dark mode support
 *
 * @param {ReactNode} children - Child components
 * @param {Object} themeConfig - Theme configuration from content/theme.config.js
 * @param {string} defaultMode - Default theme mode ('light' or 'dark')
 * @param {string} storageKey - LocalStorage key for persisting theme (default: 'theme-mode')
 */
export default function ThemeProvider({
  children,
  themeConfig,
  defaultMode = 'light',
  storageKey = 'theme-mode',
}) {
  const [mode, setMode] = useState(defaultMode);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem(storageKey);
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    }
  }, [storageKey]);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(storageKey, mode);
    }
  }, [mode, mounted, storageKey]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Set specific theme mode
  const setTheme = (newMode) => {
    if (newMode === 'light' || newMode === 'dark') {
      setMode(newMode);
    }
  };

  // Create theme based on current mode
  const theme = useMemo(() => {
    return createAppTheme(themeConfig, mode);
  }, [themeConfig, mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleTheme,
      setTheme,
    }),
    [mode]
  );

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
