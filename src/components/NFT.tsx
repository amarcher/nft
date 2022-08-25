import React, { useState } from 'react';
import Button from './Button';
import useSeaport from '../hooks/useSeaport';
import Modal from './Modal';

type Props = {
  contractAddress: string;
  tokenId: string;
  name: string;
};

export default function NFT({ contractAddress, tokenId, name }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [asset, setAsset] = useState<any | undefined>();
  useSeaport(tokenId, contractAddress, setAsset);

  if (!asset) {
    return <div className="Main__NFT" />;
  }

  const { salePrice, permalink } = asset || {};

  const title = `NFT of ${name}`;
  const priceString = salePrice
    ? `NFT: ${salePrice / 1000000000000000000} ETH`
    : 'NFT: Not For Sale';
  const buyButton = `${salePrice ? 'Buy' : 'View'} on OpenSea`;

  return (
    <>
      <Button
        className="Main__NFT"
        onPress={salePrice ? undefined : () => setIsModalOpen(true)}
        href={salePrice ? permalink : undefined}
      >
        {priceString}
      </Button>
      <Modal
        title={title}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <Button href={permalink}>{buyButton}</Button>
      </Modal>
    </>
  );
}
