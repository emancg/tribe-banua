/**
 * Example Service Page Configuration
 *
 * INSTRUCTIONS:
 * - This is an example of a detailed service page
 * - Replace all content with your own service details
 * - Add or remove sections as needed
 * - Update images and links
 */

export const servicePageConfig = {
  title: "YOUR SERVICE NAME",
  slug: "your-service-slug",
  background: {
    image: "/service-bg.jpg" // Replace with your background image
  },
  content: {
    sections: [
      {
        heading: "What is this service?",
        text: "Write a compelling description of your service here. Explain what it is, what makes it unique, and why customers should choose you. Include details about the experience, benefits, and what sets you apart from competitors."
      },
      {
        heading: "What's included?",
        text: "Describe the key features and benefits of your service.",
        image: {
          src: "/service-features.jpg", // Replace with your image
          alt: "Service features",
          width: 600,
          height: 400,
          link: "/service-features.jpg"
        }
      },
      {
        heading: "INCLUSIONS AND FEATURES",
        bulletPoints: [
          "Feature 1: Describe the first key feature or inclusion",
          "Feature 2: Describe the second key feature or inclusion",
          "Feature 3: Describe the third key feature or inclusion",
          "Feature 4: Add as many features as needed",
          "Feature 5: Make each point clear and compelling"
        ]
      },
      {
        heading: "What to bring?",
        bulletPoints: [
          "Item 1: Describe what customers should bring",
          "Item 2: Add preparation instructions",
          "Item 3: Include any special requirements",
          "Item 4: List important items to remember"
        ]
      },
      {
        heading: "Preparation tips",
        bulletPoints: [
          "Tip 1: Provide helpful preparation advice",
          "Tip 2: Share important reminders",
          "Tip 3: Include any special instructions"
        ]
      },
      {
        heading: "Ready to get started?",
        text: "Contact us today to learn more or to book this service. We're here to help!"
      }
    ]
  },
  cta: {
    text: "See More Services",
    hiddenServiceIndex: 0 // Optionally hide this service from the list
  }
};
