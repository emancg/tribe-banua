'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

/**
 * HeroCarousel Component
 *
 * Rotating hero slides with navigation
 *
 * @param {Object} config - Carousel configuration
 * @param {Array} config.slides - Array of slide objects
 * @param {string} config.slides[].title - Slide title
 * @param {string} config.slides[].subtitle - Slide subtitle
 * @param {string} config.slides[].backgroundImage - Background image URL
 * @param {Object} config.slides[].ctaButton - CTA button config
 * @param {boolean} config.autoplay - Enable autoplay (default: true)
 * @param {number} config.interval - Autoplay interval in ms (default: 5000)
 * @param {boolean} config.showArrows - Show navigation arrows (default: true)
 * @param {boolean} config.showIndicators - Show dot indicators (default: true)
 * @param {string} config.height - Hero height (default: '90vh')
 * @param {number} config.overlayOpacity - Overlay opacity 0-1 (default: 0.3)
 * @param {Object} sx - Additional MUI sx styling
 */

const CarouselContainer = styled(Box)(({ theme, height }) => ({
  position: 'relative',
  width: '100%',
  height: height || '90vh',
  minHeight: '600px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: height === '90vh' ? '70vh' : height,
    minHeight: '500px',
  },
}));

const SlideTrack = styled(Box)({
  display: 'flex',
  height: '100%',
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
});

const Slide = styled(Box)(({ theme }) => ({
  minWidth: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SlideBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
});

const Overlay = styled(Box)(({ opacity }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(0, 0, 0, ${opacity || 0.3})`,
  zIndex: 1,
}));

const SlideContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: 'white',
  padding: theme.spacing(4),
  maxWidth: '900px',
  margin: '0 auto',
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 3,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const Indicators = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 3,
  display: 'flex',
  gap: theme.spacing(1),
}));

const Indicator = styled(Box)(({ theme, active }) => ({
  width: active ? 32 : 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: active ? 'white' : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
}));

export default function HeroCarousel({ config, sx = {} }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = config?.slides || [];
  const autoplay = config?.autoplay ?? true;
  const interval = config?.interval ?? 5000;

  useEffect(() => {
    if (!autoplay || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, slides.length]);

  if (!config || !config.slides || config.slides.length === 0) {
    return null;
  }

  const {
    showArrows = true,
    showIndicators = true,
    height = '90vh',
    overlayOpacity = 0.3,
  } = config;

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer height={height} sx={sx}>
      <SlideTrack
        sx={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideBackground>
              {slide.backgroundImage && (
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              )}
            </SlideBackground>

            <Overlay opacity={overlayOpacity} />

            <SlideContent>
              {slide.subtitle && (
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    letterSpacing: 3,
                    mb: 2,
                    opacity: 0.9,
                  }}
                >
                  {slide.subtitle}
                </Typography>
              )}

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  lineHeight: 1.1,
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                }}
              >
                {slide.title}
              </Typography>

              {slide.description && (
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.95,
                    maxWidth: '700px',
                    margin: '0 auto 2rem',
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {slide.description}
                </Typography>
              )}

              {slide.ctaButton && (
                <Button
                  variant="contained"
                  size="large"
                  href={slide.ctaButton.href}
                  sx={{
                    paddingX: 5,
                    paddingY: 2,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {slide.ctaButton.text}
                </Button>
              )}
            </SlideContent>
          </Slide>
        ))}
      </SlideTrack>

      {showArrows && slides.length > 1 && (
        <>
          <NavigationButton
            onClick={handlePrevious}
            sx={{ left: 24 }}
            aria-label="Previous slide"
          >
            <ArrowBackIosNewIcon />
          </NavigationButton>

          <NavigationButton
            onClick={handleNext}
            sx={{ right: 24 }}
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon />
          </NavigationButton>
        </>
      )}

      {showIndicators && slides.length > 1 && (
        <Indicators>
          {slides.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentSlide}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </Indicators>
      )}
    </CarouselContainer>
  );
}
