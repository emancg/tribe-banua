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

const CTAContainer = styled(Box)(({ theme, variant, bgcolor, bgimage, textcolor }) => {
  const baseStyles = {
    padding: theme.spacing(8, 2),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: textcolor || 'white',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 2),
    },
  };

  // Variant-specific styles
  const variantStyles = {
    gradient: {
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    },
    solid: {
      backgroundColor: bgcolor || theme.palette.primary.main,
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `3px solid ${theme.palette.primary.main}`,
      color: theme.palette.text.primary,
    },
    image: {
      backgroundImage: bgimage ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgimage}')` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.gradient),
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
    variant = 'gradient',
    backgroundColor,
    backgroundImage,
    textColor,
  } = config;

  const isPrimaryOutlined = variant === 'outlined';

  return (
    <CTAContainer
      variant={variant}
      bgcolor={backgroundColor}
      bgimage={backgroundImage}
      textcolor={textColor}
      sx={sx}
    >
      <CTAContent>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            marginBottom: 2,
            textShadow: variant === 'outlined' ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant="h6"
            sx={{
              marginBottom: 3,
              opacity: 0.95,
              lineHeight: 1.6,
              textShadow: variant === 'outlined' ? 'none' : '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            {description}
          </Typography>
        )}

        <ButtonGroup>
          {primaryCTA && (
            <Button
              variant={isPrimaryOutlined ? 'contained' : 'contained'}
              size="large"
              href={primaryCTA.href}
              sx={{
                paddingX: 4,
                paddingY: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                backgroundColor: isPrimaryOutlined ? 'primary.main' : 'white',
                color: isPrimaryOutlined ? 'white' : 'primary.main',
                '&:hover': {
                  backgroundColor: isPrimaryOutlined ? 'primary.dark' : 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s ease',
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
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                borderColor: isPrimaryOutlined ? 'primary.main' : 'white',
                color: isPrimaryOutlined ? 'primary.main' : 'white',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: isPrimaryOutlined
                    ? 'rgba(31, 147, 182, 0.1)'
                    : 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
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
