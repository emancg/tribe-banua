'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as MuiIcons from '@mui/icons-material';

/**
 * StatsSection Component
 *
 * Display impressive numbers/metrics in a grid layout
 *
 * @param {Object} config - Stats configuration
 * @param {string} config.title - Section title (optional)
 * @param {string} config.subtitle - Section subtitle (optional)
 * @param {Array} config.stats - Array of stat objects
 * @param {string|number} config.stats[].value - The number/metric to display
 * @param {string} config.stats[].label - Label for the stat
 * @param {string} config.stats[].icon - MUI icon name (optional)
 * @param {string} config.stats[].suffix - Suffix for the value (e.g., "+", "%")
 * @param {Object} config.layout - Layout configuration
 * @param {Object} config.layout.columns - Responsive column configuration {xs, sm, md}
 * @param {Object} config.background - Background configuration
 * @param {string} config.background.color - Background color
 * @param {string} config.id - Section ID for anchor links
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme, config }) => ({
  backgroundColor: config?.background?.color || theme.palette.grey[100],
  padding: theme.spacing(8, 4),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 2),
  },
}));

const StatBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3rem',
  lineHeight: 1.2,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.palette.text.secondary,
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}));

export default function StatsSection({ config, sx = {} }) {
  if (!config || !config.stats) {
    return null;
  }

  const { title, subtitle, stats, layout, id } = config;

  return (
    <SectionContainer id={id} config={config} sx={sx}>
      {title && (
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 2,
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
            margin: '0 auto',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          {subtitle}
        </Typography>
      )}

      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon && MuiIcons[stat.icon]
            ? MuiIcons[stat.icon]
            : null;

          return (
            <Grid
              item
              xs={layout?.columns?.xs || 6}
              sm={layout?.columns?.sm || 6}
              md={layout?.columns?.md || 3}
              key={index}
            >
              <StatBox>
                {IconComponent && (
                  <IconComponent
                    sx={{
                      fontSize: '3rem',
                      color: 'primary.main',
                      mb: 2,
                    }}
                  />
                )}
                <StatValue variant="h2" component="div">
                  {stat.value}{stat.suffix || ''}
                </StatValue>
                <StatLabel variant="body1">{stat.label}</StatLabel>
              </StatBox>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
