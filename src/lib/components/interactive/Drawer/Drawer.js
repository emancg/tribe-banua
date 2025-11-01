'use client';

import { Drawer as MUIDrawer, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

/**
 * Drawer Component
 *
 * Slide-out panel from the side of the screen
 *
 * @param {boolean} open - Whether the drawer is open
 * @param {function} onClose - Function to call when drawer closes
 * @param {ReactNode} children - Drawer content
 * @param {string} title - Optional drawer title
 * @param {string} anchor - Side to anchor drawer ('left', 'right', 'top', 'bottom')
 * @param {string} variant - Drawer variant ('temporary', 'persistent', 'permanent')
 * @param {string} width - Drawer width (default: 360)
 * @param {boolean} showCloseButton - Whether to show close button (default: true)
 * @param {Object} sx - Additional sx props
 */

const DrawerContent = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  minHeight: 64,
}));

const DrawerBody = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(3),
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  marginLeft: 'auto',
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function Drawer({
  open,
  onClose,
  children,
  title,
  anchor = 'right',
  variant = 'temporary',
  width = 360,
  showCloseButton = true,
  sx = {},
}) {
  const drawerWidth = typeof width === 'number' ? `${width}px` : width;

  return (
    <MUIDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      variant={variant}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          maxWidth: '100vw',
          ...sx,
        },
      }}
    >
      <DrawerContent>
        {(title || showCloseButton) && (
          <DrawerHeader>
            {title && (
              <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
            )}
            {showCloseButton && (
              <CloseButton onClick={onClose} aria-label="close">
                <CloseIcon />
              </CloseButton>
            )}
          </DrawerHeader>
        )}

        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </MUIDrawer>
  );
}

/**
 * FilterDrawer Component
 *
 * A specialized drawer for filters/search
 */

const FilterActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

export function FilterDrawer({
  open,
  onClose,
  onApply,
  onReset,
  title = 'Filters',
  children,
  applyText = 'Apply Filters',
  resetText = 'Reset',
}) {
  const handleApply = () => {
    if (onApply) {
      onApply();
    }
    onClose();
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <MUIDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 360,
          maxWidth: '100vw',
        },
      }}
    >
      <DrawerContent>
        <DrawerHeader>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <CloseButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </CloseButton>
        </DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        <FilterActions>
          <Box
            component="button"
            onClick={handleReset}
            sx={{
              flex: 1,
              px: 3,
              py: 1.5,
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'grey.300',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            {resetText}
          </Box>
          <Box
            component="button"
            onClick={handleApply}
            sx={{
              flex: 1,
              px: 3,
              py: 1.5,
              borderRadius: 1,
              border: 'none',
              backgroundColor: 'primary.main',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            {applyText}
          </Box>
        </FilterActions>
      </DrawerContent>
    </MUIDrawer>
  );
}
