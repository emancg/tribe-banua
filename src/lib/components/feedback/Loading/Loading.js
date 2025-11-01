'use client';

import { Box, CircularProgress, LinearProgress, Typography, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Loading Component
 *
 * Various loading states and indicators
 *
 * @param {string} variant - Loading variant ('spinner', 'linear', 'skeleton', 'overlay', 'dots')
 * @param {string} size - Size for spinner ('small', 'medium', 'large')
 * @param {string} text - Optional loading text
 * @param {boolean} fullScreen - Whether to show fullscreen overlay
 * @param {number} skeletonCount - Number of skeleton items to show
 * @param {string} skeletonVariant - Skeleton variant ('text', 'rectangular', 'circular')
 * @param {Object} sx - Additional sx props
 */

const LoadingContainer = styled(Box)(({ theme, fullscreen }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  ...(fullscreen && {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: theme.zIndex.modal + 1,
  }),
}));

const DotsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const Dot = styled(Box)(({ theme, delay }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  animation: 'bounce 1.4s infinite ease-in-out both',
  animationDelay: delay,
  '@keyframes bounce': {
    '0%, 80%, 100%': {
      transform: 'scale(0)',
    },
    '40%': {
      transform: 'scale(1)',
    },
  },
}));

export default function Loading({
  variant = 'spinner',
  size = 'medium',
  text,
  fullScreen = false,
  skeletonCount = 3,
  skeletonVariant = 'text',
  sx = {},
}) {
  const sizeMap = {
    small: 24,
    medium: 40,
    large: 60,
  };

  const spinnerSize = sizeMap[size] || sizeMap.medium;

  // Spinner variant
  if (variant === 'spinner') {
    return (
      <LoadingContainer fullscreen={fullScreen} sx={sx}>
        <CircularProgress size={spinnerSize} />
        {text && (
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        )}
      </LoadingContainer>
    );
  }

  // Linear progress variant
  if (variant === 'linear') {
    return (
      <Box sx={{ width: '100%', ...sx }}>
        <LinearProgress />
        {text && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
            {text}
          </Typography>
        )}
      </Box>
    );
  }

  // Dots variant
  if (variant === 'dots') {
    return (
      <LoadingContainer fullscreen={fullScreen} sx={sx}>
        <DotsContainer>
          <Dot delay="0s" />
          <Dot delay="0.16s" />
          <Dot delay="0.32s" />
        </DotsContainer>
        {text && (
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        )}
      </LoadingContainer>
    );
  }

  // Skeleton variant
  if (variant === 'skeleton') {
    return (
      <Box sx={sx}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Skeleton
            key={index}
            variant={skeletonVariant}
            height={skeletonVariant === 'text' ? 20 : skeletonVariant === 'circular' ? 40 : 100}
            sx={{ mb: 1 }}
          />
        ))}
      </Box>
    );
  }

  // Overlay variant
  if (variant === 'overlay') {
    return (
      <LoadingContainer fullscreen sx={sx}>
        <CircularProgress size={spinnerSize} />
        {text && (
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
            {text}
          </Typography>
        )}
      </LoadingContainer>
    );
  }

  return null;
}

/**
 * LoadingButton Component
 *
 * Button with loading state
 */

export function LoadingButton({
  children,
  loading = false,
  disabled = false,
  onClick,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  sx = {},
}) {
  return (
    <Box
      component="button"
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        position: 'relative',
        px: 3,
        py: 1.5,
        borderRadius: 1,
        border: variant === 'outlined' ? '1px solid' : 'none',
        borderColor: variant === 'outlined' ? `${color}.main` : 'transparent',
        backgroundColor: variant === 'contained' ? `${color}.main` : 'transparent',
        color: variant === 'contained' ? 'white' : `${color}.main`,
        cursor: loading || disabled ? 'not-allowed' : 'pointer',
        fontSize: size === 'small' ? '0.875rem' : size === 'large' ? '1.125rem' : '1rem',
        fontWeight: 500,
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? '100%' : 'auto',
        '&:hover': {
          backgroundColor:
            variant === 'contained'
              ? `${color}.dark`
              : variant === 'outlined'
              ? `${color}.lighter`
              : 'action.hover',
        },
        '&:disabled': {
          cursor: 'not-allowed',
        },
        ...sx,
      }}
    >
      {loading && (
        <CircularProgress
          size={20}
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-10px',
            marginTop: '-10px',
            color: variant === 'contained' ? 'white' : `${color}.main`,
          }}
        />
      )}
      <Box
        component="span"
        sx={{
          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

/**
 * PageLoader Component
 *
 * Full page loading state
 */

export function PageLoader({ text = 'Loading...' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: 2,
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
}

/**
 * ContentLoader Component
 *
 * Content area loading state with skeleton
 */

export function ContentLoader({
  lines = 5,
  avatar = false,
  image = false,
  title = false,
}) {
  return (
    <Box sx={{ width: '100%', p: 3 }}>
      {avatar && (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box sx={{ ml: 2, flex: 1 }}>
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="text" width="20%" />
          </Box>
        </Box>
      )}

      {title && <Skeleton variant="text" height={40} width="60%" sx={{ mb: 2 }} />}

      {image && <Skeleton variant="rectangular" height={200} sx={{ mb: 2, borderRadius: 1 }} />}

      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          height={20}
          width={index === lines - 1 ? '70%' : '100%'}
          sx={{ mb: 1 }}
        />
      ))}
    </Box>
  );
}
