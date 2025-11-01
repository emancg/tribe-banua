/**
 * Contact Form Section Configuration
 *
 * INSTRUCTIONS:
 * - Customize form labels and messages
 * - Set up /api/contact endpoint for form submission
 * - Update title and subtitle to match your brand voice
 */

export const contactConfig = {
  title: "GET IN TOUCH",
  subtitle: "Have questions? We'd love to hear from you.",
  form: {
    emailLabel: "Your email address",
    messageLabel: "Type your message here",
    submitText: "Send Message",
    submitEndpoint: "/api/contact" // You'll need to implement this API route
  }
};
