'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * useIntersectionObserver Hook
 *
 * Detect when an element enters or exits the viewport
 * Useful for lazy loading, scroll animations, and infinite scroll
 *
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @returns {Array} [ref, isIntersecting, entry]
 *
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
 *
 * <div ref={ref}>
 *   {isVisible && <p>I'm visible!</p>}
 * </div>
 */
export function useIntersectionObserver(options = {}) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return [ref, isIntersecting, entry];
}

export default useIntersectionObserver;
