'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TeamMemberCard from '../TeamMemberCard';
import Container from '../../utility/Container';

/**
 * TeamSection Component
 *
 * Team members display section with multiple layouts
 *
 * @param {Object} config - Team section configuration
 * @param {string} config.title - Section title
 * @param {string} config.subtitle - Section subtitle (optional)
 * @param {Array} config.members - Array of team member objects
 * @param {string} config.layout - Layout: 'grid', 'carousel' (default: 'grid')
 * @param {string} config.variant - Card variant: 'card', 'overlay', 'minimal'
 * @param {number} config.columns - Number of columns for grid (2, 3, 4)
 * @param {boolean} config.showBio - Show member bios
 * @param {string} config.backgroundColor - Background color
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: bgcolor || 'white',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

export default function TeamSection({ config, sx = {} }) {
  if (!config || !config.members || config.members.length === 0) {
    return null;
  }

  const {
    title = 'Our Team',
    subtitle,
    members,
    layout = 'grid',
    variant = 'card',
    columns = 3,
    backgroundColor,
  } = config;

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
          sx={{ fontWeight: 700, marginBottom: 6 }}
        >
          {title}
        </Typography>

        {layout === 'grid' && (
          <Grid container spacing={4}>
            {members.map((member, index) => (
              <Grid item {...gridColumns} key={index}>
                <TeamMemberCard member={member} variant={variant} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </SectionContainer>
  );
}
