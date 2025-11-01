'use client';

import { Modal as MUIModal, Box, IconButton, Typography, Fade, Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

/**
 * Modal Component
 *
 * Reusable modal/dialog component with multiple variants
 *
 * @param {boolean} open - Whether the modal is open
 * @param {function} onClose - Function to call when modal closes
 * @param {ReactNode} children - Modal content
 * @param {string} title - Optional modal title
 * @param {string} size - Modal size ('small', 'medium', 'large', 'fullscreen')
 * @param {boolean} showCloseButton - Whether to show close button (default: true)
 * @param {boolean} closeOnBackdropClick - Whether clicking backdrop closes modal (default: true)
 * @param {string} variant - Visual variant ('default', 'centered', 'side')
 * @param {Object} sx - Additional sx props
 */

const ModalBox = styled(Box)(({ theme, size, variant }) => {
  const sizeStyles = {
    small: { width: 400, maxWidth: '90vw' },
    medium: { width: 600, maxWidth: '90vw' },
    large: { width: 900, maxWidth: '90vw' },
    fullscreen: { width: '100vw', height: '100vh', maxWidth: '100vw' },
  };

  const variantStyles = {
    default: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: 2,
    },
    centered: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: 2,
    },
    side: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100vh',
      borderRadius: 0,
    },
  };

  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[24],
    p: 4,
    outline: 'none',
    maxHeight: '90vh',
    overflowY: 'auto',
    ...(sizeStyles[size] || sizeStyles.medium),
    ...(variantStyles[variant] || variantStyles.default),
  };
});

const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function Modal({
  open,
  onClose,
  children,
  title,
  size = 'medium',
  showCloseButton = true,
  closeOnBackdropClick = true,
  variant = 'default',
  sx = {},
}) {
  const handleClose = (event, reason) => {
    if (reason === 'backdropClick' && !closeOnBackdropClick) {
      return;
    }
    onClose();
  };

  return (
    <MUIModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <ModalBox size={size} variant={variant} sx={sx}>
          {showCloseButton && (
            <CloseButton onClick={onClose} aria-label="close">
              <CloseIcon />
            </CloseButton>
          )}

          {title && (
            <ModalHeader>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
            </ModalHeader>
          )}

          <Box>{children}</Box>
        </ModalBox>
      </Fade>
    </MUIModal>
  );
}

/**
 * ConfirmModal Component
 *
 * A specialized modal for confirmation dialogs
 */

const ConfirmActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmColor = 'primary',
  children,
}) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={title} size="small">
      <Box>
        {message && (
          <Typography variant="body1" sx={{ mb: 2 }}>
            {message}
          </Typography>
        )}
        {children}
      </Box>

      <ConfirmActions>
        <Box
          component="button"
          onClick={onClose}
          sx={{
            px: 3,
            py: 1,
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
          {cancelText}
        </Box>
        <Box
          component="button"
          onClick={handleConfirm}
          sx={{
            px: 3,
            py: 1,
            borderRadius: 1,
            border: 'none',
            backgroundColor: `${confirmColor}.main`,
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: `${confirmColor}.dark`,
            },
          }}
        >
          {confirmText}
        </Box>
      </ConfirmActions>
    </Modal>
  );
}
