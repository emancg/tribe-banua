'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import PricingCard from '../PricingCard';
import Container from '../../utility/Container';

/**
 * PricingTable Component
 *
 * Pricing plans comparison table/grid
 *
 * @param {Object} config - Pricing configuration
 * @param {string} config.title - Section title
 * @param {string} config.subtitle - Section subtitle (optional)
 * @param {Array} config.plans - Array of pricing plan objects
 * @param {boolean} config.showBillingToggle - Show monthly/yearly toggle (default: false)
 * @param {Object} config.yearlyPlans - Yearly pricing plans (optional)
 * @param {number} config.columns - Number of columns (2, 3, or 4)
 * @param {string} config.variant - Card variant: 'card', 'bordered', 'gradient'
 * @param {string} config.backgroundColor - Background color
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: bgcolor || theme.palette.grey[50],
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const BillingToggle = styled(ToggleButtonGroup)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  backgroundColor: 'white',
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

export default function PricingTable({ config, sx = {} }) {
  if (!config || !config.plans || config.plans.length === 0) {
    return null;
  }

  const {
    title = 'Pricing Plans',
    subtitle,
    plans,
    showBillingToggle = false,
    yearlyPlans = [],
    columns = 3,
    variant = 'card',
    backgroundColor,
  } = config;

  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const handleBillingChange = (event, newPeriod) => {
    if (newPeriod !== null) {
      setBillingPeriod(newPeriod);
    }
  };

  const currentPlans = billingPeriod === 'yearly' && yearlyPlans.length > 0 ? yearlyPlans : plans;

  // Determine grid columns based on config
  const gridColumns = {
    xs: 12,
    sm: columns >= 3 ? 6 : 12,
    md: columns === 4 ? 3 : columns === 3 ? 4 : 6,
  };

  return (
    <SectionContainer bgcolor={backgroundColor} sx={sx}>
      <Container maxWidth="lg">
        {subtitle && (
          <Typography
            variant="overline"
            align="center"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
              display: 'block',
              marginBottom: 1,
            }}
          >
            {subtitle}
          </Typography>
        )}

        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: 700, marginBottom: 4 }}
        >
          {title}
        </Typography>

        {showBillingToggle && yearlyPlans.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BillingToggle
              value={billingPeriod}
              exclusive
              onChange={handleBillingChange}
              aria-label="billing period"
            >
              <ToggleButton
                value="monthly"
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  },
                }}
              >
                Monthly
              </ToggleButton>
              <ToggleButton
                value="yearly"
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  },
                }}
              >
                Yearly
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    px: 1,
                    py: 0.25,
                    backgroundColor: 'success.main',
                    color: 'white',
                    borderRadius: 1,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}
                >
                  Save 20%
                </Box>
              </ToggleButton>
            </BillingToggle>
          </Box>
        )}

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {currentPlans.map((plan, index) => (
            <Grid item {...gridColumns} key={index}>
              <PricingCard plan={plan} variant={variant} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
