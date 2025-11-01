'use client';

import * as MuiIcons from '@mui/icons-material';

/**
 * Icon Component
 *
 * Dynamically render Material UI icons from string names
 *
 * @param {string} name - MUI icon name (e.g., 'Home', 'Star', 'Menu')
 * @param {string} fontSize - Icon size (small, medium, large, inherit)
 * @param {string} color - Icon color (inherit, primary, secondary, action, disabled, error)
 * @param {object} sx - Additional MUI sx prop styles
 */

export default function Icon({
  name,
  fontSize = 'medium',
  color = 'inherit',
  sx = {},
  ...props
}) {
  // Get the icon component from MUI icons
  const IconComponent = MuiIcons[name];

  // Fallback to a default icon if name not found
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in MUI icons. Using default.`);
    const DefaultIcon = MuiIcons.HelpOutline;
    return (
      <DefaultIcon
        fontSize={fontSize}
        color={color}
        sx={sx}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      fontSize={fontSize}
      color={color}
      sx={sx}
      {...props}
    />
  );
}
