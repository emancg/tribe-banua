/**
 * About Section Configuration
 *
 * INSTRUCTIONS:
 * - Replace with your company story and values
 * - Update paragraphs to describe your mission
 * - Customize stats to match your achievements
 * - Replace image with your own
 */

export const aboutConfig = {
  title: "About Your Company",
  subtitle: "Who We Are",
  contentParagraphs: [
    "Write the first paragraph about your company, what you do, and what makes you unique. Focus on your core mission and the value you provide to customers.",
    "Add a second paragraph about your team, your approach, or your methodology. Share what differentiates you from competitors and why customers should choose you.",
    "Conclude with a paragraph about your commitment to customers, your values, or a call to action inviting them to learn more about your services."
  ],
  image: {
    src: "/about-image.jpg", // Replace with your image
    alt: "About Your Company",
    width: 600,
    height: 400,
  },
  layout: "text-left",
  stats: [
    {
      number: "10",
      suffix: "+",
      label: "Years Experience",
    },
    {
      number: "1000",
      suffix: "+",
      label: "Happy Clients",
    },
    {
      number: "50",
      suffix: "+",
      label: "Projects Completed",
    },
    {
      number: "98",
      suffix: "%",
      label: "Satisfaction Rate",
    },
  ],
};

export const aboutConfigTextRight = {
  ...aboutConfig,
  layout: "text-right",
  image: {
    src: "/about-image-2.jpg", // Replace with your image
    alt: "Your Company Services",
    width: 600,
    height: 400,
  },
};

export const aboutConfigCentered = {
  title: "Our Mission",
  subtitle: "What Drives Us",
  content: "Write a compelling mission statement that explains your purpose, vision, and values. This should be 2-3 sentences that capture what your company stands for and what you aim to achieve for your customers.",
  layout: "text-only",
  backgroundColor: "#f5f5f5",
};
