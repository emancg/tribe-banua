/**
 * CTA Banner Section Configuration
 */

export const ctaConfig = {
  title: "Ready to Start Your Adventure?",
  description: "Book your Palawan experience today and create memories that will last a lifetime.",
  primaryCTA: {
    text: "Book Now",
    href: "#contactus-section"
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/services/expeditions"
  },
  variant: "gradient", // 'gradient', 'solid', 'outlined', 'image'
};

export const ctaConfigAlt = {
  title: "Questions About Our Services?",
  description: "Get in touch with our team for personalized recommendations and booking assistance.",
  primaryCTA: {
    text: "Contact Us",
    href: "#contactus-section"
  },
  variant: "solid",
  backgroundColor: "#1f93b6",
};

export const ctaConfigImage = {
  title: "Explore the Beauty of Palawan",
  description: "Join thousands of satisfied travelers who have experienced the adventure of a lifetime.",
  primaryCTA: {
    text: "View All Tours",
    href: "/services"
  },
  secondaryCTA: {
    text: "See Gallery",
    href: "/gallery"
  },
  variant: "image",
  backgroundImage: "/services/island-tours.jpg",
};
