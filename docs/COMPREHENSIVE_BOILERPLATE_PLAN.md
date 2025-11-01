# Comprehensive Next.js + MUI + Payload CMS Boilerplate Plan

**Project:** Tribe Banua → Full-Featured Business Website Boilerplate
**Scope:** Comprehensive suite with all standard business components + advanced features
**Date:** November 1, 2025

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Complete Component Library](#complete-component-library)
3. [Standard Pages Library](#standard-pages-library)
4. [Advanced Features](#advanced-features)
5. [Architecture](#architecture)
6. [Implementation Timeline](#implementation-timeline)
7. [Detailed Implementation Plan](#detailed-implementation-plan)
8. [Payload CMS Collections](#payload-cms-collections)

---

## Executive Summary

### Goal

Create a **production-ready, enterprise-grade boilerplate** that includes:

✅ **30+ Reusable Components** (from basic to advanced)
✅ **15+ Page Templates** (all standard business pages)
✅ **Advanced Features** (animations, forms, search, SEO)
✅ **Payload CMS Integration** (content management ready)
✅ **Best Practices** (accessibility, performance, SEO)
✅ **Developer Experience** (TypeScript, Storybook, testing)

### Use Cases

This boilerplate will be ready for:
- Corporate websites
- E-commerce landing pages
- SaaS marketing sites
- Agency portfolios
- Service businesses
- Restaurant/hospitality sites
- Professional services
- Non-profits

---

## Complete Component Library

### 1. Hero & Banner Components

#### `HeroSection`
**Purpose:** Main page hero with background image/video
**Props:**
- `title`, `subtitle`, `cta` (button)
- `backgroundImage`, `backgroundVideo`
- `overlay`, `height`
- `alignment` (left, center, right)
- `variant` (full, split, minimal)

**Variants:**
- `HeroFull` - Full screen with centered content
- `HeroSplit` - Image on one side, content on other
- `HeroMinimal` - Simple banner with text
- `HeroVideo` - Video background
- `HeroCarousel` - Rotating hero slides

#### `CTABanner`
**Purpose:** Call-to-action section
**Props:**
- `title`, `description`, `primaryCTA`, `secondaryCTA`
- `backgroundColor`, `variant` (box, full-width, gradient)

---

### 2. Content Sections

#### `AboutSection`
**Purpose:** Company/product about section
**Props:**
- `title`, `content` (rich text)
- `images` (single or grid)
- `layout` (text-left, text-right, centered)
- `stats` (optional metrics)

#### `FeaturesGrid`
**Purpose:** Display features/benefits in grid
**Props:**
- `title`, `items[]` (icon, title, description)
- `columns` (2, 3, 4)
- `iconStyle` (outlined, filled, custom)
- `variant` (cards, minimal, bordered)

#### `ServicesSection`
**Purpose:** Services/offerings display
**Props:**
- `title`, `services[]` (title, description, icon, link)
- `layout` (grid, list, carousel)
- `showPricing` (boolean)

#### `StatsCounter`
**Purpose:** Animated statistics/metrics
**Props:**
- `stats[]` (number, label, icon, suffix)
- `animationDuration`
- `layout` (row, grid)

---

### 3. Social Proof & Trust

#### `TestimonialsCarousel`
**Purpose:** Customer reviews carousel
**Props:**
- `testimonials[]` (quote, author, role, company, avatar, rating)
- `autoplay`, `interval`
- `layout` (carousel, grid, masonry)
- `showRating` (stars)

#### `TestimonialCard`
**Purpose:** Single testimonial display
**Props:**
- `quote`, `author`, `role`, `company`, `avatar`, `rating`
- `variant` (card, quote, minimal)

#### `SocialProof`
**Purpose:** Client logos, trust badges
**Props:**
- `title`, `logos[]` (image, alt, link)
- `layout` (grid, marquee, stack)
- `grayscale` (boolean)

#### `ReviewsSection`
**Purpose:** Aggregated reviews with filtering
**Props:**
- `reviews[]`, `averageRating`, `totalReviews`
- `sources` (Google, Yelp, etc.)
- `showFilters` (rating, date)

---

### 4. Team & People

#### `TeamSection`
**Purpose:** Team member display
**Props:**
- `title`, `members[]` (name, role, bio, photo, social)
- `layout` (grid, list, carousel)
- `showBio` (boolean)

#### `TeamMemberCard`
**Purpose:** Individual team member
**Props:**
- `name`, `role`, `bio`, `photo`, `social[]`
- `variant` (card, overlay, minimal)
- `clickable` (opens modal with full bio)

---

### 5. Pricing & Plans

#### `PricingTable`
**Purpose:** Pricing tiers comparison
**Props:**
- `plans[]` (name, price, features[], highlighted, cta)
- `billingPeriod` (monthly, yearly toggle)
- `columns` (2, 3, 4)
- `featuresComparison` (boolean)

#### `PricingCard`
**Purpose:** Single pricing plan
**Props:**
- `name`, `price`, `period`, `features[]`, `cta`
- `highlighted` (boolean)
- `variant` (card, bordered, gradient)

#### `FeatureComparison`
**Purpose:** Detailed features comparison table
**Props:**
- `plans[]`, `features[]` (name, plan availability)
- `sticky` (sticky header)

---

### 6. Forms & Input

#### `ContactForm`
**Purpose:** Multi-purpose contact form
**Props:**
- `fields[]` (name, email, phone, message, custom)
- `submitEndpoint`, `successMessage`
- `variant` (inline, modal, section)
- `validation` (schema)

#### `NewsletterSignup`
**Purpose:** Email subscription
**Props:**
- `title`, `description`, `placeholder`, `buttonText`
- `submitEndpoint`
- `variant` (inline, popup, footer)

#### `FormBuilder`
**Purpose:** Dynamic form generation
**Props:**
- `schema` (form field definitions)
- `onSubmit`, `validationRules`
- `layout` (single-column, two-column)

---

### 7. Content Display

#### `BlogGrid`
**Purpose:** Blog posts grid
**Props:**
- `posts[]` (title, excerpt, image, author, date, category)
- `columns`, `pagination`
- `showFilters` (category, date, author)

#### `BlogCard`
**Purpose:** Single blog post preview
**Props:**
- `title`, `excerpt`, `image`, `author`, `date`, `category`
- `variant` (card, list, minimal)
- `showAuthor`, `showDate`

#### `BlogPost`
**Purpose:** Full blog post template
**Props:**
- `title`, `content`, `author`, `date`, `category`, `tags`
- `relatedPosts[]`
- `showShare` (social sharing)

#### `FAQAccordion`
**Purpose:** Expandable Q&A
**Props:**
- `faqs[]` (question, answer)
- `allowMultiple` (multiple open at once)
- `variant` (outlined, filled, minimal)
- `searchable` (boolean)

#### `Timeline`
**Purpose:** Company history, process steps
**Props:**
- `items[]` (date/step, title, description, icon)
- `orientation` (vertical, horizontal)
- `variant` (dots, icons, numbers)

---

### 8. Media & Gallery

#### `ImageGallery`
**Purpose:** Photo gallery with lightbox
**Props:**
- `images[]` (src, alt, caption, category)
- `layout` (grid, masonry, justified)
- `lightbox` (boolean)
- `categories` (filtering)

#### `ImageCarousel`
**Purpose:** Image slider
**Props:**
- `images[]`, `autoplay`, `interval`
- `navigation` (arrows, dots, thumbnails)
- `variant` (fade, slide, cube)

#### `VideoSection`
**Purpose:** Responsive video embed
**Props:**
- `videoUrl` (YouTube, Vimeo, direct)
- `thumbnail`, `title`, `description`
- `autoplay`, `controls`

#### `MediaGrid`
**Purpose:** Mixed media display
**Props:**
- `items[]` (images, videos)
- `layout`, `lightbox`

---

### 9. Navigation & Layout

#### `AppBar` (Enhanced)
**Purpose:** Main navigation
**Props:**
- `logo`, `menuItems[]`, `ctaButton`
- `sticky`, `transparent`
- `variant` (default, centered, minimal)
- `megaMenu` (boolean)
- `searchBar` (boolean)

#### `MegaMenu`
**Purpose:** Expandable mega menu
**Props:**
- `sections[]` (title, links[], featured content)
- `layout` (columns)

#### `Footer` (Enhanced)
**Purpose:** Site footer
**Props:**
- `columns[]` (title, links[])
- `social[]`, `newsletter`
- `copyright`, `legal[]`
- `variant` (simple, multi-column, minimal)

#### `Sidebar`
**Purpose:** Side navigation/filters
**Props:**
- `items[]`, `position` (left, right)
- `collapsible`, `sticky`

#### `Breadcrumbs`
**Purpose:** Navigation trail
**Props:**
- `items[]` (label, href)
- `separator` (custom icon)

#### `BackToTop`
**Purpose:** Scroll to top button
**Props:**
- `showAfter` (scroll position)
- `variant` (icon, text+icon)

---

### 10. Interactive Elements

#### `Tabs`
**Purpose:** Tabbed content
**Props:**
- `tabs[]` (label, content, icon)
- `variant` (standard, pills, underline)
- `orientation` (horizontal, vertical)

#### `Accordion`
**Purpose:** Collapsible sections
**Props:**
- `items[]` (title, content, icon)
- `allowMultiple`, `defaultExpanded`

#### `Modal`
**Purpose:** Popup dialog
**Props:**
- `title`, `content`, `actions[]`
- `size` (sm, md, lg, xl, fullscreen)
- `variant` (centered, drawer, bottom-sheet)

#### `Drawer`
**Purpose:** Side panel
**Props:**
- `position` (left, right)
- `content`, `trigger`

#### `Tooltip`
**Purpose:** Hover information
**Props:**
- `text`, `position`
- `trigger` (hover, click)

---

### 11. Feedback & Alerts

#### `Toast/Snackbar`
**Purpose:** Notification messages
**Props:**
- `message`, `type` (success, error, warning, info)
- `duration`, `position`
- `action` (button)

#### `Alert`
**Purpose:** Inline alerts
**Props:**
- `message`, `type`, `title`
- `closable`, `icon`
- `variant` (filled, outlined, standard)

#### `LoadingSpinner`
**Purpose:** Loading indicator
**Props:**
- `size`, `variant` (circular, linear, skeleton)
- `fullPage` (boolean)

#### `ProgressBar`
**Purpose:** Progress indicator
**Props:**
- `value`, `max`, `label`
- `variant` (determinate, indeterminate)

---

### 12. E-commerce (Bonus)

#### `ProductCard`
**Purpose:** Product display
**Props:**
- `name`, `price`, `image`, `rating`, `badge`
- `onAddToCart`, `variant`

#### `ProductGrid`
**Purpose:** Products display
**Props:**
- `products[]`, `columns`, `filters`

#### `CartDrawer`
**Purpose:** Shopping cart sidebar
**Props:**
- `items[]`, `total`, `onCheckout`

---

### 13. Utility Components

#### `Container`
**Purpose:** Max-width wrapper
**Props:**
- `maxWidth`, `padding`

#### `Section`
**Purpose:** Styled section wrapper
**Props:**
- `backgroundColor`, `padding`, `pattern`

#### `Divider`
**Purpose:** Visual separator
**Props:**
- `variant` (line, gradient, decorative)

#### `Badge`
**Purpose:** Small label/tag
**Props:**
- `text`, `color`, `variant`

#### `Chip`
**Purpose:** Tag/category pill
**Props:**
- `label`, `color`, `onDelete`

#### `Avatar`
**Purpose:** User/profile image
**Props:**
- `src`, `alt`, `size`, `variant`

#### `Icon`
**Purpose:** Icon wrapper
**Props:**
- `name`, `size`, `color`

---

## Standard Pages Library

### Core Pages

#### 1. `HomePage`
**Sections:**
- Hero
- Services/Features
- About (brief)
- Testimonials
- CTA
- Footer

#### 2. `AboutPage`
**Sections:**
- Hero/Banner
- Company story
- Mission/Vision/Values
- Team
- Timeline (history)
- Stats/Achievements
- CTA

#### 3. `ServicesPage`
**Sections:**
- Hero
- Services grid/list
- How it works (process)
- Pricing (optional)
- FAQ
- CTA

#### 4. `ServiceDetailPage` (Dynamic)
**Sections:**
- Hero
- Overview
- Features/Benefits
- Pricing
- FAQ
- Related services
- CTA

#### 5. `ContactPage`
**Sections:**
- Hero/Banner
- Contact form
- Contact info (phone, email, address)
- Map
- FAQ (optional)

#### 6. `BlogPage`
**Sections:**
- Hero/Banner
- Featured posts
- Blog grid with filters
- Categories sidebar
- Pagination
- Newsletter signup

#### 7. `BlogPostPage` (Dynamic)
**Sections:**
- Hero (title, author, date)
- Content (rich text)
- Author bio
- Related posts
- Comments (optional)
- Share buttons

#### 8. `FAQPage`
**Sections:**
- Hero
- Search bar
- FAQ accordion (categorized)
- CTA (contact if not answered)

#### 9. `PricingPage`
**Sections:**
- Hero
- Pricing table
- Feature comparison
- FAQ
- CTA

#### 10. `TeamPage`
**Sections:**
- Hero
- Team grid
- Open positions (optional)
- CTA (join us)

#### 11. `PortfolioPage`
**Sections:**
- Hero
- Project filters
- Project grid
- CTA

#### 12. `PortfolioDetailPage` (Dynamic)
**Sections:**
- Hero (project name, category)
- Challenge/Solution
- Image gallery
- Results/Outcomes
- Testimonial (client)
- Related projects

#### 13. `CareersPage`
**Sections:**
- Hero (culture/benefits)
- Open positions list
- Company perks
- Application process
- CTA

#### 14. `PrivacyPolicyPage`
**Sections:**
- Hero
- Content (rich text, table of contents)
- Last updated date

#### 15. `TermsOfServicePage`
**Sections:**
- Hero
- Content (rich text, table of contents)
- Last updated date

#### 16. `404ErrorPage`
**Sections:**
- Centered message
- Search bar
- Popular pages links
- CTA (home)

#### 17. `ComingSoonPage`
**Sections:**
- Countdown timer
- Newsletter signup
- Social links

---

## Advanced Features

### 1. Animations

**Library:** Framer Motion integration

**Features:**
- Scroll animations (fade-in, slide-in)
- Page transitions
- Hover effects
- Stagger animations (lists, grids)
- Parallax scrolling
- Number counters (stats)

**Components:**
- `AnimatedSection` - Wrapper for scroll animations
- `PageTransition` - Smooth page changes
- `ParallaxImage` - Parallax effect
- `CountUp` - Animated numbers

---

### 2. Forms & Validation

**Library:** React Hook Form + Zod

**Features:**
- Client-side validation
- Server-side validation patterns
- Multi-step forms
- File uploads
- Conditional fields
- Form state persistence
- Error handling
- Success/error states

**Components:**
- `TextField`, `TextArea`, `Select`, `Checkbox`, `Radio`
- `FileUpload` (with preview)
- `DatePicker`, `TimePicker`
- `PhoneInput` (with country code)
- `MultiStepForm` (wizard)

---

### 3. Search & Filtering

**Features:**
- Full-text search
- Faceted filtering
- Sort options
- Debounced input
- Search suggestions
- Recent searches
- No results state

**Components:**
- `SearchBar` (with autocomplete)
- `FilterPanel` (sidebar filters)
- `SortDropdown`
- `SearchResults`

---

### 4. SEO & Meta

**Features:**
- Dynamic meta tags
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Canonical URLs

**Components:**
- `SEOHead` - Meta tags wrapper
- `StructuredData` - JSON-LD generator

---

### 5. Analytics & Tracking

**Features:**
- Google Analytics integration
- Event tracking patterns
- Page view tracking
- Conversion tracking
- User behavior tracking

**Utilities:**
- `trackEvent()`
- `trackPageView()`
- `trackConversion()`

---

### 6. Accessibility (a11y)

**Features:**
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast
- Skip links
- Reduced motion support

**Utilities:**
- `useKeyboardNav()`
- `useFocusTrap()`
- `SkipToContent`

---

### 7. Performance

**Features:**
- Image optimization (Next.js Image)
- Lazy loading
- Code splitting
- Font optimization
- Bundle analysis
- Performance monitoring

**Utilities:**
- `LazyImage`
- `LazyLoad` (components)
- Performance budgets

---

### 8. Internationalization (i18n)

**Library:** next-intl

**Features:**
- Multi-language support
- Language switcher
- RTL support
- Locale-specific formatting (dates, numbers)
- Translation management

**Components:**
- `LanguageSwitcher`
- Translation utilities

---

### 9. Dark Mode

**Features:**
- System preference detection
- Manual toggle
- Theme persistence
- Smooth transitions

**Components:**
- `ThemeToggle`
- Dark mode theme configs

---

### 10. Error Handling

**Features:**
- Error boundaries
- 404 pages
- 500 pages
- Graceful fallbacks
- Error reporting (Sentry integration pattern)

**Components:**
- `ErrorBoundary`
- `ErrorFallback`

---

## Architecture

### Directory Structure

```
nextjs-mui-payload-boilerplate/
├── src/
│   ├── lib/                              # 🟢 REUSABLE BOILERPLATE
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   │   ├── HeroFull/
│   │   │   │   ├── HeroSplit/
│   │   │   │   ├── HeroMinimal/
│   │   │   │   ├── HeroVideo/
│   │   │   │   ├── CTABanner/
│   │   │   │   └── index.ts
│   │   │   ├── content/
│   │   │   │   ├── AboutSection/
│   │   │   │   ├── FeaturesGrid/
│   │   │   │   ├── ServicesSection/
│   │   │   │   ├── StatsCounter/
│   │   │   │   └── index.ts
│   │   │   ├── social-proof/
│   │   │   │   ├── TestimonialsCarousel/
│   │   │   │   ├── TestimonialCard/
│   │   │   │   ├── SocialProof/
│   │   │   │   ├── ReviewsSection/
│   │   │   │   └── index.ts
│   │   │   ├── team/
│   │   │   │   ├── TeamSection/
│   │   │   │   ├── TeamMemberCard/
│   │   │   │   └── index.ts
│   │   │   ├── pricing/
│   │   │   │   ├── PricingTable/
│   │   │   │   ├── PricingCard/
│   │   │   │   ├── FeatureComparison/
│   │   │   │   └── index.ts
│   │   │   ├── forms/
│   │   │   │   ├── ContactForm/
│   │   │   │   ├── NewsletterSignup/
│   │   │   │   ├── FormBuilder/
│   │   │   │   ├── inputs/
│   │   │   │   │   ├── TextField/
│   │   │   │   │   ├── TextArea/
│   │   │   │   │   ├── Select/
│   │   │   │   │   ├── FileUpload/
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── blog/
│   │   │   │   ├── BlogGrid/
│   │   │   │   ├── BlogCard/
│   │   │   │   ├── BlogPost/
│   │   │   │   └── index.ts
│   │   │   ├── faq/
│   │   │   │   ├── FAQAccordion/
│   │   │   │   ├── Timeline/
│   │   │   │   └── index.ts
│   │   │   ├── media/
│   │   │   │   ├── ImageGallery/
│   │   │   │   ├── ImageCarousel/
│   │   │   │   ├── VideoSection/
│   │   │   │   ├── MediaGrid/
│   │   │   │   └── index.ts
│   │   │   ├── navigation/
│   │   │   │   ├── AppBar/
│   │   │   │   ├── MegaMenu/
│   │   │   │   ├── Footer/
│   │   │   │   ├── Sidebar/
│   │   │   │   ├── Breadcrumbs/
│   │   │   │   ├── BackToTop/
│   │   │   │   └── index.ts
│   │   │   ├── interactive/
│   │   │   │   ├── Tabs/
│   │   │   │   ├── Accordion/
│   │   │   │   ├── Modal/
│   │   │   │   ├── Drawer/
│   │   │   │   ├── Tooltip/
│   │   │   │   └── index.ts
│   │   │   ├── feedback/
│   │   │   │   ├── Toast/
│   │   │   │   ├── Alert/
│   │   │   │   ├── LoadingSpinner/
│   │   │   │   ├── ProgressBar/
│   │   │   │   └── index.ts
│   │   │   ├── search/
│   │   │   │   ├── SearchBar/
│   │   │   │   ├── FilterPanel/
│   │   │   │   ├── SortDropdown/
│   │   │   │   └── index.ts
│   │   │   ├── seo/
│   │   │   │   ├── SEOHead/
│   │   │   │   ├── StructuredData/
│   │   │   │   └── index.ts
│   │   │   ├── utility/
│   │   │   │   ├── Container/
│   │   │   │   ├── Section/
│   │   │   │   ├── Divider/
│   │   │   │   ├── Badge/
│   │   │   │   ├── Chip/
│   │   │   │   ├── Avatar/
│   │   │   │   ├── Icon/
│   │   │   │   └── index.ts
│   │   │   └── index.ts                  # Export all components
│   │   │
│   │   ├── layouts/                       # Page layouts
│   │   │   ├── MainLayout/
│   │   │   ├── MinimalLayout/
│   │   │   ├── DashboardLayout/
│   │   │   └── index.ts
│   │   │
│   │   ├── theme/                         # Theme system
│   │   │   ├── createAppTheme.ts          # Theme factory
│   │   │   ├── themeDefaults.ts           # Default MUI settings
│   │   │   ├── darkTheme.ts               # Dark mode config
│   │   │   ├── animations.ts              # Animation presets
│   │   │   └── index.ts
│   │   │
│   │   ├── hooks/                         # Custom React hooks
│   │   │   ├── useKeyboardNav.ts
│   │   │   ├── useScrollSpy.ts
│   │   │   ├── useIntersectionObserver.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── useMediaQuery.ts
│   │   │   ├── useDebounce.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── utils/                         # Utilities
│   │   │   ├── fetchContent.ts            # CMS fetching
│   │   │   ├── iconResolver.ts            # Icon mapping
│   │   │   ├── analytics.ts               # Analytics helpers
│   │   │   ├── seo.ts                     # SEO helpers
│   │   │   ├── validation.ts              # Form validation
│   │   │   ├── formatters.ts              # Date, number formatting
│   │   │   └── index.ts
│   │   │
│   │   └── types/                         # TypeScript types
│   │       ├── components.ts
│   │       ├── content.ts
│   │       ├── theme.ts
│   │       └── index.ts
│   │
│   └── app/                               # Next.js App Router
│       ├── layout.tsx                     # Root layout
│       ├── page.tsx                       # Home page
│       ├── about/
│       ├── services/
│       ├── blog/
│       ├── contact/
│       ├── faq/
│       ├── pricing/
│       ├── team/
│       ├── careers/
│       ├── privacy/
│       ├── terms/
│       └── api/                           # API routes
│
├── content/                               # 🔵 PROJECT-SPECIFIC
│   ├── site.config.ts                     # Site metadata
│   ├── theme.config.ts                    # Brand theme
│   ├── navigation.config.ts               # Navigation menus
│   ├── sections/                          # Section configs
│   │   ├── hero.config.ts
│   │   ├── about.config.ts
│   │   ├── services.config.ts
│   │   ├── testimonials.config.ts
│   │   ├── team.config.ts
│   │   ├── pricing.config.ts
│   │   ├── faq.config.ts
│   │   └── index.ts
│   └── pages/                             # Page compositions
│       ├── home.config.ts
│       ├── about.config.ts
│       ├── services.config.ts
│       ├── contact.config.ts
│       └── index.ts
│
├── payload/                               # 🔵 PAYLOAD CMS
│   ├── collections/
│   │   ├── Pages.ts
│   │   ├── Services.ts
│   │   ├── BlogPosts.ts
│   │   ├── TeamMembers.ts
│   │   ├── Testimonials.ts
│   │   ├── FAQs.ts
│   │   ├── Media.ts
│   │   └── Settings.ts
│   ├── globals/
│   │   ├── SiteSettings.ts
│   │   ├── Navigation.ts
│   │   └── Theme.ts
│   ├── payload.config.ts
│   └── server.ts
│
├── public/                                # Static assets
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
│
├── tests/                                 # Testing
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .storybook/                            # Storybook config
├── docs/                                  # Documentation
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   ├── CONTENT_CONFIG.md
│   └── DEPLOYMENT.md
│
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## Implementation Timeline

### Phase 1: Foundation (Week 1-2)

**Goals:**
- Set up TypeScript
- Create base architecture
- Extract existing Tribe Banua content
- Build core utility components

**Deliverables:**
- [x] TypeScript configuration
- [x] Directory structure
- [x] Content configs extracted
- [x] Core utility components (Container, Section, etc.)
- [x] Theme factory
- [x] Base hooks (useMediaQuery, useScrollSpy)

---

### Phase 2: Core Components (Week 3-4)

**Goals:**
- Build essential hero/banner components
- Create content display components
- Build navigation components

**Deliverables:**
- [x] Hero components (Full, Split, Minimal, Video)
- [x] CTABanner
- [x] AboutSection
- [x] FeaturesGrid
- [x] ServicesSection
- [x] Enhanced AppBar with mega menu
- [x] Enhanced Footer
- [x] Breadcrumbs, BackToTop

---

### Phase 3: Social Proof & Team (Week 5)

**Goals:**
- Testimonials and reviews
- Team components
- Stats/metrics

**Deliverables:**
- [x] TestimonialsCarousel
- [x] TestimonialCard
- [x] SocialProof
- [x] ReviewsSection
- [x] TeamSection
- [x] TeamMemberCard
- [x] StatsCounter

---

### Phase 4: Pricing & Commerce (Week 6)

**Goals:**
- Pricing components
- Basic e-commerce components

**Deliverables:**
- [x] PricingTable
- [x] PricingCard
- [x] FeatureComparison
- [x] ProductCard (bonus)
- [x] ProductGrid (bonus)

---

### Phase 5: Forms & Inputs (Week 7)

**Goals:**
- Form components with validation
- All input types

**Deliverables:**
- [x] FormBuilder
- [x] ContactForm
- [x] NewsletterSignup
- [x] All input components (TextField, Select, FileUpload, etc.)
- [x] React Hook Form + Zod integration
- [x] Multi-step form

---

### Phase 6: Content & Media (Week 8)

**Goals:**
- Blog components
- FAQ components
- Media components

**Deliverables:**
- [x] BlogGrid, BlogCard, BlogPost
- [x] FAQAccordion
- [x] Timeline
- [x] ImageGallery (with lightbox)
- [x] ImageCarousel
- [x] VideoSection

---

### Phase 7: Interactive Elements (Week 9)

**Goals:**
- Tabs, accordions, modals
- Drawers, tooltips

**Deliverables:**
- [x] Tabs
- [x] Accordion
- [x] Modal
- [x] Drawer
- [x] Tooltip

---

### Phase 8: Feedback & Search (Week 10)

**Goals:**
- Feedback components
- Search functionality

**Deliverables:**
- [x] Toast/Snackbar
- [x] Alert
- [x] LoadingSpinner
- [x] ProgressBar
- [x] SearchBar (with autocomplete)
- [x] FilterPanel
- [x] SortDropdown

---

### Phase 9: Advanced Features (Week 11-12)

**Goals:**
- Animations
- SEO
- Analytics
- Dark mode
- i18n

**Deliverables:**
- [x] Framer Motion integration
- [x] Scroll animations
- [x] Page transitions
- [x] SEOHead component
- [x] StructuredData component
- [x] Analytics utilities
- [x] Dark mode system
- [x] i18n setup (next-intl)
- [x] ThemeToggle
- [x] LanguageSwitcher

---

### Phase 10: Pages & Templates (Week 13-14)

**Goals:**
- Create all standard pages
- Page templates

**Deliverables:**
- [x] All 17 page templates
- [x] Page composition patterns
- [x] Error pages (404, 500)
- [x] Coming soon page

---

### Phase 11: Payload CMS (Week 15-16)

**Goals:**
- Integrate Payload CMS
- Create collections
- Migrate content

**Deliverables:**
- [x] Payload configuration
- [x] All collections (Pages, Services, Blog, Team, etc.)
- [x] Media library
- [x] Settings globals
- [x] Content migration utilities
- [x] fetchContent implementation

---

### Phase 12: Testing & Documentation (Week 17-18)

**Goals:**
- Unit tests
- Integration tests
- Storybook
- Documentation

**Deliverables:**
- [x] Jest + React Testing Library setup
- [x] Unit tests for all components
- [x] Storybook stories for all components
- [x] Comprehensive documentation
- [x] Setup guide
- [x] Component API docs

---

### Phase 13: Polish & Optimization (Week 19-20)

**Goals:**
- Performance optimization
- Accessibility audit
- SEO optimization
- Final polish

**Deliverables:**
- [x] Performance optimizations
- [x] Image optimization
- [x] Bundle size optimization
- [x] Accessibility improvements
- [x] SEO improvements
- [x] Production build testing

---

## Detailed Implementation Plan

### Step-by-Step Execution

#### Week 1: TypeScript Migration & Foundation

**Day 1-2: TypeScript Setup**
```bash
# Install TypeScript dependencies
npm install --save-dev typescript @types/react @types/node

# Rename files
# .js → .tsx (components)
# .js → .ts (utilities)

# Configure tsconfig.json
```

**Tasks:**
- [ ] Install TypeScript and type definitions
- [ ] Create `tsconfig.json`
- [ ] Rename all `.js` files to `.tsx` or `.ts`
- [ ] Add type definitions for existing components
- [ ] Fix type errors

**Day 3-4: Extract Content Configs**
- [ ] Create `content/` directory
- [ ] Extract site config
- [ ] Extract theme config
- [ ] Extract navigation config
- [ ] Extract all section configs
- [ ] Extract page configs

**Day 5: Base Components**
- [ ] Create `src/lib/` directory structure
- [ ] Build Container, Section utilities
- [ ] Create theme factory
- [ ] Implement base hooks

---

#### Week 2: Refactor Existing Code

**Day 1-3: Refactor to Use Configs**
- [ ] Update root layout
- [ ] Update home page
- [ ] Update service pages
- [ ] Update all existing components to use configs

**Day 4-5: Core Utilities**
- [ ] Build remaining utility components (Badge, Chip, Avatar, etc.)
- [ ] Create animation utilities
- [ ] Create validation utilities
- [ ] Create formatting utilities

---

#### Week 3-4: Hero & Content Components

**Week 3:**
- [ ] HeroFull component
- [ ] HeroSplit component
- [ ] HeroMinimal component
- [ ] HeroVideo component
- [ ] CTABanner component
- [ ] AboutSection component

**Week 4:**
- [ ] FeaturesGrid component
- [ ] ServicesSection component
- [ ] StatsCounter with animation
- [ ] Enhanced AppBar (mega menu support)
- [ ] Enhanced Footer
- [ ] Breadcrumbs, BackToTop

---

#### Week 5: Social Proof & Team

- [ ] TestimonialsCarousel (with Swiper.js or native)
- [ ] TestimonialCard (multiple variants)
- [ ] SocialProof (logo grid with animations)
- [ ] ReviewsSection (with filtering)
- [ ] TeamSection
- [ ] TeamMemberCard (with modal bio)

---

#### Week 6: Pricing Components

- [ ] PricingCard (3 variants)
- [ ] PricingTable (responsive, 2-4 columns)
- [ ] Billing period toggle
- [ ] FeatureComparison (comparison table)
- [ ] ProductCard (bonus)
- [ ] ProductGrid (bonus)

---

#### Week 7: Forms System

**Day 1-2: Setup**
- [ ] Install React Hook Form + Zod
- [ ] Create validation schemas
- [ ] Build base input components

**Day 3-4: Form Components**
- [ ] TextField, TextArea
- [ ] Select, Checkbox, Radio
- [ ] DatePicker, TimePicker (using MUI Date Pickers)
- [ ] FileUpload (with preview)
- [ ] PhoneInput (with country code)

**Day 5: Advanced Forms**
- [ ] FormBuilder (dynamic forms)
- [ ] ContactForm (pre-built)
- [ ] NewsletterSignup
- [ ] Multi-step form wizard

---

#### Week 8: Content & Media

**Day 1-2: Blog Components**
- [ ] BlogGrid (with pagination)
- [ ] BlogCard (3 variants: card, list, minimal)
- [ ] BlogPost template
- [ ] Category/tag filtering

**Day 3: FAQ & Timeline**
- [ ] FAQAccordion (with search)
- [ ] Timeline (vertical & horizontal)

**Day 4-5: Media Components**
- [ ] ImageGallery (with lightbox - use yet-another-react-lightbox)
- [ ] ImageCarousel (multiple variants)
- [ ] VideoSection (YouTube/Vimeo embed)
- [ ] MediaGrid (mixed media)

---

#### Week 9: Interactive Components

- [ ] Tabs (3 variants)
- [ ] Accordion (generic, different from FAQ)
- [ ] Modal (multiple sizes, variants)
- [ ] Drawer (left/right)
- [ ] Tooltip (enhanced)

---

#### Week 10: Feedback & Search

**Day 1-2: Feedback**
- [ ] Toast/Snackbar system (context-based)
- [ ] Alert component (4 types)
- [ ] LoadingSpinner (multiple variants)
- [ ] ProgressBar (determinate/indeterminate)

**Day 3-5: Search System**
- [ ] SearchBar with autocomplete
- [ ] FilterPanel (sidebar with filters)
- [ ] SortDropdown
- [ ] SearchResults display
- [ ] No results state

---

#### Week 11-12: Advanced Features

**Week 11: Animations & SEO**
- [ ] Install Framer Motion
- [ ] Create AnimatedSection wrapper
- [ ] Page transitions
- [ ] Scroll animations (fade, slide)
- [ ] Parallax effects
- [ ] CountUp animations
- [ ] SEOHead component
- [ ] StructuredData component (JSON-LD)
- [ ] Sitemap generation utility

**Week 12: Dark Mode, i18n, Analytics**
- [ ] Dark theme configuration
- [ ] ThemeToggle component
- [ ] System preference detection
- [ ] Install next-intl
- [ ] i18n setup
- [ ] LanguageSwitcher component
- [ ] Analytics utilities
- [ ] Event tracking patterns
- [ ] Error boundaries
- [ ] Error reporting patterns (Sentry)

---

#### Week 13-14: Page Templates

**Week 13:**
- [ ] HomePage template
- [ ] AboutPage template
- [ ] ServicesPage template
- [ ] ServiceDetailPage template (dynamic)
- [ ] ContactPage template
- [ ] BlogPage template
- [ ] BlogPostPage template (dynamic)

**Week 14:**
- [ ] FAQPage template
- [ ] PricingPage template
- [ ] TeamPage template
- [ ] PortfolioPage template (bonus)
- [ ] PortfolioDetailPage template (bonus)
- [ ] CareersPage template (bonus)
- [ ] PrivacyPolicyPage template
- [ ] TermsOfServicePage template
- [ ] 404ErrorPage
- [ ] ComingSoonPage

---

#### Week 15-16: Payload CMS

**Week 15: Setup & Collections**
- [ ] Install Payload dependencies
- [ ] Configure Payload
- [ ] Set up MongoDB/PostgreSQL
- [ ] Create Pages collection
- [ ] Create Services collection
- [ ] Create BlogPosts collection
- [ ] Create TeamMembers collection
- [ ] Create Testimonials collection
- [ ] Create FAQs collection
- [ ] Create Media collection

**Week 16: Globals & Integration**
- [ ] Create SiteSettings global
- [ ] Create Navigation global
- [ ] Create Theme global
- [ ] Implement fetchContent utility
- [ ] Update components to fetch from CMS
- [ ] Content migration scripts
- [ ] Test CMS integration

---

#### Week 17-18: Testing & Documentation

**Week 17: Testing**
- [ ] Install Jest + React Testing Library
- [ ] Configure test environment
- [ ] Write unit tests for utilities
- [ ] Write unit tests for components
- [ ] Write integration tests for forms
- [ ] Set up test coverage reporting

**Week 18: Storybook & Docs**
- [ ] Install Storybook
- [ ] Configure Storybook with Next.js
- [ ] Create stories for all components
- [ ] Write SETUP.md
- [ ] Write ARCHITECTURE.md
- [ ] Write COMPONENTS.md (API docs)
- [ ] Write CONTENT_CONFIG.md
- [ ] Write DEPLOYMENT.md
- [ ] Create video tutorials (optional)

---

#### Week 19-20: Polish & Launch

**Week 19: Performance & Accessibility**
- [ ] Image optimization audit
- [ ] Bundle size analysis
- [ ] Code splitting optimization
- [ ] Lazy loading implementation
- [ ] Accessibility audit (WAVE, axe)
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Color contrast fixes

**Week 20: SEO & Launch**
- [ ] SEO audit
- [ ] Meta tags verification
- [ ] Structured data testing
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing
- [ ] Performance testing (Lighthouse)
- [ ] Create boilerplate repository
- [ ] Publish to GitHub
- [ ] Create demo site
- [ ] Launch announcement

---

## Payload CMS Collections

### Detailed Collection Schemas

#### 1. Pages Collection

```typescript
import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  access: {
    read: () => true,
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
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          options: [
            { label: 'Hero', value: 'hero' },
            { label: 'About', value: 'about' },
            { label: 'Services', value: 'services' },
            { label: 'Features Grid', value: 'featuresGrid' },
            { label: 'Testimonials', value: 'testimonials' },
            { label: 'Team', value: 'team' },
            { label: 'Pricing', value: 'pricing' },
            { label: 'FAQ', value: 'faq' },
            { label: 'CTA Banner', value: 'ctaBanner' },
            { label: 'Blog Grid', value: 'blogGrid' },
            { label: 'Contact Form', value: 'contactForm' },
            { label: 'Stats Counter', value: 'statsCounter' },
            { label: 'Image Gallery', value: 'imageGallery' },
            { label: 'Video', value: 'video' },
          ],
        },
        {
          name: 'config',
          type: 'json',
          label: 'Section Configuration',
          admin: {
            description: 'JSON configuration for this section',
          },
        },
        {
          name: 'visible',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title (max 60 chars)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO description (max 160 chars)',
          },
        },
        {
          name: 'keywords',
          type: 'text',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};
```

#### 2. Services Collection

```typescript
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
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Material UI icon name',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'pricing',
      type: 'group',
      fields: [
        {
          name: 'price',
          type: 'number',
        },
        {
          name: 'currency',
          type: 'text',
          defaultValue: 'PHP',
        },
        {
          name: 'unit',
          type: 'text',
          defaultValue: 'per person',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'duration',
      type: 'text',
    },
    {
      name: 'itinerary',
      type: 'richText',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    },
  ],
};
```

#### 3. Blog Posts Collection

```typescript
export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
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
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'team-members',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'News', value: 'news' },
        { label: 'Guides', value: 'guides' },
        { label: 'Updates', value: 'updates' },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
};
```

#### 4. Team Members Collection

```typescript
export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'social',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
        {
          name: 'github',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
};
```

#### 5. Testimonials Collection

```typescript
export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'customerName',
  },
  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
    },
    {
      name: 'customerRole',
      type: 'text',
    },
    {
      name: 'customerCompany',
      type: 'text',
    },
    {
      name: 'customerPhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};
```

#### 6. FAQs Collection

```typescript
export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Pricing', value: 'pricing' },
        { label: 'Technical', value: 'technical' },
        { label: 'Support', value: 'support' },
      ],
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
};
```

#### 7. Site Settings Global

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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
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
        { name: 'linkedin', type: 'text' },
        { name: 'youtube', type: 'text' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'keywords', type: 'text' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'analytics',
      type: 'group',
      fields: [
        { name: 'googleAnalyticsId', type: 'text' },
        { name: 'facebookPixelId', type: 'text' },
      ],
    },
  ],
};
```

---

## Summary

### Scope

**Components:** 50+ reusable components
**Pages:** 17 page templates
**Features:** Animations, SEO, Analytics, Dark Mode, i18n, Forms, Search
**CMS:** Fully integrated Payload CMS
**Testing:** Jest + React Testing Library
**Documentation:** Storybook + comprehensive docs
**Timeline:** 20 weeks (5 months)

### Deliverables

1. **Tribe Banua Website** - Refactored with content/config separation
2. **Comprehensive Boilerplate** - Ready for any business website project
3. **Component Library** - 50+ production-ready components
4. **Documentation** - Setup guides, API docs, tutorials
5. **Storybook** - Interactive component documentation
6. **Test Suite** - Unit and integration tests
7. **Payload CMS** - Fully configured content management

### Investment vs. Value

**Time Investment:** 20 weeks
**Future Savings:** 4-6 weeks per new project
**Break-even:** After 5 projects using boilerplate

---

**Ready to proceed?** This is an ambitious but highly valuable undertaking that will set you up for success on all future projects.

