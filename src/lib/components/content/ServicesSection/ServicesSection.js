'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

/**
 * Minimal Clean ServicesSection Component
 *
 * Simple grid of service cards with images
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 2),
  backgroundColor: '#FAFAFA',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2),
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(6),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.2s ease',
  cursor: 'pointer',

  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  width: '100%',
  overflow: 'hidden',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#F5F5F5',

  '& img': {
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },

  '&:hover img': {
    transform: 'scale(1.05)',
  },

  [theme.breakpoints.down('sm')]: {
    height: '160px',
  },
}));

const ServiceContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.25rem',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1.5),
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  fontSize: '0.9375rem',
}));

export default function ServicesSection({ config, hiddenItem }) {
  if (!config || !config.items) {
    return null;
  }

  const hideIndex = hiddenItem !== undefined ? hiddenItem : config.hiddenItem;

  return (
    <SectionContainer id={config.id}>
      <Container maxWidth="lg">
        <SectionHeader>
          <SectionTitle variant="h2" component="h2">
            {config.title || 'Our Services'}
          </SectionTitle>
        </SectionHeader>

        <Grid container spacing={4}>
          {config.items.map((item, index) => {
            if (hideIndex !== undefined && index === hideIndex) {
              return null;
            }

            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Link href={item.href} style={{ textDecoration: 'none' }}>
                  <ServiceCard elevation={0}>
                    <ImageContainer>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </ImageContainer>

                    <ServiceContent>
                      <ServiceTitle variant="h6" component="h3">
                        {item.title}
                      </ServiceTitle>

                      {item.description && (
                        <ServiceDescription variant="body2">
                          {item.description}
                        </ServiceDescription>
                      )}
                    </ServiceContent>
                  </ServiceCard>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
