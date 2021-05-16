import { useCallback } from 'react';
import { get } from '../utils/fetch';
import useInterval from './useInterval';

const CRYPTO_ENDPOINT =
  'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
const INTERVAL = 5 * 1000;

function getEthInUsd() {
  return get(CRYPTO_ENDPOINT).then(({ USD }) => {
    return USD;
  });
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
