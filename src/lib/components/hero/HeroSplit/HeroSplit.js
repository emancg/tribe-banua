'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Container from '../../utility/Container';

/**
 * HeroSplit Component
 *
 * Split hero layout with image on one side and content on the other
 *
 * @param {Object} config - Hero configuration
 * @param {string} config.title - Hero title
 * @param {string} config.subtitle - Hero subtitle
 * @param {string} config.description - Additional description text
 * @param {Object} config.ctaButton - Primary CTA button
 * @param {string} config.ctaButton.text - Button text
 * @param {string} config.ctaButton.href - Button link
 * @param {Object} config.secondaryCTA - Secondary CTA button (optional)
 * @param {string} config.image - Image URL
 * @param {string} config.imageAlt - Image alt text
 * @param {string} config.imagePosition - Image position: 'left' or 'right' (default: 'right')
 * @param {string} config.backgroundColor - Background color
 * @param {Object} sx - Additional MUI sx styling
 */

const HeroContainer = styled(Box)(({ theme, bgcolor }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: bgcolor || theme.palette.background.default,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '600px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  [theme.breakpoints.down('md')]: {
    height: '400px',
    marginTop: theme.spacing(4),
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export default function HeroSplit({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const {
    title,
    subtitle,
    description,
    ctaButton,
    secondaryCTA,
    image,
    imageAlt,
    imagePosition = 'right',
    backgroundColor,
  } = config;

  const isImageRight = imagePosition === 'right';

  return (
    <HeroContainer bgcolor={backgroundColor} sx={sx}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Content Section */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: isImageRight ? 1 : 2 }}
          >
            <ContentBox>
              {subtitle && (
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: 2,
                    fontSize: '1rem',
                    mb: 2,
                  }}
                >
                  {subtitle}
                </Typography>
              )}

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>

              {description && (
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                  }}
                >
                  {description}
                </Typography>
              )}

              {(ctaButton || secondaryCTA) && (
                <ButtonGroup>
                  {ctaButton && (
                    <Button
                      variant="contained"
                      size="large"
                      href={ctaButton.href}
                      sx={{
                        paddingX: 4,
                        paddingY: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 2,
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {ctaButton.text}
                    </Button>
                  )}

                  {secondaryCTA && (
                    <Button
                      variant="outlined"
                      size="large"
                      href={secondaryCTA.href}
                      sx={{
                        paddingX: 4,
                        paddingY: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 2,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {secondaryCTA.text}
                    </Button>
                  )}
                </ButtonGroup>
              )}
            </ContentBox>
          </Grid>

          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: isImageRight ? 2 : 1 }}
          >
            {image && (
              <ImageBox>
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </ImageBox>
            )}
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
}
