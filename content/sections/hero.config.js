/**
 * Hero Section Configuration
 *
 * INSTRUCTIONS:
 * - Replace title and subtitle with your own compelling message
 * - Update CTA text and href to match your desired action
 * - Replace background image path with your own hero image
 * - Adjust layout settings as needed
 */

export const heroConfig = {
  title: "Welcome to Your Brand",
  subtitle: "A compelling subtitle that describes what you offer and why visitors should care. Make it clear, concise, and action-oriented.",
  cta: {
    text: "Get Started",
    href: "#services-section"
  },
  background: {
    image: "/hero-image.jpg", // Replace with your hero image path
    position: "center",
    overlay: false, // Handled by component's gradient overlay
  },
  height: "100vh",
  textAlign: "center",
  contentPosition: "center", // Modern centered layout
  textShadow: "2px 2px 5px black"
};

// Alternate text (optional - can be used for variation)
export const heroAlternateText = "An alternate description of your service or product. This can be used for A/B testing or as variation text in different contexts.";
