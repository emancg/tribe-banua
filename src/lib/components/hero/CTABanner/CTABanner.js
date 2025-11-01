'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

/**
 * CTABanner Component
 *
 * Call-to-action banner section with multiple variants
 *
 * @param {Object} config - CTA configuration
 * @param {string} config.title - Main CTA title
 * @param {string} config.description - CTA description text (optional)
 * @param {Object} config.primaryCTA - Primary button config
 * @param {string} config.primaryCTA.text - Button text
 * @param {string} config.primaryCTA.href - Button link
 * @param {Object} config.secondaryCTA - Secondary button config (optional)
 * @param {string} config.variant - Style variant: 'gradient', 'solid', 'outlined', 'image'
 * @param {string} config.backgroundColor - Background color (for solid variant)
 * @param {string} config.backgroundImage - Background image URL (for image variant)
 * @param {string} config.textColor - Text color override
 * @param {Object} sx - Additional MUI sx styling
 */

const CTAContainer = styled(Box)(({ theme, variant, bgcolor }) => {
  const baseStyles = {
    padding: theme.spacing(12, 2),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(8, 2),
    },
  };

  // Variant-specific styles
  const variantStyles = {
    solid: {
      backgroundColor: bgcolor || '#2196F3',
      color: '#FFFFFF',
    },
    outlined: {
      backgroundColor: '#FFFFFF',
      border: `2px solid ${theme.palette.divider}`,
      color: theme.palette.text.primary,
    },
    minimal: {
      backgroundColor: '#F5F5F5',
      color: theme.palette.text.primary,
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.solid),
  };
});

const CTAContent = styled(Container)(({ theme }) => ({
  maxWidth: '800px',
  zIndex: 1,
  position: 'relative',
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function CTABanner({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const {
    title,
    description,
    primaryCTA,
    secondaryCTA,
    variant = 'solid',
    backgroundColor,
  } = config;

  const isOutlined = variant === 'outlined' || variant === 'minimal';

  return (
    <CTAContainer
      variant={variant}
      bgcolor={backgroundColor}
      sx={sx}
    >
      <CTAContent>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            marginBottom: 3,
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant="body1"
            sx={{
              marginBottom: 5,
              fontSize: '1.125rem',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto',
              marginBottom: 5,
              opacity: 0.9,
            }}
          >
            {description}
          </Typography>
        )}

        <ButtonGroup>
          {primaryCTA && (
            <Button
              variant="contained"
              size="large"
              href={primaryCTA.href}
              sx={{
                paddingX: 4,
                paddingY: 1.5,
                fontSize: '1.0625rem',
                fontWeight: 500,
                textTransform: 'none',
                backgroundColor: isOutlined ? 'primary.main' : 'white',
                color: isOutlined ? 'white' : 'primary.main',
                '&:hover': {
                  backgroundColor: isOutlined ? 'primary.dark' : 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              {primaryCTA.text}
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
                fontSize: '1.0625rem',
                fontWeight: 500,
                textTransform: 'none',
                borderColor: isOutlined ? 'primary.main' : 'white',
                color: isOutlined ? 'primary.main' : 'white',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: isOutlined
                    ? 'rgba(33, 150, 243, 0.08)'
                    : 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {secondaryCTA.text}
            </Button>
          )}
        </ButtonGroup>
      </CTAContent>
    </CTAContainer>
  );
}
