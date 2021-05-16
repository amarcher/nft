import React, { useState } from 'react';

import Button from './Button';
import useCrypto from '../hooks/useCrypto';
import Modal from './Modal';

type Props = {
  usd: number;
  name: string;
};

export default function Price({ usd, name }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eth, setEth] = useState(0);
  useCrypto(usd, setEth, true);

  const priceString = eth ? `IRL: ${eth} ETH` : ` `;
  const title = `Real Life Cost of ${name}`;

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
        <div>${usd}</div>
      </Modal>
    </>
  );
}
