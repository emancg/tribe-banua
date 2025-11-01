'use client';

import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material/styles';

/**
 * ErrorBoundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree
 *
 * @param {ReactNode} children - Child components
 * @param {ReactNode} fallback - Custom fallback UI
 * @param {function} onError - Callback when error occurs
 */

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const ErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  fontSize: 80,
  color: theme.palette.error.main,
  marginBottom: theme.spacing(2),
}));

const ErrorActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <ErrorContainer>
          <ErrorIcon />
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            Oops! Something went wrong
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
            We're sorry for the inconvenience. An unexpected error has occurred. Please try
            refreshing the page or return to the homepage.
          </Typography>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <Paper
              sx={{
                p: 2,
                mt: 3,
                maxWidth: 800,
                backgroundColor: 'grey.100',
                textAlign: 'left',
              }}
            >
              <Typography variant="subtitle2" color="error" gutterBottom>
                Error Details (Development Only):
              </Typography>
              <Typography
                variant="body2"
                component="pre"
                sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
              >
                {this.state.error.toString()}
              </Typography>
              {this.state.errorInfo && (
                <Typography
                  variant="body2"
                  component="pre"
                  sx={{ mt: 1, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.75rem' }}
                >
                  {this.state.errorInfo.componentStack}
                </Typography>
              )}
            </Paper>
          )}

          <ErrorActions>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RefreshIcon />}
              onClick={this.handleReload}
            >
              Refresh Page
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<HomeIcon />}
              onClick={this.handleGoHome}
            >
              Go to Homepage
            </Button>
            {this.props.resetKeys && (
              <Button variant="outlined" onClick={this.handleReset}>
                Try Again
              </Button>
            )}
          </ErrorActions>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

/**
 * ErrorFallback Component
 *
 * Reusable error fallback UI
 */

export function ErrorFallback({
  error,
  resetError,
  title = 'Something went wrong',
  message = 'An unexpected error has occurred. Please try again.',
  showDetails = false,
}) {
  return (
    <Container maxWidth="md">
      <ErrorContainer>
        <ErrorIcon />
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {message}
        </Typography>

        {showDetails && error && (
          <Paper sx={{ p: 2, mt: 2, backgroundColor: 'grey.100', width: '100%' }}>
            <Typography variant="subtitle2" color="error" gutterBottom>
              Error Details:
            </Typography>
            <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {error.toString()}
            </Typography>
          </Paper>
        )}

        <ErrorActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
          {resetError && (
            <Button variant="outlined" onClick={resetError}>
              Try Again
            </Button>
          )}
        </ErrorActions>
      </ErrorContainer>
    </Container>
  );
}

/**
 * NotFound Component
 *
 * 404 error page
 */

export function NotFound({ title = '404 - Page Not Found', message, onGoHome }) {
  const defaultMessage = "The page you're looking for doesn't exist or has been moved.";

  return (
    <Container maxWidth="md">
      <ErrorContainer>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: 120, fontWeight: 700, color: 'primary.main', mb: 2 }}
        >
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {message || defaultMessage}
        </Typography>

        <ErrorActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            onClick={onGoHome || (() => (window.location.href = '/'))}
          >
            Go to Homepage
          </Button>
        </ErrorActions>
      </ErrorContainer>
    </Container>
  );
}

/**
 * ServerError Component
 *
 * 500 error page
 */

export function ServerError({ title = '500 - Server Error', message, onRetry }) {
  const defaultMessage = 'Our servers are experiencing issues. Please try again later.';

  return (
    <Container maxWidth="md">
      <ErrorContainer>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: 120, fontWeight: 700, color: 'error.main', mb: 2 }}
        >
          500
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {message || defaultMessage}
        </Typography>

        <ErrorActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={onRetry || (() => window.location.reload())}
          >
            Try Again
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<HomeIcon />}
            onClick={() => (window.location.href = '/')}
          >
            Go to Homepage
          </Button>
        </ErrorActions>
      </ErrorContainer>
    </Container>
  );
}
