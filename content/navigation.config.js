/**
 * Navigation Configuration
 *
 * Main menu, footer menu, and navigation structure
 *
 * INSTRUCTIONS:
 * - Customize menu items based on your site structure
 * - type: 'page' for full pages, 'section' for anchor links to sections
 * - Use section links (e.g., '/#services-section') for smooth scrolling
 */

export const navigationConfig = {
  // Main navigation menu
  mainMenu: [
    {
      label: 'Home',
      href: '/',
      type: 'page'
    },
    {
      label: 'About',
      href: '/about',
      type: 'page'
    },
    {
      label: 'Services',
      href: '/#services-section',
      type: 'section'
    },
    {
      label: 'Features',
      href: '/#features-section',
      type: 'section'
    },
    {
      label: 'Contact',
      href: '/contact',
      type: 'page'
    }
  ],

  // Footer menu (optional - customize as needed)
  footerMenu: [
    { label: 'About', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ]
};
