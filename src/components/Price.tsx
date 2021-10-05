import React, { useState } from 'react';

import Button from './Button';
import useCrypto from '../hooks/useCrypto';
import Modal from './Modal';

type Props = {
  usd: number;
  name: string;
  prefix?: string;
};

export default function Price({ usd, prefix = '', name }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eth, setEth] = useState(0);
  useCrypto(usd, setEth, true);

  const priceString = eth ? `IRL: ${eth.toFixed(8)} ETH` : ` `;
  const title = `IRL Cost of ${prefix}${name}`;

  return (
    <>
      <Button className="Main__price" onPress={() => setIsModalOpen(true)}>
        {priceString}
      </Button>
      <Modal
        title={title}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div className="Main__price_detail">${usd.toFixed(2)}</div>
      </Modal>
    </>
  );
}
