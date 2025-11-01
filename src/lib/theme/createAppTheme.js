'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// Load Roboto font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Create App Theme
 *
 * Converts a theme configuration object into a MUI theme
 *
 * @param {Object} themeConfig - Theme configuration from content/theme.config.js
 * @param {Object} themeConfig.colors - Color palette configuration
 * @param {Object} themeConfig.typography - Typography configuration
 * @param {Object} themeConfig.layout - Layout configuration
 * @param {string} mode - Theme mode ('light' or 'dark')
 * @returns {Theme} MUI theme object
 *
 * @example
 * import { createAppTheme } from '@/lib/theme';
 * import { themeConfig } from '../../content/theme.config';
 *
 * const theme = createAppTheme(themeConfig, 'light');
 */
export function createAppTheme(themeConfig = {}, mode = 'light') {
  const {
    colors = {},
    typography = {},
    layout = {},
  } = themeConfig;

  return createTheme({
    // Typography
    typography: {
      fontFamily: typography.fontFamily
        ? roboto.style.fontFamily
        : 'Roboto, Arial, sans-serif',
    },

    // Color Palette
    palette: {
      mode: mode,

      // Primary color
      primary: colors.primary || {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },

      // Secondary color
      secondary: colors.secondary || {
        main: '#dc004e',
        light: '#e33371',
        dark: '#9a0036',
      },

      // Background colors (adapt to mode)
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff',
        paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
      },

      // Text colors (adapt to mode)
      text: {
        primary: mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
        secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
        disabled: mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)',
      },

      // Additional custom colors (if provided)
      ...(colors.neutral && { neutral: colors.neutral }),
      ...(colors.primaryLight && { primaryLight: colors.primaryLight }),
      ...(colors.primaryDark && { primaryDark: colors.primaryDark }),
    },

    // Spacing
    spacing: layout.spacing || 8,

    // Breakpoints (can be customized later)
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    // Component overrides (can be extended)
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: layout.maxWidth || 'lg',
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none', // Disable uppercase transformation
            borderRadius: 8, // Slightly rounded buttons
          },
        },
      },
    },
  });
}

export default createAppTheme;
