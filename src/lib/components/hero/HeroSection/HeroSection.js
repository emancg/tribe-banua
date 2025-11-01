'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * Minimal Clean HeroSection Component
 *
 * Simple, centered hero with plenty of white space
 */

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(8, 3),

  [theme.breakpoints.down('md')]: {
    minHeight: '85vh',
    padding: theme.spacing(6, 2),
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '900px !important',
  padding: theme.spacing(8, 4),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 3),
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  lineHeight: 1.2,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  letterSpacing: '-0.02em',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: '750px',
  margin: '0 auto',
  marginBottom: theme.spacing(6),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(7),
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  fontSize: '1.0625rem',
  fontWeight: 500,
  padding: '14px 32px',
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',

  [theme.breakpoints.down('sm')]: {
    padding: '12px 24px',
    fontSize: '1rem',
  },
}));

export default function HeroSection({ config }) {
  if (!config) {
    return null;
  }

  return (
    <HeroContainer>
      <ContentWrapper>
        <Title variant="h1" component="h1">
          {config.title}
        </Title>

        {config.subtitle && (
          <Subtitle variant="h5" component="p">
            {config.subtitle}
          </Subtitle>
        )}

        {config.cta && (
          <Link href={config.cta.href} style={{ textDecoration: 'none' }}>
            <CTAButton
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              {config.cta.text}
            </CTAButton>
          </Link>
        )}
      </ContentWrapper>
    </HeroContainer>
  );
}
