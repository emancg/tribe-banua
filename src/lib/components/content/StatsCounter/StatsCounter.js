'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '../../utility/Container';
import { useIntersectionObserver, useCountUp } from '../../../hooks';
import { Icon } from '../../utility';

/**
 * StatsCounter Component
 *
 * Animated statistics/metrics display
 *
 * @param {Object} config - Stats configuration
 * @param {string} config.title - Section title (optional)
 * @param {Array} config.stats - Array of stat objects
 * @param {number} config.stats[].number - The number to count to
 * @param {string} config.stats[].label - Description label
 * @param {string} config.stats[].suffix - Suffix to add (e.g., '+', '%', 'K')
 * @param {string} config.stats[].prefix - Prefix to add (e.g., '$')
 * @param {string} config.stats[].icon - Icon name (optional)
 * @param {number} config.animationDuration - Duration of count animation in ms
 * @param {string} config.layout - Layout: 'row', 'grid'
 * @param {string} config.backgroundColor - Background color
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: bgcolor || theme.palette.primary.main,
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  '&:hover': {
    transform: 'scale(1.05)',
  },
  transition: 'transform 0.3s ease',
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3rem',
  lineHeight: 1.2,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  opacity: 0.9,
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));

function StatItem({ stat, isVisible, animationDuration }) {
  const count = useCountUp(stat.number, animationDuration, isVisible);

  return (
    <StatBox>
      {stat.icon && (
        <Box sx={{ mb: 2 }}>
          <Icon name={stat.icon} sx={{ fontSize: '3rem', opacity: 0.8 }} />
        </Box>
      )}

      <StatNumber variant="h2" component="div">
        {stat.prefix || ''}
        {isVisible ? count.toLocaleString() : '0'}
        {stat.suffix || ''}
      </StatNumber>

      <StatLabel variant="body1">{stat.label}</StatLabel>
    </StatBox>
  );
}

export default function StatsCounter({ config, sx = {} }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  if (!config || !config.stats || config.stats.length === 0) {
    return null;
  }

  const {
    title,
    stats,
    animationDuration = 2000,
    layout = 'row',
    backgroundColor,
  } = config;

  return (
    <SectionContainer ref={ref} bgcolor={backgroundColor} sx={sx}>
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 700,
              marginBottom: 6,
              color: 'inherit',
            }}
          >
            {title}
          </Typography>
        )}

        {layout === 'grid' ? (
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatItem
                  stat={stat}
                  isVisible={isVisible}
                  animationDuration={animationDuration}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              gap: 4,
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 auto' },
                  minWidth: { md: '200px' },
                }}
              >
                <StatItem
                  stat={stat}
                  isVisible={isVisible}
                  animationDuration={animationDuration}
                />
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </SectionContainer>
  );
}
