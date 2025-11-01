'use client';

import { useEffect } from 'react';
import { ServerError } from '@/lib/components';

/**
 * Error Page
 *
 * This is a special Next.js file that renders when an error occurs in a route segment
 *
 * @param {Error} error - The error object
 * @param {function} reset - Function to attempt to recover from the error
 */

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App Error:', error);
  }, [error]);

  return (
    <ServerError
      title="500 - Server Error"
      message="Our servers are experiencing issues. We've been notified and are working to fix the problem. Please try again later."
      onRetry={reset}
    />
  );
}
