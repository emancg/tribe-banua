'use client';

import MuiBadge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

/**
 * Badge Component
 *
 * A small label or notification indicator
 *
 * @param {string|number} badgeContent - Content to display in badge
 * @param {string} color - Badge color (primary, secondary, error, warning, info, success)
 * @param {string} variant - Badge variant (standard, dot)
 * @param {boolean} invisible - Hide the badge
 * @param {number} max - Max number to display (shows +)
 * @param {object} anchorOrigin - Position of badge
 * @param {ReactNode} children - Element to attach badge to
 */

const StyledBadge = styled(MuiBadge)(({ theme }) => ({
  // Custom badge styles
}));

export default function Badge({
  badgeContent,
  color = 'primary',
  variant = 'standard',
  invisible = false,
  max = 99,
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  children,
  ...props
}) {
  return (
    <StyledBadge
      badgeContent={badgeContent}
      color={color}
      variant={variant}
      invisible={invisible}
      max={max}
      anchorOrigin={anchorOrigin}
      {...props}
    >
      {children}
    </StyledBadge>
  );
}
