/**
 * Services Detail Configuration
 *
 * Detailed information for each service page
 */

export const servicesDetailConfig = {
  expeditions: {
    slug: "expeditions",
    title: "Expeditions",
    heroImage: "/services/expeditions.jpg",
    shortDescription: "Multi-day boat expeditions through paradise",
    fullDescription: "Embark on a 3-day boat expedition from Linapacan to Culion, Palawan, and be immersed in an array of unforgettable experiences. Snorkel amidst vibrant coral reefs, encountering a kaleidoscope of marine life. Visit remote tribe villages, engaging with locals, witnessing traditional dances, and learning about their customs.",
    features: [
      "3-day boat expedition from Linapacan to Culion",
      "Snorkeling in vibrant coral reefs",
      "Visit remote tribe villages",
      "Traditional cultural experiences",
      "Kayaking through mangrove forests",
      "Authentic native house accommodation"
    ],
    pricing: {
      price: "Contact for pricing",
      currency: "PHP",
      unit: "per person"
    },
    duration: "3 days / 2 nights",
    itinerary: [
      {
        day: "Day 1",
        title: "Departure & Island Discovery",
        activities: "Hotel pick-up, boat departure, snorkeling, lunch and dinner included"
      },
      {
        day: "Day 2",
        title: "Cultural Immersion",
        activities: "Village visits, traditional dances, mangrove kayaking, all meals included"
      },
      {
        day: "Day 3",
        title: "Final Exploration & Return",
        activities: "Morning snorkeling, island hopping, return to El Nido"
      }
    ],
    inclusions: [
      "Hotel pick-up between 8:00-8:30 am",
      "All meals from Day 1 lunch through Day 3",
      "Bottomless Rum and Coke, Red Horse Beer",
      "Native house accommodation",
      "Snorkeling equipment",
      "Professional crew and guides"
    ],
    whatToBring: [
      "Prescribed medications",
      "Personal towels",
      "Sunscreen and sun protection",
      "Mosquito repellent",
      "Waterproof dry bag",
      "Water shoes"
    ]
  },

  "island-tours": {
    slug: "island-tours",
    title: "Island Tours",
    heroImage: "/services/island-tours.jpg",
    shortDescription: "El Nido island hopping adventures",
    fullDescription: "Explore the breathtaking islands of El Nido with our guided island hopping tours. Discover hidden lagoons, pristine beaches, and vibrant marine life. Perfect for families, couples, and adventure seekers.",
    features: [
      "Visit multiple stunning islands in one day",
      "Swimming and snorkeling at best spots",
      "Delicious lunch included",
      "Professional tour guides",
      "Small group sizes for personalized experience",
      "All equipment provided"
    ],
    pricing: {
      price: "1,500 - 2,000",
      currency: "PHP",
      unit: "per person"
    },
    duration: "Full day (8-10 hours)",
    itinerary: [
      {
        day: "Morning",
        title: "Island Departure",
        activities: "Pick-up from hotel, boat departure, first island stop"
      },
      {
        day: "Midday",
        title: "Exploration & Lunch",
        activities: "Visit 3-4 islands, snorkeling, beach lunch on island"
      },
      {
        day: "Afternoon",
        title: "Final Stops & Return",
        activities: "Last island visits, sunset viewing, return to El Nido"
      }
    ],
    inclusions: [
      "Hotel pick-up and drop-off",
      "Island hopping boat tour",
      "Beach lunch and refreshments",
      "Snorkeling equipment",
      "Professional tour guide",
      "Environmental fees included"
    ],
    whatToBring: [
      "Swimwear and extra clothes",
      "Sunscreen and sunglasses",
      "Waterproof camera",
      "Cash for personal expenses",
      "Towel"
    ]
  },

  ferry: {
    slug: "ferry",
    title: "Ferry Transfer",
    heroImage: "/services/ferry.jpg",
    shortDescription: "Coron ↔ El Nido ferry service",
    fullDescription: "Travel comfortably between Coron and El Nido with our reliable ferry service. Enjoy scenic ocean views, safe passage, and convenient schedules that fit your travel plans.",
    features: [
      "Regular daily departures",
      "Comfortable seating",
      "Life jackets and safety equipment",
      "Scenic ocean route",
      "Luggage storage included",
      "Professional crew"
    ],
    pricing: {
      price: "1,800 - 2,500",
      currency: "PHP",
      unit: "per person"
    },
    duration: "3-4 hours",
    itinerary: [
      {
        day: "Morning",
        title: "Departure",
        activities: "Check-in at port, boarding, departure from Coron/El Nido"
      },
      {
        day: "Midday",
        title: "Scenic Journey",
        activities: "Enjoy ocean views, relax on deck, possible island sightings"
      },
      {
        day: "Afternoon",
        title: "Arrival",
        activities: "Arrival at destination port, luggage claim, optional transfer to hotel"
      }
    ],
    inclusions: [
      "Ferry ticket",
      "Life jacket and safety equipment",
      "Luggage allowance (up to 20kg)",
      "Comfortable seating",
      "Professional crew"
    ],
    whatToBring: [
      "Valid ID",
      "Travel documents",
      "Light jacket (can be windy)",
      "Snacks and water",
      "Motion sickness medication if needed"
    ]
  },

  van: {
    slug: "van",
    title: "Van Transfer",
    heroImage: "/services/van.jpg",
    shortDescription: "Puerto Princesa ↔ El Nido transport",
    fullDescription: "Safe and comfortable land transfer between Puerto Princesa and El Nido. Our air-conditioned vans provide a smooth journey with experienced drivers who know the route well.",
    features: [
      "Air-conditioned van",
      "Door-to-door service",
      "Experienced drivers",
      "Rest stops along the way",
      "Luggage space included",
      "Flexible departure times"
    ],
    pricing: {
      price: "800 - 1,200",
      currency: "PHP",
      unit: "per person"
    },
    duration: "5-6 hours",
    itinerary: [
      {
        day: "Morning",
        title: "Hotel Pick-up",
        activities: "Pick-up from your hotel in Puerto Princesa or El Nido"
      },
      {
        day: "Midday",
        title: "Scenic Drive",
        activities: "Drive through Palawan countryside, rest stop for lunch and comfort break"
      },
      {
        day: "Afternoon",
        title: "Arrival",
        activities: "Arrival at destination, drop-off at your hotel"
      }
    ],
    inclusions: [
      "Hotel pick-up and drop-off",
      "Air-conditioned van",
      "Experienced driver",
      "Luggage allowance",
      "Rest stops"
    ],
    whatToBring: [
      "Snacks and drinks",
      "Light jacket or blanket",
      "Entertainment (books, music, etc.)",
      "Cash for lunch stop",
      "Travel pillow (optional)"
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
