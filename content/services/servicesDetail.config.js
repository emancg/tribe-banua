/**
 * Services Detail Configuration
 *
 * Detailed information for each service page
 *
 * INSTRUCTIONS:
 * - Customize each service with your own details
 * - Add or remove services as needed
 * - Update images, pricing, and features
 * - Use this as a template for your service pages
 */

export const servicesDetailConfig = {
  "service-one": {
    slug: "service-one",
    title: "Service One",
    heroImage: "/services/service-1.jpg",
    shortDescription: "A brief description of your first service",
    fullDescription: "Write a comprehensive description of your first service. Explain what it includes, who it's for, and why it's valuable. Make it compelling and informative.",
    features: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
      "Key feature 4",
      "Key feature 5",
      "Key feature 6"
    ],
    pricing: {
      price: "Contact for pricing",
      currency: "USD",
      unit: "per unit"
    },
    duration: "Specify duration",
    itinerary: [
      {
        day: "Phase 1",
        title: "Phase One Title",
        activities: "Describe what happens in this phase"
      },
      {
        day: "Phase 2",
        title: "Phase Two Title",
        activities: "Describe what happens in this phase"
      },
      {
        day: "Phase 3",
        title: "Phase Three Title",
        activities: "Describe what happens in this phase"
      }
    ],
    inclusions: [
      "Inclusion 1",
      "Inclusion 2",
      "Inclusion 3",
      "Inclusion 4",
      "Inclusion 5"
    ],
    whatToBring: [
      "Required item 1",
      "Required item 2",
      "Required item 3",
      "Required item 4"
    ]
  },

  "service-two": {
    slug: "service-two",
    title: "Service Two",
    heroImage: "/services/service-2.jpg",
    shortDescription: "A brief description of your second service",
    fullDescription: "Write a comprehensive description of your second service. Highlight what makes it unique and valuable to your customers.",
    features: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
      "Key feature 4",
      "Key feature 5"
    ],
    pricing: {
      price: "99",
      currency: "USD",
      unit: "per month"
    },
    duration: "Specify duration",
    itinerary: [
      {
        day: "Step 1",
        title: "First Step",
        activities: "Description of first step"
      },
      {
        day: "Step 2",
        title: "Second Step",
        activities: "Description of second step"
      },
      {
        day: "Step 3",
        title: "Final Step",
        activities: "Description of final step"
      }
    ],
    inclusions: [
      "Inclusion 1",
      "Inclusion 2",
      "Inclusion 3",
      "Inclusion 4"
    ],
    whatToBring: [
      "Required item 1",
      "Required item 2",
      "Required item 3"
    ]
  },

  "service-three": {
    slug: "service-three",
    title: "Service Three",
    heroImage: "/services/service-3.jpg",
    shortDescription: "A brief description of your third service",
    fullDescription: "Write a comprehensive description of your third service. Explain the benefits and value proposition.",
    features: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
      "Key feature 4"
    ],
    pricing: {
      price: "199",
      currency: "USD",
      unit: "per service"
    },
    duration: "Specify duration",
    itinerary: [
      {
        day: "Stage 1",
        title: "Initial Stage",
        activities: "Description of initial stage"
      },
      {
        day: "Stage 2",
        title: "Middle Stage",
        activities: "Description of middle stage"
      },
      {
        day: "Stage 3",
        title: "Final Stage",
        activities: "Description of final stage"
      }
    ],
    inclusions: [
      "Inclusion 1",
      "Inclusion 2",
      "Inclusion 3"
    ],
    whatToBring: [
      "Required item 1",
      "Required item 2"
    ]
  },

  "service-four": {
    slug: "service-four",
    title: "Service Four",
    heroImage: "/services/service-4.jpg",
    shortDescription: "A brief description of your fourth service",
    fullDescription: "Write a comprehensive description of your fourth service. Make it clear why customers should choose this option.",
    features: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
      "Key feature 4"
    ],
    pricing: {
      price: "299",
      currency: "USD",
      unit: "per service"
    },
    duration: "Specify duration",
    itinerary: [
      {
        day: "Part 1",
        title: "First Part",
        activities: "Description of first part"
      },
      {
        day: "Part 2",
        title: "Second Part",
        activities: "Description of second part"
      },
      {
        day: "Part 3",
        title: "Final Part",
        activities: "Description of final part"
      }
    ],
    inclusions: [
      "Inclusion 1",
      "Inclusion 2",
      "Inclusion 3"
    ],
    whatToBring: [
      "Required item 1",
      "Required item 2"
    ]
  }
};

/**
 * Get service detail by slug
 */
export function getServiceBySlug(slug) {
  return servicesDetailConfig[slug] || null;
}

/**
 * Get all service slugs for static generation
 */
export function getAllServiceSlugs() {
  return Object.keys(servicesDetailConfig);
}
