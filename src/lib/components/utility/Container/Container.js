'use client';

import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';

/**
 * Container Component
 *
 * A responsive max-width wrapper for content
 *
 * @param {string} maxWidth - Max width (xs, sm, md, lg, xl) - default: 'lg'
 * @param {boolean} disableGutters - Remove horizontal padding
 * @param {object} sx - Additional MUI sx prop styles
 * @param {ReactNode} children - Content to wrap
 */

const StyledContainer = styled(MuiContainer)(({ theme }) => ({
  // Base container styles can be added here
}));

export default function Container({
  maxWidth = 'lg',
  disableGutters = false,
  sx = {},
  children,
  ...props
}) {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={sx}
      {...props}
    >
      {children}
    </StyledContainer>
  );
}
