/**
 * Theme Configuration
 *
 * Brand colors, typography, logo, and visual identity
 */

export const themeConfig = {
  // Brand identity
  brand: {
    name: "Tribe Banua",
    logo: {
      icon: "SailingIcon", // Material UI icon name
      text: "TRIBE BANUA"
    }
  },

  // Color palette
  colors: {
    primary: {
      main: '#1f93b6',
      light: '#65b2ca',
      dark: '#186690'
    },
    secondary: {
      main: '#75804c'
    },
    neutral: {
      main: '#cebebc'
    }
  },

  // Typography
  typography: {
    fontFamily: 'Roboto',
    fontWeights: ['300', '400', '500', '700']
  },

  // Layout settings
  layout: {
    maxWidth: 'xl',
    spacing: 8
  }
};
