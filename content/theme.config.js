/**
 * Theme Configuration
 *
 * Customize your brand colors, typography, and design tokens
 *
 * INSTRUCTIONS:
 * - Replace brand name and logo with your own
 * - Customize color palette to match your brand
 * - Adjust typography settings as needed
 * - Icon options: Any icon name from @mui/icons-material (e.g., "Home", "Business", "Star")
 */

export const themeConfig = {
  // Brand identity
  brand: {
    name: "Your Brand",
    logo: {
      icon: "AutoAwesome", // MUI icon name from @mui/icons-material
      text: "YOUR BRAND"
    }
  },

  // Minimal Clean Color Palette
  colors: {
    // Primary: Clean ocean blue
    primary: {
      main: '#2196F3',      // Clean blue
      light: '#64B5F6',     // Light blue
      dark: '#1976D2',      // Dark blue
      contrast: '#ffffff'
    },

    // Secondary: Fresh accent
    secondary: {
      main: '#FF6B6B',      // Coral accent
      light: '#FF8A80',     // Light coral
      dark: '#E53935',      // Dark coral
      contrast: '#ffffff'
    },

    // Success: Clean green
    success: {
      main: '#4CAF50',      // Green
      light: '#81C784',     // Light green
      dark: '#388E3C',      // Dark green
    },

    // Neutral: Clean grays
    neutral: {
      main: '#F5F5F5',      // Light gray
      light: '#FAFAFA',     // Very light gray
      dark: '#E0E0E0',      // Medium gray
    }
  },

  // Typography - Clean and minimal
  typography: {
    fontFamily: 'Inter',  // Clean, modern sans-serif
    headingFamily: 'Inter',
    fontWeights: ['300', '400', '500', '600', '700']
  },

  // Layout settings - More spacing
  layout: {
    maxWidth: 'lg',
    spacing: 8,
    borderRadius: {
      small: 4,
      medium: 8,
      large: 12,
      xlarge: 16
    }
  },

  // Animation settings - Subtle
  animations: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '400ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  }
};
