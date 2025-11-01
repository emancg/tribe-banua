# Performance Optimization Guide

**Issue:** Slow performance on localhost development server

This is a common issue with Next.js + MUI + Emotion in development mode. Here are the causes and solutions:

---

## 🐌 Why is Development Slow?

### Primary Causes

1. **MUI + Emotion CSS-in-JS Runtime Overhead**
   - Styles are generated at runtime in development
   - Each component recalculates styles on every render
   - This is NORMAL in dev mode, production is much faster

2. **60+ Components Loaded at Once**
   - The `/lib/components/index.js` exports everything
   - Even unused components are bundled in dev
   - No tree-shaking in development mode

3. **Next.js Development Mode**
   - Hot Module Replacement (HMR)
   - Source maps generation
   - Type checking on every change
   - No caching like production build

4. **'use client' Everywhere**
   - Client-side rendering is slower than SSR
   - All JavaScript runs in the browser

5. **Large node_modules**
   - MUI, Emotion, React Hook Form, etc.
   - ~400MB+ of dependencies

---

## ⚡ Quick Fixes (Immediate)

### 1. Use Dynamic Imports (RECOMMENDED)

Instead of importing all components, use dynamic imports for heavy components:

**Before:**
```javascript
// src/app/page.js
import { HeroSection, ServicesSection, GridSection } from '@/lib/components';
```

**After:**
```javascript
// src/app/page.js
import dynamic from 'next/dynamic';

// Dynamic imports with loading states
const HeroSection = dynamic(() => import('@/lib/components/hero/HeroSection'), {
  loading: () => <div>Loading...</div>,
});

const ServicesSection = dynamic(() => import('@/lib/components/content/ServicesSection'), {
  loading: () => <div>Loading...</div>,
});

const GridSection = dynamic(() => import('@/lib/components/content/GridSection'), {
  loading: () => <div>Loading...</div>,
});
```

### 2. Remove 'use client' from Pages

Make pages server components when possible:

**Before:**
```javascript
// src/app/page.js
'use client';

export default function Home() {
  // ...
}
```

**After:**
```javascript
// src/app/page.js
// No 'use client' directive

export default function Home() {
  // ...
}
```

**Note:** Only add 'use client' to components that use hooks (useState, useEffect, etc.)

### 3. Clear .next Cache

```bash
# Delete the .next directory
rm -rf .next

# Or on Windows
powershell -Command "Remove-Item -Path .next -Recurse -Force"

# Reinstall dependencies
npm install

# Restart dev server
npm run dev
```

### 4. Increase Node Memory

```bash
# In package.json, update dev script:
"dev": "NODE_OPTIONS='--max-old-space-size=4096' next dev"

# Or on Windows:
"dev": "set NODE_OPTIONS=--max-old-space-size=4096 && next dev"
```

### 5. Disable Source Maps (Faster but harder to debug)

```javascript
// next.config.mjs
const nextConfig = {
  // ... existing config

  // Disable source maps in development
  productionBrowserSourceMaps: false,

  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = 'eval-cheap-source-map'; // Faster source maps
    }
    return config;
  },
};
```

---

## 🚀 Medium-Term Fixes

### 1. Split Component Exports

Instead of one giant export, use category-specific imports:

**Before:**
```javascript
import { HeroSection, Modal, Loading, SEOHead } from '@/lib/components';
```

**After:**
```javascript
import { HeroSection } from '@/lib/components/hero';
import { Modal } from '@/lib/components/interactive';
import { Loading } from '@/lib/components/feedback';
import { SEOHead } from '@/lib/components/seo';
```

### 2. Lazy Load Heavy Components

Create a lazy-loaded version for development:

```javascript
// src/lib/components/lazy.js
import dynamic from 'next/dynamic';

export const HeroVideo = dynamic(() => import('./hero/HeroVideo'), {
  loading: () => <div>Loading video...</div>,
  ssr: false, // Don't render on server
});

export const ImageGallery = dynamic(() => import('./media/ImageGallery'), {
  loading: () => <div>Loading gallery...</div>,
  ssr: false,
});

export const TestimonialsCarousel = dynamic(() => import('./social-proof/TestimonialsCarousel'), {
  loading: () => <div>Loading testimonials...</div>,
});
```

### 3. Optimize Images

```javascript
// Use Next.js Image component
import Image from 'next/image';

// Instead of <img>
<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 4. Memoize Components

```javascript
import { memo } from 'react';

const HeroSection = memo(function HeroSection({ config }) {
  // Component code
});

export default HeroSection;
```

---

## 🏗️ Long-Term Optimizations

### 1. Switch to Server Components

Convert pages to server components:

```javascript
// src/app/page.js
// This is now a server component (faster)
export default function Home() {
  // No client-side hooks here
  return (
    <main>
      <HeroSection config={heroConfig} />
      <ClientComponent /> {/* Only this uses 'use client' */}
    </main>
  );
}
```

### 2. Use Turbopack (Experimental)

```bash
# Next.js 14+ with Turbopack
npm run dev -- --turbo
```

Or update package.json:
```json
{
  "scripts": {
    "dev": "next dev --turbo"
  }
}
```

### 3. Implement Code Splitting per Route

```javascript
// next.config.mjs
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
};
```

### 4. Use Production Mode Locally

Development will always be slower. Test in production mode:

```bash
npm run build
npm start
```

Production is typically **5-10x faster** than development.

---

## 📊 Performance Comparison

| Mode | Initial Load | Hot Reload | Why |
|------|--------------|------------|-----|
| Development (Current) | 3-5s | 1-2s | Slow (CSS-in-JS, HMR, no caching) |
| Development (Optimized) | 2-3s | 0.5-1s | Better (dynamic imports, memoization) |
| Production Build | 0.5-1s | N/A | Fast (compiled, optimized, cached) |

---

## 🎯 Recommended Approach

### For Development (Choose One):

**Option 1: Accept the slowness (RECOMMENDED)**
- Development mode is SUPPOSED to be slower
- Focus on features, not performance
- Test performance in production builds
- This is how MUI + Next.js works

**Option 2: Optimize development experience**
- Use dynamic imports for heavy pages
- Clear .next cache regularly
- Increase Node memory
- Use production mode for performance testing

**Option 3: Use production mode locally**
```bash
npm run build
npm start
# Browse at http://localhost:3000
```

---

## 🔍 Debugging Slow Pages

### Check Bundle Size

```bash
# Analyze bundle
npm run analyze

# Or manually check
npm run build
# Look for "Route (pages)" section
```

### Identify Slow Components

Add timing logs:

```javascript
export default function SlowComponent({ config }) {
  console.time('SlowComponent render');

  // Component code

  console.timeEnd('SlowComponent render');
  return <div>...</div>;
}
```

### Check Network Tab

1. Open browser DevTools
2. Go to Network tab
3. Reload page
4. Look for:
   - Large JavaScript files
   - Slow API requests
   - Unoptimized images

---

## ✅ Quick Checklist

**To fix slow localhost:**

- [ ] Clear `.next` cache: `rm -rf .next`
- [ ] Restart dev server: `npm run dev`
- [ ] Check Node version: `node -v` (should be 18+)
- [ ] Close other apps to free memory
- [ ] Use Chrome DevTools to identify bottlenecks
- [ ] Try production mode: `npm run build && npm start`
- [ ] Consider dynamic imports for heavy components
- [ ] Accept that dev mode is inherently slower

---

## 💡 Expected Performance

**Development Mode (Normal):**
- Initial page load: 2-5 seconds
- Hot reload: 0.5-2 seconds
- Navigating between pages: 1-3 seconds

**Production Mode:**
- Initial page load: 0.5-1 second
- Client navigation: < 0.5 seconds
- Much faster overall

**If you're experiencing > 10 seconds load times:**
1. Check your hardware (low RAM, slow CPU?)
2. Check if antivirus is scanning node_modules
3. Check if running other heavy apps
4. Try production mode to verify it's a dev-only issue

---

## 🚀 Production Performance

The boilerplate is optimized for production:

✅ Code splitting
✅ Tree shaking
✅ Minification
✅ Image optimization
✅ Static generation where possible
✅ Optimized bundle chunks

**Production will be much faster than development!**

---

## 📞 Still Slow?

If you've tried all optimizations and production is still slow:

1. **Check Lighthouse score**
   ```bash
   # Build and test
   npm run build
   npm start
   # Open DevTools > Lighthouse > Run
   ```

2. **Profile with React DevTools**
   - Install React DevTools extension
   - Use Profiler tab
   - Find slow components

3. **Check bundle size**
   - Should be < 200KB gzipped for main bundle
   - MUI adds ~80KB
   - Your code should be < 100KB

---

## 🎓 Remember

**Development mode slowness is NORMAL with:**
- Material-UI
- Emotion CSS-in-JS
- 60+ components
- Next.js Hot Module Replacement

**Production builds will be much faster!**

The boilerplate is optimized for production performance, not development speed. This is a trade-off for better DX (Developer Experience) and maintainability.

---

**Bottom Line:** Test performance in production builds, not development mode!

```bash
npm run build
npm start
# This is what users will experience
```
