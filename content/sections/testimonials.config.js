/**
 * Testimonials Section Configuration
 */

export const testimonialsConfig = {
  title: "What Our Customers Say",
  testimonials: [
    {
      quote: "The expedition was absolutely incredible! The crew was professional, the destinations were breathtaking, and the experience exceeded all our expectations. We can't wait to come back!",
      author: "Sarah Johnson",
      role: "Adventure Traveler",
      company: "USA",
      rating: 5,
    },
    {
      quote: "Best island hopping tour we've ever done! The hidden lagoons and pristine beaches were like something out of a dream. Highly recommend Tribe Banua to anyone visiting El Nido.",
      author: "Michael Chen",
      role: "Travel Blogger",
      company: "Singapore",
      rating: 5,
    },
    {
      quote: "The ferry service was comfortable and punctual. The crew made sure everyone was safe and the journey was smooth. Great way to travel between Coron and El Nido!",
      author: "Emma Rodriguez",
      role: "Digital Nomad",
      company: "Spain",
      rating: 4.5,
    },
    {
      quote: "Our family had an amazing time on the expedition. The activities were perfect for all ages, and the cultural experiences with the local tribes were truly eye-opening. Thank you Tribe Banua!",
      author: "David Kim",
      role: "Family Traveler",
      company: "South Korea",
      rating: 5,
    },
    {
      quote: "Professional service from start to finish. The van transfer was comfortable, the driver was experienced, and everything was on time. Will definitely use their services again!",
      author: "Lisa Anderson",
      role: "Solo Traveler",
      company: "Australia",
      rating: 4.5,
    },
    {
      quote: "The snorkeling spots were incredible - so many colorful fish and healthy coral reefs! The guides were knowledgeable and made sure we had the best experience possible.",
      author: "James Wilson",
      role: "Marine Enthusiast",
      company: "UK",
      rating: 5,
    },
  ],
  autoplay: true,
  interval: 5000,
  layout: "carousel", // 'carousel', 'grid', 'single'
  variant: "card", // 'card', 'quote', 'minimal'
  itemsPerView: 1,
};

export const testimonialsGridConfig = {
  title: "Loved by Travelers Worldwide",
  testimonials: testimonialsConfig.testimonials.slice(0, 3),
  layout: "grid",
  variant: "card",
};

export const testimonialsSingleConfig = {
  title: "Featured Review",
  testimonials: testimonialsConfig.testimonials,
  layout: "single",
  variant: "quote",
};
