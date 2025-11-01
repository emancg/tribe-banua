'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

/**
 * BlogCard Component
 *
 * Blog post preview card with multiple variants
 *
 * @param {Object} post - Blog post data
 * @param {string} post.title - Post title
 * @param {string} post.excerpt - Post excerpt/summary
 * @param {string} post.slug - Post URL slug
 * @param {string} post.image - Featured image URL
 * @param {Object} post.author - Author info
 * @param {string} post.author.name - Author name
 * @param {string} post.author.avatar - Author avatar URL
 * @param {string} post.date - Publication date
 * @param {string} post.category - Post category
 * @param {number} post.readTime - Reading time in minutes
 * @param {string} variant - Display variant: 'card', 'list', 'minimal'
 * @param {Object} sx - Additional MUI sx styling
 */

const CardContainer = styled(Box)(({ theme, variant }) => {
  const baseStyles = {
    height: '100%',
    display: 'flex',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: 'inherit',
  };

  const variantStyles = {
    card: {
      flexDirection: 'column',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        transform: 'translateY(-4px)',
      },
    },
    list: {
      flexDirection: 'row',
      gap: theme.spacing(3),
      borderBottom: `1px solid ${theme.palette.divider}`,
      paddingBottom: theme.spacing(3),
      '&:hover': {
        backgroundColor: theme.palette.grey[50],
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    minimal: {
      flexDirection: 'column',
      gap: theme.spacing(2),
      '&:hover': {
        opacity: 0.8,
      },
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.card),
  };
});

const ImageWrapper = styled(Box)(({ theme, variant }) => {
  const sizes = {
    card: {
      position: 'relative',
      width: '100%',
      height: '240px',
    },
    list: {
      position: 'relative',
      width: '280px',
      height: '180px',
      flexShrink: 0,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    minimal: {
      position: 'relative',
      width: '100%',
      height: '200px',
    },
  };

  return {
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    ...sizes[variant],
  };
});

const ContentWrapper = styled(Box)(({ theme, variant }) => ({
  padding: variant === 'card' ? theme.spacing(3) : 0,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const MetaInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: 'auto',
  paddingTop: theme.spacing(2),
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

export default function BlogCard({ post, variant = 'card', sx = {} }) {
  if (!post) {
    return null;
  }

  const {
    title,
    excerpt,
    slug,
    image,
    author,
    date,
    category,
    readTime,
  } = post;

  const href = `/blog/${slug}`;

  return (
    <CardContainer
      component={Link}
      href={href}
      variant={variant}
      sx={sx}
    >
      {image && (
        <ImageWrapper variant={variant}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
      )}

      <ContentWrapper variant={variant}>
        {category && (
          <Chip
            label={category}
            size="small"
            sx={{
              alignSelf: 'flex-start',
              mb: 1.5,
              fontWeight: 600,
              backgroundColor: 'primary.main',
              color: 'white',
            }}
          />
        )}

        <Typography
          variant={variant === 'list' ? 'h5' : 'h6'}
          component="h3"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        {excerpt && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: variant === 'card' ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {excerpt}
          </Typography>
        )}

        <MetaInfo>
          {author && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar
                src={author.avatar}
                alt={author.name}
                sx={{ width: 24, height: 24 }}
              >
                {author.name?.charAt(0)}
              </Avatar>
              <Typography variant="caption">{author.name}</Typography>
            </Box>
          )}

          {date && (
            <Typography variant="caption">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </Typography>
          )}

          {readTime && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{readTime} min read</Typography>
            </Box>
          )}
        </MetaInfo>
      </ContentWrapper>
    </CardContainer>
  );
}
