# Boilerplate Extraction & Content Separation Plan

**Project:** Tribe Banua Website Refactoring
**Objective:** Create a reusable Next.js + MUI + Payload CMS boilerplate while extracting all project-specific content into a separate content/config layer
**Date:** November 1, 2025

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Proposed Architecture](#proposed-architecture)
3. [Directory Structure](#directory-structure)
4. [Separation Strategy](#separation-strategy)
5. [Implementation Plan](#implementation-plan)
6. [Payload CMS Integration](#payload-cms-integration)
7. [Using the Boilerplate for New Projects](#using-the-boilerplate-for-new-projects)
8. [Migration Checklist](#migration-checklist)

---

## Executive Summary

### Current Problem

- Business content is hardcoded throughout components
- Theme colors and branding scattered across files
- No clear separation between reusable code and project-specific content
- Difficult to reuse this structure for other projects

### Solution

Create a **two-layer architecture**:

1. **Content/Config Layer** (project-specific)
   - All business content, text, images, prices
   - Theme colors and branding
   - Navigation structure
   - Page layouts and sections composition
   - Payload CMS configuration

2. **Boilerplate Layer** (reusable)
   - Generic UI components
   - Layout system
   - Utility functions
   - Base theme structure
   - Payload CMS integration patterns

### Benefits

✅ **Reusability** - Use the boilerplate for any Next.js + MUI project
✅ **Maintainability** - Content changes don't touch component code
✅ **CMS-Ready** - Content naturally maps to Payload CMS collections
✅ **Scalability** - Easy to add new pages/sections by composing content
✅ **Team Collaboration** - Developers work on boilerplate, content team manages content

---

## Proposed Architecture

```
┌─────────────────────────────────────────────┐
│          CONTENT/CONFIG LAYER               │
│  (Project-Specific - Tribe Banua)           │
│                                             │
│  • content/                                 │
│    - navigation.config.js                   │
│    - theme.config.js                        │
│    - site.config.js                         │
│    - sections/ (page section configs)       │
│    - pages/ (page compositions)             │
│  • payload/ (CMS configuration)             │
│  • public/ (images, media)                  │
└─────────────────────────────────────────────┘
                    ↓ uses
┌─────────────────────────────────────────────┐
│          BOILERPLATE LAYER                  │
│  (Reusable - Copy to any project)           │
│                                             │
│  • lib/                                     │
│    - components/ (generic UI)               │
│    - layouts/                               │
│    - utils/                                 │
│    - theme/ (theme factory)                 │
│  • app/ (Next.js structure)                 │
└─────────────────────────────────────────────┘
```

---

## Directory Structure

### New Project Structure

```
tribe-banua/
├── content/                          # 🔵 PROJECT-SPECIFIC
│   ├── site.config.js               # Site metadata, contact info
│   ├── theme.config.js              # Brand colors, fonts, logo
│   ├── navigation.config.js         # Nav menu structure
│   ├── sections/                    # Section content definitions
│   │   ├── hero.config.js          # Hero section content
│   │   ├── services.config.js      # Services content
│   │   ├── whyChooseUs.config.js   # Why Choose Us content
│   │   ├── footer.config.js        # Footer content
│   │   └── index.js                # Export all sections
│   └── pages/                       # Page compositions
│       ├── home.config.js          # Home page layout
│       ├── expeditions.config.js   # Service page layout
│       ├── island-tours.config.js
│       ├── ferry.config.js
│       └── van.config.js
│
├── src/
│   ├── lib/                          # 🟢 REUSABLE BOILERPLATE
│   │   ├── components/              # Generic UI components
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.js
│   │   │   │   ├── HeroSection.styles.js
│   │   │   │   └── index.js
│   │   │   ├── GridSection/
│   │   │   │   ├── GridSection.js
│   │   │   │   └── index.js
│   │   │   ├── ImageListSection/
│   │   │   ├── ContactSection/
│   │   │   ├── FooterSection/
│   │   │   └── index.js
│   │   │
│   │   ├── layouts/                 # Layout components
│   │   │   ├── AppBar/
│   │   │   │   ├── AppBar.js       # Generic navigation
│   │   │   │   └── index.js
│   │   │   ├── Container/
│   │   │   ├── Stack/
│   │   │   ├── Link/
│   │   │   └── index.js
│   │   │
│   │   ├── theme/                   # Theme factory
│   │   │   ├── createAppTheme.js   # Theme generator
│   │   │   ├── themeDefaults.js    # Default MUI settings
│   │   │   └── index.js
│   │   │
│   │   └── utils/                   # Helper functions
│   │       ├── fetchContent.js     # CMS data fetching
│   │       ├── imageHelpers.js
│   │       └── index.js
│   │
│   └── app/                          # Next.js App Router
│       ├── layout.js                # Root layout (uses content config)
│       ├── page.js                  # Home page (uses content config)
│       ├── theme.js                 # Theme instance (uses content config)
│       ├── services/
│       │   ├── [slug]/              # Dynamic service page
│       │   │   └── page.js
│       │   ├── expeditions/
│       │   ├── island-tours/
│       │   ├── ferry/
│       │   └── van/
│       └── globals.css
│
├── payload/                          # 🔵 PROJECT-SPECIFIC (CMS)
│   ├── collections/
│   │   ├── Services.ts
│   │   ├── Pages.ts
│   │   ├── Media.ts
│   │   └── Settings.ts
│   ├── payload.config.ts
│   └── server.ts
│
├── public/                           # 🔵 PROJECT-SPECIFIC (Media)
│   ├── images/
│   ├── heroimg.jpg
│   └── app-bg.jpg
│
├── .env.example                      # Environment template
├── .env.local                        # Local environment (gitignored)
├── package.json
├── next.config.mjs
└── jsconfig.json
```

### Boilerplate Extraction (for reuse)

When creating a new project, copy this structure:

```
nextjs-mui-payload-boilerplate/      # 🟢 REUSABLE TEMPLATE
├── src/
│   └── lib/                         # Copy entire lib/ folder
│       ├── components/
│       ├── layouts/
│       ├── theme/
│       └── utils/
│
├── content.template/                 # Template for content layer
│   ├── site.config.template.js
│   ├── theme.config.template.js
│   ├── navigation.config.template.js
│   └── README.md                    # How to configure
│
├── payload.template/                 # Template for Payload setup
│   ├── collections/
│   │   └── README.md
│   └── payload.config.template.ts
│
├── docs/
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   └── CONTENT_CONFIG.md
│
├── .env.example
├── package.json.template
├── next.config.mjs
└── README.md
```

---

## Separation Strategy

### What Goes in Content/Config Layer? (🔵 Project-Specific)

#### 1. Site Configuration (`content/site.config.js`)

```javascript
export const siteConfig = {
  name: "Tribe Banua",
  tagline: "Unforgettable Expeditions in Palawan",
  description: "Boat tours, island hopping, and expedition services",

  contact: {
    email: "info@tribebanua.com",
    phone: "+63 123 456 7890",
    address: "El Nido, Palawan, Philippines"
  },

  social: {
    facebook: "https://facebook.com/tribebanua",
    instagram: "https://instagram.com/tribebanua",
    twitter: "https://twitter.com/tribebanua"
  },

  seo: {
    title: "Tribe Banua - Palawan Boat Tours & Expeditions",
    description: "...",
    keywords: ["palawan tours", "boat expeditions", "el nido"]
  }
};
```

#### 2. Theme Configuration (`content/theme.config.js`)

```javascript
export const themeConfig = {
  brand: {
    name: "Tribe Banua",
    logo: {
      icon: "SailingIcon", // MUI icon name
      text: "TRIBE BANUA"
    }
  },

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

  typography: {
    fontFamily: 'Roboto',
    fontWeights: ['300', '400', '500', '700']
  },

  layout: {
    maxWidth: 'xl',
    spacing: 8
  }
};
```

#### 3. Navigation Configuration (`content/navigation.config.js`)

```javascript
export const navigationConfig = {
  mainMenu: [
    { label: 'Home', href: '/', type: 'page' },
    { label: 'Services', href: '/#services-section', type: 'section' },
    { label: 'Why Choose Us', href: '/#whychooseus-section', type: 'section' },
    { label: 'Contact Us', href: '/#contactus-section', type: 'section' }
  ],

  // Optional: secondary menu, footer menu, etc.
  footerMenu: [
    { label: 'About', href: '/about' },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' }
  ]
};
```

#### 4. Section Configurations (`content/sections/`)

**`content/sections/hero.config.js`**
```javascript
export const heroConfig = {
  title: "Unforgettable Expeditions",
  subtitle: "Explore the hidden gems of Palawan",
  cta: {
    text: "Book Now",
    href: "/#services-section"
  },
  background: {
    image: "/heroimg.jpg",
    overlay: true,
    overlayColor: "rgba(0, 0, 0, 0.3)"
  },
  height: "100vh"
};
```

**`content/sections/whyChooseUs.config.js`**
```javascript
export const whyChooseUsConfig = {
  title: "WHY CHOOSE US?",
  items: [
    {
      title: "Successful Expeditions",
      icon: "SailingIcon",
      iconColor: "primary",
      description: "A history of successful and meticulously planned journeys to remote paradises and untamed natural wonders."
    },
    {
      title: "Expert Crew",
      icon: "Groups3Icon",
      iconColor: "secondary",
      description: "Rest assured with our expert crew, who bring a wealth of knowledge, safety, and enthusiasm to every expedition."
    },
    {
      title: "Trustworthy",
      icon: "VerifiedUserIcon",
      iconColor: "success.main",
      description: "Built on a foundation of integrity, transparency, and a proven track record."
    },
    {
      title: "Highly Rated",
      icon: "AutoAwesomeIcon",
      iconColor: "#ffd700",
      description: "Backed by high ratings and glowing reviews from satisfied clients."
    }
  ],
  layout: {
    columns: { xs: 6, sm: 6, md: 3 }
  }
};
```

**`content/sections/services.config.js`**
```javascript
export const servicesConfig = {
  title: "OUR SERVICES",
  items: [
    {
      title: "Expeditions",
      image: "/services/expeditions.jpg",
      description: "Multi-day boat expeditions",
      href: "/services/expeditions"
    },
    {
      title: "Island Tours",
      image: "/services/island-tours.jpg",
      description: "El Nido island hopping",
      href: "/services/island-tours"
    },
    {
      title: "Ferry Transfer",
      image: "/services/ferry.jpg",
      description: "Coron ↔ El Nido",
      href: "/services/ferry"
    },
    {
      title: "Van Transfer",
      image: "/services/van.jpg",
      description: "Puerto Princesa ↔ El Nido",
      href: "/services/van"
    }
  ]
};
```

#### 5. Page Compositions (`content/pages/`)

**`content/pages/home.config.js`**
```javascript
import { heroConfig } from '../sections/hero.config';
import { servicesConfig } from '../sections/services.config';
import { whyChooseUsConfig } from '../sections/whyChooseUs.config';
import { footerConfig } from '../sections/footer.config';

export const homePageConfig = {
  title: "Home",
  sections: [
    {
      type: 'hero',
      config: heroConfig,
      container: {
        id: "hero-container"
      }
    },
    {
      type: 'services',
      config: servicesConfig,
      container: {
        id: "services-section"
      }
    },
    {
      type: 'whyChooseUs',
      config: whyChooseUsConfig,
      container: {
        id: "whychooseus-section",
        sx: { height: '100vh' }
      }
    },
    {
      type: 'footer',
      config: footerConfig,
      container: {
        id: "footer-section",
        sx: { height: '100vh' }
      }
    }
  ],
  background: {
    image: "/app-bg.jpg"
  }
};
```

---

### What Goes in Boilerplate Layer? (🟢 Reusable)

#### 1. Generic Components (`src/lib/components/`)

**`src/lib/components/HeroSection/HeroSection.js`**
```javascript
'use client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as MuiIcons from '@mui/icons-material';

const HeroContainer = styled(Box)(({ theme, config }) => ({
  height: config?.height || '100vh',
  padding: theme.spacing(2),
  backgroundImage: config?.background?.image
    ? `url('${config.background.image}')`
    : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '&::before': config?.background?.overlay ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: config.background.overlayColor || 'rgba(0, 0, 0, 0.3)',
    zIndex: 1
  } : {}
}));

const Content = styled(Box)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: 'white'
});

export default function HeroSection({ config }) {
  return (
    <HeroContainer config={config}>
      <Content>
        <Typography variant="h2" component="h1" gutterBottom>
          {config.title}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {config.subtitle}
        </Typography>
        {config.cta && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={config.cta.href}
          >
            {config.cta.text}
          </Button>
        )}
      </Content>
    </HeroContainer>
  );
}
```

**`src/lib/components/GridSection/GridSection.js`**
```javascript
'use client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as MuiIcons from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  '& h2': {
    textShadow: '5px 5px 5px black'
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: theme.spacing(2),
  textAlign: 'center',
  height: 300,
  margin: theme.spacing(1)
}));

export default function GridSection({ config }) {
  return (
    <SectionContainer id={config.id}>
      <Typography variant="h3" component="h2" gutterBottom>
        {config.title}
      </Typography>

      <Grid container>
        {config.items.map((item, index) => {
          // Dynamically load icon
          const IconComponent = MuiIcons[item.icon] || MuiIcons.Star;

          return (
            <Grid
              item
              xs={config.layout?.columns?.xs || 12}
              sm={config.layout?.columns?.sm || 6}
              md={config.layout?.columns?.md || 3}
              key={index}
            >
              <Item elevation={16}>
                <Typography variant="h6" component="h3">
                  {item.title}
                </Typography>
                <IconComponent
                  fontSize="large"
                  sx={{ color: item.iconColor }}
                />
                <Typography variant="body2">
                  {item.description}
                </Typography>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
```

#### 2. Generic Navigation (`src/lib/layouts/AppBar/AppBar.js`)

```javascript
'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import * as MuiIcons from '@mui/icons-material';

export default function ResponsiveAppBar({
  brand,
  menuItems,
  themeColors
}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const LogoIcon = MuiIcons[brand?.logo?.icon] || MuiIcons.Business;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: themeColors.primary.main }}
    >
      <Toolbar>
        {/* Logo - Desktop */}
        <LogoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          {brand?.logo?.text}
        </Typography>

        {/* Mobile Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} onClick={handleCloseNavMenu}>
                <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.label}
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Logo - Mobile */}
        <LogoIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          component="a"
          href="/"
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          {brand?.logo?.text}
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
```

#### 3. Theme Factory (`src/lib/theme/createAppTheme.js`)

```javascript
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Creates a MUI theme from a theme configuration object
 * @param {Object} themeConfig - Theme configuration from content layer
 * @returns {Theme} MUI theme object
 */
export function createAppTheme(themeConfig) {
  return createTheme({
    typography: {
      fontFamily: themeConfig?.typography?.fontFamily
        ? roboto.style.fontFamily
        : 'Roboto, sans-serif',
    },
    palette: {
      primary: themeConfig?.colors?.primary || {
        main: '#1976d2',
      },
      secondary: themeConfig?.colors?.secondary || {
        main: '#dc004e',
      },
      ...(themeConfig?.colors?.neutral && {
        neutral: themeConfig.colors.neutral
      }),
      ...(themeConfig?.colors?.primaryLight && {
        primaryLight: themeConfig.colors.primaryLight
      }),
      ...(themeConfig?.colors?.primaryDark && {
        primaryDark: themeConfig.colors.primaryDark
      })
    }
  });
}
```

---

## Implementation Plan

### Phase 1: Create New Structure (Week 1, Days 1-2)

#### Step 1.1: Create Content Directory Structure
```bash
mkdir content
mkdir content/sections
mkdir content/pages
```

#### Step 1.2: Extract Configuration Files

**Tasks:**
- [ ] Create `content/site.config.js` with business info
- [ ] Create `content/theme.config.js` with brand colors
- [ ] Create `content/navigation.config.js` with menu structure

#### Step 1.3: Extract Section Configurations

**Tasks:**
- [ ] Create `content/sections/hero.config.js`
- [ ] Create `content/sections/services.config.js`
- [ ] Create `content/sections/whyChooseUs.config.js`
- [ ] Create `content/sections/footer.config.js`
- [ ] Create `content/sections/index.js` (export all)

#### Step 1.4: Extract Page Compositions

**Tasks:**
- [ ] Create `content/pages/home.config.js`
- [ ] Create `content/pages/expeditions.config.js`
- [ ] Create `content/pages/island-tours.config.js`
- [ ] Create `content/pages/ferry.config.js`
- [ ] Create `content/pages/van.config.js`

---

### Phase 2: Create Boilerplate Components (Week 1, Days 3-5)

#### Step 2.1: Create lib Directory Structure
```bash
mkdir -p src/lib/components
mkdir -p src/lib/layouts
mkdir -p src/lib/theme
mkdir -p src/lib/utils
```

#### Step 2.2: Build Generic Components

**Tasks:**
- [ ] Create `src/lib/components/HeroSection/`
  - HeroSection.js (generic hero)
  - index.js
- [ ] Create `src/lib/components/GridSection/`
  - GridSection.js (generic grid layout)
  - index.js
- [ ] Create `src/lib/components/ImageListSection/`
  - ImageListSection.js
  - index.js
- [ ] Create `src/lib/components/ContactSection/`
  - ContactSection.js
  - index.js
- [ ] Create `src/lib/components/FooterSection/`
  - FooterSection.js
  - index.js
- [ ] Create `src/lib/components/index.js` (export all)

#### Step 2.3: Refactor Layout Components

**Tasks:**
- [ ] Move `src/app/ui/navigation/appbar.js` → `src/lib/layouts/AppBar/AppBar.js`
  - Make it generic (accept brand, menuItems props)
- [ ] Move `src/app/ui/layout/container.js` → `src/lib/layouts/Container/`
- [ ] Move `src/app/ui/layout/stack.js` → `src/lib/layouts/Stack/`
- [ ] Move `src/app/ui/layout/link.js` → `src/lib/layouts/Link/`
- [ ] Delete `src/app/ui/layout/featured.js` (empty component)
- [ ] Create `src/lib/layouts/index.js` (export all)

#### Step 2.4: Create Theme Factory

**Tasks:**
- [ ] Create `src/lib/theme/createAppTheme.js`
- [ ] Create `src/lib/theme/themeDefaults.js`
- [ ] Create `src/lib/theme/index.js`

#### Step 2.5: Create Utilities

**Tasks:**
- [ ] Create `src/lib/utils/fetchContent.js` (for future CMS)
- [ ] Create `src/lib/utils/iconResolver.js` (resolve icon strings to components)
- [ ] Create `src/lib/utils/index.js`

---

### Phase 3: Refactor Existing Pages to Use New Architecture (Week 2, Days 1-3)

#### Step 3.1: Refactor Root Layout

**`src/app/layout.js`**
```javascript
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ResponsiveAppBar from '@/lib/layouts/AppBar';
import { createAppTheme } from '@/lib/theme';
import { themeConfig } from '../../content/theme.config';
import { navigationConfig } from '../../content/navigation.config';
import { siteConfig } from '../../content/site.config';

const theme = createAppTheme(themeConfig);

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar
              brand={themeConfig.brand}
              menuItems={navigationConfig.mainMenu}
              themeColors={themeConfig.colors}
            />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
```

#### Step 3.2: Refactor Home Page

**`src/app/page.js`**
```javascript
'use client';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { HeroSection, GridSection, ImageListSection, FooterSection } from '@/lib/components';
import { homePageConfig } from '../../content/pages/home.config';

const PageContainer = styled(Container)(({ theme, config }) => ({
  padding: 0,
  width: '100%',
  backgroundImage: config?.background?.image
    ? `url('${config.background.image}')`
    : 'none',
  backgroundSize: 'cover',
}));

export default function Home() {
  const sectionComponents = {
    hero: HeroSection,
    services: ImageListSection,
    whyChooseUs: GridSection,
    footer: FooterSection
  };

  return (
    <main>
      <PageContainer maxWidth="xl" config={homePageConfig}>
        {homePageConfig.sections.map((section, index) => {
          const SectionComponent = sectionComponents[section.type];

          return (
            <Container
              key={index}
              id={section.container?.id}
              sx={section.container?.sx}
            >
              <SectionComponent config={section.config} />
            </Container>
          );
        })}
      </PageContainer>
    </main>
  );
}
```

#### Step 3.3: Create Dynamic Service Page Template

**`src/app/services/[slug]/page.js`**
```javascript
import { notFound } from 'next/navigation';
import ServicePageTemplate from '@/lib/components/ServicePageTemplate';

// Import all service configs
const serviceConfigs = {
  'expeditions': () => import('../../../../content/pages/expeditions.config').then(m => m.default),
  'island-tours': () => import('../../../../content/pages/island-tours.config').then(m => m.default),
  'ferry': () => import('../../../../content/pages/ferry.config').then(m => m.default),
  'van': () => import('../../../../content/pages/van.config').then(m => m.default),
};

export default async function ServicePage({ params }) {
  const { slug } = params;

  if (!serviceConfigs[slug]) {
    notFound();
  }

  const config = await serviceConfigs[slug]();

  return <ServicePageTemplate config={config} />;
}

export async function generateStaticParams() {
  return Object.keys(serviceConfigs).map((slug) => ({
    slug,
  }));
}
```

**Tasks:**
- [ ] Refactor `src/app/layout.js` to use content configs
- [ ] Refactor `src/app/page.js` to use content configs
- [ ] Create `src/app/services/[slug]/page.js` (dynamic route)
- [ ] Keep existing service pages for now (fallback)

---

### Phase 4: Remove Old Code (Week 2, Days 4-5)

#### Step 4.1: Clean Up Old UI Directory

**Tasks:**
- [ ] Delete `src/app/ui/sections/` (replaced by lib/components)
- [ ] Delete `src/app/ui/layout/` (moved to lib/layouts)
- [ ] Delete `src/app/ui/navigation/` (moved to lib/layouts)
- [ ] Remove `src/app/ui/` directory if empty

#### Step 4.2: Remove Commented Code

**Tasks:**
- [ ] Remove all commented-out code from files
- [ ] Clean up unused imports

#### Step 4.3: Update Imports

**Tasks:**
- [ ] Search for any remaining imports from old `ui/` directory
- [ ] Update to use new `lib/` imports
- [ ] Run `npm run build` to check for errors

---

### Phase 5: Extract Boilerplate Template (Week 3, Days 1-2)

#### Step 5.1: Create Boilerplate Repository

```bash
# Outside tribe-banua directory
mkdir nextjs-mui-payload-boilerplate
cd nextjs-mui-payload-boilerplate
git init
```

#### Step 5.2: Copy Reusable Code

**Tasks:**
- [ ] Copy `src/lib/` directory
- [ ] Copy `package.json` (remove project-specific deps)
- [ ] Copy `next.config.mjs`
- [ ] Copy `jsconfig.json`
- [ ] Copy `.env.example`

#### Step 5.3: Create Template Files

**Tasks:**
- [ ] Create `content.template/` directory
  - `site.config.template.js` with placeholders
  - `theme.config.template.js` with default values
  - `navigation.config.template.js` with example structure
  - `README.md` explaining configuration
- [ ] Create `docs/` directory
  - `SETUP.md` - How to set up new project
  - `ARCHITECTURE.md` - Architecture explanation
  - `CONTENT_CONFIG.md` - How to configure content
  - `COMPONENTS.md` - Component documentation
- [ ] Create comprehensive `README.md`

#### Step 5.4: Add Setup Script

**`setup.sh`** or **`setup.js`**
```bash
#!/bin/bash
# Setup script for new project

echo "🚀 Setting up new project from boilerplate..."

# Copy templates
cp -r content.template content
cp package.json.template package.json
cp .env.example .env.local

# Install dependencies
npm install

echo "✅ Setup complete!"
echo "📝 Next steps:"
echo "  1. Edit content/site.config.js with your project info"
echo "  2. Edit content/theme.config.js with your brand colors"
echo "  3. Edit content/navigation.config.js with your menu"
echo "  4. Run 'npm run dev' to start development"
```

---

## Payload CMS Integration

### Phase 6: Payload CMS Setup (Week 3-4)

#### Step 6.1: Install Payload Dependencies

```bash
npm install payload @payloadcms/db-mongodb @payloadcms/richtext-slate
npm install --save-dev @payloadcms/bundler-webpack
```

#### Step 6.2: Create Payload Collections

Map content configs to CMS collections:

**`payload/collections/Services.ts`**
```typescript
import { CollectionConfig } from 'payload/types';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'duration',
      type: 'text',
    },
    // Add more fields as needed
  ],
};
```

**`payload/collections/SiteSettings.ts`**
```typescript
import { GlobalConfig } from 'payload/types';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
      ],
    },
    {
      name: 'social',
      type: 'group',
      fields: [
        { name: 'facebook', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'twitter', type: 'text' },
      ],
    },
    {
      name: 'theme',
      type: 'group',
      fields: [
        {
          name: 'primaryColor',
          type: 'text',
          defaultValue: '#1f93b6',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          defaultValue: '#75804c',
        },
      ],
    },
  ],
};
```

**`payload/collections/Sections.ts`**
```typescript
import { CollectionConfig } from 'payload/types';

export const Sections: CollectionConfig = {
  slug: 'sections',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Hero', value: 'hero' },
        { label: 'Grid', value: 'grid' },
        { label: 'Image List', value: 'imageList' },
        { label: 'Contact', value: 'contact' },
        { label: 'Footer', value: 'footer' },
      ],
    },
    {
      name: 'config',
      type: 'json',
      required: true,
    },
  ],
};
```

#### Step 6.3: Migrate Content to CMS

**Strategy:**
1. Keep content configs as fallback
2. Create utility to fetch from CMS if available, fallback to configs
3. Gradually migrate content to CMS

**`src/lib/utils/fetchContent.js`**
```javascript
/**
 * Fetches content from Payload CMS or falls back to config files
 */
export async function fetchContent(type, slug = null) {
  // Try to fetch from CMS
  if (process.env.NEXT_PUBLIC_CMS_ENABLED === 'true') {
    try {
      const url = slug
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${type}?where[slug][equals]=${slug}`
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${type}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.docs && data.docs.length > 0) {
        return data.docs[0];
      }
    } catch (error) {
      console.warn(`Failed to fetch from CMS, falling back to config: ${error.message}`);
    }
  }

  // Fallback to config files
  const configs = {
    'site-settings': () => import('../../../content/site.config').then(m => m.siteConfig),
    'services': () => import('../../../content/sections/services.config').then(m => m.servicesConfig),
    // Add more mappings
  };

  if (configs[type]) {
    return await configs[type]();
  }

  return null;
}
```

---

## Using the Boilerplate for New Projects

### Quick Start Guide

#### 1. Clone or Download Boilerplate

```bash
git clone https://github.com/your-org/nextjs-mui-payload-boilerplate.git my-new-project
cd my-new-project
```

#### 2. Run Setup Script

```bash
npm run setup
# or
./setup.sh
```

#### 3. Configure Your Project

**Edit `content/site.config.js`:**
```javascript
export const siteConfig = {
  name: "My Business",  // ← Change this
  tagline: "Amazing services",  // ← Change this
  // ... edit all fields
};
```

**Edit `content/theme.config.js`:**
```javascript
export const themeConfig = {
  brand: {
    name: "My Business",  // ← Change this
    logo: {
      icon: "Store",  // ← Choose MUI icon
      text: "MY BUSINESS"  // ← Change this
    }
  },
  colors: {
    primary: {
      main: '#ff5722',  // ← Your brand color
      // ...
    }
  }
};
```

**Edit `content/navigation.config.js`:**
```javascript
export const navigationConfig = {
  mainMenu: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },  // ← Your pages
    // ...
  ]
};
```

#### 4. Create Your Sections

**Example: Create a testimonials section**

1. Add section config: `content/sections/testimonials.config.js`
```javascript
export const testimonialsConfig = {
  title: "What Our Clients Say",
  items: [
    {
      quote: "Amazing service!",
      author: "John Doe",
      rating: 5
    }
  ]
};
```

2. Use existing GridSection or create custom component
3. Add to page composition: `content/pages/home.config.js`
```javascript
sections: [
  // ...
  {
    type: 'testimonials',
    config: testimonialsConfig
  }
]
```

#### 5. Run Development Server

```bash
npm run dev
```

Your site is now running at `http://localhost:3000`!

---

## Migration Checklist

### Week 1: Structure & Boilerplate
- [ ] Create `content/` directory structure
- [ ] Extract all content into config files
- [ ] Create `src/lib/` directory structure
- [ ] Build generic components
- [ ] Refactor layout components
- [ ] Create theme factory
- [ ] Create utilities

### Week 2: Refactoring & Cleanup
- [ ] Refactor root layout to use configs
- [ ] Refactor home page to use configs
- [ ] Create dynamic service page route
- [ ] Delete old `src/app/ui/` directory
- [ ] Remove commented code
- [ ] Update all imports
- [ ] Test all pages

### Week 3: Boilerplate Extraction
- [ ] Create boilerplate repository
- [ ] Copy reusable code
- [ ] Create template files
- [ ] Write documentation
- [ ] Create setup script
- [ ] Test boilerplate with new dummy project

### Week 4: Payload CMS Integration
- [ ] Install Payload dependencies
- [ ] Create Payload collections
- [ ] Set up Payload admin
- [ ] Create content migration utility
- [ ] Migrate 1-2 sections to CMS (test)
- [ ] Update components to use fetchContent utility

### Week 5: Testing & Refinement
- [ ] Test all pages in Tribe Banua
- [ ] Test creating new project from boilerplate
- [ ] Add comprehensive documentation
- [ ] Add error handling
- [ ] Performance optimization
- [ ] Deploy to production

---

## Benefits Summary

### For Tribe Banua Project
✅ Content separated from code
✅ Easy to update without touching components
✅ CMS-ready architecture
✅ Cleaner codebase
✅ Less code duplication

### For Future Projects
✅ Reusable boilerplate saves weeks of development
✅ Consistent architecture across projects
✅ MUI + Next.js + Payload CMS preconfigured
✅ Generic components ready to use
✅ Easy customization via content configs

### For Teams
✅ Clear separation of concerns
✅ Content team can work independently
✅ Developers focus on components
✅ Consistent patterns across projects
✅ Easy onboarding with documentation

---

## Next Steps

1. **Review this plan** - Ensure it meets your needs
2. **Choose implementation timeline** - Full 5 weeks or phased?
3. **Start with Phase 1** - Create content directory structure
4. **Iterate and refine** - Adjust as needed during implementation

---

**Document Version:** 1.0
**Last Updated:** November 1, 2025
**Estimated Timeline:** 5 weeks
**Complexity:** Medium-High
**Impact:** High Value

