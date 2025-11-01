'use client';

import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Import components from lib
import {
  Container,
  ContentSection,
  ServicesSection,
  FooterSection,
} from '@/lib/components';

// Import page configuration
import { expeditionsPageConfig } from '../../../content/pages/expeditions.config';
import { servicesConfig } from '../../../content/sections/services.config';
import { footerConfig } from '../../../content/sections/footer.config';

// Styled page container with background
const PageContainer = styled(MuiContainer)(({ theme, config }) => ({
  padding: 0,
  width: '100%',
  justifyContent: 'center',
  backgroundImage: config?.background?.image
    ? `url('${config.background.image}')`
    : 'none',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
}));

const PageTitle = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(31, 147, 182, 0.9)',
  color: 'white',
  padding: theme.spacing(4),
  textAlign: 'center',
  marginTop: theme.spacing(8), // Account for fixed AppBar
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(7),
  },
}));

export default function ExpeditionsPage() {
  return (
    <main>
      <PageContainer maxWidth="xl" config={expeditionsPageConfig}>
        {/* Page Title */}
        <PageTitle>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {expeditionsPageConfig.title}
          </Typography>
        </PageTitle>

        {/* Content Sections */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {expeditionsPageConfig.content.sections.map((section, index) => (
            <ContentSection key={index} config={section} />
          ))}
        </Container>

        {/* Call to Action - Services Section */}
        <Container
          id="other-services"
          disableGutters
          maxWidth={false}
          sx={{ mt: 4 }}
        >
          <ServicesSection
            config={{
              ...servicesConfig,
              title: expeditionsPageConfig.cta.text,
            }}
            hiddenItem={expeditionsPageConfig.cta.hiddenServiceIndex}
          />
        </Container>

        {/* Footer */}
        <Container
          id="contactus-section"
          disableGutters
          maxWidth={false}
        >
          <FooterSection config={footerConfig} />
        </Container>
      </PageContainer>
    </main>
  );
}
