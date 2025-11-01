'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

/**
 * CallToActionSection Component
 *
 * Conversion-focused section with heading, description, and action buttons
 *
 * @param {Object} config - CTA configuration
 * @param {string} config.title - Main heading
 * @param {string} config.subtitle - Supporting text/description
 * @param {Array} config.buttons - Array of button configurations
 * @param {string} config.buttons[].text - Button text
 * @param {string} config.buttons[].href - Button link
 * @param {string} config.buttons[].variant - MUI button variant (contained, outlined, text)
 * @param {string} config.buttons[].color - MUI button color (primary, secondary, etc.)
 * @param {Object} config.background - Background configuration
 * @param {string} config.background.color - Background color
 * @param {string} config.background.image - Background image URL
 * @param {string} config.id - Section ID for anchor links
 * @param {Object} sx - Additional MUI sx styling
 */

const CTAContainer = styled(Box)(({ theme, config }) => ({
  backgroundColor: config?.background?.color || theme.palette.primary.main,
  backgroundImage: config?.background?.image
    ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${config.background.image}')`
    : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: theme.spacing(8, 4),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '300px',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 2),
    minHeight: '250px',
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  flexWrap: 'wrap',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: '100%',
    '& > *': {
      width: '100%',
    },
  },
}));

export default function CallToActionSection({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const { title, subtitle, buttons = [], id } = config;

  return (
    <CTAContainer id={id} config={config} sx={sx}>
      {title && (
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            maxWidth: '800px',
          }}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography
          variant="h6"
          component="p"
          sx={{
            maxWidth: '600px',
            opacity: 0.95,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {buttons.length > 0 && (
        <ButtonGroup>
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href || '#'}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant={button.variant || 'contained'}
                color={button.color || 'secondary'}
                size="large"
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {button.text}
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      )}
    </CTAContainer>
  );
}
