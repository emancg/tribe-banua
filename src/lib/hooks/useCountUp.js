import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp Hook
 *
 * Animates a number from 0 to target value
 *
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms (default: 2000)
 * @param {boolean} start - Whether to start the animation
 * @returns {number} Current animated value
 */
export default function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (percentage < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
}
