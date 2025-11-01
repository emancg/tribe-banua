/**
 * Stats Counter Section Configuration
 *
 * INSTRUCTIONS:
 * - Replace with your company's key metrics
 * - Update numbers, labels, and icons
 * - Icons from @mui/icons-material
 * - Customize colors to match your theme
 */

export const statsConfig = {
  title: "Our Impact in Numbers",
  stats: [
    {
      number: 1000,
      label: "Happy Clients",
      suffix: "+",
      icon: "People",
    },
    {
      number: 500,
      label: "Projects Completed",
      suffix: "+",
      icon: "CheckCircle",
    },
    {
      number: 50,
      label: "Team Members",
      suffix: "+",
      icon: "Groups",
    },
    {
      number: 98,
      label: "Satisfaction Rate",
      suffix: "%",
      icon: "Star",
    },
  ],
  animationDuration: 2000,
  layout: "row",
  backgroundColor: "#2196F3",
};

export const statsConfigSimple = {
  stats: [
    {
      number: 10,
      label: "Years of Experience",
      suffix: "+",
    },
    {
      number: 4.9,
      label: "Average Rating",
      suffix: "★",
    },
    {
      number: 24,
      label: "Support Available",
      suffix: "/7",
    },
  ],
  animationDuration: 2000,
  layout: "row",
  backgroundColor: "#2c3e50",
};
