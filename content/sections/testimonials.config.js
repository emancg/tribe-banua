/**
 * Testimonials Section Configuration
 *
 * INSTRUCTIONS:
 * - Replace with real testimonials from your customers
 * - Update author names, roles, and companies
 * - Adjust ratings to match actual feedback
 * - Choose layout: 'carousel', 'grid', or 'single'
 * - Choose variant: 'card', 'quote', or 'minimal'
 */

export const testimonialsConfig = {
  title: "What Our Clients Say",
  testimonials: [
    {
      quote: "Working with this team was an absolute pleasure. They delivered exceptional results and exceeded our expectations in every way. Highly recommended!",
      author: "John Smith",
      role: "CEO",
      company: "Tech Corp",
      rating: 5,
    },
    {
      quote: "The attention to detail and professionalism was outstanding. Our project was completed on time and the quality was exceptional. We couldn't be happier!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Growth Inc",
      rating: 5,
    },
    {
      quote: "Fantastic service from start to finish. The team was responsive, knowledgeable, and truly cared about our success. Will definitely work with them again!",
      author: "Michael Chen",
      role: "Founder",
      company: "Startup XYZ",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and results-driven. They understood our needs and delivered a solution that perfectly fit our requirements. Excellent work!",
      author: "Emma Davis",
      role: "Product Manager",
      company: "Innovation Labs",
      rating: 4.5,
    },
    {
      quote: "Great communication throughout the entire process. The team was always available to answer questions and provided valuable insights. Highly impressed!",
      author: "David Wilson",
      role: "Operations Director",
      company: "Enterprise Solutions",
      rating: 5,
    },
    {
      quote: "Outstanding quality and attention to detail. They went above and beyond to ensure everything was perfect. Would recommend to anyone!",
      author: "Lisa Anderson",
      role: "Creative Director",
      company: "Design Studio",
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
