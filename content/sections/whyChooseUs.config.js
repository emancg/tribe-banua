/**
 * Why Choose Us Section Configuration
 *
 * INSTRUCTIONS:
 * - Replace with your unique selling points
 * - Update icons from @mui/icons-material
 * - Customize titles and descriptions
 * - Adjust layout columns as needed (xs: mobile, sm: tablet, md: desktop)
 */

export const whyChooseUsConfig = {
  title: "WHY CHOOSE US?",
  items: [
    {
      title: "Quality Service",
      icon: "VerifiedUser",
      iconColor: "primary",
      subtitle: "We deliver exceptional quality in everything we do, ensuring your complete satisfaction."
    },
    {
      title: "Expert Team",
      icon: "Groups3",
      iconColor: "secondary",
      subtitle: "Our experienced professionals bring expertise and dedication to every project."
    },
    {
      title: "Reliable",
      icon: "Security",
      iconColor: "success",
      subtitle: "Count on us for consistent, dependable service you can trust."
    },
    {
      title: "Customer Focused",
      icon: "AutoAwesome",
      iconColor: "warning",
      subtitle: "Your needs come first. We're committed to exceeding your expectations."
    }
  ],
  layout: {
    columns: { xs: 6, sm: 6, md: 3 }
  }
};
