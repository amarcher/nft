import { useCallback, useEffect, useRef } from 'react';
import 'whatwg-fetch';

const CRYPTO_ENDPOINT =
  'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
const INTERVAL = 5 * 1000;

function get(endpoint: string) {
  return fetch(endpoint).then((response) => response.json());
}

function getEthInUsd() {
  return get(CRYPTO_ENDPOINT).then(({ USD }) => {
    return USD;
  });
}

function useInterval(callback: () => void, delay: number | null) {
  const intervalId = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      tick();
      intervalId.current = window.setInterval(tick, delay);
      return () => {
        if (intervalId.current) {
          window.clearInterval(intervalId.current);
        }
      };
    }
  }, [delay]);

  return intervalId.current;
}

export default function useCrypto(
  dollarAmount: number,
  setPrice: (price: number) => void,
  shouldUpdate: boolean
) {
  const callback = useCallback(
    () =>
      getEthInUsd().then((usd) => {
        console.log(`1 ETH = $${usd}`);
        setPrice(Math.round(dollarAmount * 100) / Math.round(usd * 100));
      }),
    [setPrice, dollarAmount]
  );

  const intervalId = useInterval(callback, shouldUpdate ? INTERVAL : null);

  if (!shouldUpdate && intervalId) clearInterval(intervalId);
}
