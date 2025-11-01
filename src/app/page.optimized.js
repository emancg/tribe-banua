// OPTIMIZED VERSION - Use dynamic imports for better dev performance
// To use: rename this to page.js (backup the original first)

import dynamic from 'next/dynamic';
import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';
import { Container } from '@/lib/components';

// Import page configuration
import { homePageConfig } from '../../content/pages/home.config';

// Dynamic imports with loading states (MUCH FASTER in dev)
const HeroSection = dynamic(() => import('@/lib/components/hero/HeroSection'), {
  loading: () => <div style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading hero...</div>,
});

const ServicesSection = dynamic(() => import('@/lib/components/content/ServicesSection'), {
  loading: () => <div style={{ padding: '40px', textAlign: 'center' }}>Loading services...</div>,
});

const GridSection = dynamic(() => import('@/lib/components/content/GridSection'), {
  loading: () => <div style={{ padding: '40px', textAlign: 'center' }}>Loading section...</div>,
});

const FooterSection = dynamic(() => import('@/lib/components/content/FooterSection'), {
  loading: () => <div style={{ padding: '40px', textAlign: 'center' }}>Loading footer...</div>,
});

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
