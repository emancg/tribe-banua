'use client';

import { useEffect } from 'react';
import { ServerError } from '@/lib/components';

/**
 * Global Error Page
 *
 * This catches errors in the root layout
 */

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <ServerError
          title="Critical Error"
          message="A critical error has occurred. Please refresh the page or contact support if the problem persists."
          onRetry={reset}
        />
      </body>
    </html>
  );
}
