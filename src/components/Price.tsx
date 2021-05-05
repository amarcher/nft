import React, { useState } from 'react';

import Button from './Button';
import useCrypto from '../hooks/useCrypto';

type Props = {
  usd: number;
};

export default function Price({ usd }: Props) {
  const [eth, setEth] = useState(0);
  useCrypto(usd, setEth, true);

  const priceString = eth ? `${eth} ETH` : ` `;

  return (
    <Button className="Main__price" onPress={() => alert(`$${usd}`)}>
      {priceString}
    </Button>
  );
}
