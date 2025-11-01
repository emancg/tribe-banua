'use client';

import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled } from '@mui/material/styles';
import { useThemeMode } from '@/lib/theme/ThemeProvider';

/**
 * ThemeToggle Component
 *
 * Toggle button to switch between light and dark mode
 *
 * @param {string} variant - Visual variant ('icon', 'text', 'fab')
 * @param {string} size - Button size ('small', 'medium', 'large')
 * @param {Object} sx - Additional sx props
 */

const ToggleButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.warning.main : theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255, 152, 0, 0.08)' : 'rgba(25, 118, 210, 0.08)',
    transform: 'rotate(180deg)',
  },
}));

export default function ThemeToggle({ variant = 'icon', size = 'medium', sx = {} }) {
  const { mode, toggleTheme } = useThemeMode();

  if (variant === 'icon') {
    return (
      <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`} arrow>
        <ToggleButton onClick={toggleTheme} size={size} sx={sx} aria-label="toggle theme">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </ToggleButton>
      </Tooltip>
    );
  }

  // Additional variants can be added here (text button, FAB, etc.)
  return null;
}
