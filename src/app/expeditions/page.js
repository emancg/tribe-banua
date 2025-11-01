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

// Styled page container
const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  width: '100%',
}));

const PageTitle = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(12, 2),
  textAlign: 'center',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2),
    marginTop: theme.spacing(7),
  },
}));

export default function ExpeditionsPage() {
  return (
    <main>
      <PageContainer>
        {/* Page Title */}
        <PageTitle>
          <MuiContainer maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'text.primary',
                marginBottom: 2,
              }}
            >
              {expeditionsPageConfig.title}
            </Typography>
            {expeditionsPageConfig.subtitle && (
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                {expeditionsPageConfig.subtitle}
              </Typography>
            )}
          </MuiContainer>
        </PageTitle>

        {/* Content Sections */}
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <MuiContainer maxWidth="lg">
            {expeditionsPageConfig.content.sections.map((section, index) => (
              <ContentSection key={index} config={section} />
            ))}
          </MuiContainer>
        </Box>

        {/* Call to Action - Services Section */}
        <Box id="other-services" sx={{ backgroundColor: '#F5F5F5' }}>
          <ServicesSection
            config={{
              ...servicesConfig,
              title: expeditionsPageConfig.cta.text,
            }}
            hiddenItem={expeditionsPageConfig.cta.hiddenServiceIndex}
          />
        </Box>

        {/* Footer */}
        <Box id="contactus-section">
          <FooterSection config={footerConfig} />
        </Box>
      </PageContainer>
    </main>
  );
}
