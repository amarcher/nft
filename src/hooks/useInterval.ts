import { useEffect, useRef } from 'react';

export default function useInterval(
  callback: () => void,
  delay: number | null
) {
  const intervalId = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      tick();

      if (delay > 0) {
        intervalId.current = window.setInterval(tick, delay);
        return () => {
          if (intervalId.current) {
            window.clearInterval(intervalId.current);
          }
        };
      }
    }
  }, [delay]);

  return intervalId.current;
}
