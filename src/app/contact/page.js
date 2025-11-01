'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  HeroSection,
  ContactForm,
  NewsletterSignup,
  Container,
} from '@/lib/components';
import { footerConfig } from '../../../content/sections/footer.config';

const contactHeroConfig = {
  title: "Get In Touch",
  subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
};

const contactFormConfig = {
  title: "Send Us a Message",
  description: "Fill out the form below and our team will get back to you within 24 hours.",
  showSubject: true,
  variant: "minimal",
};

const newsletterConfig = {
  title: "Stay Updated",
  description: "Subscribe to our newsletter for the latest updates, special offers, and travel tips.",
  variant: "minimal",
};

const ContactInfoCard = ({ icon: Icon, title, content }) => (
  <Box
    sx={{
      textAlign: 'center',
      p: 4,
      borderRadius: '4px',
      backgroundColor: '#FFFFFF',
      border: '1px solid',
      borderColor: 'divider',
      height: '100%',
    }}
  >
    <Box
      sx={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        mb: 3,
      }}
    >
      <Icon sx={{ fontSize: '2rem', color: 'primary.main' }} />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: '1.125rem' }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9375rem' }}>
      {content}
    </Typography>
  </Box>
);

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <Box sx={{ mt: 8 }}>
        <HeroSection config={contactHeroConfig} />
      </Box>

      {/* Contact Information Cards */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ContactInfoCard
                icon={EmailIcon}
                title="Email Us"
                content={footerConfig.contact.email}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ContactInfoCard
                icon={PhoneIcon}
                title="Call Us"
                content={footerConfig.contact.phone}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ContactInfoCard
                icon={LocationOnIcon}
                title="Visit Us"
                content={footerConfig.contact.address}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="md">
          <ContactForm config={contactFormConfig} />
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="sm">
          <NewsletterSignup config={newsletterConfig} />
        </Container>
      </Box>
    </main>
  );
}
