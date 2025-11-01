'use client';

import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';

// Import new components from lib
import {
  Container,
  HeroSection,
  ServicesSection,
  GridSection,
  FooterSection,
} from '@/lib/components';

// Import page configuration
import { homePageConfig } from '../../content/pages/home.config';

// Styled page container with background
const PageContainer = styled(MuiContainer)(({ theme, config }) => ({
  padding: 0,
  width: '100%',
  justifyContent: 'center',
  backgroundImage: config?.background?.image
    ? `url('${config.background.image}')`
    : 'none',
  backgroundSize: 'cover',
}));

export default function Home() {
  // Map section types to components
  const sectionComponents = {
    hero: HeroSection,
    services: ServicesSection,
    whyChooseUs: GridSection,
    footer: FooterSection,
  };

  return (
    <main>
      <PageContainer maxWidth="xl" config={homePageConfig}>
        {homePageConfig.sections.map((section, index) => {
          const SectionComponent = sectionComponents[section.type];

          if (!SectionComponent) {
            console.warn(`Unknown section type: ${section.type}`);
            return null;
          }

          return (
            <Container
              key={index}
              id={section.id}
              disableGutters
              maxWidth={false}
              sx={section.containerProps?.sx || {}}
            >
              <SectionComponent config={section.config} />
            </Container>
          );
        })}
      </PageContainer>
    </main>
  );
}
