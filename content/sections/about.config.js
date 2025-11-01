/**
 * About Section Configuration
 */

export const aboutConfig = {
  title: "About Tribe Banua",
  subtitle: "Who We Are",
  contentParagraphs: [
    "Tribe Banua is your trusted partner for unforgettable adventures in Palawan, Philippines. We specialize in creating authentic, immersive experiences that connect travelers with the natural beauty and rich culture of this tropical paradise.",
    "Our team of experienced guides and crew members are passionate about sharing the wonders of Palawan while maintaining sustainable tourism practices. We believe in responsible travel that benefits both our guests and the local communities we visit.",
    "Whether you're seeking thrilling expeditions, relaxing island tours, or reliable transportation services, we're here to make your Palawan journey extraordinary."
  ],
  image: {
    src: "/services/expeditions.jpg",
    alt: "Tribe Banua Expedition",
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
      number: "5000",
      suffix: "+",
      label: "Happy Customers",
    },
    {
      number: "50",
      suffix: "+",
      label: "Destinations",
    },
    {
      number: "98",
      suffix: "%",
      label: "Satisfaction",
    },
  ],
};

export const aboutConfigTextRight = {
  ...aboutConfig,
  layout: "text-right",
  image: {
    src: "/services/island-tours.jpg",
    alt: "El Nido Island Tours",
    width: 600,
    height: 400,
  },
};

export const aboutConfigCentered = {
  title: "Our Mission",
  subtitle: "What Drives Us",
  content: "At Tribe Banua, we're dedicated to creating transformative travel experiences that go beyond typical tours. We connect you with the heart of Palawan through authentic cultural encounters, pristine natural environments, and unforgettable adventures. Our commitment to sustainability and community engagement ensures that every journey leaves a positive impact.",
  layout: "text-only",
  backgroundColor: "#f5f5f5",
};
