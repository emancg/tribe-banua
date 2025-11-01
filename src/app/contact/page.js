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
  backgroundImage: "/services/island-tours.jpg",
  height: "50vh",
};

const contactFormConfig = {
  title: "Send Us a Message",
  description: "Fill out the form below and our team will get back to you within 24 hours.",
  showSubject: true,
  variant: "card",
};

const newsletterConfig = {
  title: "Stay Updated",
  description: "Subscribe to our newsletter for the latest updates, special offers, and travel tips.",
  variant: "card",
};

const ContactInfoCard = ({ icon: Icon, title, content }) => (
  <Box
    sx={{
      textAlign: 'center',
      p: 3,
      borderRadius: 2,
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      height: '100%',
    }}
  >
    <Icon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
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
      <Box sx={{ py: 6, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
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
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <ContactForm config={contactFormConfig} />
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="sm">
          <NewsletterSignup config={newsletterConfig} />
        </Container>
      </Box>
    </main>
  );
}
