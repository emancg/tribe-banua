'use client';

import MuiAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

/**
 * Avatar Component
 *
 * Display user profile images or initials
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for image
 * @param {string} variant - Avatar variant (circular, rounded, square)
 * @param {string} size - Avatar size (small, medium, large) or number
 * @param {string} children - Fallback content (initials, icon)
 * @param {object} sx - Additional styles
 */

const sizeMap = {
  small: 32,
  medium: 40,
  large: 56,
};

const StyledAvatar = styled(MuiAvatar)(({ theme, size }) => {
  const dimension = typeof size === 'number' ? size : sizeMap[size] || sizeMap.medium;

  return {
    width: dimension,
    height: dimension,
  };
});

export default function Avatar({
  src,
  alt,
  variant = 'circular',
  size = 'medium',
  children,
  sx = {},
  ...props
}) {
  return (
    <StyledAvatar
      src={src}
      alt={alt}
      variant={variant}
      size={size}
      sx={sx}
      {...props}
    >
      {children}
    </StyledAvatar>
  );
}
