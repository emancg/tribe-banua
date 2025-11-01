'use client';

import { useState, useEffect } from 'react';

/**
 * useDebounce Hook
 *
 * Debounce a value - useful for search inputs, API calls, etc.
 *
 * @param {*} value - Value to debounce
 * @param {number} delay - Delay in milliseconds (default: 500)
 * @returns {*} Debounced value
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *     // Perform search with debouncedSearchTerm
 *   }
 * }, [debouncedSearchTerm]);
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timeout to update debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timeout if value changes or component unmounts
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
