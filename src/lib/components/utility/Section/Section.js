'use client';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

/**
 * Section Component
 *
 * A styled section wrapper with background and spacing options
 *
 * @param {string} backgroundColor - Background color
 * @param {string} backgroundImage - Background image URL
 * @param {string} backgroundSize - Background size (cover, contain, etc.)
 * @param {string} backgroundPosition - Background position
 * @param {string} backgroundBlendMode - Blend mode for background
 * @param {number|string} padding - Padding (theme spacing units or CSS value)
 * @param {number|string} minHeight - Minimum height
 * @param {string} id - Section ID for anchor links
 * @param {object} sx - Additional MUI sx prop styles
 * @param {ReactNode} children - Section content
 */

const StyledSection = styled(Box)(({ theme, config }) => ({
  backgroundColor: config?.backgroundColor || 'transparent',
  backgroundImage: config?.backgroundImage ? `url('${config.backgroundImage}')` : 'none',
  backgroundSize: config?.backgroundSize || 'cover',
  backgroundPosition: config?.backgroundPosition || 'center',
  backgroundBlendMode: config?.backgroundBlendMode || 'normal',
  padding: theme.spacing(config?.padding || 4),
  minHeight: config?.minHeight || 'auto',
  width: '100%',
  position: 'relative',
}));

export default function Section({
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundBlendMode,
  padding,
  minHeight,
  id,
  sx = {},
  children,
  ...props
}) {
  const config = {
    backgroundColor,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundBlendMode,
    padding,
    minHeight,
  };

  return (
    <StyledSection
      id={id}
      config={config}
      sx={sx}
      {...props}
    >
      {children}
    </StyledSection>
  );
}
