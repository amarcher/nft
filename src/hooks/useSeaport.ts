import { useCallback } from 'react';
import useInterval from './useInterval';
import { get } from '../utils/fetch';
import { NFTData } from '../constants/content';

const CRYPTO_ENDPOINT = 'https://api.opensea.io/api/v1/assets';

function getAsset({ tokenId, contractAddress }: NFTData) {
  return get(
    `${CRYPTO_ENDPOINT}?token_ids=${tokenId}&asset_contract_address=${contractAddress}&include_orders=true`
  ).then((response) => {
    const asset = response?.assets?.[0];
    return {
      salePrice: asset?.seaport_sell_orders?.[0].current_price,
      permalink: asset?.permalink,
    };
  });
}

export default function useSeaport(
  tokenId: string,
  contractAddress: string,
  setAsset: (asset: unknown) => void
) {
  const callback = useCallback(
    () =>
      getAsset({ tokenId, contractAddress }).then((asset) => {
        console.log(asset);
        setAsset(asset);
      }),
    [setAsset, tokenId, contractAddress]
  );

  const intervalId = useInterval(callback, 0);

  if (intervalId) clearInterval(intervalId);
}
