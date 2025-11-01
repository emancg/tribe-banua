'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

/**
 * TestimonialCard Component
 *
 * Single testimonial display with multiple variants
 *
 * @param {Object} testimonial - Testimonial data
 * @param {string} testimonial.quote - Testimonial text
 * @param {string} testimonial.author - Author name
 * @param {string} testimonial.role - Author role/title (optional)
 * @param {string} testimonial.company - Company name (optional)
 * @param {string} testimonial.avatar - Avatar image URL (optional)
 * @param {number} testimonial.rating - Star rating 1-5 (optional)
 * @param {string} variant - Display variant: 'card', 'quote', 'minimal'
 * @param {Object} sx - Additional MUI sx styling
 */

const CardContainer = styled(Box)(({ theme, variant }) => {
  const baseStyles = {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const variantStyles = {
    card: {
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-4px)',
      },
      transition: 'all 0.3s ease',
    },
    quote: {
      backgroundColor: theme.palette.grey[50],
      borderLeft: `4px solid ${theme.palette.primary.main}`,
    },
    minimal: {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.card),
  };
});

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  opacity: 0.2,
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

const AuthorSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: 'auto',
  paddingTop: theme.spacing(2),
}));

export default function TestimonialCard({ testimonial, variant = 'card', sx = {} }) {
  if (!testimonial) {
    return null;
  }

  const { quote, author, role, company, avatar, rating } = testimonial;

  return (
    <CardContainer variant={variant} sx={sx}>
      {variant === 'quote' && <QuoteIcon />}

      {rating && (
        <Box sx={{ mb: 2, position: 'relative', zIndex: 1 }}>
          <Rating value={rating} readOnly precision={0.5} />
        </Box>
      )}

      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          lineHeight: 1.8,
          marginBottom: 2,
          position: 'relative',
          zIndex: 1,
          flex: 1,
        }}
      >
        "{quote}"
      </Typography>

      <AuthorSection>
        {avatar && (
          <Avatar
            src={avatar}
            alt={author}
            sx={{
              width: 56,
              height: 56,
              border: '2px solid',
              borderColor: 'primary.main',
            }}
          />
        )}
        {!avatar && author && (
          <Avatar
            sx={{
              width: 56,
              height: 56,
              backgroundColor: 'primary.main',
              fontWeight: 600,
            }}
          >
            {author.charAt(0)}
          </Avatar>
        )}

        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {author}
          </Typography>
          {role && (
            <Typography variant="body2" color="text.secondary">
              {role}
              {company && ` at ${company}`}
            </Typography>
          )}
        </Box>
      </AuthorSection>
    </CardContainer>
  );
}
