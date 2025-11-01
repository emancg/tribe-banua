'use client';

import { NotFound } from '@/lib/components';

/**
 * 404 Not Found Page
 *
 * This is a special Next.js file that renders when a route is not found
 */

export default function NotFoundPage() {
  return (
    <NotFound
      title="404 - Page Not Found"
      message="The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage."
    />
  );
}
