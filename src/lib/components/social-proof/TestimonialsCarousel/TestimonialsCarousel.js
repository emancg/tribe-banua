'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TestimonialCard from '../TestimonialCard';
import Container from '../../utility/Container';

/**
 * TestimonialsCarousel Component
 *
 * Carousel/slider for displaying customer testimonials
 *
 * @param {Object} config - Testimonials configuration
 * @param {string} config.title - Section title
 * @param {Array} config.testimonials - Array of testimonial objects
 * @param {boolean} config.autoplay - Enable autoplay (default: true)
 * @param {number} config.interval - Autoplay interval in ms (default: 5000)
 * @param {string} config.layout - Layout: 'carousel', 'grid', 'single'
 * @param {string} config.variant - Card variant: 'card', 'quote', 'minimal'
 * @param {number} config.itemsPerView - Items to show at once (for carousel)
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[50],
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  marginTop: theme.spacing(4),
}));

const CarouselTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
}));

const CarouselItem = styled(Box)(({ theme }) => ({
  minWidth: '100%',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: {
    minWidth: '50%',
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  zIndex: 2,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const Indicators = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

const Indicator = styled(Box)(({ theme, active }) => ({
  width: active ? 24 : 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function TestimonialsCarousel({ config, sx = {} }) {
  if (!config || !config.testimonials || config.testimonials.length === 0) {
    return null;
  }

  const {
    title = 'What Our Customers Say',
    testimonials,
    autoplay = true,
    interval = 5000,
    layout = 'carousel',
    variant = 'card',
    itemsPerView = 1,
  } = config;

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoplay || layout !== 'carousel') return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, totalSlides, layout]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  // Grid Layout
  if (layout === 'grid') {
    return (
      <SectionContainer sx={sx}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ fontWeight: 700, marginBottom: 6 }}
          >
            {title}
          </Typography>

          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <TestimonialCard testimonial={testimonial} variant={variant} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionContainer>
    );
  }

  // Single Layout
  if (layout === 'single') {
    return (
      <SectionContainer sx={sx}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ fontWeight: 700, marginBottom: 6 }}
          >
            {title}
          </Typography>

          <TestimonialCard
            testimonial={testimonials[currentIndex]}
            variant={variant}
          />

          {testimonials.length > 1 && (
            <Indicators>
              {testimonials.map((_, index) => (
                <Indicator
                  key={index}
                  active={index === currentIndex}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </Indicators>
          )}
        </Container>
      </SectionContainer>
    );
  }

  // Carousel Layout (default)
  return (
    <SectionContainer sx={sx}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: 700, marginBottom: 6 }}
        >
          {title}
        </Typography>

        <CarouselContainer>
          {totalSlides > 1 && (
            <>
              <NavigationButton
                onClick={handlePrevious}
                sx={{ left: { xs: 8, md: -20 } }}
                aria-label="Previous testimonial"
              >
                <ArrowBackIosNewIcon />
              </NavigationButton>

              <NavigationButton
                onClick={handleNext}
                sx={{ right: { xs: 8, md: -20 } }}
                aria-label="Next testimonial"
              >
                <ArrowForwardIosIcon />
              </NavigationButton>
            </>
          )}

          <CarouselTrack
            sx={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <TestimonialCard testimonial={testimonial} variant={variant} />
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>

        {totalSlides > 1 && (
          <Indicators>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Indicator
                key={index}
                active={index === currentIndex}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </Indicators>
        )}
      </Container>
    </SectionContainer>
  );
}
