'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

/**
 * ContentSection Component
 *
 * Versatile content section that can display:
 * - Heading + text
 * - Heading + text + image
 * - Heading + bullet points
 *
 * @param {Object} config - Content configuration
 * @param {string} config.heading - Section heading
 * @param {string} config.text - Main text content (optional)
 * @param {Array} config.bulletPoints - Array of bullet point strings (optional)
 * @param {Object} config.image - Image configuration (optional)
 * @param {string} config.image.src - Image source URL
 * @param {string} config.image.alt - Image alt text
 * @param {number} config.image.width - Image width
 * @param {number} config.image.height - Image height
 * @param {string} config.image.link - Link URL when image is clicked (optional)
 * @param {Object} sx - Additional MUI sx styling (optional)
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  borderRadius: theme.spacing(2),
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '& img': {
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  '& .MuiListItem-root': {
    paddingLeft: 0,
    display: 'list-item',
    listStyleType: 'disc',
    listStylePosition: 'inside',
  },
}));

export default function ContentSection({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const { heading, text, bulletPoints, image } = config;

  return (
    <SectionContainer sx={sx}>
      {heading && (
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            marginBottom: 2,
          }}
        >
          {heading}
        </Typography>
      )}

      {text && (
        <Typography
          variant="body1"
          paragraph
          sx={{
            lineHeight: 1.8,
            textAlign: 'justify',
          }}
        >
          {text}
        </Typography>
      )}

      {image && (
        <ImageContainer>
          {image.link ? (
            <Link href={image.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={image.src}
                alt={image.alt || ''}
                width={image.width || 400}
                height={image.height || 400}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          ) : (
            <Image
              src={image.src}
              alt={image.alt || ''}
              width={image.width || 400}
              height={image.height || 400}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          )}
        </ImageContainer>
      )}

      {bulletPoints && bulletPoints.length > 0 && (
        <StyledList>
          {bulletPoints.map((point, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={point}
                primaryTypographyProps={{
                  sx: { lineHeight: 1.8 }
                }}
              />
            </ListItem>
          ))}
        </StyledList>
      )}
    </SectionContainer>
  );
}
