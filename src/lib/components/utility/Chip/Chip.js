'use client';

import MuiChip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import * as MuiIcons from '@mui/icons-material';

/**
 * Chip Component
 *
 * A compact element for tags, categories, or filters
 *
 * @param {string} label - Chip label text
 * @param {string} color - Chip color (default, primary, secondary, error, warning, info, success)
 * @param {string} variant - Chip variant (filled, outlined)
 * @param {string} size - Chip size (small, medium)
 * @param {string} icon - MUI icon name to display
 * @param {function} onDelete - Callback when delete icon clicked
 * @param {function} onClick - Callback when chip clicked
 * @param {boolean} clickable - Make chip clickable
 */

const StyledChip = styled(MuiChip)(({ theme }) => ({
  // Custom chip styles
}));

export default function Chip({
  label,
  color = 'default',
  variant = 'filled',
  size = 'medium',
  icon,
  onDelete,
  onClick,
  clickable,
  ...props
}) {
  // Resolve icon from string name
  const IconComponent = icon && MuiIcons[icon] ? MuiIcons[icon] : null;
  const iconElement = IconComponent ? <IconComponent /> : undefined;

  return (
    <StyledChip
      label={label}
      color={color}
      variant={variant}
      size={size}
      icon={iconElement}
      onDelete={onDelete}
      onClick={onClick}
      clickable={clickable || !!onClick}
      {...props}
    />
  );
}
