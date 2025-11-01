'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Container from '../../utility/Container';

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
  padding: theme.spacing(8, 0),
  backgroundColor: bgcolor || 'white',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  '& img': {
    display: 'block',
    width: '100%',
    height: 'auto',
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
        <Container maxWidth="md">
          {subtitle && (
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 1.5,
                display: 'block',
                marginBottom: 1,
                textAlign: layout === 'centered' ? 'center' : 'left',
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              marginBottom: 4,
              textAlign: layout === 'centered' ? 'center' : 'left',
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
                lineHeight: 1.8,
                fontSize: '1.1rem',
                marginBottom: 2,
                textAlign: layout === 'centered' ? 'center' : 'justify',
              }}
            >
              {paragraph}
            </Typography>
          ))}

          {stats && stats.length > 0 && (
            <StatsGrid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <StatBox>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {stat.number}
                      {stat.suffix}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </StatBox>
                </Grid>
              ))}
            </StatsGrid>
          )}
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
        <Grid container spacing={6} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: gridOrder.text }}>
            {subtitle && (
              <Typography
                variant="overline"
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
              sx={{
                fontWeight: 700,
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
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  marginBottom: 2,
                  textAlign: 'justify',
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {stats && stats.length > 0 && (
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <StatBox sx={{ textAlign: 'left' }}>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {stat.number}
                        {stat.suffix}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </StatBox>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          {/* Image Content */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: gridOrder.image }}>
            {image && (
              <ImageWrapper>
                <Image
                  src={image.src}
                  alt={image.alt || title}
                  width={image.width || 600}
                  height={image.height || 400}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </ImageWrapper>
            )}

            {images && images.length > 0 && (
              <Grid container spacing={2}>
                {images.map((img, index) => (
                  <Grid item xs={images.length === 1 ? 12 : 6} key={index}>
                    <ImageWrapper>
                      <Image
                        src={img.src}
                        alt={img.alt || `${title} ${index + 1}`}
                        width={img.width || 300}
                        height={img.height || 300}
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </ImageWrapper>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}
