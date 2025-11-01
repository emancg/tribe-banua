'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

/**
 * ImageCarousel Component
 *
 * Image slider/carousel
 *
 * @param {Object} config - Carousel configuration
 * @param {Array} config.images - Array of image objects or strings
 * @param {boolean} config.autoplay - Enable autoplay (default: false)
 * @param {number} config.interval - Autoplay interval in ms (default: 5000)
 * @param {string} config.navigation - Navigation type: 'arrows', 'dots', 'both' (default: 'both')
 * @param {string} config.variant - Transition: 'slide', 'fade' (default: 'slide')
 * @param {string} config.height - Carousel height (default: '500px')
 * @param {string} config.borderRadius - Border radius (default: '8px')
 * @param {Object} sx - Additional MUI sx styling
 */

const CarouselContainer = styled(Box)(({ theme, height, borderRadius }) => ({
  position: 'relative',
  width: '100%',
  height: height || '500px',
  overflow: 'hidden',
  borderRadius: borderRadius || theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    height: '300px',
  },
}));

const SlideTrack = styled(Box)(({ variant }) => ({
  display: 'flex',
  height: '100%',
  transition: variant === 'fade' ? 'opacity 0.6s ease' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const Slide = styled(Box)({
  minWidth: '100%',
  height: '100%',
  position: 'relative',
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 40,
  },
}));

const Indicators = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
  display: 'flex',
  gap: theme.spacing(1),
}));

const Indicator = styled(Box)(({ active }) => ({
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

export default function ImageCarousel({ config, sx = {} }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = config?.images || [];
  const autoplay = config?.autoplay ?? false;
  const interval = config?.interval ?? 5000;

  useEffect(() => {
    if (!autoplay || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, images.length]);

  if (!config || !config.images || config.images.length === 0) {
    return null;
  }

  const {
    navigation = 'both',
    variant = 'slide',
    height = '500px',
    borderRadius = '8px',
  } = config;

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  const showArrows = navigation === 'arrows' || navigation === 'both';
  const showDots = navigation === 'dots' || navigation === 'both';

  return (
    <CarouselContainer height={height} borderRadius={borderRadius} sx={sx}>
      <SlideTrack
        variant={variant}
        sx={{
          transform: variant === 'slide' ? `translateX(-${currentSlide * 100}%)` : 'none',
        }}
      >
        {images.map((image, index) => (
          <Slide
            key={index}
            sx={{
              display: variant === 'fade' ? (index === currentSlide ? 'block' : 'none') : 'block',
            }}
          >
            <Image
              src={typeof image === 'string' ? image : image.src}
              alt={typeof image === 'string' ? `Slide ${index + 1}` : image.alt || `Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </Slide>
        ))}
      </SlideTrack>

      {showArrows && images.length > 1 && (
        <>
          <NavigationButton
            onClick={handlePrevious}
            sx={{ left: 16 }}
            aria-label="Previous slide"
          >
            <ArrowBackIosNewIcon />
          </NavigationButton>

          <NavigationButton
            onClick={handleNext}
            sx={{ right: 16 }}
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon />
          </NavigationButton>
        </>
      )}

      {showDots && images.length > 1 && (
        <Indicators>
          {images.map((_, index) => (
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
