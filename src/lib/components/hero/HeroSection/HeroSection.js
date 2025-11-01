'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

/**
 * HeroSection Component
 *
 * Full-screen hero section with background image and CTA
 *
 * @param {Object} config - Hero configuration object
 * @param {string} config.title - Main heading text
 * @param {string} config.subtitle - Subheading text (optional)
 * @param {Object} config.cta - Call-to-action button config
 * @param {string} config.cta.text - Button text
 * @param {string} config.cta.href - Button link
 * @param {Object} config.background - Background settings
 * @param {string} config.background.image - Background image URL
 * @param {string} config.background.position - Background position
 * @param {boolean} config.background.overlay - Show overlay
 * @param {string} config.height - Hero height (default: 100vh)
 * @param {string} config.textAlign - Text alignment
 * @param {string} config.contentPosition - Content vertical position (top, center, bottom)
 * @param {string} config.textShadow - Text shadow CSS
 */

const HeroContainer = styled(Box)(({ theme, config }) => {
  const contentPositions = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  };

  return {
    height: config?.height || '100vh',
    padding: theme.spacing(2),
    paddingBottom: config?.contentPosition === 'bottom' ? 100 : theme.spacing(2),
    textAlign: config?.textAlign || 'center',
    backgroundImage: config?.background?.image
      ? `url('${config.background.image}')`
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: config?.background?.position || 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: contentPositions[config?.contentPosition] || 'flex-end',
    color: 'white',
    textShadow: config?.textShadow || 'none',
    boxShadow: '1px 2px 25px black',
    position: 'relative',

    // Overlay
    ...(config?.background?.overlay && {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: config.background.overlayColor || 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
      }
    }),
  };
});

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
});

export default function HeroSection({ config }) {
  if (!config) {
    return null;
  }

  return (
    <HeroContainer config={config}>
      <ContentWrapper>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: config.subtitle ? 2 : 4,
          }}
        >
          {config.title}
        </Typography>

        {config.subtitle && (
          <Typography
            variant="h5"
            component="h2"
            sx={{ mb: 4 }}
          >
            {config.subtitle}
          </Typography>
        )}

        {config.cta && (
          <Link href={config.cta.href} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              {config.cta.text}
            </Button>
          </Link>
        )}
      </ContentWrapper>
    </HeroContainer>
  );
}
