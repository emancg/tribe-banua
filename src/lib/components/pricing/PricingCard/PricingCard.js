'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

/**
 * PricingCard Component
 *
 * Single pricing plan card
 *
 * @param {Object} plan - Pricing plan data
 * @param {string} plan.name - Plan name
 * @param {number|string} plan.price - Plan price
 * @param {string} plan.period - Billing period (e.g., 'month', 'year')
 * @param {string} plan.currency - Currency symbol (default: '$')
 * @param {string} plan.description - Plan description
 * @param {Array} plan.features - Array of feature strings
 * @param {Object} plan.cta - CTA button config
 * @param {string} plan.cta.text - Button text
 * @param {string} plan.cta.href - Button link
 * @param {boolean} plan.highlighted - Whether plan is highlighted/popular
 * @param {string} variant - Display variant: 'card', 'bordered', 'gradient'
 * @param {Object} sx - Additional MUI sx styling
 */

const CardContainer = styled(Box)(({ theme, variant, highlighted }) => {
  const baseStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    transition: 'all 0.3s ease',
    position: 'relative',
  };

  const variantStyles = {
    card: {
      backgroundColor: highlighted ? theme.palette.primary.main : 'white',
      color: highlighted ? 'white' : 'inherit',
      boxShadow: highlighted
        ? '0 12px 24px rgba(31, 147, 182, 0.3)'
        : '0 2px 8px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: highlighted
          ? '0 16px 32px rgba(31, 147, 182, 0.4)'
          : '0 8px 16px rgba(0,0,0,0.15)',
        transform: 'translateY(-4px)',
      },
    },
    bordered: {
      backgroundColor: 'white',
      border: highlighted
        ? `3px solid ${theme.palette.primary.main}`
        : `1px solid ${theme.palette.divider}`,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        transform: 'translateY(-4px)',
      },
    },
    gradient: {
      background: highlighted
        ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
        : 'white',
      color: highlighted ? 'white' : 'inherit',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        transform: 'translateY(-4px)',
      },
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.card),
  };
});

const PopularBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -12,
  right: 24,
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(2),
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 1,
}));

const PriceBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: '1px solid',
  borderColor: 'inherit',
}));

const FeatureList = styled(List)(({ theme }) => ({
  flex: 1,
  marginBottom: theme.spacing(3),
}));

export default function PricingCard({ plan, variant = 'card', sx = {} }) {
  if (!plan) {
    return null;
  }

  const {
    name,
    price,
    period = 'month',
    currency = '$',
    description,
    features = [],
    cta,
    highlighted = false,
  } = plan;

  const isHighlighted = highlighted;
  const textColor = (variant === 'card' || variant === 'gradient') && isHighlighted ? 'white' : 'inherit';

  return (
    <CardContainer variant={variant} highlighted={isHighlighted} sx={sx}>
      {isHighlighted && <PopularBadge>Most Popular</PopularBadge>}

      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontWeight: 700,
          mb: 1,
          color: textColor,
        }}
      >
        {name}
      </Typography>

      {description && (
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            opacity: 0.9,
            color: textColor,
          }}
        >
          {description}
        </Typography>
      )}

      <PriceBox sx={{ borderColor: textColor === 'white' ? 'rgba(255,255,255,0.3)' : 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 800,
              color: textColor,
            }}
          >
            {currency}{price}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: textColor,
              opacity: 0.8,
            }}
          >
            /{period}
          </Typography>
        </Box>
      </PriceBox>

      <FeatureList>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleIcon
                sx={{
                  fontSize: 20,
                  color: textColor === 'white' ? 'white' : 'success.main',
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={feature}
              primaryTypographyProps={{
                sx: { fontSize: '0.95rem', color: textColor },
              }}
            />
          </ListItem>
        ))}
      </FeatureList>

      {cta && (
        <Button
          variant={isHighlighted ? 'contained' : 'outlined'}
          size="large"
          href={cta.href}
          fullWidth
          sx={{
            paddingY: 1.5,
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 1.5,
            ...(isHighlighted && {
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }),
          }}
        >
          {cta.text}
        </Button>
      )}
    </CardContainer>
  );
}
