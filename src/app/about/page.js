'use client';

import Box from '@mui/material/Box';
import {
  HeroSection,
  AboutSection,
  StatsCounter,
  TestimonialsCarousel,
  CTABanner,
  FooterSection,
} from '@/lib/components';

// Import configurations
import { aboutConfig, aboutConfigCentered } from '../../../content/sections/about.config';
import { statsConfig } from '../../../content/sections/stats.config';
import { testimonialsConfig } from '../../../content/sections/testimonials.config';
import { ctaConfig } from '../../../content/sections/cta.config';
import { footerConfig } from '../../../content/sections/footer.config';

// Hero config for About page
const aboutHeroConfig = {
  title: "About Tribe Banua",
  subtitle: "Discover the story behind Palawan's most trusted adventure company",
  backgroundImage: "/services/expeditions.jpg",
  ctaButton: {
    text: "Contact Us",
    href: "#contactus-section"
  },
  height: "60vh",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Box sx={{ mt: 8 }}>
        <HeroSection config={aboutHeroConfig} />
      </Box>

      {/* About Section - Text Left with Image */}
      <AboutSection config={aboutConfig} />

      {/* Mission Statement - Centered Text Only */}
      <AboutSection config={aboutConfigCentered} />

      {/* Stats Counter */}
      <StatsCounter config={statsConfig} />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel config={testimonialsConfig} />

      {/* CTA Banner */}
      <CTABanner config={ctaConfig} />

      {/* Footer */}
      <Box id="contactus-section">
        <FooterSection config={footerConfig} />
      </Box>
    </main>
  );
}
