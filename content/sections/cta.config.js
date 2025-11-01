/**
 * CTA Banner Section Configuration
 *
 * INSTRUCTIONS:
 * - Replace with your call-to-action messaging
 * - Update CTAs to match your conversion goals
 * - Choose variant: 'gradient', 'solid', 'outlined', or 'image'
 * - Customize colors and background images as needed
 */

export const ctaConfig = {
  title: "Ready to Get Started?",
  description: "Take the first step towards achieving your goals. Let's work together to make it happen.",
  primaryCTA: {
    text: "Get Started",
    href: "#contactus-section"
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/about"
  },
  variant: "gradient", // 'gradient', 'solid', 'outlined', 'image'
};

export const ctaConfigAlt = {
  title: "Have Questions?",
  description: "Our team is here to help. Reach out for personalized guidance and support.",
  primaryCTA: {
    text: "Contact Us",
    href: "#contactus-section"
  },
  variant: "solid",
  backgroundColor: "#2196F3",
};

export const ctaConfigImage = {
  title: "Discover What We Can Do For You",
  description: "Join hundreds of satisfied customers who have achieved their goals with us.",
  primaryCTA: {
    text: "View Services",
    href: "/services"
  },
  secondaryCTA: {
    text: "See Portfolio",
    href: "/portfolio"
  },
  variant: "image",
  backgroundImage: "/cta-background.jpg", // Replace with your image
};
