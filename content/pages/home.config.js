/**
 * Home Page Configuration
 *
 * Defines the composition of sections on the home page
 */

import { heroConfig } from '../sections/hero.config';
import { servicesConfig } from '../sections/services.config';
import { whyChooseUsConfig } from '../sections/whyChooseUs.config';
import { footerConfig } from '../sections/footer.config';

export const homePageConfig = {
  title: "Home",
  background: {
    image: "/app-bg.jpg"
  },
  sections: [
    {
      id: "hero-container",
      type: 'hero',
      config: heroConfig
    },
    {
      id: "services-section",
      type: 'services',
      config: servicesConfig
    },
    {
      id: "whychooseus-section",
      type: 'whyChooseUs',
      config: whyChooseUsConfig,
      containerProps: {
        sx: { height: '100vh' }
      }
    },
    // Contact section is currently commented out in original
    // {
    //   id: "contactus-section",
    //   type: 'contact',
    //   config: contactConfig
    // },
    {
      id: "footer-section",
      type: 'footer',
      config: footerConfig,
      containerProps: {
        sx: { height: '100vh' }
      }
    }
  ]
};
