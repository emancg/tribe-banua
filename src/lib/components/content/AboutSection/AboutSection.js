'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import InfoIcon from '@mui/icons-material/Info';

/**
 * AboutSection Component
 *
 * Company/product about section with multiple layouts
 *
 * @param {Object} config - About section configuration
 * @param {string} config.title - Section title
 * @param {string} config.subtitle - Subtitle (optional)
 * @param {string} config.content - Main content text (supports multiple paragraphs)
 * @param {Array} config.contentParagraphs - Array of paragraph strings (alternative to content)
 * @param {Object} config.image - Image configuration (optional)
 * @param {string} config.image.src - Image source
 * @param {string} config.image.alt - Image alt text
 * @param {number} config.image.width - Image width
 * @param {number} config.image.height - Image height
 * @param {Array} config.images - Multiple images in grid (optional)
 * @param {string} config.layout - Layout: 'text-left', 'text-right', 'centered', 'text-only'
 * @param {Array} config.stats - Optional stats to display
 * @param {string} config.backgroundColor - Background color
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(12, 2),
  backgroundColor: bgcolor || '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2),
  },
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  height: '400px',
  backgroundColor: '#F5F5F5',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.palette.divider}`,
  '& svg': {
    fontSize: '6rem',
    color: theme.palette.primary.main,
    opacity: 0.3,
  },
}));

const StatsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
}));

export default function AboutSection({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const {
    title,
    subtitle,
    content,
    contentParagraphs,
    image,
    images,
    layout = 'text-left',
    stats,
    backgroundColor,
  } = config;

  const contentArray = contentParagraphs || (content ? [content] : []);

  // Text-only layout
  if (layout === 'text-only' || (!image && !images)) {
    return (
      <SectionContainer bgcolor={backgroundColor} sx={sx}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {subtitle && (
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  display: 'block',
                  marginBottom: 2,
                  fontSize: '0.875rem',
                }}
              >
                {subtitle}
              </Typography>
            )}

            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                color: 'text.primary',
                marginBottom: 4,
              }}
            >
              {title}
            </Typography>

            {contentArray.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                paragraph
                sx={{
                  lineHeight: 1.7,
                  fontSize: '1.0625rem',
                  marginBottom: 3,
                  color: 'text.secondary',
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {stats && stats.length > 0 && (
              <StatsGrid container spacing={3} sx={{ mt: 6 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <StatBox>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {stat.number}
                        {stat.suffix}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {stat.label}
                      </Typography>
                    </StatBox>
                  </Grid>
                ))}
              </StatsGrid>
            )}
          </Box>
        </Container>
      </SectionContainer>
    );
  }

  // Layout with image
  const isTextLeft = layout === 'text-left' || layout === 'centered';
  const gridOrder = isTextLeft ? { text: 1, image: 2 } : { text: 2, image: 1 };

  return (
    <SectionContainer bgcolor={backgroundColor} sx={sx}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: gridOrder.text }}>
            {subtitle && (
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  display: 'block',
                  marginBottom: 2,
                  fontSize: '0.875rem',
                }}
              >
                {subtitle}
              </Typography>
            )}

            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                color: 'text.primary',
                marginBottom: 3,
              }}
            >
              {title}
            </Typography>

            {contentArray.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                paragraph
                sx={{
                  lineHeight: 1.7,
                  fontSize: '1.0625rem',
                  marginBottom: 2.5,
                  color: 'text.secondary',
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {stats && stats.length > 0 && (
              <Grid container spacing={3} sx={{ mt: 3 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <StatBox sx={{ textAlign: 'left', padding: 0 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {stat.number}
                        {stat.suffix}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {stat.label}
                      </Typography>
                    </StatBox>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          {/* Image Placeholder */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: gridOrder.image }}>
            {(image || images) && (
              <ImagePlaceholder>
                <InfoIcon />
              </ImagePlaceholder>
            )}
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}
