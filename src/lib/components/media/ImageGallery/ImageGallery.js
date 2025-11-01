'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Container from '../../utility/Container';

/**
 * ImageGallery Component
 *
 * Photo gallery with built-in lightbox
 *
 * @param {Object} config - Gallery configuration
 * @param {string} config.title - Section title
 * @param {Array} config.images - Array of image objects
 * @param {string} config.images[].src - Image URL
 * @param {string} config.images[].alt - Image alt text
 * @param {string} config.images[].caption - Image caption (optional)
 * @param {string} config.images[].category - Image category (optional)
 * @param {string} config.layout - Layout: 'grid', 'masonry' (default: 'grid')
 * @param {number} config.columns - Number of columns (2, 3, or 4)
 * @param {boolean} config.lightbox - Enable lightbox (default: true)
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ImageItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingBottom: '75%', // 4:3 aspect ratio
  overflow: 'hidden',
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  '&:hover .image-overlay': {
    opacity: 1,
  },
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const LightboxModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LightboxContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  outline: 'none',
}));

const LightboxImage = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '80vh',
  '& img': {
    objectFit: 'contain',
  },
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 40,
  },
}));

export default function ImageGallery({ config, sx = {} }) {
  if (!config || !config.images || config.images.length === 0) {
    return null;
  }

  const {
    title = 'Gallery',
    images,
    layout = 'grid',
    columns = 3,
    lightbox = true,
  } = config;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    if (lightbox) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const handleClose = () => {
    setLightboxOpen(false);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const gridColumns = {
    xs: 12,
    sm: columns >= 3 ? 6 : 12,
    md: columns === 4 ? 3 : columns === 3 ? 4 : 6,
  };

  return (
    <SectionContainer sx={sx}>
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ fontWeight: 700, marginBottom: 6 }}
          >
            {title}
          </Typography>
        )}

        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item {...gridColumns} key={index}>
              <ImageItem onClick={() => handleImageClick(index)}>
                <Image
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {image.caption && (
                  <ImageOverlay className="image-overlay">
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {image.caption}
                    </Typography>
                  </ImageOverlay>
                )}
              </ImageItem>
            </Grid>
          ))}
        </Grid>
      </Container>

      {lightbox && (
        <LightboxModal
          open={lightboxOpen}
          onClose={handleClose}
          aria-labelledby="image-lightbox"
        >
          <LightboxContent>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                zIndex: 2,
              }}
            >
              <CloseIcon />
            </IconButton>

            <LightboxImage>
              <Image
                src={images[currentImageIndex]?.src}
                alt={images[currentImageIndex]?.alt || 'Gallery image'}
                fill
              />
            </LightboxImage>

            {images[currentImageIndex]?.caption && (
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: 'white',
                  mt: 2,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                }}
              >
                {images[currentImageIndex].caption}
              </Typography>
            )}

            {images.length > 1 && (
              <>
                <NavigationButton
                  onClick={handlePrevious}
                  sx={{ left: 16 }}
                  aria-label="Previous image"
                >
                  <ArrowBackIosNewIcon />
                </NavigationButton>

                <NavigationButton
                  onClick={handleNext}
                  sx={{ right: 16 }}
                  aria-label="Next image"
                >
                  <ArrowForwardIosIcon />
                </NavigationButton>
              </>
            )}
          </LightboxContent>
        </LightboxModal>
      )}
    </SectionContainer>
  );
}
