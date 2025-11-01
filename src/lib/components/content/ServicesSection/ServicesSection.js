'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

/**
 * ServicesSection Component
 *
 * Display services in a vertical stack with background images
 *
 * @param {Object} config - Services configuration object
 * @param {string} config.title - Section title
 * @param {Array} config.items - Array of service items
 * @param {string} config.items[].title - Service title
 * @param {string} config.items[].image - Background image URL
 * @param {string} config.items[].description - Service description
 * @param {string} config.items[].href - Link to service page
 * @param {number} config.hiddenItem - Index of item to hide (optional)
 * @param {string} config.id - Section ID for anchor links
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: 10,
  minHeight: '50vh',
  backgroundSize: 'cover',
  backgroundColor: 'transparent',
  color: 'white',
  '& h1': {
    textShadow: '5px 5px 5px black',
  }
}));

const ServiceItem = styled(Paper)(({ theme }) => ({
  width: 'auto',
  height: '19vh',
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '25px',
  marginLeft: '25px',
  marginRight: '25px',
  marginBottom: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backgroundBlendMode: 'darken',
  boxShadow: '1px 5px 10px black',
  textShadow: '1px 1px 10px black',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  }
}));

export default function ServicesSection({ config, hiddenItem }) {
  if (!config || !config.items) {
    return null;
  }

  // Use hiddenItem prop if provided, otherwise use config.hiddenItem
  const hideIndex = hiddenItem !== undefined ? hiddenItem : config.hiddenItem;

  return (
    <SectionContainer id={config.id} maxWidth="sm">
      {config.title && (
        <Typography variant="h3" component="h1" gutterBottom>
          {config.title}
        </Typography>
      )}

      <Box sx={{ width: '100%' }}>
        <Stack spacing={0}>
          {config.items.map((item, index) => {
            // Skip rendering if this is the hidden item
            if (hideIndex !== undefined && index === hideIndex) {
              return null;
            }

            return (
              <Link
                key={index}
                href={item.href}
                style={{ textDecoration: 'none' }}
              >
                <ServiceItem
                  variant="elevation"
                  elevation={16}
                  sx={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundPositionY: item.backgroundPositionY || 'center',
                  }}
                >
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  {item.description && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {item.description}
                    </Typography>
                  )}
                </ServiceItem>
              </Link>
            );
          })}
        </Stack>
      </Box>
    </SectionContainer>
  );
}
