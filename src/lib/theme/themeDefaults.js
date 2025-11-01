/**
 * Theme Defaults
 *
 * Default theme values to use when creating a new project
 * These can be overridden in content/theme.config.js
 */

export const defaultThemeConfig = {
  brand: {
    name: "My Business",
    logo: {
      icon: "Business",
      text: "MY BUSINESS"
    }
  },

  colors: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },
    secondary: {
      main: '#dc004e',
      light: '#e33371',
      dark: '#9a0036'
    },
  },

  typography: {
    fontFamily: 'Roboto',
    fontWeights: ['300', '400', '500', '700']
  },

  layout: {
    maxWidth: 'lg',
    spacing: 8
  }
};

/**
 * Dark Theme Configuration
 *
 * Example dark mode theme configuration
 */
export const defaultDarkThemeConfig = {
  ...defaultThemeConfig,
  mode: 'dark',
  colors: {
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5'
    },
    secondary: {
      main: '#f48fb1',
      light: '#ffc1e3',
      dark: '#bf5f82'
    },
  },
};
