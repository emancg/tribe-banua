'use client';

import { useParams } from 'next/navigation';
import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Image from 'next/image';

// Import components from lib
import {
  Container,
  Section,
} from '@/lib/components';

// Import service data
import { getServiceBySlug } from '../../../../content/services/servicesDetail.config';
import { footerConfig } from '../../../../content/sections/footer.config';

// Styled components
const HeroSection = styled(Box)(({ theme, image }) => ({
  position: 'relative',
  height: '60vh',
  minHeight: '400px',
  backgroundImage: image ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(7),
    height: '40vh',
    minHeight: '300px',
  },
}));

const ContentCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const PricingBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const ItineraryItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceData = getServiceBySlug(params.slug);

  // Handle 404 if service not found
  if (!serviceData) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Service Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The service you're looking for doesn't exist.
        </Typography>
      </Container>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <HeroSection image={serviceData.heroImage}>
        <Box sx={{ textAlign: 'center', px: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 2,
            }}
          >
            {serviceData.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {serviceData.shortDescription}
          </Typography>
        </Box>
      </HeroSection>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Overview */}
        <ContentCard>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            {serviceData.fullDescription}
          </Typography>

          {/* Duration and Pricing */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
            <Box sx={{ flex: 1, minWidth: '200px' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Duration
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {serviceData.duration}
              </Typography>
            </Box>
          </Box>
        </ContentCard>

        {/* Pricing */}
        {serviceData.pricing && (
          <PricingBox>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {serviceData.pricing.price}
            </Typography>
            <Typography variant="body1">
              {serviceData.pricing.currency} {serviceData.pricing.unit}
            </Typography>
          </PricingBox>
        )}

        {/* Features */}
        {serviceData.features && serviceData.features.length > 0 && (
          <ContentCard>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              What's Included
            </Typography>
            <List>
              {serviceData.features.map((feature, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <CheckCircleOutlineIcon
                    sx={{ color: 'primary.main', mr: 2 }}
                  />
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{
                      sx: { fontSize: '1.1rem' }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </ContentCard>
        )}

        {/* Itinerary */}
        {serviceData.itinerary && serviceData.itinerary.length > 0 && (
          <ContentCard>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Itinerary
            </Typography>
            {serviceData.itinerary.map((item, index) => (
              <ItineraryItem key={index}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {item.day}: {item.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.8 }}>
                  {item.activities}
                </Typography>
              </ItineraryItem>
            ))}
          </ContentCard>
        )}

        {/* Inclusions */}
        {serviceData.inclusions && serviceData.inclusions.length > 0 && (
          <ContentCard>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Package Inclusions
            </Typography>
            <List>
              {serviceData.inclusions.map((item, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <CheckCircleOutlineIcon
                    sx={{ color: 'success.main', mr: 2, fontSize: '1.2rem' }}
                  />
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </ContentCard>
        )}

        {/* What to Bring */}
        {serviceData.whatToBring && serviceData.whatToBring.length > 0 && (
          <ContentCard>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              What to Bring
            </Typography>
            <List>
              {serviceData.whatToBring.map((item, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <CheckCircleOutlineIcon
                    sx={{ color: 'info.main', mr: 2, fontSize: '1.2rem' }}
                  />
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </ContentCard>
        )}

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            p: 4,
            textAlign: 'center',
            mt: 4,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Book?
          </Typography>
          <Typography variant="body1" paragraph>
            Contact us to reserve your spot or ask any questions about this service.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant="body1">
              📧 {footerConfig.contact.email}
            </Typography>
            <Typography variant="body1">
              📞 {footerConfig.contact.phone}
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
