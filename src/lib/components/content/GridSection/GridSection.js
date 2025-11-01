'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as MuiIcons from '@mui/icons-material';

/**
 * GridSection Component
 *
 * Display content items in a responsive grid with icons
 *
 * @param {Object} config - Grid configuration object
 * @param {string} config.title - Section title
 * @param {Array} config.items - Array of grid items
 * @param {string} config.items[].title - Item title
 * @param {string} config.items[].subtitle - Item description
 * @param {string} config.items[].icon - MUI icon name
 * @param {string} config.items[].iconColor - Icon color (primary, secondary, or CSS color)
 * @param {Object} config.layout - Grid layout settings
 * @param {Object} config.layout.columns - Responsive column configuration {xs, sm, md}
 * @param {string} config.id - Section ID for anchor links
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  flexGrow: 1,
  justifyContent: 'center',
  textAlign: 'center',
  height: 'auto',
  color: 'white',
  '& h2': {
    textShadow: '5px 5px 5px black',
  }
}));

const GridItem = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  height: 300,
  margin: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function GridSection({ config }) {
  if (!config || !config.items) {
    return null;
  }

  return (
    <SectionContainer id={config.id} maxWidth="sm">
      <Typography variant="h3" component="h2" gutterBottom>
        {config.title}
      </Typography>

      <Grid container>
        {config.items.map((item, index) => {
          // Resolve icon from string name
          const IconComponent = MuiIcons[item.icon] || MuiIcons.Star;

          // Determine icon color
          const getIconColor = (colorName) => {
            // If it's a theme color name (primary, secondary, etc.)
            if (['primary', 'secondary', 'error', 'warning', 'info', 'success'].includes(colorName)) {
              return undefined; // Let MUI handle theme colors
            }
            // Otherwise, it's a custom CSS color
            return { color: colorName };
          };

          return (
            <Grid
              item
              xs={config.layout?.columns?.xs || 12}
              sm={config.layout?.columns?.sm || 6}
              md={config.layout?.columns?.md || 3}
              key={index}
            >
              <GridItem variant="elevation" elevation={16}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>

                <IconComponent
                  fontSize="large"
                  color={['primary', 'secondary', 'error', 'warning', 'info', 'success'].includes(item.iconColor) ? item.iconColor : undefined}
                  sx={!['primary', 'secondary', 'error', 'warning', 'info', 'success'].includes(item.iconColor) ? { color: item.iconColor } : {}}
                />

                <Typography variant="body2" sx={{ mt: 2 }}>
                  {item.subtitle}
                </Typography>
              </GridItem>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
