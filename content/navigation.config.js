/**
 * Navigation Configuration
 *
 * Main menu, footer menu, and navigation structure
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
      label: 'Why Choose Us',
      href: '/#whychooseus-section',
      type: 'section'
    },
    {
      label: 'Contact',
      href: '/contact',
      type: 'page'
    }
  ],

  // Footer menu (optional - can add later)
  footerMenu: [
    // { label: 'About', href: '/about' },
    // { label: 'Terms', href: '/terms' },
    // { label: 'Privacy', href: '/privacy' }
  ]
};
