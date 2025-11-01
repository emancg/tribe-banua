# Setup Guide - Tribe Banua Boilerplate

Complete guide to setting up and customizing the Tribe Banua Next.js + MUI boilerplate for your project.

---

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Project Structure](#project-structure)
3. [Customizing Content](#customizing-content)
4. [Theme Customization](#theme-customization)
5. [Adding New Pages](#adding-new-pages)
6. [Form Configuration](#form-configuration)
7. [SEO Setup](#seo-setup)
8. [Dark Mode](#dark-mode)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Prerequisites

- **Node.js**: 18.0 or higher
- **npm**: 9.0 or higher (or yarn/pnpm)
- **Git**: For version control

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/tribe-banua.git
cd tribe-banua

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Edit .env.local with your configuration
# (see Environment Variables section)

# 5. Run development server
npm run dev

# 6. Open browser
# Visit http://localhost:3000
```

### Environment Variables

Edit `.env.local`:

```env
# Required
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Your Site Name

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Optional - Contact Form
CONTACT_FORM_RECIPIENT=your@email.com
```

---

## Project Structure

```
tribe-banua/
├── content/                    # 🔵 Content Layer (Edit this!)
│   ├── site.config.js         # Site info, contact, social
│   ├── theme.config.js        # Colors, fonts, branding
│   ├── navigation.config.js   # Menu items
│   ├── sections/              # Content for sections
│   └── pages/                 # Page compositions
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   └── [your-pages]/      # Your custom pages
│   │
│   └── lib/                   # 🟢 Boilerplate (Reusable)
│       ├── components/        # All UI components
│       ├── theme/             # Theme system
│       ├── hooks/             # Custom React hooks
│       └── utils/             # Utility functions
│
└── public/                    # Static assets
```

### The Two-Layer System

**🔵 Content Layer** (`/content`)
- Your business-specific content
- Easy to edit, no coding required
- Maps directly to CMS later

**🟢 Boilerplate Layer** (`/src/lib`)
- Generic, reusable components
- Copy to any new project
- Don't edit unless adding features

---

## Customizing Content

### 1. Site Information

Edit `content/site.config.js`:

```javascript
export const siteConfig = {
  name: "Your Business Name",
  tagline: "Your Compelling Tagline",
  description: "Brief description of your business",

  contact: {
    email: "contact@yourbusiness.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345"
  },

  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    linkedin: "https://linkedin.com/company/yourcompany"
  }
};
```

### 2. Navigation Menu

Edit `content/navigation.config.js`:

```javascript
export const navigationConfig = {
  logo: {
    text: "Your Brand",
    image: "/logo.png", // Optional
    href: "/"
  },

  menuItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ]
};
```

### 3. Homepage Content

Edit `content/pages/home.config.js`:

```javascript
import { heroConfig } from '../sections/hero.config';
import { servicesConfig } from '../sections/services.config';

export const homeConfig = {
  sections: [
    { type: 'hero', config: heroConfig },
    { type: 'services', config: servicesConfig },
    // Add more sections...
  ]
};
```

### 4. Section Content

Each section has its own config file in `content/sections/`:

**Hero Section** (`hero.config.js`):
```javascript
export const heroConfig = {
  title: "Your Amazing Headline",
  subtitle: "Supporting text that explains your value proposition",
  backgroundImage: "/images/hero-bg.jpg",
  cta: {
    text: "Get Started",
    href: "#contact"
  }
};
```

**Services Section** (`services.config.js`):
```javascript
export const servicesConfig = {
  title: "Our Services",
  services: [
    {
      title: "Service 1",
      description: "Description of service 1",
      icon: "RocketLaunch", // MUI icon name
      href: "/services/service-1"
    },
    // Add more services...
  ]
};
```

---

## Theme Customization

### Brand Colors

Edit `content/theme.config.js`:

```javascript
export const themeConfig = {
  colors: {
    primary: {
      main: '#1976d2',    // Your brand color
      light: '#42a5f5',
      dark: '#1565c0'
    },
    secondary: {
      main: '#dc004e',    // Accent color
      light: '#e33371',
      dark: '#9a0036'
    }
  },

  typography: {
    fontFamily: 'Roboto' // or your custom font
  },

  layout: {
    maxWidth: 'lg',  // Container width: xs, sm, md, lg, xl
    spacing: 8       // Base spacing unit
  }
};
```

### Custom Fonts

1. **Using Google Fonts:**

Edit `src/lib/theme/createAppTheme.js`:

```javascript
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Use in theme
typography: {
  fontFamily: poppins.style.fontFamily,
}
```

2. **Using Custom Fonts:**

Place font files in `public/fonts/` and update CSS.

---

## Adding New Pages

### Method 1: Using Existing Components

```javascript
// src/app/your-page/page.js
import { Container, HeroSection, ContentSection } from '@/lib/components';
import { yourPageConfig } from '@/content/pages/yourPage.config';

export default function YourPage() {
  return (
    <main>
      <HeroSection config={yourPageConfig.hero} />
      <Container>
        <ContentSection config={yourPageConfig.content} />
      </Container>
    </main>
  );
}
```

### Method 2: Dynamic Sections

```javascript
// content/pages/yourPage.config.js
export const yourPageConfig = {
  sections: [
    { type: 'hero', config: { title: "Page Title", ... } },
    { type: 'content', config: { ... } },
    { type: 'cta', config: { ... } }
  ]
};

// src/app/your-page/page.js
import { renderSection } from '@/lib/utils/renderSection';

export default function YourPage() {
  return (
    <main>
      {yourPageConfig.sections.map((section, index) =>
        renderSection(section, index)
      )}
    </main>
  );
}
```

### Adding to Navigation

Update `content/navigation.config.js`:

```javascript
menuItems: [
  // ... existing items
  { label: "Your Page", href: "/your-page" }
]
```

---

## Form Configuration

### Contact Form Setup

1. **Configure Form Content**

Edit `content/sections/contact.config.js`:

```javascript
export const contactFormConfig = {
  title: "Get in Touch",
  description: "We'd love to hear from you",
  submitEndpoint: "/api/contact", // Your API endpoint
  variant: "card", // 'inline', 'section', 'card'

  fields: {
    name: { required: true, label: "Your Name" },
    email: { required: true, label: "Email Address" },
    phone: { required: false, label: "Phone Number" },
    message: { required: true, label: "Message" }
  }
};
```

2. **Create API Endpoint**

```javascript
// src/app/api/contact/route.js
export async function POST(request) {
  const data = await request.json();

  // Send email or save to database
  // Example: using nodemailer, sendgrid, etc.

  return Response.json({ success: true });
}
```

3. **Custom Validation**

Edit `src/lib/utils/validation.js`:

```javascript
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short')
});
```

---

## SEO Setup

### Page-Level SEO

```javascript
import { SEOHead } from '@/lib/components';

export default function YourPage() {
  return (
    <>
      <SEOHead config={{
        title: "Page Title - Your Site",
        description: "Page description for search engines",
        keywords: "keyword1, keyword2, keyword3",
        ogImage: "/images/og-image.jpg",
        ogUrl: "https://yoursite.com/your-page",
        canonical: "https://yoursite.com/your-page"
      }} />

      {/* Page content */}
    </>
  );
}
```

### Structured Data

```javascript
import { StructuredData, generateOrganizationSchema } from '@/lib/components';

const orgSchema = generateOrganizationSchema({
  name: "Your Company",
  url: "https://yoursite.com",
  logo: "https://yoursite.com/logo.png",
  description: "Company description",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "Customer Service"
  },
  sameAs: [
    "https://facebook.com/yourpage",
    "https://twitter.com/yourpage"
  ]
});

// In your page
<StructuredData config={orgSchema} />
```

---

## Dark Mode

### Enable Dark Mode

Already enabled by default in `src/app/layout.js`:

```javascript
import { ThemeProvider } from '@/lib/theme';
import { themeConfig } from '@/content/theme.config';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          themeConfig={themeConfig}
          defaultMode="light"  // or "dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Add Theme Toggle

```javascript
import { ThemeToggle } from '@/lib/components';

// In your AppBar or header
<ThemeToggle size="medium" />
```

### Custom Dark Mode Colors

Edit `content/theme.config.js`:

```javascript
export const themeConfig = {
  colors: {
    primary: { /* light mode colors */ },
    // Add dark mode overrides if needed
  },
  darkMode: {
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    }
  }
};
```

---

## Deployment

### Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
```

Or use GitHub integration: https://vercel.com/import

### Environment Variables on Vercel

Add in Project Settings → Environment Variables:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- Other variables from `.env.example`

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy /out or /.next folder
```

**AWS / DigitalOcean:**
```bash
npm run build
npm start
```

---

## Troubleshooting

### Build Errors

**Issue**: `Module not found` errors

**Solution**:
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Port Already in Use

**Issue**: Port 3000 is occupied

**Solution**:
```bash
# Run on different port
PORT=3001 npm run dev
```

### Theme Not Loading

**Issue**: Theme/styles not appearing

**Solution**: Check that `ThemeProvider` wraps your app in `layout.js`

### Images Not Optimizing

**Issue**: Images loading slowly

**Solution**: Use Next.js `<Image>` component:
```javascript
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-fold images
/>
```

### Dark Mode Not Persisting

**Issue**: Theme resets on refresh

**Solution**: Check localStorage is enabled in browser

---

## Next Steps

1. ✅ Complete initial setup
2. ✅ Customize content files
3. ✅ Update branding/theme
4. ✅ Add your pages
5. ✅ Configure forms
6. ✅ Setup SEO
7. ✅ Test on multiple devices
8. ✅ Deploy to production

---

## Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **MUI Docs**: https://mui.com/material-ui/
- **React Hook Form**: https://react-hook-form.com/
- **Zod Validation**: https://zod.dev/

---

## Support

For issues or questions:
- Check [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
- Review [README.md](./README.md) for component documentation
- Open an issue on GitHub

---

**Happy Building! 🚀**
