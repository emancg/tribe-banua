'use client';

import MuiDivider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

/**
 * Divider Component
 *
 * Visual separator between content sections
 *
 * @param {string} variant - Divider variant (fullWidth, inset, middle)
 * @param {string} orientation - Orientation (horizontal, vertical)
 * @param {boolean} flexItem - Used with vertical orientation in flex containers
 * @param {string} textAlign - Text alignment when used with children (left, center, right)
 * @param {string} color - Divider color
 * @param {object} sx - Additional styles
 * @param {ReactNode} children - Optional text to display in divider
 */

const StyledDivider = styled(MuiDivider)(({ theme, color }) => ({
  ...(color && { borderColor: color }),
}));

export default function Divider({
  variant = 'fullWidth',
  orientation = 'horizontal',
  flexItem = false,
  textAlign = 'center',
  color,
  sx = {},
  children,
  ...props
}) {
  return (
    <StyledDivider
      variant={variant}
      orientation={orientation}
      flexItem={flexItem}
      textAlign={textAlign}
      color={color}
      sx={sx}
      {...props}
    >
      {children}
    </StyledDivider>
  );
}
