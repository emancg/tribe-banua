'use client';

import { useState, useEffect } from 'react';

/**
 * useMediaQuery Hook
 *
 * Responsive design hook to detect screen size changes
 *
 * @param {string} query - Media query string (e.g., '(min-width: 768px)')
 * @returns {boolean} Whether the media query matches
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 600px)');
 * const isDesktop = useMediaQuery('(min-width: 1200px)');
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Create event listener
    const listener = (event) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

/**
 * Predefined breakpoint hooks for common screen sizes
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 600px)');
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 601px) and (max-width: 900px)');
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 901px)');
}

export default useMediaQuery;
