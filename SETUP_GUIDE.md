# Template Setup Guide

Welcome! This guide will walk you through customizing this Next.js + MUI boilerplate for your project.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Customizing Site Configuration](#customizing-site-configuration)
3. [Branding & Theme](#branding--theme)
4. [Content Configuration](#content-configuration)
5. [Adding Your Images](#adding-your-images)
6. [Navigation Setup](#navigation-setup)
7. [Creating Pages](#creating-pages)
8. [Deployment](#deployment)

---

## Initial Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-mui-boilerplate.git
cd nextjs-mui-boilerplate

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### 2. Update package.json

Open `package.json` and update:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo.git"
  }
}
```

### 3. Configure Environment Variables

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Company Name
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Add your Google Analytics ID (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Configure contact form email
CONTACT_FORM_RECIPIENT=your-email@example.com
```

---

## Customizing Site Configuration

### Edit `content/site.config.js`

This file contains all your site-wide information:

```javascript
export const siteConfig = {
  // Your company/brand name
  name: "Your Company Name",
  tagline: "Your compelling tagline",
  description: "A brief description of what you do",

  // Contact information
  contact: {
    email: "contact@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: "Your City, Your Country"
  },

  // Social media links
  social: {
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    // Add more as needed: linkedin, youtube, etc.
  },

  // SEO metadata
  seo: {
    title: "Your Company - What You Do",
    description: "A compelling meta description (keep under 160 characters)",
    keywords: ["your", "main", "keywords", "here"]
  }
};
```

**Tips:**
- Keep your tagline short and memorable (under 10 words)
- Write your meta description to entice clicks from search results
- Choose 5-10 relevant keywords for your industry

---

## Branding & Theme

### Edit `content/theme.config.js`

Customize your brand colors, typography, and visual identity:

```javascript
export const themeConfig = {
  // Brand identity
  brand: {
    name: "Your Brand",
    logo: {
      icon: "Star", // Choose any MUI icon name
      text: "YOUR BRAND"
    }
  },

  // Color palette - customize to match your brand
  colors: {
    primary: {
      main: '#2196F3',    // Your primary brand color
      light: '#64B5F6',   // Lighter shade
      dark: '#1976D2',    // Darker shade
      contrast: '#ffffff' // Text color on primary backgrounds
    },
    secondary: {
      main: '#FF6B6B',    // Your accent color
      light: '#FF8A80',
      dark: '#E53935',
      contrast: '#ffffff'
    },
    // Add more color definitions as needed
  },

  // Typography
  typography: {
    fontFamily: 'Inter', // or 'Roboto', 'Poppins', etc.
    headingFamily: 'Inter',
    fontWeights: ['300', '400', '500', '600', '700']
  },

  // Layout settings
  layout: {
    maxWidth: 'lg', // xs, sm, md, lg, xl
    spacing: 8,
    borderRadius: {
      small: 4,
      medium: 8,
      large: 12,
      xlarge: 16
    }
  }
};
```

**Choosing Brand Colors:**
- Use your existing brand colors if available
- Or use tools like [Coolors](https://coolors.co/) or [Adobe Color](https://color.adobe.com/) to create a palette
- Ensure good contrast for accessibility

**Available MUI Icons:**
- Browse all icons at: https://mui.com/material-ui/material-icons/
- Examples: `Home`, `Business`, `Star`, `Rocket`, `AccountCircle`, etc.

---

## Content Configuration

### Section Configs

All sections are configured in `content/sections/`. Customize each one:

#### Hero Section (`hero.config.js`)

```javascript
export const heroConfig = {
  title: "Welcome to Your Brand",
  subtitle: "A compelling subtitle that explains your value proposition",
  cta: {
    text: "Get Started",
    href: "#services-section" // Or link to a page: "/contact"
  },
  background: {
    image: "/hero-image.jpg", // Add your hero image
    position: "center"
  }
};
```

#### Services Section (`services.config.js`)

```javascript
export const servicesConfig = {
  title: "WHAT WE OFFER",
  items: [
    {
      title: "Service 1",
      image: "/services/service-1.jpg",
      description: "Description of your service",
      href: "/services/service-1"
    },
    // Add more services...
  ]
};
```

#### Why Choose Us Section (`whyChooseUs.config.js`)

Highlight your unique selling points:

```javascript
export const whyChooseUsConfig = {
  title: "WHY CHOOSE US?",
  items: [
    {
      title: "Quality",
      icon: "VerifiedUser", // MUI icon name
      iconColor: "primary",
      subtitle: "We deliver exceptional quality"
    },
    // Add 3-4 more items...
  ]
};
```

#### Footer (`footer.config.js`)

```javascript
export const footerConfig = {
  title: "GET IN TOUCH",
  contact: {
    email: "contact@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: "Your City, Country"
  },
  contactInfo: [
    {
      icon: "Facebook",
      type: "social",
      label: "@yourcompany",
      href: "https://facebook.com/yourcompany"
    },
    // Add more contact methods...
  ]
};
```

---

## Adding Your Images

### Required Images

Add your images to the `/public` directory:

```
/public
  ├── hero-image.jpg          # Homepage hero (1920x1080 recommended)
  ├── logo.png                # Your logo (optional, if not using icon)
  ├── og-image.jpg            # Open Graph image (1200x630)
  ├── services/
  │   ├── service-1.jpg       # Service images (800x600 recommended)
  │   ├── service-2.jpg
  │   └── service-3.jpg
  ├── about-image.jpg         # About page image
  └── ...
```

**Image Guidelines:**
- **Hero Images**: 1920x1080px, high quality, under 500KB
- **Service Images**: 800x600px, clear and professional
- **OG Image**: 1200x630px for social media sharing
- Use WebP format for better performance
- Compress images using tools like TinyPNG or Squoosh

---

## Navigation Setup

### Edit `content/navigation.config.js`

```javascript
export const navigationConfig = {
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
      href: '/#services-section', // Section link
      type: 'section'
    },
    {
      label: 'Contact',
      href: '/contact',
      type: 'page'
    }
  ],

  footerMenu: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ]
};
```

**Navigation Types:**
- `type: 'page'` - Links to a full page route
- `type: 'section'` - Links to a section on the same page (smooth scroll)

---

## Creating Pages

### Using Existing Pages

The template includes these pages in `src/app/`:
- Homepage (`page.js`)
- About (`about/page.js`)
- Contact (`contact/page.js`)
- Services (`services/[slug]/page.js` - dynamic)

### Creating a New Page

1. Create a new directory in `src/app/`:
```bash
mkdir src/app/portfolio
```

2. Add a `page.js` file:
```javascript
// src/app/portfolio/page.js
import { Container, Section, SEOHead } from '@/lib/components';

export const metadata = {
  title: 'Portfolio - Your Company',
  description: 'View our portfolio of work'
};

export default function PortfolioPage() {
  return (
    <>
      <SEOHead config={{
        title: metadata.title,
        description: metadata.description
      }} />

      <Container>
        <Section>
          <h1>Our Portfolio</h1>
          {/* Your content here */}
        </Section>
      </Container>
    </>
  );
}
```

3. Add it to navigation in `content/navigation.config.js`:
```javascript
{
  label: 'Portfolio',
  href: '/portfolio',
  type: 'page'
}
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Add new site from Git
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Add environment variables
7. Deploy!

### Environment Variables for Production

Remember to set these in your hosting platform:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME=Your Company
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_FORM_RECIPIENT=contact@yourcompany.com
```

---

## Next Steps

### Optional Enhancements

1. **Set up Analytics**
   - Add Google Analytics tracking ID
   - Configure in your hosting platform

2. **Contact Form Backend**
   - Implement `/api/contact` route
   - Configure email service (SendGrid, Resend, etc.)

3. **Add Blog**
   - Use the blog components in `@/lib/components/blog`
   - Set up MDX or integrate a CMS

4. **Custom Domain**
   - Purchase a domain
   - Configure DNS in your hosting platform

5. **Performance Optimization**
   - Enable image optimization
   - Add caching strategies
   - Set up CDN

---

## Need Help?

- Check the main README.md for API documentation
- Browse components in `src/lib/components`
- Review example configs in `content/`
- Open an issue on GitHub

**Happy building! **
