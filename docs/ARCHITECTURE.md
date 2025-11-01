# Architecture Documentation - Tribe Banua Boilerplate

Technical architecture and design patterns used in the Tribe Banua Next.js + MUI boilerplate.

---

## Table of Contents

1. [Overview](#overview)
2. [Design Principles](#design-principles)
3. [Directory Structure](#directory-structure)
4. [Component Architecture](#component-architecture)
5. [Theme System](#theme-system)
6. [State Management](#state-management)
7. [Data Flow](#data-flow)
8. [Performance Optimizations](#performance-optimizations)
9. [Code Patterns](#code-patterns)
10. [Extension Guide](#extension-guide)

---

## Overview

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Emotion (CSS-in-JS)
- **Forms**: React Hook Form + Zod
- **Language**: JavaScript (TypeScript-ready)
- **Node Version**: 18+

### Architecture Type

**Config-Driven Component Architecture**
- Separation of content and presentation
- Component composition pattern
- Props-based configuration
- Ready for CMS integration

---

## Design Principles

### 1. Separation of Concerns

**Two-Layer System:**

```
🔵 Content Layer (/content)
   ↓ Configuration Objects
🟢 Boilerplate Layer (/src/lib)
   ↓ React Components
📄 Pages (/src/app)
```

**Benefits:**
- Non-developers can edit content
- Components are reusable across projects
- Easy CMS integration path
- Clear boundary between business logic and UI

### 2. Component Composition

```
Page
  └── Section
      └── Container
          └── Grid
              └── Card
                  └── Content
```

Small, focused components that compose into larger features.

### 3. Configuration Over Hardcoding

**Bad:**
```javascript
function Hero() {
  return <h1>Welcome to Tribe Banua</h1>;
}
```

**Good:**
```javascript
function Hero({ config }) {
  return <h1>{config.title}</h1>;
}
```

---

## Directory Structure

### Complete Project Layout

```
tribe-banua/
│
├── content/                       # 🔵 Content Layer
│   ├── site.config.js            # Site-wide settings
│   ├── theme.config.js           # Theme configuration
│   ├── navigation.config.js      # Menu structure
│   │
│   ├── sections/                 # Section configurations
│   │   ├── hero.config.js
│   │   ├── services.config.js
│   │   ├── cta.config.js
│   │   ├── testimonials.config.js
│   │   ├── stats.config.js
│   │   ├── about.config.js
│   │   ├── footer.config.js
│   │   └── index.js              # Re-export all
│   │
│   ├── pages/                    # Page compositions
│   │   ├── home.config.js
│   │   ├── about.config.js
│   │   ├── contact.config.js
│   │   └── expeditions.config.js
│   │
│   └── services/                 # Service-specific content
│       └── servicesDetail.config.js
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.js             # Root layout
│   │   ├── page.js               # Home page
│   │   ├── not-found.js          # 404 page
│   │   ├── error.js              # Error page
│   │   ├── global-error.js       # Global error handler
│   │   │
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── expeditions/
│   │   │   └── page.js
│   │   └── services/
│   │       └── [slug]/
│   │           └── page.js       # Dynamic route
│   │
│   └── lib/                      # 🟢 Boilerplate Layer
│       │
│       ├── components/           # UI Components
│       │   ├── index.js          # Central export
│       │   │
│       │   ├── utility/          # Base utilities
│       │   │   ├── Container/
│       │   │   ├── Section/
│       │   │   ├── Badge/
│       │   │   ├── Chip/
│       │   │   ├── Avatar/
│       │   │   ├── Icon/
│       │   │   ├── Divider/
│       │   │   ├── ThemeToggle/
│       │   │   └── index.js
│       │   │
│       │   ├── hero/             # Hero components
│       │   │   ├── HeroSection/
│       │   │   ├── HeroSplit/
│       │   │   ├── HeroVideo/
│       │   │   ├── HeroCarousel/
│       │   │   └── CTABanner/
│       │   │
│       │   ├── content/          # Content sections
│       │   │   ├── AboutSection/
│       │   │   ├── ContentSection/
│       │   │   ├── GridSection/
│       │   │   ├── ServicesSection/
│       │   │   ├── FooterSection/
│       │   │   └── StatsCounter/
│       │   │
│       │   ├── navigation/       # Navigation
│       │   │   └── AppBar/
│       │   │
│       │   ├── forms/            # Form components
│       │   │   ├── TextField/
│       │   │   ├── TextArea/
│       │   │   ├── ContactForm/
│       │   │   └── NewsletterSignup/
│       │   │
│       │   ├── social-proof/     # Social proof
│       │   │   ├── TestimonialCard/
│       │   │   └── TestimonialsCarousel/
│       │   │
│       │   ├── team/             # Team components
│       │   │   ├── TeamMemberCard/
│       │   │   └── TeamSection/
│       │   │
│       │   ├── pricing/          # Pricing components
│       │   │   ├── PricingCard/
│       │   │   └── PricingTable/
│       │   │
│       │   ├── blog/             # Blog components
│       │   │   ├── BlogCard/
│       │   │   └── BlogGrid/
│       │   │
│       │   ├── faq/              # FAQ components
│       │   │   └── FAQAccordion/
│       │   │
│       │   ├── media/            # Media components
│       │   │   ├── ImageGallery/
│       │   │   ├── ImageCarousel/
│       │   │   └── VideoSection/
│       │   │
│       │   ├── seo/              # SEO components
│       │   │   ├── SEOHead/
│       │   │   └── StructuredData/
│       │   │
│       │   ├── interactive/      # Interactive UI
│       │   │   ├── Modal/
│       │   │   └── Drawer/
│       │   │
│       │   └── feedback/         # Feedback UI
│       │       ├── Loading/
│       │       └── ErrorBoundary/
│       │
│       ├── theme/                # Theme system
│       │   ├── createAppTheme.js
│       │   ├── ThemeProvider.js
│       │   ├── themeDefaults.js
│       │   └── index.js
│       │
│       ├── hooks/                # Custom hooks
│       │   ├── useMediaQuery.js
│       │   ├── useScrollSpy.js
│       │   ├── useIntersectionObserver.js
│       │   ├── useLocalStorage.js
│       │   ├── useDebounce.js
│       │   ├── useCountUp.js
│       │   └── index.js
│       │
│       └── utils/                # Utilities
│           ├── validation.js     # Zod schemas
│           └── index.js
│
├── public/                       # Static assets
│   ├── images/
│   └── fonts/
│
├── .env.example                  # Environment template
├── next.config.mjs               # Next.js config
├── package.json
├── README.md
├── SETUP.md
└── ARCHITECTURE.md (this file)
```

---

## Component Architecture

### Component Structure Pattern

Each component follows this structure:

```
ComponentName/
├── ComponentName.js       # Component logic
├── index.js              # Re-export
└── (optional tests)
```

### Component Template

```javascript
'use client';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * ComponentName
 *
 * Description of what this component does
 *
 * @param {Object} config - Configuration object
 * @param {string} config.title - Title text
 * @param {string} config.variant - Visual variant
 * @param {Object} sx - MUI sx prop for styling
 */

const StyledWrapper = styled(Box)(({ theme, variant }) => ({
  // Styles here
  padding: theme.spacing(4),
  ...(variant === 'special' && {
    backgroundColor: theme.palette.primary.main,
  }),
}));

export default function ComponentName({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const { title, variant = 'default' } = config;

  return (
    <StyledWrapper variant={variant} sx={sx}>
      <Typography variant="h2">{title}</Typography>
    </StyledWrapper>
  );
}
```

### Export Pattern

```javascript
// Component/index.js
export { default } from './ComponentName';

// Category/index.js
export { default as ComponentName } from './ComponentName';

// components/index.js
export * from './category';
```

---

## Theme System

### Theme Architecture

```
themeConfig (from content)
    ↓
createAppTheme(themeConfig, mode)
    ↓
MUI Theme Object
    ↓
ThemeProvider (with dark mode)
    ↓
Components
```

### Theme Flow

1. **Configuration** (`content/theme.config.js`)
```javascript
export const themeConfig = {
  colors: {
    primary: { main: '#1976d2', ... },
    secondary: { main: '#dc004e', ... }
  }
};
```

2. **Theme Factory** (`lib/theme/createAppTheme.js`)
```javascript
export function createAppTheme(themeConfig, mode) {
  return createTheme({
    palette: {
      mode,
      primary: themeConfig.colors.primary,
      // ... adaptive colors based on mode
    }
  });
}
```

3. **Theme Provider** (`lib/theme/ThemeProvider.js`)
```javascript
export default function ThemeProvider({ children, themeConfig }) {
  const [mode, setMode] = useState('light');
  const theme = createAppTheme(themeConfig, mode);

  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
}
```

4. **Usage in Components**
```javascript
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '@/lib/theme';

function Component() {
  const theme = useTheme(); // MUI theme
  const { mode, toggleTheme } = useThemeMode(); // Dark mode
}
```

---

## State Management

### Local State (useState)

Used for:
- Component-specific UI state
- Form inputs
- Toggle states

```javascript
const [isOpen, setIsOpen] = useState(false);
```

### Context (React Context)

Used for:
- Theme mode (light/dark)
- Future: User authentication
- Future: Shopping cart

```javascript
// ThemeContext
const ThemeContext = createContext();
export function useThemeMode() {
  return useContext(ThemeContext);
}
```

### Custom Hooks

Encapsulate reusable logic:

```javascript
// useLocalStorage - Persist state
const [value, setValue] = useLocalStorage('key', defaultValue);

// useMediaQuery - Responsive logic
const isMobile = useMediaQuery('(max-width: 600px)');

// useDebounce - Debounced values
const debouncedSearch = useDebounce(searchTerm, 500);
```

### Future: Server State

For API data, consider:
- **TanStack Query** (React Query)
- **SWR**
- **Zustand** for client state

---

## Data Flow

### Config-Driven Flow

```
1. Content Config (content/sections/hero.config.js)
   ↓
2. Page Config (content/pages/home.config.js)
   ↓
3. Page Component (app/page.js)
   ↓
4. Section Component (HeroSection)
   ↓
5. Render
```

### Example Flow

```javascript
// 1. Content Config
// content/sections/hero.config.js
export const heroConfig = {
  title: "Welcome",
  cta: { text: "Get Started", href: "#contact" }
};

// 2. Page Config
// content/pages/home.config.js
import { heroConfig } from '../sections/hero.config';

export const homeConfig = {
  sections: [
    { type: 'hero', config: heroConfig }
  ]
};

// 3. Page Component
// app/page.js
import { HeroSection } from '@/lib/components';
import { homeConfig } from '@/content/pages/home.config';

export default function Home() {
  return (
    <main>
      {homeConfig.sections.map((section, i) => (
        section.type === 'hero' &&
        <HeroSection key={i} config={section.config} />
      ))}
    </main>
  );
}

// 4. Section Component
// lib/components/hero/HeroSection/HeroSection.js
export default function HeroSection({ config }) {
  return (
    <Section>
      <h1>{config.title}</h1>
      <Button href={config.cta.href}>
        {config.cta.text}
      </Button>
    </Section>
  );
}
```

---

## Performance Optimizations

### 1. Next.js Optimizations

**next.config.mjs:**
```javascript
{
  swcMinify: true,              // Fast minification
  reactStrictMode: true,        // Catch issues early
  images: {
    formats: ['avif', 'webp'],  // Modern formats
    deviceSizes: [640, 750, ...],
  },
  compiler: {
    removeConsole: true,         // Remove logs in prod
  }
}
```

### 2. Code Splitting

**Automatic:**
- Each page is a separate bundle
- Dynamic imports for heavy components

**Manual:**
```javascript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Loading />,
  ssr: false // Client-side only if needed
});
```

### 3. Image Optimization

```javascript
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"       // Lazy load
  placeholder="blur"   // Blur placeholder
  quality={85}         // Optimize quality
/>
```

### 4. Font Optimization

```javascript
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',     // Prevent FOIT
  preload: true,       // Preload font
});
```

### 5. Webpack Optimizations

**Chunk splitting:**
```javascript
splitChunks: {
  cacheGroups: {
    vendor: {
      test: /node_modules/,
      name: 'vendor',
      chunks: 'all'
    },
    mui: {
      test: /[\\/]node_modules[\\/]@mui[\\/]/,
      name: 'mui',
      priority: 30
    }
  }
}
```

---

## Code Patterns

### 1. Component Variants Pattern

```javascript
export default function Component({ variant = 'default', ...props }) {
  const variants = {
    default: { /* styles */ },
    special: { /* styles */ },
    minimal: { /* styles */ }
  };

  return (
    <Box sx={variants[variant]}>
      {/* content */}
    </Box>
  );
}
```

### 2. Conditional Rendering Pattern

```javascript
export default function Component({ config }) {
  if (!config) return null;

  const { optional, required } = config;

  return (
    <Box>
      <h1>{required}</h1>
      {optional && <p>{optional}</p>}
    </Box>
  );
}
```

### 3. Styled Component Pattern

```javascript
const StyledBox = styled(Box)(({ theme, variant }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,

  // Responsive
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
  },

  // Conditional
  ...(variant === 'special' && {
    border: `2px solid ${theme.palette.primary.main}`,
  }),
}));
```

### 4. Hook Composition Pattern

```javascript
function useComplexLogic() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [value, setValue] = useLocalStorage('key', '');
  const debouncedValue = useDebounce(value, 300);

  return { isMobile, value, setValue, debouncedValue };
}
```

---

## Extension Guide

### Adding a New Component

1. **Create directory:**
```bash
mkdir src/lib/components/category/ComponentName
```

2. **Create component:**
```javascript
// ComponentName.js
export default function ComponentName({ config }) {
  return <div>{config.title}</div>;
}
```

3. **Create index:**
```javascript
// index.js
export { default } from './ComponentName';
```

4. **Export from category:**
```javascript
// category/index.js
export { default as ComponentName } from './ComponentName';
```

5. **Create config:**
```javascript
// content/sections/componentName.config.js
export const componentNameConfig = {
  title: "Title",
  // ... configuration
};
```

### Adding a New Hook

1. **Create hook file:**
```javascript
// src/lib/hooks/useYourHook.js
export default function useYourHook() {
  // Hook logic
  return { /* values */ };
}
```

2. **Export from hooks:**
```javascript
// hooks/index.js
export { default as useYourHook } from './useYourHook';
```

### Adding a New Page

1. **Create page directory:**
```bash
mkdir src/app/your-page
```

2. **Create page file:**
```javascript
// src/app/your-page/page.js
import { Component } from '@/lib/components';

export default function YourPage() {
  return <Component />;
}
```

3. **Create page config:**
```javascript
// content/pages/yourPage.config.js
export const yourPageConfig = {
  sections: [/* ... */]
};
```

4. **Add to navigation:**
```javascript
// content/navigation.config.js
menuItems: [
  { label: "Your Page", href: "/your-page" }
]
```

---

## Testing Strategy

### Component Testing

```javascript
// ComponentName.test.js
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders with config', () => {
    const config = { title: 'Test' };
    render(<ComponentName config={config} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Integration Testing

Test page compositions and data flow.

### E2E Testing

Use Playwright or Cypress for full user flows.

---

## Future Enhancements

### Planned Features

1. **CMS Integration (Payload CMS)**
   - Replace config files with database
   - Admin dashboard
   - Content versioning

2. **Authentication**
   - NextAuth.js integration
   - User roles
   - Protected routes

3. **i18n (Internationalization)**
   - next-intl
   - Multi-language support
   - Dynamic content translation

4. **Analytics**
   - Google Analytics 4
   - Custom event tracking
   - Performance monitoring

5. **Testing**
   - Jest + React Testing Library
   - Playwright E2E
   - Component coverage

---

## Performance Metrics

### Target Metrics

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Total Bundle Size**: < 200KB (gzipped)

### Monitoring

```javascript
// Use Next.js analytics
export function reportWebVitals(metric) {
  console.log(metric);
  // Send to analytics service
}
```

---

## Security Considerations

### Headers

Security headers configured in `next.config.mjs`:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### Environment Variables

Never commit `.env.local` - use `.env.example` as template.

### Input Validation

All forms use Zod schemas for validation.

### XSS Prevention

React escapes content by default. Use `dangerouslySetInnerHTML` sparingly.

---

**For questions about this architecture, refer to the README.md or open an issue.**
