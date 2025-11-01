'use client';

import { Roboto, Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// Load Roboto font (fallback)
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Load Inter font (primary - clean minimal design)
const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
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
    animations = {},
  } = themeConfig;

  // Choose font based on config
  const selectedFont = typography.fontFamily === 'Inter'
    ? inter.style.fontFamily
    : roboto.style.fontFamily;

  return createTheme({
    // Typography - Clean minimal design
    typography: {
      fontFamily: selectedFont || 'Inter, Roboto, Arial, sans-serif',

      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: 1.3,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.4,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
        letterSpacing: '0.01em',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
      button: {
        fontWeight: 600,
        letterSpacing: '0.02em',
      },
    },

    // Tropical Color Palette
    palette: {
      mode: mode,

      // Primary: Tropical ocean blue
      primary: colors.primary || {
        main: '#00B4D8',
        light: '#48CAE4',
        dark: '#0096C7',
        contrastText: '#ffffff',
      },

      // Secondary: Coral sunset
      secondary: colors.secondary || {
        main: '#FF6B6B',
        light: '#FF8787',
        dark: '#E85555',
        contrastText: '#ffffff',
      },

      // Success: Tropical green
      success: colors.success || {
        main: '#06D6A0',
        light: '#38E4B7',
        dark: '#05B386',
        contrastText: '#ffffff',
      },

      // Info: Sky blue
      info: {
        main: '#48CAE4',
        light: '#90E0EF',
        dark: '#00B4D8',
        contrastText: '#ffffff',
      },

      // Warning: Sunshine yellow
      warning: colors.accent || {
        main: '#FFD23F',
        light: '#FFE169',
        dark: '#F0C419',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      // Error: Kept professional
      error: {
        main: '#EF5350',
        light: '#F77270',
        dark: '#C62828',
        contrastText: '#ffffff',
      },

      // Background: Soft and bright
      background: {
        default: mode === 'dark' ? '#0A1929' : '#FAFAFA',
        paper: mode === 'dark' ? '#1A2027' : '#FFFFFF',
      },

      // Text: High contrast for readability
      text: {
        primary: mode === 'dark' ? '#FFFFFF' : 'rgba(0, 0, 0, 0.87)',
        secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
        disabled: mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)',
      },

      // Additional custom colors
      ...(colors.neutral && { neutral: colors.neutral }),
      ...(colors.tropical && { tropical: colors.tropical }),
      ...(colors.accent && { accent: colors.accent }),
    },

    // Spacing
    spacing: layout.spacing || 8,

    // Shape - Rounded corners for friendly feel
    shape: {
      borderRadius: layout.borderRadius?.medium || 12,
    },

    // Breakpoints
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    // Shadows - Minimal and clean
    shadows: [
      'none',
      '0px 1px 2px rgba(0, 0, 0, 0.05)',
      '0px 1px 3px rgba(0, 0, 0, 0.1)',
      '0px 2px 4px rgba(0, 0, 0, 0.1)',
      '0px 2px 6px rgba(0, 0, 0, 0.1)',
      '0px 3px 8px rgba(0, 0, 0, 0.1)',
      '0px 4px 10px rgba(0, 0, 0, 0.1)',
      '0px 4px 12px rgba(0, 0, 0, 0.12)',
      '0px 5px 14px rgba(0, 0, 0, 0.12)',
      '0px 6px 16px rgba(0, 0, 0, 0.12)',
      '0px 6px 18px rgba(0, 0, 0, 0.14)',
      '0px 7px 20px rgba(0, 0, 0, 0.14)',
      '0px 8px 22px rgba(0, 0, 0, 0.14)',
      '0px 8px 24px rgba(0, 0, 0, 0.16)',
      '0px 9px 26px rgba(0, 0, 0, 0.16)',
      '0px 10px 28px rgba(0, 0, 0, 0.16)',
      '0px 10px 30px rgba(0, 0, 0, 0.18)',
      '0px 11px 32px rgba(0, 0, 0, 0.18)',
      '0px 12px 34px rgba(0, 0, 0, 0.18)',
      '0px 12px 36px rgba(0, 0, 0, 0.2)',
      '0px 13px 38px rgba(0, 0, 0, 0.2)',
      '0px 14px 40px rgba(0, 0, 0, 0.2)',
      '0px 14px 42px rgba(0, 0, 0, 0.22)',
      '0px 15px 44px rgba(0, 0, 0, 0.22)',
      '0px 16px 46px rgba(0, 0, 0, 0.22)',
    ],

    // Component overrides - Minimal clean styling
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#F5F5F5',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#BDBDBD',
              borderRadius: '5px',
              '&:hover': {
                background: '#9E9E9E',
              },
            },
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: layout.maxWidth || 'lg',
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: layout.borderRadius?.small || 4,
            fontSize: '1rem',
            fontWeight: 500,
            padding: '10px 24px',
            boxShadow: 'none',
            transition: `all ${animations.duration?.normal || '250ms'} ${animations.easing?.default || 'cubic-bezier(0.4, 0, 0.2, 1)'}`,
            '&:hover': {
              boxShadow: 'none',
            },
          },
          sizeLarge: {
            padding: '12px 32px',
            fontSize: '1.0625rem',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          outlined: {
            borderWidth: '1px',
            '&:hover': {
              borderWidth: '1px',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: layout.borderRadius?.medium || 8,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            transition: `all ${animations.duration?.normal || '250ms'} ${animations.easing?.default || 'cubic-bezier(0.4, 0, 0.2, 1)'}`,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: layout.borderRadius?.small || 4,
          },
          elevation1: {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: layout.borderRadius?.small || 4,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: layout.borderRadius?.small || 4,
            fontWeight: 500,
          },
        },
      },
    },
  });
}

export default createAppTheme;
