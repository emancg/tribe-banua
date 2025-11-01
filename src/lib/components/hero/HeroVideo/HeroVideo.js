'use client';

import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useState } from 'react';

/**
 * HeroVideo Component
 *
 * Hero section with video background
 *
 * @param {Object} config - Hero configuration
 * @param {string} config.title - Hero title
 * @param {string} config.subtitle - Hero subtitle
 * @param {Object} config.ctaButton - Primary CTA button
 * @param {string} config.ctaButton.text - Button text
 * @param {string} config.ctaButton.href - Button link
 * @param {Object} config.secondaryCTA - Secondary CTA button (optional)
 * @param {string} config.videoUrl - Video URL (MP4)
 * @param {string} config.posterImage - Poster image URL (fallback)
 * @param {boolean} config.autoplay - Autoplay video (default: true)
 * @param {boolean} config.loop - Loop video (default: true)
 * @param {boolean} config.muted - Mute video initially (default: true)
 * @param {number} config.overlayOpacity - Overlay opacity 0-1 (default: 0.4)
 * @param {string} config.height - Hero height (default: '100vh')
 * @param {Object} sx - Additional MUI sx styling
 */

const HeroContainer = styled(Box)(({ theme, height }) => ({
  position: 'relative',
  width: '100%',
  height: height || '100vh',
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '500px',
    height: height === '100vh' ? '80vh' : height,
  },
}));

const VideoBackground = styled('video')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  transform: 'translate(-50%, -50%)',
  objectFit: 'cover',
  zIndex: 0,
});

const Overlay = styled(Box)(({ theme, opacity }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, ' + (opacity || 0.4) + ')',
  zIndex: 1,
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: 'white',
  padding: theme.spacing(4),
  maxWidth: '900px',
  margin: '0 auto',
}));

const VideoControls = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  zIndex: 3,
  display: 'flex',
  gap: theme.spacing(1),
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  flexWrap: 'wrap',
}));

export default function HeroVideo({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const {
    title,
    subtitle,
    ctaButton,
    secondaryCTA,
    videoUrl,
    posterImage,
    autoplay = true,
    loop = true,
    muted: initialMuted = true,
    overlayOpacity = 0.4,
    height = '100vh',
  } = config;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(initialMuted);

  useEffect(() => {
    if (videoRef.current && autoplay) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, [autoplay]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <HeroContainer height={height} sx={sx}>
      {videoUrl && (
        <VideoBackground
          ref={videoRef}
          autoPlay={autoplay}
          loop={loop}
          muted={initialMuted}
          playsInline
          poster={posterImage}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>
      )}

      <Overlay opacity={overlayOpacity} />

      <ContentBox>
        {subtitle && (
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
            {subtitle}
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
          {title}
        </Typography>

        {(ctaButton || secondaryCTA) && (
          <ButtonGroup>
            {ctaButton && (
              <Button
                variant="contained"
                size="large"
                href={ctaButton.href}
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
                {ctaButton.text}
              </Button>
            )}

            {secondaryCTA && (
              <Button
                variant="outlined"
                size="large"
                href={secondaryCTA.href}
                sx={{
                  paddingX: 5,
                  paddingY: 2,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.05)',
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

      {videoUrl && (
        <VideoControls>
          <IconButton
            onClick={togglePlay}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>

          <IconButton
            onClick={toggleMute}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </VideoControls>
      )}
    </HeroContainer>
  );
}
