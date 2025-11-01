'use client';

import { useState, useEffect } from 'react';

/**
 * useScrollSpy Hook
 *
 * Track which section is currently visible in the viewport
 * Useful for highlighting active navigation items
 *
 * @param {Array<string>} sectionIds - Array of section IDs to track
 * @param {number} offset - Offset from top in pixels (default: 100)
 * @returns {string} ID of the currently active section
 *
 * @example
 * const activeSection = useScrollSpy(['hero', 'services', 'about', 'contact']);
 */
export function useScrollSpy(sectionIds = [], offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveId(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}

export default useScrollSpy;
